import HomePage from "./Componets/HomePage";


function App() {
  return (
    <div className="App">
      <nav className=" flex px-4 py-2 bg-purple-900 text-white justify-between">
        <img className="w-12 rounded-2xl" src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
        <ul className=" px-10 flex space-x-7 justify-end ">
          <li className="mx-2 pt-2 cursor-pointer">Home</li>
          <li className="mx-2 pt-2 cursor-pointer">About</li>
          <li className="mx-2 pt-2 cursor-pointer">Catalog</li>
          <li className="mx-2 pt-2 cursor-pointer">Contact</li>
        </ul>
      </nav>


      <HomePage />
      
    </div>
  );
}

export default App;
