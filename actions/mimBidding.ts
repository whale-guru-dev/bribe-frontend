import {Web3ReactContextInterface} from "@web3-react/core/dist/types";
import config from "config";
import {BigNumber} from "ethers";
import {formatEther, parseUnits} from "ethers/lib/utils";
import {AaveMIMBidHelperV1__factory, AaveMIMBidHelperV1} from "types";
import {gasAmount, getSigner} from "utils";

export async function bidWithMIM(
  {library, account, chainId}: Web3ReactContextInterface<any>,
  amount: BigNumber,
  proposalId: number,
  support: boolean,
) {
  const signer = getSigner(library, account as string);
  const bidHelper = new AaveMIMBidHelperV1__factory(signer).attach(
    config[chainId || 1].MIMBidHelper,
  );

  return await bidHelper.connect(signer).curveSwapAssetBid(
    {
      token: config[chainId || 1].MIMToken,
      amount: amount,
      minUSDCToReceive: parseUnits(formatEther(amount.sub(amount.div(100))), 6),
      proposalId: proposalId,
      support,
      curvePoolConfig: {
        curvePool: config[chainId || 1].CurveMIMPool,
        xTokenIndex: 0,
        yTokenIndex: 2,
      },
    },
    gasAmount(),
  );
}
