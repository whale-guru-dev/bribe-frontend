import {formatUnits, parseUnits} from "@ethersproject/units";
import {useWeb3React} from "@web3-react/core";
import {approve, bid, increaseAllowance} from "actions/aavePool";
import {bidWithMIM} from "actions/mimBidding";
import {useBidsPerProposalQuery} from "codegen";
import {
  ItemDetailsBox,
  SummaryMarkdown,
  VotesStatusBox,
  Bribe,
  CreateBribe,
  EditBribe,
  BribesTable,
  ConfirmBribeModal,
  EditBribeModal,
  BribeStatusBox,
} from "components/Proposal";
import {
  LightningIcon,
  FireIcon,
  BarChartIcon,
  CalendarIcon,
} from "components/SVGicons";
import config from "config";
import Constants from "constants/index";
import {BigNumber} from "ethers";
import {formatEther} from "ethers/lib/utils";
import {
  isAaveStatusCompleted,
  useAaveGovernance,
  useAaveProposal,
  useProposalContent,
  useVoteStatistics,
} from "hooks/aaveGovernance";
import {useAavePool, useAavePoolInfo} from "hooks/aavePool";
import {
  useAllowance,
  useAllowances,
  useBalance,
  useBalances,
} from "hooks/erc20";
import {useRouter} from "next/dist/client/router";
import {useEffect} from "react";
import {useMemo} from "react";
import {useState} from "react";
import {commify, formatAmount} from "utils";

const {BRIBE_STATUSES, DECISIONS, BRIBE_ACTIONS, STATUS_PILLS} = Constants;
const DECISION_OPTIONS = [DECISIONS.YAY, DECISIONS.NAY];

