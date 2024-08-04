import orders from "../datas/orders";
const Orders = () => {
  return (
    <>
      <div className="bg-dark py-2 sticky-top">
        <h4 className="pt-2">Recent Orders</h4>
      </div>
      <table className="table-scroll">
        <tr className="py-5">
          <th>Customer</th>
          <th className="text-center">Order No.</th>
          <th className="text-center">Amount</th>
          <th className="text-center">Status</th>
        </tr>
        {orders.map((data) => (
          <tr key={data.id}>
            <td className="d-flex align-items-center">
              <img src={data.img} alt={data.name} />
              <h6 className="px-1">{data.name}</h6>
            </td>
            <td className="text-center">{data.orderno}</td>
            <td className="text-center">{data.Amount}</td>
            <td className="text-center">
              <p
                className="rounded"
                style={{ color: [data.color], background: [data.bgcolor] }}
              >
                {data.status}
              </p>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Orders;
