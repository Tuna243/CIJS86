// App.js (or index.js)
import React from 'react';
import TodoList from './TodoList';
import Timer from './Timer';
import Greeting from './Greeting';
import ProductCatalog from './ProductCatalog';
import ScrollToTop from './ScrollToTop';
import ScrollProgressBar from './ScrollProgressBar';
import DarkModeToggle from './DarkModeToggle';
const App = () => {
  return (
    <div className="container">
      <h1>Todo List Application</h1>
      <TodoList />

      <div className="product-catalog">
          <ProductCatalog title='User cart'/>
        </div>


          <Timer />
        

        <div className="greeting">
          <h2>Greeting</h2>
          <Greeting />
        </div>
        {/* Scroll To Top Button */}
        
          <ScrollToTop/>
          {/*  */}
          <ScrollProgressBar/>

          {/*  */}
          <DarkModeToggle/>
        
        
    </div>
  );
};

export default App;
