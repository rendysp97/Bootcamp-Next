import withAuth from "../with_auth";
import Menu from "../menu";
import styles from './styles.module.css';

const Header = () => {
  return (
    <div className="text-3xl font-bold underline">
      <Menu />
    </div>
  );
};

export default Header;
