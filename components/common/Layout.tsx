import { FunctionComponent } from "react";
import { Footer, Header } from "@ui/core/Layout";

interface Props {}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
