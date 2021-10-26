import Page from '../../core/templates/page';

class ScorePage extends Page {
  render(): HTMLElement {
    const actualPage = Page.createActualPage(`<div class="table">
    <div class="table-title">
        <h2>Best players</h2>
    </div>
  </div>`);
    this.container.append(actualPage);
    return this.container;
  }
}

export default ScorePage;
