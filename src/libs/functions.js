export const sortPizzas = (pizzas, point) => {
  if (point === 'Популярность') {
    return pizzas.sort((a, b) => (a.popular < b.popular ? 1 : -1));
  } else if (point === 'Цена') {
    return pizzas.sort((a, b) => (a.price < b.price ? 1 : -1));
  } else if (point === 'Название') {
    return pizzas.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else {
    return pizzas;
  }
};

export const filterPizzas = (pizzas, point) => {
  if (point === 'Все') return pizzas;

  return pizzas.filter((item) => {
    return item.categories.includes(point);
  });
};

export const calculation = (cartItems) => {
  let summ = 0;
  for (let key in cartItems) {
    summ += cartItems[key].price * cartItems[key].count;
  }
  return summ;
};
