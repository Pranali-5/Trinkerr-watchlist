import "./App.css";
import { Search } from "./Search.jsx";
import { Navbar } from "./Navbar.jsx";

function App() {
  return (
    <div className="app">
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
        >
          <rect
            width="22.727"
            height="22.727"
            x="0.781"
            y="1.136"
            stroke="#000"
            strokeOpacity="0.85"
            strokeWidth="1.563"
            rx="1.814"
          ></rect>
          <path
            fill="#000"
            fillOpacity="0.85"
            fillRule="evenodd"
            d="M14.542 5.668a.76.76 0 00-.759-.759h-8.47a.76.76 0 00-.758.76v3.275c0 .42.34.76.759.76h3.675c.42 0 .76.34.76.758v8.869c0 .42.34.76.758.76h3.276c.42 0 .76-.34.76-.76V5.668z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#000"
            fillOpacity="0.85"
            d="M15.342 5.668a.76.76 0 01.759-.759h3.276a.76.76 0 01.759.76v3.275c0 .42-.34.76-.76.76h-3.275a.76.76 0 01-.76-.76V5.668z"
          ></path>
        </svg>
        <span>
          <h1>Trinkerr Watchlist</h1>
        </span>
      </div>
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <Search />
    </div>
  );
}

export default App;
