import {useRouter} from "next/dist/client/router";
import {useMemo} from "react";
import {UpCarrotIcon} from "components/SVGicons";

const Breadcrumbs = () => {
  const router = useRouter();
  const items = useMemo(
    () => router.asPath.split("/").slice(1),
    [router.asPath],
  );

  const homeBreadcrumb = (items: string[]) => {
    return (
      <>
        <p
          className={
            "mx-2 capitalize cursor-pointer body-2 " +
            (!items[0].length
              ? "text-secondary-gray-darkest dark:text-secondary-gray-darkest-alt"
              : "text-secondary-topaz dark:text-secondary-topaz-alt")
          }
          onClick={(_) => router.push("/")}
        >
          {"Home"}
        </p>
        <p>
          {items[0] !== "" ? (
            <UpCarrotIcon className="rotate-90 fill-current dark:text-secondary-gray-medium-alt" />
          ) : (
            ""
          )}
        </p>
      </>
    );
  };

  const pageBreadCrumb = (items: string[]) => {
    return (
      <>
        {items.map((item, index) => (
          <div className="flex items-center" key={item}>
            {item !== "projects" ? (
              <>
                <div
                  className="mx-2 capitalize cursor-pointer"
                  onClick={(_) =>
                    router.push(
                      items
                        .slice(0, index + 1)
                        .reduce((acc, cur) => acc + "/" + cur, "/"),
                    )
                  }
                >
                  <p
                    className={
                      "body-2 " +
                      (index === items.length - 1
                        ? "text-secondary-gray-darkest dark:text-secondary-gray-darkest-alt"
                        : "text-secondary-topaz dark:text-secondary-topaz-alt")
                    }
                  >
                    {item !== "projects"
                      ? !Number(item)
                        ? item
                        : `Proposal ${item}`
                      : ""}
                  </p>
                </div>
                {index >= items.length - 1 ? (
                  ""
                ) : item ? (
                  <UpCarrotIcon className="rotate-90 fill-current dark:text-secondary-gray-medium-alt" />
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="flex items-center">
      {homeBreadcrumb(items)}
      {pageBreadCrumb(items)}
    </div>
  );
};

export default Breadcrumbs;
