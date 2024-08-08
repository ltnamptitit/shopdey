import { Button, Card, Dropdown, Menu, message } from "antd";
import { ExecuteActionRequest } from "../../../interface/RequestBody";
import { executeActionOnOrder } from "../../../api/mangeTabAPI";

function EachOrder({ order }: any) {
  console.log(order);
  const formattedDate = new Date(order.dateCreated).toLocaleString();

  const menuItems = Object.entries(order.nextListActionNew).map(
    ([key, value]) => (
      <Menu.Item key={key} onClick={handleProcessAction(order.id, key)}>
        <div>{value as string}</div>
      </Menu.Item>
    )
  );
  const menu = <Menu>{menuItems}</Menu>;
  // const menuItems1 = Object.entries(order.nextListActionNew).map(
  //   ([key, value]) => ({
  //     key: key,
  //     label: (
  //       <div onClick={handleProcessAction(order.id, key)}>
  //         {value as string}
  //       </div>
  //     ),
  //   })
  // );

  // Define the menu for the dropdown

  return (
    <div className="flex flex-row border">
      <div className="w-2/12 border"></div>
      <Card
        className="w-8/12"
        title={order.productNameList}
        extra={<a href="#">More</a>}
      >
        <div>{order.nextListActionNew[0]}</div>
        <div>Date created: {formattedDate}</div>
        <div className="flex flex-row justify-between">
          <div>Price: {order.totalPrice}</div>
          {order.nextListActionNew && (
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button onClick={(e) => e.preventDefault()}>
                Actions <span>▼</span>
              </Button>
            </Dropdown>
          )}
        </div>
      </Card>
    </div>
  );
}

export default EachOrder;

const handleProcessAction = (orderid: string, action: string): any => {
  const executeAction = async () => {
    try {
      const executeActionRequest: ExecuteActionRequest = {
        orderId: orderid,
        action: action,
      };
      const data = await executeActionOnOrder(executeActionRequest);
      if (data.data.status === "success") {
        message.success("This is a success message");
      }
    } catch (error) {
      console.error("Error fetching order list:", error);
      message.error("An error occurred");
    }
  };
  executeAction();
};
