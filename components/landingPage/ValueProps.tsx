import { FunctionComponent } from "react";
import styles from "public/styles/LandingPage.module.scss";

interface Props {
  header: string;
  title: string;
  description: string;
  valuePropsList: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
  }>;
}

const ValueProps: FunctionComponent<Props> = ({
  header,
  title,
  description,
  valuePropsList,
}) => {
  return (
    <div className={[styles.valuePropContainer, "text-black-base"].join(" ")}>
      <div className="w-2/3 pb-8 2xl:pb-16">
        <div className="py-4 font-medium text-2xl 2xl:text-font24">
          {header}
        </div>
        <div className="py-8 font-bold text-5xl 2xl:text-font64">{title}</div>
        <div className="py-4 2xl:text-font28">{description}</div>
      </div>
      <div className="grid grid-cols-2 gap-4 2xl:gap-12">
        {valuePropsList.map((data) => (
          <div key={data.id}>
            <div className="flex items-start">
              <img className="w-10" src={data.icon} />
              <div className="pl-2">
                <div className="font-bold text-lg font-bold pb-6">{title}</div>
                <div className="">{description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ValueProps;
