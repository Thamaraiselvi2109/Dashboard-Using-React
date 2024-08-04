import Orders from '../assets/orders.svg'
import Delivered from '../assets/delivered.svg'
import Cancelled from '../assets/cancelled.svg'
import Revenue from '../assets/revenue.svg'

const sales = [
  {
    id: 1,
    name: "Total orders",
    img: Orders,
    count: "75",
    gain: "3%",
    color:'green'
  },
  {
    id: 2,
    name: "Total Delivered",
    img: Delivered,
    count: "70",
    gain: "-3%",
    color:'red'
  },
  {
    id: 3,
    name: "Total cancelled",
    img: Cancelled,
    count: "05",
    gain: "3%",
    color:'green'
  },
  {
    id: 4,
    name: "Total orders",
    img: Revenue,
    count: "$12K",
    gain: "-3%",
    color:'red'
  },
]


export default sales;