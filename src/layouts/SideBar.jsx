const SideBar = () => {
  return (
    <div className="sidebar bg-dark d-flex flex-column align-items-center">
        <ul className="navbar-nav">
            <li className="my-2"><i className="bi bi-house"></i> </li>
            <li className="my-2"><i className="bi bi-bar-chart"></i>  </li>
            <li className="my-2"><i className="bi bi-clipboard-check"></i></li>
            <li className="my-2"><i className="bi bi-wallet2"></i></li>
            <li className="my-2"><i className="bi bi-bag-check"></i></li>
        </ul>
    </div>
  )
}

export default SideBar