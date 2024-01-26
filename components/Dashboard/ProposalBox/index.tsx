import ProposalItem, {ProposalItemProps} from "./ProposalItem";

type ProposalBoxProps = {
  proposals?: ProposalItemProps[];
};

const ProposalBox = ({proposals = []}: ProposalBoxProps) => {
  return (
    <>
      {proposals.map((proposal, index) => {
        return (
          <ProposalItem
            // icon={proposal.icon}
            // title={proposal.title}
            id={proposal.id}
            ipfsHash={proposal.ipfsHash}
            // description={proposal.description}
            // status={proposal.status}
            key={`proposal-${index}`}
          />
        );
      })}
    </>
  );
};
export default ProposalBox;
