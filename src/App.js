import logo from './logo.svg';
import './App.css';

import Dashboard from './Containers/TransactionDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dashboard />
      </header>

    </div>
  );
}

export default App;
