import { Card } from "antd";

// {
//     "id": "8ad07cc9-dba6-430b-ad1c-a85abac26d70",
//     "status": "PROCESSING",
//     "isPaid": 0,
//     "totalPrice": 1000,
//     "dateCreated": 1720860538265,
//     "orderUserID": 6,
//     "shipper": null,
// "nextListActionNew": {
//         "MEMBER_CANCEL": "Cancel",
//         "MEMBER_CANCEL1": "Cancel1"
// }
// }

interface NextListActionNew {
  [key: string]: string;
}
function Order(
  id: String,
  status: String,
  isPaid: number,
  totalPrice: number,
  dateCreated: Date,
  //   orderUserID: number,
  //   shipper: number,
  nextListActionNew: NextListActionNew,
  productNameList: String[]
) {
  return (
    <>
      <Card style={{ width: 240 }}>
        <h1>{productNameList[0]}</h1>
        <div className="custom-card">
          <h3>{totalPrice}</h3>
          {nextListActionNew.map}
          <div>
            {Object.entries(nextListActionNew).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}

export default Order;
