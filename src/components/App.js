import Navbar from "./Navbar";

const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          Gametime
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default App;
