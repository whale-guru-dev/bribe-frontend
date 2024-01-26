import {AaveIconWithColor} from "components/SVGicons";

export type ProjectTitleProps = {
  projectName: string;
};

const ProjectTitle = ({projectName}: ProjectTitleProps) => {
  return (
    <div className="content-container flex items-center space-x-4">
      <AaveIconWithColor />
      <h3 className="text-primary-onix dark:text-primary-onix-alt font-bold">
        {projectName}
      </h3>
    </div>
  );
};

export default ProjectTitle;
