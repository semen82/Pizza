import React from 'react';
import AdminCreator from '../components/AdminCreator';
import AdminViewer from '../components/AdminViewer';

function Admin() {
  const [showCreator, setShowCreator] = React.useState(true);

  const onActiveCreator = () => {
    setShowCreator(true);
  };

  const onActiveViewer = () => {
    setShowCreator(false);
  };

  return (
    <div className="content admin">
      <div className="admin">
        <div className="top-line">
          <span></span>
        </div>
        <div className="switch-admin-panel">
          <span
            className={showCreator ? 'creator active' : 'creator'}
            onClick={onActiveCreator}>
            Создать товар
          </span>
          <span
            className={!showCreator ? 'viewer active' : 'viewer'}
            onClick={onActiveViewer}>
            Смотреть товары
          </span>
        </div>
        {showCreator ? <AdminCreator /> : <AdminViewer />}
      </div>
    </div>
  );
}

export default Admin;
