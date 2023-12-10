import {Container} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Catgeory from './components/Catgeory';
import ItemsList from './components/ItemsList';
import { items } from './data';
import { useState } from 'react';

function App() {
  const [itemsData, setItemsData] = useState(items)

  const allCategory = ['الكل',...new Set(items.map( (i) => i.category ))]

  
  const filterbyCategory = (cat) => {
    if (cat === 'الكل')
    {
      setItemsData(items)
    } else {
    const newArr=items.filter((item)=> item.category === cat)
    setItemsData(newArr)
  }}
  
  const filterbySearch = (word) => {
    if (word !== " ") 
    {
    const newArr = items.filter((item)=> item.title === word)
    setItemsData(newArr)
  }}

  return (
    <div className="color-body font">
       <NavBar filterbySearch={filterbySearch}/>
     <Container>
       <Header/>
       <Catgeory filterbyCategory={filterbyCategory} allCategory={allCategory} />
       <ItemsList itemsData={itemsData}/>
     </Container>
    </div>
  );
}

export default App;
