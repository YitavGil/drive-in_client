import './navbar.scss';
import logo from '../../assets/drive-in-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="left">
          <img src={logo} alt='tcm-logo' />

          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>Classics</span>
          <span>My Collection</span>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Navbar