abstract class Page {
  protected container: HTMLElement;

  constructor(id:string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  static createActualPage(codeHTML: string): HTMLElement {
    const headerTitle = document.createElement('div');
    headerTitle.innerHTML = codeHTML;
    return headerTitle;
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default Page;
