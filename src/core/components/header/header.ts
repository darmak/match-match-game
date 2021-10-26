import Component from '../../templates/components';
import about from '../../../assets/about.png';
import settings from '../../../assets/settings.png';
import imgUserHeader from '../../../assets/user.png';

class Header extends Component {
  renderHeader():void {
    this.container.innerHTML = `
    <div class="header-logo">
      <div class="header-logo_top">
          <p>match</p>
      </div>

      <div class="header-logo_bot">
          <h2>match</h2>
      </div>
    </div>

    <nav class="header-nav">
      <a href="#main-page">
        <div data-menu="0" class="header-nav-item nav-active">
          <div class="header-nav-item_img">
              <img src="${about}" alt="about">
          </div>
          <div class="header-nav-item_subtitle">
              <p>About Game</p>
          </div>
        </div>
      </a>

      <a href="#score-page">
        <div data-menu="1" class="header-nav-item">
          <div class="header-nav-item_img">
              <img src="${settings}" alt="Score">
          </div>
          <div class="header-nav-item_subtitle">
              <p>Best Score</p>
          </div>
        </div>
      </a>

      <a href="#settings-page">
        <div data-menu="2" class="header-nav-item">
          <div class="header-nav-item_img">
              <img src="${settings}" alt="Score">
          </div>
          <div class="header-nav-item_subtitle">
              <p>Game Settings</p>
          </div>
        </div>
      </a>
    </nav>

    <div class="header-register">
        <button class="header-register-btn">register new player</button>
        <a href="#game-page"><button class="header-register-btn header-startGame">start game</button></a>
        <button class="header-register-btn header-stopGame">stop game</button>
        <img class="header-userImg" src="${imgUserHeader}" alt="">
    </div>
`;
  }

  render(): HTMLElement {
    this.renderHeader();
    return this.container;
  }
}

export default Header;
