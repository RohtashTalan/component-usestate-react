import logo from './logo.svg';
import './App.css';
import Card from './components/cards';

function App() {
  return (
    <div className="App">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
<h1>Small Project Using Components and useState</h1>
     <div className='d-flex'>
     <Card name="Card 1 Title" imgUrl="./img/card1.avif" />
     <Card name="Card 2 Title" imgUrl="./img/card2.avif" />
     <Card name="Card 3 Title" imgUrl="./img/card3.avif" />
     <Card name="Card 4 Title" imgUrl="./img/card4.avif" />
     </div>
         
    </div>
  );
}

export default App;
