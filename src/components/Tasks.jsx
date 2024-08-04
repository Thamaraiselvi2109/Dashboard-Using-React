import arrow from "../assets/Arrow.svg";
import { Tasks as task } from "../datas/DailyTasks";
const Tasks = () => {
  return (
    <>
      {task.map((data) => (
        <div
          key={data.id}
          className="row align-items-center justify-content-center  my-3 px-3"
        >
          <div className="col-9 d-flex align-items-center">
            <img src={data.img} alt={data.name} />
            <h6 className="px-3">{data.name}</h6>
          </div>
          <div className="col-3 text-end">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Tasks;
