import Link from "next/link";


const Header = () => {
  return (
    <ul>
      <li><Link href="/"> Home</Link></li>
      <li><Link href="/profile">Profile</Link></li>
      <li><Link href="/user"> User</Link></li>
    </ul>
  );
};

export default Header;
