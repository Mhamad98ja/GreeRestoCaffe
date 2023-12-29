import './App.css';
import CategoryCollapse from './Components/CategoryCollapse/CategoryCollapse';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header/>

        <CategoryCollapse link="Sandwiches"/>
      <CategoryCollapse link="ColdDrinks"/>
      <CategoryCollapse link="HotDrinks"/>
      <CategoryCollapse link="Shisha"/>
      <CategoryCollapse link="Snacks"/>
      
      <Footer/>
    </div>
  );
}

export default App;
