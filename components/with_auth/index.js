export default function withAuth(Components) {
  return function withAuth(props) {
    var isLogin = false;

    if (!isLogin) return <h1>Gagal Login</h1>;

    return <Components {...props} />;
  };
}
