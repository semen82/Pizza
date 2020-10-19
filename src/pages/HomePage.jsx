import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../components/Menu';
import PizzaBlock from '../components/PizzaBlock';
import Preloader from '../components/Preloader';
import { sortPizzas, filterPizzas } from '../libs/functions';

function HomePage() {
  const { pizzas, isPreloader } = useSelector((state) => state.home);
  const { activeCategory, activeSortItem } = useSelector((state) => state.menu);

  const sortedPizzas = sortPizzas(pizzas, activeSortItem);
  const filteredPizzas = filterPizzas(sortedPizzas, activeCategory);
  // console.log(db);
  return (
    <>
      <Menu />
      <div className="content">
        {isPreloader ? (
          <Preloader />
        ) : (
          <>
            <h2 className="title">{activeCategory} Пиццы</h2>
            {filteredPizzas.map((item) => (
              <PizzaBlock key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;
