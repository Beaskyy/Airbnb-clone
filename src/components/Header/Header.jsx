import './Header.css'

const Header = () => {
  return (
    <div className='header' style={{position: 'fixed', background: 'white', zIndex: '100', top: '0', width: '100%'}}>
      <div className="logo">
        <img src="https://cdn.worldvectorlogo.com/logos/airbnb-logo-belo-1.svg" width={100} alt="logo" />
      </div>
        <div className="location">
          <p><span>Anywhere</span> <span className='stroke'>|</span> <span>Any week <span className='stroke'>|</span></span> <span className='guest'>Add guests</span><span className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></span></p>
        </div>
        <div className="host">
          <div className="become">Become a host</div>
          <div className="globe"><i className="fa-solid fa-globe"></i></div>
          <div className="profile"><span className='bars'><i className="fa-solid fa-bars"></i></span><span className='user-circle'><i className="fa-solid fa-circle-user"></i></span></div>
        </div>
    </div>
  )
}

export default Header