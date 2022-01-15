import { Drawer } from "@mui/material";
import * as Styled from "./style";
import { OrderList } from "../../../components/OrderList";

export function DrawerDesktop() {
  return (
    <Drawer variant="permanent" anchor="right" sx={Styled.Drawer}>
      <OrderList />
    </Drawer>
  );
}
