import withAuth from "../with_auth";
import Menu from "../menu";

const Header = () => {
  return (
    <div>
      <Menu />
    </div>
  );
};

export default withAuth(Header);
