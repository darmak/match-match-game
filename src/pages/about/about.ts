import Page from '../../core/templates/page';
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import settings from '../../assets/settings.png';
import imgGame from '../../assets/image_game.png';
import imgReg from '../../assets/image_reg.png';

class MainPage extends Page {
  render(): HTMLElement {
    const actualPage = Page.createActualPage(`<div class="instruction">
    <div class="instruction-title">
        <h1>How to play?</h1>
    </div>

    <div class="instruction-column">
        <div class="instruction-column-list">
            <div class="instruction-column-list_item instruction-column-list_item_1">
                <div class="instruction-column-list_item_num">
                    <img src="${one}" alt="">
                </div>
                <div class="instruction-column-list_item_text">
                    <p>Register new player in game</p>
                </div>
            </div>
            <div class="instruction-column-list_item instruction-column-list_item_2">
                <div class="instruction-column-list_item_num">
                    <img src="${two}" alt="">
                </div>
                <div class="instruction-column-list_item_text">
                    <p>Configure your game settings</p>
                </div>
            </div>
            <div class="instruction-column-list_item instruction-column-list_item_3">
                <div class="instruction-column-list_item_num">
                    <img src="${three}" alt="">
                </div>
                <div class="instruction-column-list_item_text">
                    <p>Start you new game! Remember card positions and match it before times up.</p>
                </div>
            </div>
        </div>


        <div class="instruction-different">
            <div class="instruction-different-registr">
               <img src="${imgReg}" alt="">
            </div>

            <div class="instruction-different-settings">
                <div class="instruction-different-settings-container">
                    <div class="instruction-different-settings-container_img">
                        <img src="${settings}" alt="Score">
                    </div>

                    <div class="instruction-different-settings-container_subtitle">
                        <p>Game Settings</p>
                    </div>
                </div>
            </div>

            <div class="instruction-different-game">
                <img src="${imgGame}" alt="">
            </div>
        </div>
    </div>
</div>`);
    this.container.append(actualPage);
    return this.container;
  }
}

export default MainPage;
