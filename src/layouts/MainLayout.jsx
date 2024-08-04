import Sales from "../components/Sales";
import Tasks from "../components/Tasks";
import Profits from "../components/Profits";
import Comments from "../components/Comments";
import Activity from "../components/Activity";
import Orders from "../components/Orders";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <h2 className="px-3 pt-3">Dashboard</h2>

      {/* row-1 */}
      <div className="row justify-content-around py-2 gy-1">
        {/* col-1 */}
        <div className="col-lg-8  px-2">
          <div className="row Insights justify-content-between">
            <Sales />
          </div>
        </div>
        {/* col-2*/}
        <div className="col-lg-4 px-2">
          <Profits />
        </div>
      </div>

      {/* row-2 */}
      <div className="row align-items-center justify-content-around gy-2">
        {/* col-1 */}
        <div className="col-lg-8  px-2">
          <div className="row bg-dark activity justify-content-between gx-3 p-3">
            <Activity />
          </div>
        </div>
        {/* col-2*/}
        <div className="col-lg-4 px-2">
          <div className="bg-dark tasks py-2">
            <Tasks />
          </div>
        </div>
      </div>

      {/* row-3 */}
      <div className="row align-items-center justify-content-around py-2 gy-2">
        {/* col-1 */}
        <div className="col-lg-8  px-2">
          <div className="row bg-dark orders gx-3 px-3">
            <Orders />
          </div>
        </div>
        {/* col-2*/}
        <div className="col-lg-4 px-2">
          <div className="bg-dark comments px-2">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
