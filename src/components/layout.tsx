import Footer from "./footer";
import Header from "./header";

type porps = {
  children: JSX.Element;
};

const Layout: React.FC<porps> = ({ children }) => {
  return (
    <div className="relative min-h-screen max-h-screen overflow-y-auto">
      <header className="md:h-16 h-20 w-full ">
        <Header />
      </header>
      <main className="min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-104px)] max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-104px)]  overflow-y-auto border-b border-t  ">{children}</main>

      <footer className="h-10 ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
