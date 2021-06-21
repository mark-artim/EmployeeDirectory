import './App.css';
import Footer from "./components/Footer"
import Header from './components/Header';
import TableHeader from './components/TableHeader';
import React, { useState } from 'react';

// let employee = "{ name.first: Gunther}";
// employee = query => {
//   API.Employee(query)
//   .then(res => this.setState({ results: res.data.data }))
//   .catch(err => console.log(err));
// }  

function App() {
  const [search, setSearch] = useState([]);
  return (
    <div className="App">
      <Header search = {search} setSearch = {setSearch} />
      <TableHeader search = {search} setSearch = {setSearch} />
      {/* <EmpData /> */}
      <Footer />
    </div>
  );
}

export default App;