export default () => {
  const [decision, setDecision] = useState(DECISION_OPTIONS[0]);
  const [token, setToken] = useState("usdc");
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isEditBribeModalOpen, setIsEditBribeModalOpen] = useState(false);
  const [editModalType, setEditModalType] = useState(BRIBE_ACTIONS.DECREASE);
  const [enableAmount, setEnableAmount] = useState("");
  const [editBribeAmount, setEditBribeAmount] = useState("");

  const {account, chainId, ...others} = useWeb3React();
  const router = useRouter();
  const {id} = router.query;
  const proposal = useAaveProposal(id as string);
  const gov = useAaveGovernance();
  const pool = useAavePoolInfo();
  const aavePool = useAavePool();
  const proposalContent = useProposalContent(proposal?.ipfsHash as string);
  const {yay, nay, expiration} = useVoteStatistics(proposal);
  const [aaveBalance, stkAaveBalance] = useBalances(
    [pool.aave?.address, pool.stkAave?.address],
    config[chainId || 1].AavePool,
  );
  const [usdcBalance, mimBalance] = useBalances(
    [pool.bidAsset?.address, config[chainId || 1].MIMToken],
    account,
  );
  const currentProposal = gov.proposals.find(
    (p) => p.id?.toNumber() == Number(id),
  );
  const tvp = Number(aaveBalance) + Number(stkAaveBalance);
  // we store only the highest bid
  const currentBid = pool.bids[id as string];
  const highestBid = formatUnits(
    currentBid?.highestBid || 0,
    pool.bidAsset?.decimals,
  );
  const influence = useMemo(() => {
    const influence =
      (tvp * 100) /
      Number(
        formatEther(
          decision == DECISIONS.YAY
            ? currentProposal?.forVotes || 0
            : currentProposal?.againstVotes || 0,
        ),
      );
    return commify(influence == Infinity ? 100 : influence);
  }, [tvp, decision]);

  const hasBribed = currentBid?.highestBidder == account;
  const bribeCompleted = isAaveStatusCompleted[proposal?.status || "undefined"];
  const bribeStatus = useMemo(() => {
    if (proposal?.status == "Canceled") return BRIBE_STATUSES.CANCELED;
    if (proposal?.status == "Queued") return BRIBE_STATUSES.QUEUED;
    if (proposal?.status == "Pending" || proposal?.status == "Active")
      return BRIBE_STATUSES.NA;
    if (
      proposal?.status == "Failed" ||
      proposal?.status == "Succeeded" ||
      proposal?.status == "Expired" ||
      proposal?.status == "Executed"
    ) {
      if (
        (currentBid?.support &&
          proposal?.forVotes?.gt(proposal.againstVotes)) ||
        (!currentBid?.support && proposal?.forVotes?.lt(proposal.againstVotes))
      )
        return BRIBE_STATUSES.SUCCESSFUL;
    }
    return BRIBE_STATUSES.UNSUCESSFUL;
  }, [proposal?.status]);
  const [usdcAllowance] = useAllowances(
    [pool.bidAsset?.address],
    account,
    config[chainId || 1].AavePool,
  );
  const [mimAllowance] = useAllowances(
    [config[chainId || 1].MIMToken],
    account,
    config[chainId || 1].MIMBidHelper,
  );
  const {data} = useBidsPerProposalQuery({pid: Number(id)});
  const openEditBribeModal = (type) => {
    setEditModalType(type);
    setIsEditBribeModalOpen(true);
  };
  return proposalContent ? (
    <div className="mb-12 w-full">
      <ConfirmBribeModal
        isOpen={isConfirmModalOpen}
        setIsOpen={setIsConfirmModalOpen}
        vote={decision}
        amount={parseInt(enableAmount)}
        tvp={tvp}
        influence={influence}
        before={(eval(decision.toLowerCase()) || 0)?.toFixed(2)}
        after={(eval(decision.toLowerCase()) || 0 + Number(influence))?.toFixed(
          2,
        )}
        decimals={pool.bidAsset?.decimals}
        allowance={token == "mim" ? mimAllowance : usdcAllowance}
        bid={() =>
          token == "usdc"
            ? bid(
                aavePool,
                {account, ...others},
                Number(id),
                parseUnits(String(enableAmount), pool.bidAsset?.decimals),
                decision == DECISIONS.YAY ? true : false,
              )
            : bidWithMIM(
                {account, chainId, ...others},
                parseUnits(String(enableAmount), 18),
                Number(id),
                decision == DECISIONS.YAY ? true : false,
              )
        }
        increaseAllowance={() =>
          token == "usdc"
            ? increaseAllowance(
                pool.bidAsset?.address as string,
                {account, ...others},
                parseUnits(String(enableAmount), pool.bidAsset?.decimals),
                config[chainId || 1].AavePool,
              )
            : approve(
                config[chainId || 1].MIMToken as string,
                {account, ...others},
                parseUnits(String(enableAmount), 18),
                config[chainId || 1].MIMBidHelper,
              )
        }
      />

      <EditBribeModal
        isOpen={isEditBribeModalOpen}
        setIsOpen={setIsEditBribeModalOpen}
        token={token}
        setToken={setToken}
        type={editModalType}
        currentBid={formatUnits(
          currentBid?.highestBid || 0,
          pool.bidAsset?.decimals,
        )}
        allowance={token == "usdc" ? usdcAllowance : mimAllowance}
        direction={currentBid?.support ? "Yay" : "Nay"}
        influence={influence}
        before={eval(decision.toLowerCase()) || 0}
        after={eval(decision.toLowerCase()) || 0 + Number(influence)}
        tvp={tvp}
        inputValue={editBribeAmount}
        setInputValue={setEditBribeAmount}
        maxAmount={token == "usdc" ? usdcBalance : mimBalance}
        decimals={token == "usdc" ? pool?.bidAsset?.decimals : 18}
        bid={() =>
          token == "usdc"
            ? bid(
                aavePool,
                {account, ...others},
                Number(id),
                parseUnits(String(editBribeAmount), pool.bidAsset?.decimals),
                decision == DECISIONS.YAY ? true : false,
              )
            : bidWithMIM(
                {account, chainId, ...others},
                parseUnits(String(editBribeAmount), 18),
                Number(id),
                decision == DECISIONS.YAY ? true : false,
              )
        }
        increaseAllowance={() =>
          token == "usdc"
            ? increaseAllowance(
                pool.bidAsset?.address as string,
                {account, ...others},
                parseUnits(String(editBribeAmount), pool.bidAsset?.decimals),
                config[chainId || 1].AavePool,
              )
            : approve(
                config[chainId || 1].MIMToken as string,
                {account, ...others},
                parseUnits(String(editBribeAmount), 18),
                config[chainId || 1].MIMBidHelper,
              )
        }
      />

      <div className="bg-secondary-gray-lightest dark:bg-secondary-gray-lightest-alt py-10">
        <div className="content-container">
          <div className="flex items-center justify-between">
            <h5 className="font-bold">{proposalContent.title}</h5>
            {!(bribeStatus == BRIBE_STATUSES.NA) && (
              <p
                className={`subtitle-1 py-1 px-3 rounded-md ${STATUS_PILLS[bribeStatus]?.color} ${STATUS_PILLS[bribeStatus]?.bg}`}
              >
                {STATUS_PILLS[bribeStatus]?.text}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 my-8 fill-alert-jade dark:fill-alert-jade-alt mt-20">
            <ItemDetailsBox
              title="Total Voting Power"
              value={formatEther(proposal?.poolVotingPower || 0)}
              icon={
                <LightningIcon className="fill-current text-secondary-gray-dark dark:text-secondary-gray-dark-alt" />
              }
            />
            <ItemDetailsBox
              title="Estimated Influence"
              value={(influence || "0.0") + "%"}
              icon={
                <FireIcon className="fill-current text-secondary-gray-dark dark:text-secondary-gray-dark-alt" />
              }
            />
            <ItemDetailsBox
              title="Highest Bid"
              value={highestBid}
              icon={
                <BarChartIcon className="fill-current text-secondary-gray-dark dark:text-secondary-gray-dark-alt" />
              }
            />
            <ItemDetailsBox
              title="End Date"
              value={expiration.days + " days, " + expiration.hours + " hours"}
              icon={
                <CalendarIcon className="fill-current text-secondary-gray-dark dark:text-secondary-gray-dark-alt" />
              }
            />
          </div>
        </div>
      </div>

      <div className="content-container py-2 lg:py-10">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-4 mt-8 lg:items-start">
          <div className="lg:w-7/12 lg:pr-4">
            <SummaryMarkdown
              proposalContent={proposalContent}
              hash={proposal?.ipfsHash}
              id={id}
            />
          </div>
          <VotesStatusBox
            className="mt-10 w-full max-w-[500px] lg:flex-grow p-5 md:p-6 lg:p-8 bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt rounded-lg"
            yaypct={yay}
            naypct={nay}
            isQuorumValid={proposal?.isQuorumValid || false}
            yay={formatAmount(currentProposal?.forVotes as BigNumber, 18)}
            nay={formatAmount(currentProposal?.againstVotes as BigNumber, 18)}
            votingpower={tvp}
          />
        </div>

        {proposal?.poolVotingPower.isZero() ? (
          <h4 className="text-center my-12">
            Bribe does not hold any voting power on that proposal
          </h4>
        ) : (
          <>
            <div className="my-16">
              {
                <Bribe
                  timeLeft={expiration.days + "d " + expiration.hours + "h"}
                >
                  {!hasBribed && !bribeCompleted ? (
                    <CreateBribe
                      decision={decision}
                      setDecision={setDecision}
                      token={token}
                      setToken={setToken}
                      usdcBalance={usdcBalance}
                      mimBalance={mimBalance}
                      highestBid={formatUnits(
                        currentBid?.highestBid || 0,
                        pool.bidAsset?.decimals,
                      )}
                      options={DECISION_OPTIONS}
                      openModal={() => setIsConfirmModalOpen(true)}
                      enableAmount={enableAmount}
                      setEnableAmount={setEnableAmount}
                    />
                  ) : !bribeCompleted ? (
                    <EditBribe
                      influence={influence}
                      bribeAmount={formatUnits(
                        currentBid?.highestBid || 0,
                        pool.bidAsset?.decimals,
                      )}
                      direction={currentBid?.support ? "Yay" : "Nay"}
                      openModal={openEditBribeModal}
                    />
                  ) : (
                    <BribeStatusBox
                      status={bribeStatus}
                      bidAmount={formatUnits(
                        currentBid?.highestBid || 0,
                        pool.bidAsset?.decimals,
                      )}
                      bribeVote={
                        currentBid?.support ? DECISIONS.YAY : DECISIONS.NAY
                      }
                      finalVote={
                        proposal?.forVotes?.gt(proposal.againstVotes)
                          ? DECISIONS.YAY
                          : DECISIONS.NAY
                      }
                      againstVotes={proposal?.againstVotes}
                      forVotes={proposal?.forVotes}
                      influence={influence}
                    />
                  )}
                </Bribe>
              }
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BribesTable
                items={(data?.bidHistories || [])
                  .sort((a, b) => (a.highestBid < b.highestBid ? 1 : -1))
                  .map((bb) => ({
                    id: bb.id,
                    account: bb.highestBidder,
                    position: false,
                    amount: formatUnits(
                      bb.highestBid,
                      pool?.bidAsset?.decimals,
                    ),
                  }))}
                title="Highest Bribes"
              />
              <BribesTable items={[]} title="Largest Votes on Aave" />
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;
};
