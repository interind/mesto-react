import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { infoPopups } from '../utils/constants.js';
import api from '../utils/api.js';

function App() {
  const [info, setInfo] = React.useState(infoPopups); // тут вся информация о попапах и их булевые значения
  const [user, setUser] = React.useState({}); // тут информация обо мне с сервера
  const [cards, setCards] = React.useState([]); // тут информация о карточках
  const [selectedCard, setSelectedCard] = React.useState(false); // тут булевое значение для попапа с картинкой

  function closeAllPopups(evt) {
    // функция закрытия всех попапов
    const close = evt.target.closest('.popup');
    close.classList.remove('popup_opened');

    setTimeout(() => {
      setInfo(infoPopups.map((infoPopup) => (infoPopup.isOpen = false)));
      setSelectedCard(false);
    }, 100);
  }

  const handlePopupsClick = (evt) => {
    // функция открытия попапов
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
    // для открытия попапа с картинкой
    const imgTarget = evt.target;
    if (imgTarget.classList.contains('element__pic')) {
      setSelectedCard({ link: imgTarget.src, name: imgTarget.alt });
    }
  }

  React.useEffect(
    () => {
      setInfo(infoPopups);
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
        onPopupsClick={handlePopupsClick}
        myId={user._id}
        key={user._id}
        name={user.name}
        about={user.about}
        avatar={user.avatar}
        cards={cards}
        closeAllPopups={closeAllPopups}
        handleCardClick={handleCardClick}
        selectedCard={selectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;
