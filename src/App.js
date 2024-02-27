import './App.css';

function App() {

  function printToConsole(event) {
    event.preventDefault();
    console.log(document.getElementById("username").value);
    console.log(document.getElementById("password").value);
  };

  return (
    <div className="container">
      <div id="formContent">
        <form id="myForm" onSubmit={printToConsole}>
          <div className="inContainer">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="inContainer">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="formContainerBtn">
            <button type="submit" id="submitBtn" className="btnLogin">Login</button>
            <button type="button" id="registerBtn" className="btnRegister">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
