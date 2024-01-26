import TableHeader from "./TableHeader";
import TableItem, {ProjectTableItemProps} from "./TableItem";
import Link from "next/link";

type ProjectTableProps = {
  projects?: ProjectTableItemProps[];
};

const ProjectsTable = ({projects = []}: ProjectTableProps) => {
  return (
    <div className="content-container mt-10 lg:mt-28 mb-3">
      <TableHeader bidApr={projects[0].bidApr} />

      {projects.map((project) => {
        return (
          <Link
            key={project.name}
            href={`/projects/${project.name.toLowerCase()}`}
          >
            <a>
              <TableItem
                key={project.name}
                name={project.name}
                tvl={project.tvl}
                icon={project.icon}
                deposit={project.deposit}
                bribeApr={project.bribeApr}
                bribeRewards={project.bribeRewards}
                usdcRewards={project.usdcRewards}
                bidApr={project.bidApr}
                highestBid={project.highestBid}
                estimatedBidReward={project.estimatedBidReward}
                isActive={project.isActive}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectsTable;
