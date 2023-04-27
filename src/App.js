import Header from "./componets/Header/Header";
import Sidebar from "./componets/Sidebar/Sidebar";

function App() {
  return (
    <>
      <header>
        {/* Navbar generica con elemneti link in orizzontale e responsive */}
       {/*<Header/>*/}

       {/* Sidebar che scorre da sinistra verso destra e navBar con toggle button */}
       <Sidebar/>
      </header>  
      <main>

      </main>
    </>
  );
}

export default App;
