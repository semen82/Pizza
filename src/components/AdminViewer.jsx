import React from 'react';

import { useSelector } from 'react-redux';
import AdminViewerBlock from './AdminViewerBlock';

import { startLoadingPizzas } from '../libs/functions';
import { useDispatch } from 'react-redux';

const AdminViewer = React.memo(() => {
  const pizzas = useSelector((state) => state.home.pizzas);
  const dispatch = useDispatch();

  React.useEffect(() => {
    startLoadingPizzas(dispatch);
  }, [dispatch]);

  return (
    <div className="admin-viewer">
      <h1 className="title-viewer">Все пиццы</h1>
      <div className="blocks-viewer">
        {pizzas.map((item) => (
          <AdminViewerBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default AdminViewer;
