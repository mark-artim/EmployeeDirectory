import './App.css';
import EmpData from "./components/EmpData";
import Footer from "./components/Footer"
import API from "./utils/API";
import Header from './components/Header';
import TableHeader from './components/TableHeader';

// let employee = "{ name.first: Gunther}";
// employee = query => {
//   API.Employee(query)
//   .then(res => this.setState({ results: res.data.data }))
//   .catch(err => console.log(err));
// }  

function App() {
  return (
    <div className="App">
      <Header />
      <TableHeader />
      <EmpData />
      <Footer type="danger" color="red"/>
    </div>
  );
}

export default App;
