import { FunctionComponent } from "react";
import { footerDescription, pagination } from "./constant";

export interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = ({}) => {
  const headingClass = "py-8 opacity-50 2xl:text-font18";
  const subListClass = "cursor-pointer pb-1 text-lg 2xl:pb-4";
  return (
    <footer className="w-full bg-black-base text-white">
      <div className="max-w-row 2xl:max-w-highRow mx-auto pt-10 pb-16 px-24">
        <div className="flex justify-between w-full items-start w-full">
          <div className="w-full">
            <img
              className={`w-24 2xl:w-w110 ${headingClass}`}
              src="/ui-kit/icon/logo-white.svg"
            />
            <div className="opacity-50 text-lg 2xl:text-font24">
              {footerDescription}
            </div>
          </div>
          <div className="flex justify-between w-full">
            {pagination.map((pages) => (
              <div key={pages.id} className="pl-8">
                <div className={headingClass}>{pages.title}</div>
                <ul className="">
                  {pages.subList.map((list) => (
                    <li key={list.id} className={subListClass}>
                      <a>{list.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white border-opacity-50">
        <div className="py-4 flex justify-between max-w-row 2xl:max-w-highRow mx-auto px-24 text-font18">
          <div className="opacity-50">{"© 2019-2020 All Rights Reserved."}</div>
          <div>{"Terms of Service"}</div>
        </div>
      </div>
    </footer>
  );
};
