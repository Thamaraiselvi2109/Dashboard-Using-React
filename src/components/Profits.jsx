import { Chart} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'

const profits = () => {
  return (
   <>
   <div className="bg-dark profit p-3">
    <small>Net Profit</small>
    <div className="row">
      <div className="col-6">
        <h3 className="py-3">$ 6759.32</h3>
        <small className="text-success">3%</small>
      </div>
      <div className="col-6">
      <div className='circle-chart' style={{height:"90%"}}>
            <Doughnut
              data={{
                datasets: [{data: [60,40]}]
              }}
            />
            </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default profits;