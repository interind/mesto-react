import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { infoPopups } from '../utils/constants.js';
import api from '../utils/api.js';

function App() {
  const [info, setInfo] = React.useState(infoPopups);
  const [user, setUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function closePopupClick(evt) {
    const close = evt.target.closest('.popup');
    close.classList.remove('popup_opened');
    setInfo(info.map((infoPopup) => (infoPopup.isOpen = false)));
    setSelectedCard(false);
  }

  const handleEditClick = (evt) => {
    setInfo(
      info.map((infoPopup) => {
        if (evt.currentTarget.dataset.id === infoPopup.id) {
          infoPopup.isOpen = true;
        }
        return infoPopup;
      })
    );
  };

  function handleCardClick(evt) {
    const imgTarget = evt.target;
    if (imgTarget.classList.contains('element__pic')) {
      setSelectedCard({ link: imgTarget.src, name: imgTarget.alt });
    }
  }

  React.useEffect(
    () => {
      setInfo(info);
      api.getInfoUser().then((dataUser) => {
        setUser(dataUser);
      });
      api.getInfoCards().then((data) => {
        setCards(data[0]);
      });
      setSelectedCard({});
    },
    [info],
    { selectedCard }
  );

  return (
    <div className='page'>
      <Header />
      <Main
        infoPopups={info}
        onEditClick={handleEditClick}
        myId={user._id}
        key={user._id}
        name={user.name}
        about={user.about}
        avatar={user.avatar}
        cards={cards}
        closePopupClick={closePopupClick}
        handleCardClick={handleCardClick}
        selectedCard={selectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;
