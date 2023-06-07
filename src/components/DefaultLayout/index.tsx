import { DefaultLayoutContainer } from "./style";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
};
export { DefaultLayout };
