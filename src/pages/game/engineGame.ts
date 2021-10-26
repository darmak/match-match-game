import One from '../../assets/animals/bat.png';
import Two from '../../assets/animals/beaver.png';
import Three from '../../assets/animals/beetle.png';
import Four from '../../assets/animals/boar.png';
import Five from '../../assets/animals/camel.png';
import Six from '../../assets/animals/chicken.png';
import Seven from '../../assets/animals/crab.png';
import Eight from '../../assets/animals/deer.png';
import Modal from '../../core/components/modal';

class EngineGame {
  static firstCard: HTMLElement | null = null;

  static secondCard: HTMLElement | null = null;

  static card: HTMLElement | null = null;

  static check: number;

  static res: number;

  static clearTim: number;

  static varTimer: number;

  static renderPage(fieldCard: Element): void {
    EngineGame.check = 0;
    EngineGame.res = 0;
    EngineGame.clearTim = 0;
    EngineGame.varTimer = 0;
    const imgArr = [One, Two, Three, Four, Five, Six, Seven, Eight];
    const Arr = imgArr.concat(imgArr);
    Arr.sort(() => Math.random() - 0.5);
    for (let i = 0; i < Arr.length; i++) {
      fieldCard.innerHTML += `<div class="card-container" data-img="${Arr[i]}">
      <div class="card">
          <div class="card-front" style='background: url("${Arr[i]}") center no-repeat;background-size: cover;'></div>
          <div class="card-back"></div>
      </div>
  </div>`;
    }
  }

  static flipAllCards(cardBox: NodeList, cards: NodeList): void {
    cardBox.forEach((item) => {
      (item as HTMLElement).style.cssText = 'pointer-events: none;';
    });
    setTimeout(() => {
      cards.forEach((item) => {
        (item as HTMLElement).style.cssText = 'transform: rotateY(180deg) translateX(-100%);transform-origin: left;';
      });
      cardBox.forEach((item) => {
        (item as HTMLElement).style.cssText = '';
      });
    }, 30000);
  }

  static compareCards(cardField: Element, cardBox: NodeList, check: number): void {
    cardField.addEventListener('click', (event) => {
      if (event.target && (event.target as HTMLElement).classList.contains('card-back')) {
        cardBox.forEach((item) => {
          if ((event.target as HTMLElement).parentNode?.parentNode === item) {
            if (this.check % 2 === 0) {
              this.check++;
              this.firstCard = (item as HTMLElement);
              this.firstCard.classList.add('finish');
              this.firstCard.style.cssText = 'pointer-events: none;';
              const card = this.firstCard.querySelector('.card');
              (card as HTMLElement).style.cssText = '';
            } else {
              cardBox.forEach((It) => {
                (It as HTMLElement).style.cssText = 'pointer-events: none;';
              });
              this.check++;
              this.secondCard = (item as HTMLElement);
              this.secondCard.classList.add('finish');
              this.secondCard.style.cssText = 'pointer-events: none;';
              const card = this.secondCard.querySelector('.card');
              (card as HTMLElement).style.cssText = '';
              if (this.firstCard?.getAttribute('data-img') === this.secondCard.getAttribute('data-img')) {
                this.res += 2;
                setTimeout(() => {
                  cardBox.forEach((It) => {
                    if (!((It as HTMLElement).classList.contains('finish'))) {
                      (It as HTMLElement).style.cssText = '';
                    }
                  });
                });
                if (this.res === 16) {
                  EngineGame.varTimer++;
                  const modalRes = document.querySelector('.modalRes');
                  const ResBtn = document.querySelector('.modalRes_btn');
                  const ModalResMin = document.querySelector('.modalRes_min');
                  const ModalResSec = document.querySelector('.modalRes_sec');
                  const gameMin = document.querySelector('.game-minutes');
                  const gameSec = document.querySelector('.game-seconds');
                  if (ModalResMin && ModalResSec) {
                    ModalResMin.innerHTML = `${Number(gameMin?.textContent)}`;
                    ModalResSec.innerHTML = `${Number(gameSec?.textContent) + 1}`;
                  }
                  setTimeout(() => {
                    if (modalRes) {
                      Modal.openModal(modalRes);
                      const navItem = document.querySelectorAll('.header-nav-item');
                      navItem.forEach((it) => {
                        it.classList.remove('nav-active');
                      });
                      navItem[1].classList.add('nav-active');
                    }
                  }, 400);
                  modalRes?.addEventListener('click', (ev) => {
                    if (ev.target === modalRes) {
                      if (modalRes) {
                        Modal.closeModal(modalRes);
                      }
                      window.location.hash = '#score-page';
                    }
                  });
                  ResBtn?.addEventListener('click', () => {
                    if (modalRes) {
                      Modal.closeModal(modalRes);
                    }
                    window.location.hash = '#score-page';
                  });
                }
              } else if (check % 2 === 1) {
                setTimeout(() => {
                  (this.firstCard as HTMLElement).style.cssText = '';
                  this.card = (this.firstCard as HTMLElement).querySelector('.card') as HTMLElement;
                  this.card.style.cssText = 'transform: rotateY(180deg) translateX(-100%);transform-origin: left;';
                  (this.firstCard as HTMLElement).classList.remove('finish');
                  (this.secondCard as HTMLElement).style.cssText = '';
                  this.card = (this.secondCard as HTMLElement).querySelector('.card') as HTMLElement;
                  this.card.style.cssText = 'transform: rotateY(180deg) translateX(-100%);transform-origin: left;';
                  (this.secondCard as HTMLElement).classList.remove('finish');
                  cardBox.forEach((It) => {
                    if (!((It as HTMLElement).classList.contains('finish'))) {
                      (It as HTMLElement).style.cssText = '';
                    }
                  });
                }, 2000);
              } else if (check % 2 === 0) {
                setTimeout(() => {
                  this.card = (this.firstCard as HTMLElement).querySelector('.card') as HTMLElement;
                  this.card.style.cssText = 'transform: rotateY(180deg) translateX(-100%);transform-origin: left;';
                  (this.firstCard as HTMLElement).classList.remove('finish');
                  this.card = (this.secondCard as HTMLElement).querySelector('.card') as HTMLElement;
                  this.card.style.cssText = 'transform: rotateY(180deg) translateX(-100%);transform-origin: left;';
                  (this.secondCard as HTMLElement).classList.remove('finish');
                  cardBox.forEach((It) => {
                    if (!((It as HTMLElement).classList.contains('finish'))) {
                      (It as HTMLElement).style.cssText = '';
                    }
                  });
                }, 2000);
              }
            }
          }
        });
      }
    });
  }
}
export default EngineGame;
