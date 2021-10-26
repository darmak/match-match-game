import Component from '../templates/components';
import imgUserModal from '../../assets/image_user.png';

class Modal extends Component {
  static checkNum: number;

  renderModal():void {
    this.container.innerHTML = `
<div class="modal__dialog">
    <div class="modal__content modal__user">
        <div class="modal__content-cap">
            <h2>Registr new Player</h2>
        </div>
        <div class="modal__content-main">
            <div class="modal__content-main-form">
                <div class="modal__content-main-form-inputs">

                    <div class="modal__content-main-form-inputs-item">
                        <div class="modal__content-main-form-inputs-item-box">
                            <div class="modal__content-main-form-inputs-item__title">
                                <p>First Name</p>
                            </div>
                            <div class="modal__content-main-form-inputs-item__field">
                                <input class="firstName" type="text">
                            </div>
                        </div>
                        <div class="modal__content-main-form-inputs-item-checkbox">
                            <input class="checkboxClass" type="checkbox">
                        </div>
                    </div>

                    <div class="modal__content-main-form-inputs-item">
                        <div class="modal__content-main-form-inputs-item-box">
                            <div class="modal__content-main-form-inputs-item__title">
                                <p>Last Name</p>
                            </div>
                            <div class="modal__content-main-form-inputs-item__field">
                                <input class="lastName" type="text"  min="1" max="30">
                            </div>
                        </div>
                        <div class="modal__content-main-form-inputs-item-checkbox">
                            <input class="checkboxClass" type="checkbox">
                        </div>
                    </div>

                    <div class="modal__content-main-form-inputs-item">
                        <div class="modal__content-main-form-inputs-item-box">
                            <div class="modal__content-main-form-inputs-item__title">
                                <p>E-mail</p>
                            </div>
                            <div class="modal__content-main-form-inputs-item__field">
                                <input class="email" type="text">
                            </div>
                        </div>
                        <div class="modal__content-main-form-inputs-item-checkbox">
                            <input class="checkboxClass" type="checkbox">
                        </div>
                    </div>
                </div>
                <div class="modal__content-main-form-user">
                    <img src="${imgUserModal}" alt="">
                </div>
            </div>
            <div class="modal__content-main-btns">
                <div class="modal__content-main-btns__add">
                    <button class="btn-addUser">add user</button>
                </div>
                <div class="modal__content-main-btns__cancel">
                    <button class="btn-cancel">cancel</button>
                </div>
            </div>
        </div>

    </div>

</div>`;
  }

  static openModal(modal: Element): void {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  static closeModal(modal: Element): void {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  static cleanInp(inp: NodeList, check: NodeList): void {
    for (let i = 0; i < inp.length; i++) {
      (inp[i] as HTMLInputElement).value = '';
      (check[i] as HTMLInputElement).checked = false;
    }
  }

  static validateName(inp: NodeList, check: NodeList): void {
    for (let i = 0; i < inp.length - 1; i++) {
      const inpStuff = (inp[i] as HTMLInputElement).value;
      const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const pattern = new RegExp(/[( ~ ! @ # $ % * () _ — + = | : ; " ' ` < > , . ? / ^ )]/);
      if (inpStuff.length > 0 && inpStuff.length <= 30) {
        Modal.checkNum = 0;
        if (!pattern.test(inpStuff)) {
          for (let j = 0; j < inpStuff.length; j++) {
            for (let z = 0; z < number.length; z++) {
              if (inpStuff[j] === number[z]) {
                Modal.checkNum++;
                break;
              }
            }
          }
          if (inpStuff.length === Modal.checkNum) {
            (check[i] as HTMLInputElement).checked = false;
          } else {
            (check[i] as HTMLInputElement).checked = true;
          }
        } else {
          (check[i] as HTMLInputElement).checked = false;
        }
      } else {
        (check[i] as HTMLInputElement).checked = false;
      }
    }
  }

  static validateEmail(inp: NodeList, check: NodeList): void {
    const inpStuff = (inp[2] as HTMLInputElement).value;
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (inpStuff.length > 0 && inpStuff.length <= 60) {
      const nameBox = inpStuff.split('@');
      const domain = nameBox[1].split('.');
      if (nameBox[0].length > 0 && domain[0].length > 0 && domain[1] === 'com') {
        Modal.checkNum = 0;
        for (let j = 0; j < inpStuff.length; j++) {
          for (let z = 0; z < number.length; z++) {
            if (inpStuff[j] === number[z]) {
              Modal.checkNum++;
              break;
            }
          }
        }
        if (nameBox[0].length === Modal.checkNum) {
          (check[2] as HTMLInputElement).checked = false;
        } else {
          (check[2] as HTMLInputElement).checked = true;
        }
      } else {
        (check[2] as HTMLInputElement).checked = false;
      }
    } else {
      (check[2] as HTMLInputElement).checked = false;
    }
  }

  render(): HTMLElement {
    this.renderModal();
    return this.container;
  }
}

export default Modal;
