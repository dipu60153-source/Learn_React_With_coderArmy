import { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

// 1. Context create
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    // 2. Provider wrap -> sabhi components ko user aur setUser accessible hoga
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>👤 User Login System</h1>
        <Login />
        <Dashboard />
      </div>
    </UserContext.Provider>
  );
}

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim()) {
      setUser(input); // context me user set kar do
      setInput("");
    }
  };

  const handleLogout = () => {
    setUser(null); // context se user hata do
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {user ? (
        <>
          <p>✅ Logged in as <b>{user}</b></p>
          <button onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user}! 🎉</h2>
          <p>This is your personal dashboard.</p>
        </>
      ) : (
        <h2>Please login to see your dashboard.</h2>
      )}
    </div>
  );
}

// Reusable button style
const buttonStyle = {
  padding: "8px 15px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

export default App;
