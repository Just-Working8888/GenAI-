

import { HeaderComponent } from "Components";
import FooterComponent from "Components/FooterComponent/FooterComponent";
import { Outlet } from "react-router-dom";
export default function Main() {
  return (
    <div className="mainLayout">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
