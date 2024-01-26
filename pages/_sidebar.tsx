import {useRouter} from "next/dist/client/router";
import Link from "next/link";
import {Fragment, useState, useEffect, useMemo} from "react";
import {Disclosure, Tab} from "@headlessui/react";
import {DownCarrotIcon} from "components/SVGicons";

type DropdownLinkProps = {
  hrefLink: string;
  selected: boolean;
  menuLinkName: string;
  dropdownLinkName: string;
  urlItems: string[];
  paths: Object;
};

type MenuLinkProps = {
  selected: boolean;
  menuLinkName: string;
  urlItems: string[];
};

type DropdownMenuLinkProps = {
  paths: Object;
  menuLinkName: string;
  isSidebarOpen: boolean;
  urlItems: string[];
};

const DropdownLink = ({
  hrefLink,
  selected,
  menuLinkName,
  dropdownLinkName = "",
  urlItems,
  paths,
}: DropdownLinkProps) => {
  selected = urlItems[1] === dropdownLinkName;
  return (
    <div className={selected ? "bg-primary-agate w-full" : ""}>
      <Link href={hrefLink}>
        <a className="flex items-center h-16 pl-14">
          <div
            className={
              "rounded-full fill-current fill-primary-onix bg-primary-onix text-primary-pearl " +
              (selected
                ? "dark:bg-primary-onix dark:text-primary-pearl"
                : "dark:bg-primary-pearl dark:text-primary-onix")
            }
          >
            {paths[menuLinkName][dropdownLinkName].icon}
          </div>
          <p
            className={
              "leading-6 tracking-xs font-normal body-2 ml-4 " +
              (selected ? "font-bold dark:text-primary-onix" : "")
            }
          >
            {dropdownLinkName.length > 0
              ? dropdownLinkName.toLocaleUpperCase()
              : menuLinkName.toLocaleUpperCase()}
          </p>
        </a>
      </Link>
    </div>
  );
};

const MenuLink = ({selected, menuLinkName, urlItems}: MenuLinkProps) => {
  selected = urlItems[0] === menuLinkName;
  if (!urlItems[0] && menuLinkName === "home") {
    selected = true;
  }
  return (
    <div className={selected ? "bg-primary-agate w-full" : ""}>
      <Link href={menuLinkName === "home" ? "/" : `/${menuLinkName}`}>
        <a className="flex items-center h-16 px-6">
          <p
            className={
              "leading-6 tracking-xs font-normal body-2 " +
              (selected ? "font-bold dark:text-primary-onix" : "")
            }
          >
            {menuLinkName.toLocaleUpperCase()}
          </p>
        </a>
      </Link>
    </div>
  );
};

const DropdownMenuItem = ({
  paths,
  menuLinkName,
  isSidebarOpen,
  urlItems,
}: DropdownMenuLinkProps) => {
  return (
    <Disclosure key={menuLinkName}>
      {({open}) => (
        <div>
          {open || (open = urlItems.length > 1)}
          <Disclosure.Button
            className={
              "flex items-center w-full h-16 px-6 hover:bg-transparent-onix-5 dark:hover:bg-transparent-onix-40-alt md:w-60 md:inline-block " +
              (isSidebarOpen ? "" : "hidden")
            }
          >
            <div className="flex justify-between items-center">
              <p className="font-normal body-2 uppercase">{menuLinkName}</p>
              <DownCarrotIcon
                className={`ml-4 fill-current dark:text-primary-pearl ${
                  open ? "transform rotate-180" : ""
                }`}
              />
            </div>
          </Disclosure.Button>
          {open && (
            <>
              {typeof paths !== "boolean"
                ? Object.keys(paths[menuLinkName] || {}).map((item) => {
                    return (
                      <Disclosure.Panel
                        key={item}
                        className="flex w-full"
                        static
                      >
                        <Tab.List
                          className={
                            "hover:bg-transparent-onix-5 dark:hover:bg-transparent-onix-40-alt w-full md:w-60 md:inline-block " +
                            (isSidebarOpen ? "" : "hidden")
                          }
                        >
                          <Tab as={Fragment}>
                            {({selected}) =>
                              DropdownLink({
                                hrefLink: `/${menuLinkName}/${item}`,
                                selected,
                                menuLinkName,
                                dropdownLinkName: item,
                                urlItems,
                                paths,
                              })
                            }
                          </Tab>
                        </Tab.List>
                      </Disclosure.Panel>
                    );
                  })
                : null}
            </>
          )}
        </div>
      )}
    </Disclosure>
  );
};

const Sidebar = ({
  paths,
  isWalletConnectOpen,
  children,
}: {
  paths: Object;
  isWalletConnectOpen?: any;
  children?: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const urlItems = useMemo(() => {
    setIsSidebarOpen(false);
    return router.pathname.split("/").slice(1);
  }, [router.pathname, isWalletConnectOpen]);

  const checkWindowWidth = () => {
    if (typeof window != "undefined") {
      if (window.innerWidth >= 1535) {
        setIsSidebarOpen(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("resize", checkWindowWidth);
      return () => window.removeEventListener("resize", checkWindowWidth);
    }
  }, []);

  return (
    <div
      className={
        "mt-3 md:mt-0 relative w-full h-10 bg-secondary-gray-light dark:bg-secondary-gray-light-alt md:bg-secondary-gray-lighter md:dark:bg-secondary-gray-lighter-alt md:h-screen md:w-60 rounded-lg md:rounded-none " +
        (isSidebarOpen ? "" : "md:pt-12")
      }
    >
      <div
        className={
          isSidebarOpen
            ? "absolute top-0 w-full bg-secondary-gray-light dark:bg-secondary-gray-light-alt h-auto z-40 rounded-lg md:rounded-none shadow-2xl md:shadow-none border border-primary-onix dark:border-primary-onix-alt"
            : ""
        }
      >
        <Tab.Group defaultIndex={0}>
          <Disclosure>
            <div className={"w-full font-bold text-2xl text-center md:hidden"}>
              <button
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={isSidebarOpen ? "pb-4" : ""}
              >
                <h6 className={isSidebarOpen ? "rotate-90" : ""}>[=]</h6>
              </button>
            </div>
            {Object.keys(paths || {}).map((p) => {
              if (typeof paths[p] !== "boolean") {
                return DropdownMenuItem({
                  paths,
                  menuLinkName: p,
                  isSidebarOpen,
                  urlItems,
                });
              } else {
                return (
                  <Tab.List
                    key={p}
                    className={
                      "hover:bg-transparent-onix-5 dark:hover:bg-transparent-onix-40-alt w-full md:w-60 md:inline-block " +
                      (isSidebarOpen ? "" : "hidden ")
                    }
                  >
                    <Tab as={Fragment}>
                      {({selected}) =>
                        MenuLink({selected, menuLinkName: p, urlItems})
                      }
                    </Tab>
                  </Tab.List>
                );
              }
            })}
          </Disclosure>
        </Tab.Group>
        <div
          className={
            "mt-4 py-2 border-t md:hidden " + (isSidebarOpen ? "" : "hidden")
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
