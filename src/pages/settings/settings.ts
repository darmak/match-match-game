import Page from '../../core/templates/page';
import imgArrow from '../../assets/arrow.png';

class SettingsPage extends Page {
  render(): HTMLElement {
    const actualPage = Page.createActualPage(`<div class="game-settings">
    <div class="game-settings-item">
        <div class="game-settings-item-box">
            <div class="game-settings-item-name">
                <h2>Game cards</h2>
            </div>
            <div class="game-settings-item-set_info">
                <p>select game cards type</p>
            </div>
        </div>
        <div class="game-settings-item-arrow">
            <img src="${imgArrow}" alt="">
        </div>
    </div>
    <div class="game-settings-item">
        <div class="game-settings-item-box">
            <div class="game-settings-item-name">
                <h2>Difficulty</h2>
            </div>
            <div class="game-settings-item-set_info">
                <p>select game type</p>
            </div>
        </div>
        <div class="game-settings-item-arrow">
            <img src="${imgArrow}" alt="">
        </div>
    </div>
  </div>`);
    this.container.append(actualPage);
    return this.container;
  }
}

export default SettingsPage;
