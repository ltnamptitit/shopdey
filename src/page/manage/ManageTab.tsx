import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useEffect, useState } from "react";
import { getAllTab, showOrderListOnTab } from "../../api/mangeTabAPI";
import { ManageOrderRequest } from "../../interface/RequestBody";
import EachOrder from "./component/EachOrder";

function ManageTab() {
  const [listTabName, setListTabName] = useState<string[]>([]);
  const [orderList, setOrderList] = useState<any[]>([]);
  const [curTab, setCurTab] = useState<string>("PENDING");

  useEffect(() => {
    const fetchData = async () => {
      const respose = await getAllTab();
      setListTabName(respose.data);
    };
    fetchData();
  }, []);

  const handleTabChange = async (activeKey: string) => {
    try {
      setCurTab(activeKey);
    } catch (error) {
      console.error("Error fetching order list:", error);
    }
  };

  useEffect(() => {
    const fetchInitialOrders = async () => {
      try {
        const manageOrderRequest: ManageOrderRequest = { tab: curTab };
        const data = await showOrderListOnTab(manageOrderRequest);
        setOrderList(data.data);
      } catch (error) {
        console.error("Error fetching order list:", error);
      }
    };

    fetchInitialOrders();
  }, [curTab]);

  return (
    <Tabs tabPosition="left" onChange={handleTabChange}>
      {listTabName.length > 0 ? (
        listTabName.map((x: string, index: number) => (
          <TabPane tab={x} key={x}>
            {orderList.length > 0 ? (
              orderList.map((order, index) => <EachOrder order={order} />)
            ) : (
              <div>Have no orders</div>
            )}
          </TabPane>
        ))
      ) : (
        <>No Have Data</>
      )}
    </Tabs>
  );
}

export default ManageTab;
