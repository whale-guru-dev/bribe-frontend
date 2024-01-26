import {Fragment, ReactElement} from "react";
import {Tab} from "@headlessui/react";
import {HammerIcon, PeopleIcon} from "components/SVGicons";

export type TabProps = {
  tabImageIcon: ReactElement;
  title: string;
  selected: boolean;
};

const TabButton = ({tabImageIcon, title, selected}: TabProps) => {
  return (
    <button
      className={
        "flex flex-col justify-center items-center w-48 h-20 hover:bg-transparent-agate-20 dark:hover:bg-transparent-agate-20 sm:w-60  " +
        (selected
          ? "border-b-2 border-primary-agate dark:border-primary-agate-alt"
          : "border-b-2 border-primary-pearl dark:border-primary-pearl-alt")
      }
    >
      {tabImageIcon}
      <p
        className={
          selected
            ? ""
            : "text-secondary-gray-dark dark:text-secondary-gray-dark-alt"
        }
      >
        {title}
      </p>
    </button>
  );
};

const AIPtab = () => {
  return (
    <Tab as={Fragment}>
      {({selected}) =>
        TabButton({
          tabImageIcon: (
            <HammerIcon
              className={
                "mb-2 fill-current " +
                (selected
                  ? ""
                  : "text-secondary-gray-dark dark:text-secondary-gray-dark-alt")
              }
            />
          ),
          title: "AIP",
          selected,
        })
      }
    </Tab>
  );
};

const SnapshotTab = () => {
  return (
    <Tab as={Fragment}>
      {({selected}) =>
        TabButton({
          tabImageIcon: (
            <PeopleIcon
              className={
                " mb-2 fill-current " +
                (selected
                  ? ""
                  : "text-secondary-gray-dark dark:text-secondary-gray-dark-alt")
              }
            />
          ),
          title: "SNAPSHOT",
          selected,
        })
      }
    </Tab>
  );
};

const ActiveProposalTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="content-container flex mb-12 space-x-4">
        <AIPtab />
        {/* <SnapshotTab /> */}
      </Tab.List>
    </Tab.Group>
  );
};

export default ActiveProposalTabs;
