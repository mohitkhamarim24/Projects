import Navbar from './Navbar';
import Textform from './Textform';
import './App.css';
function App(){
  return(
<>
<Navbar title = "TextUtils"/>
<div className="container my-3">
<Textform heading = "Enter The Texts to analyze"/>
</div>
</>
  );
}
export default App;
