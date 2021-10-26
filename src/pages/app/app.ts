import Page from '../../core/templates/page';
import MainPage from '../about/about';
import ScorePage from '../score/score';
import SettingsPage from '../settings/settings';
import Header from '../../core/components/header/header';
import Modal from '../../core/components/modal';
import GamePage from '../game/game';
import ModalRes from '../../core/components/modalResult';

const enum PageIds {
  MainPageId = 'main-page',
  SettingsPageId = 'settings-page',
  ScorePageId = 'score-page',
  GamePageId = 'game-page',
}

class App {
  private static container: HTMLElement = document.body;

  private initialPage: MainPage;

  private header: Header;

  private Modal: Modal;

  private ModalRes: ModalRes;

  constructor() {
    this.initialPage = new MainPage('main-page');
    this.header = new Header('header', 'header');
    this.Modal = new Modal('div', 'modal');
    this.ModalRes = new ModalRes('div', 'modalRes');
  }

  static renderNewPage(idPage:string, defaultPageId: string): void {
    const currentPageHTML = document.querySelector(`#${defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.MainPageId) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.SettingsPageId) {
      page = new SettingsPage(idPage);
    } else if (idPage === PageIds.ScorePageId) {
      page = new ScorePage(idPage);
    } else if (idPage === PageIds.GamePageId) {
      page = new GamePage(idPage);
      const navItem = document.querySelectorAll('.header-nav-item');
      navItem.forEach((item) => {
        item.classList.remove('nav-active');
      });
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = defaultPageId;
      App.container.append(pageHTML);
    }
  }

  static enableRouteChange(): void {
    const startBtn = document.querySelector('.header-startGame');
    const stopBtn = document.querySelector('.header-stopGame');
    const userImg = document.querySelector('.header-userImg');
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'game-page') {
        startBtn?.classList.add('hide');
        startBtn?.classList.remove('show');
        stopBtn?.classList.add('show');
        stopBtn?.classList.remove('hide');
      } else if (userImg?.classList.contains('show') && hash !== 'game-page') {
        startBtn?.classList.add('show');
        startBtn?.classList.remove('hide');
        stopBtn?.classList.add('hide');
        stopBtn?.classList.remove('show');
      }
      App.renderNewPage(hash, 'current-page');
    });
  }

  static supervisionNavItem(): void {
    const navItem = document.querySelectorAll('.header-nav-item');
    navItem.forEach((event) => {
      event.addEventListener('click', () => {
        navItem.forEach((item) => {
          item.classList.remove('nav-active');
        });
        event.classList.add('nav-active');
      });
    });
  }

  static clickModalBtn(): void {
    const modalWindow = document.querySelector('.modal');
    const modalBtn = document.querySelector('.header-register-btn');
    const modalInputs = document.querySelectorAll('input.firstName, input.lastName, input.email');
    const modalCheckboxs = document.querySelectorAll('input.checkboxClass');
    modalBtn?.addEventListener('click', () => {
      if (modalWindow) {
        Modal.openModal(modalWindow);
      }
      setInterval(() => {
        Modal.validateName(modalInputs, modalCheckboxs);
        Modal.validateEmail(modalInputs, modalCheckboxs);
      });
    });
  }

  static clickAddUser(): void {
    const modalWindow = document.querySelector('.modal');
    const modalBtn = document.querySelector('.header-register-btn');
    const addUserBtn = document.querySelector('.btn-addUser');
    const startGameBtn = document.querySelector('.header-startGame');
    const miniUserImg = document.querySelector('.header-userImg');
    const modalInputs = document.querySelectorAll('input.firstName, input.lastName, input.email');
    const modalCheckboxs = document.querySelectorAll('input.checkboxClass');
    addUserBtn?.addEventListener('click', () => {
      if ((modalCheckboxs[0] as HTMLInputElement).checked === true
       && (modalCheckboxs[1] as HTMLInputElement).checked === true
        && (modalCheckboxs[2] as HTMLInputElement).checked === true) {
        if (modalWindow) {
          Modal.closeModal(modalWindow);
        }
        Modal.cleanInp(modalInputs, modalCheckboxs);
        modalBtn?.classList.add('hide');
        startGameBtn?.classList.add('show');
        miniUserImg?.classList.add('show');
      }
    });
  }

  static clickPastModal(): void {
    const modalWindow = document.querySelector('.modal');
    const modalInputs = document.querySelectorAll('input.firstName, input.lastName, input.email');
    const modalCheckboxs = document.querySelectorAll('input.checkboxClass');
    modalWindow?.addEventListener('click', (event) => {
      if (event.target === modalWindow) {
        Modal.closeModal(modalWindow);
        Modal.cleanInp(modalInputs, modalCheckboxs);
      }
    });
  }

  static clickCancelBtn(): void {
    const cancelBtn = document.querySelector('.btn-cancel');
    const modalInputs = document.querySelectorAll('input.firstName, input.lastName, input.email');
    const modalCheckboxs = document.querySelectorAll('input.checkboxClass');
    cancelBtn?.addEventListener('click', () => {
      Modal.cleanInp(modalInputs, modalCheckboxs);
    });
  }

  run(): void {
    App.container.append(this.header?.render());
    App.renderNewPage('main-page', 'current-page');
    window.location.hash = '#main-page';
    App.container.append(this.Modal?.render());
    App.container.append(this.ModalRes?.render());
    App.enableRouteChange();
    App.clickModalBtn();
    App.clickPastModal();
    App.supervisionNavItem();
    App.clickCancelBtn();
    App.clickAddUser();
  }
}

export default App;
