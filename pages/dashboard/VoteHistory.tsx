import { TableBody } from "components/Dashboard";
import Pagination from "components/Dashboard/pagination";
import { AaveIconWithColor } from "components/SVGicons";
import { useAaveProposal } from "hooks/aaveGovernance";
import { useEffect, useState } from "react";
import { useQuery } from "urql";

const DUMMY_PROPOSAL_HISTORY = [
    {
        icon: <AaveIconWithColor />,
        description: 'Split AAVE rewards distribution and bug...',
        id: 61,
        status: 'executed',
        userProposal: 'Yay',
        isSuccess: true,
        finalBid: {
            amount: 100000
        },
        userBribe: {
            amount: 100,
            isCollected: false,
            link: ''
        },
        date: '10/10/2021'
    },
    {
        icon: <AaveIconWithColor />,
        description: 'Split AAVE rewards distribution and bug...',
        id: 62,
        status: 'defeated',
        userProposal: 'Nay',
        isSuccess: true,
        finalBid: {
            amount: 200000
        },
        userBribe: {
            amount: 200,
            isCollected: true,
            link: ''
        },
        date: '08/08/2021'
    },
    {
        icon: <AaveIconWithColor />,
        description: 'Lorem ipsum dolor sit amet, consectetur...',
        id: 63,
        status: 'executed',
        userProposal: 'Yay',
        isSuccess: true,
        finalBid: {
            amount: 64000
        },
        userBribe: {
            amount: 640,
            isCollected: true,
            link: ''
        },
        date: '07/07/2021'
    },
    {
        icon: <AaveIconWithColor />,
        description: 'Lorem ipsum dolor sit amet, consectetur...',
        id: 63,
        status: 'defeated',
        userProposal: 'Yay',
        isSuccess: false,
        finalBid: {
            amount: 23000
        },
        userBribe: {
            amount: 13,
            isCollected: true,
            link: ''
        },
        date: '09/04/2021'
    },
    {
        icon: <AaveIconWithColor />,
        description: 'Lorem ipsum dolor sit amet, consectetur...',
        id: 64,
        status: 'defeated',
        userProposal: 'Yay',
        isSuccess: false,
        finalBid: {
            amount: 418000
        },
        userBribe: {
            amount: 2300,
            isCollected: true,
            link: ''
        },
        date: '04/04/2021'
    },
    {
        icon: <AaveIconWithColor />,
        description: 'Lorem ipsum dolor sit amet, consectetur...',
        id: 64,
        status: 'defeated',
        userProposal: 'Yay',
        isSuccess: false,
        finalBid: {
            amount: 418000
        },
        userBribe: {
            amount: 2300,
            isCollected: true,
            link: ''
        },
        date: '04/04/2021'
    },
];

const VotesQuery = `
  query {
    votes {
      id
      proposalId
      user
      support
      timestamp
    }
  }
`;

const VoteHistory = ({votes}) => {
    const [currentVoteHistoryPage, setVoteHistoryCurrentPage] = useState(1);


    const handleVoteHistoryPageChange = (page) => {
        setVoteHistoryCurrentPage(page);
    };

    return (
        <>
            {/* Vote History Section Start */}
            <h5>Your Vote History</h5>

            <p className="subtitle">
                Your governance tokens have been used in the following votes
            </p>

            <div className="shadow-sm overflow-hidden inline-block rounded-lg border border-secondary-gray-light dark:border-secondary-gray-light-alt w-full mt-6">
                <table className="table-auto w-full caption">
                    <thead>
                        <tr className="border-b border-secondary-gray dark:border-secondary-gray-alt">
                            <th className="font-medium p-4 text-left">Proposal</th>
                            <th className="font-medium p-4 text-right">Bribe Position</th>
                            <th className="font-medium p-4 text-right">Bribe Success</th>
                            <th className="font-medium p-4 text-right">Final Bid</th>
                            <th className="font-medium p-4 text-right">Your Bribe</th>
                            <th className="font-medium p-4 text-right">Date</th>
                        </tr>
                    </thead>
                    <TableBody data={votes} type='votes'/>
                </table>
                <Pagination
                    pageSize={5}
                    totalItems={votes.length}
                    currentPage={currentVoteHistoryPage}
                    handlePageChange={handleVoteHistoryPageChange}
                />
            </div>
            {/* Vote History Section End */}
        </>
    );
};
export default VoteHistory;
