import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../components/Menu';
import PizzaBlock from '../components/PizzaBlock';
import { sortPizzas, filterPizzas } from '../libs/functions';

function HomePage() {
  const pizzas = useSelector((state) => state.home.pizzas);
  const { activeCategory, activeSortItem } = useSelector((state) => state.menu);

  const sortedPizzas = sortPizzas(pizzas, activeSortItem);
  const filteredPizzas = filterPizzas(sortedPizzas, activeCategory);

  return (
    <>
      <Menu />
      <div className="content">
        <h2 className="title">{activeCategory} Пиццы</h2>
        {filteredPizzas.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
