import Component from '../templates/components';

class ModalRes extends Component {
  renderModalRes():void {
    this.container.innerHTML = `
    <div class="modalRes__dialog">
      <div class="modalRes__content">
        <div class="modalRes__content__text">
          <h2>Congratulations! You successfully found all matches on
          <span class="modalRes_min"></span>.<span class="modalRes_sec"></span> minutes.</h2>
        </div>
        <div class="modalRes__content__btn">
          <button class="modalRes_btn">OK</button>
        </div>
      </div>
    </div>`;
  }

  static openModalRes(modal: Element): void {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  static closeModalRes(modal: Element): void {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  render(): HTMLElement {
    this.renderModalRes();
    return this.container;
  }
}

export default ModalRes;
