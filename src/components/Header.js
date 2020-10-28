import headerLogo from '../images/header/logoFon.svg';

function Header() {

  return (
    <header className="header page__header">
      <img className="logo header__logo" src={headerLogo} alt="Логотип"/>
    </header>
 );
}

export default Header;