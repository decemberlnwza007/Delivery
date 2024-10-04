import './navbar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from '@nextui-org/link';

export default function Navbar() {

  return (
    <nav className="sidebar">
      <input type="checkbox" id="check" />

      <label htmlFor="check" className="checkbtn">
        <FaBars />
      </label>
      <label htmlFor="logo" className="logo">Drive Straight.</label>

      <ul>
        <li><Link href='/Home'><a>หน้าแรก</a></Link></li>
        <li><Link href='/Rent'><a>เช่ารถ</a></Link></li>
        <li><Link href='/About'><a>เกี่ยวกับ</a></Link></li>
        <li><Link href='/'><a style={{ color: 'white', backgroundColor: 'red', cursor: 'pointer'}}>ออกจากระบบ</a></Link></li>
      </ul>
    </nav>
  );
}
