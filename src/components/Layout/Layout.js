import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Header />
      <main className="flex-grow-1">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
