import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { infoPopups } from '../utils/infoPopups.js';
import api from '../utils/api.js';

function App() {
  let [info, setInfo] = React.useState(infoPopups);

  function handleEditClick(evt) {
    setInfo(
      info.map((infoPopup) => {
        if (evt.currentTarget.dataset.id === infoPopup.id) {
          infoPopup.isOpen = true;
        }
        return infoPopup;
      })
    );
  }

  React.useEffect(() => {
    api.getInfoUser().then((data) => {
      console.log(data);
    });
    api.getInfoCards().then((data) => {
      console.log(data);
    });
  }, [info]);

  return (
    <div className='page'>
      <Header />
      <Main infoPopups={info} onEditClick={handleEditClick} />
      <Footer />
    </div>
  );
}

export default App;
