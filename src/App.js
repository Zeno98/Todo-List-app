import './App.css';
import List from './components/List/List';
import TodoList from './components/TodoList/TodoList';

function App() {
  // let [toDelete,setToDelete]=React.useState();

//   let removeItem=(selectedId)=>{
//     setToDelete(selectedId);
// }


  return (
    <div className="App">

      <List/>
    </div>
  );
}

export default App;
