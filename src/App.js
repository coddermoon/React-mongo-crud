
import './App.css';
import Form from './Components/Form/Form';
import Output from './Components/Output';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <h1 class="text-center my-10 text-xl font-semibold text-white">Please enter your name and pick the Sectors you are currently involved in.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20">
      <Form/>
      <Output/>
      </div>
      
    </div>
  );
}

export default App;
