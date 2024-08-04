import sales from "../datas/sales";
const Sales = () => {
  return (
    <>
      {sales.map((data) => (
        <div className="col-sm-4 col-md-3 px-1" key={data.id}>
          <div className="bg-dark sales p-3">
            <img
                src={data.img}
                alt={data.name}
            />
            <p className="py-2">{data.name}</p>
            <div className="d-flex align-items-center justify-content-between">
                <h5>{data.count}</h5>
                <small style={{color:[data.color]}}>{data.gain}</small>
            </div>
            </div>
        </div>
      ))}
    </>
  );
};

export default Sales;
