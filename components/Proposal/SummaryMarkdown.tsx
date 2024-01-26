import ReactMarkdown from "react-markdown";
import {ExternalLinkIcon} from "components/SVGicons";

export interface SummaryMarkdownProps {
  proposalContent: any;
  hash?: string;
  id: string | string[] | undefined;
}

const SummaryMarkdown = ({proposalContent, id, hash}: SummaryMarkdownProps) => {
  return (
    <>
      <ReactMarkdown
        components={{
          h2: (props) => (
            <h4 className="font-bold my-2 mt-5 first:mt-0" {...props} />
          ),
          p: (props) => <p className="body-2 font-light" {...props} />,
        }}
      >
        {proposalContent.description.slice(0, 600) + "..."}
      </ReactMarkdown>

      <a
        className="mt-5 text-secondary-topaz dark:text-secondary-topaz-alt flex items-center"
        href={"https://app.aave.com/#/governance/" + id + "-" + hash}
        target="_blank"
      >
        Read more on Aave{" "}
        <ExternalLinkIcon className="ml-2 fill-current text-secondary-topaz dark:text-secondary-topaz-alt " />
      </a>
    </>
  );
};

export default SummaryMarkdown;
