import React from "react";
import  Header  from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Login from './screens/Login';
import Register from './screens/Register';

import { GlobalProvider } from "./context/GlobalState";
 import "./App.css";

function App() {


 



  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction/>
      </div>
    </GlobalProvider>

   
  );
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
