import { Page } from "@playwright/test";

export default class CommonPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async openBrowser(browser: string) {
    await this.page.goto(browser);
  }

  async clickToElement(element: string) {
    await this.page.locator(element).click();
  }

  async fillToElement(element: string, text: string) {
    await this.page.locator(element).fill(text);
  }

  async clearValue(element: string) {
    await this.page.locator(element).clear();
  }

  async hoverToElement(element: string) {
    await this.page.locator(element).hover();
  }

  async dragToElement(element: string, elementTarget: string) {
    await this.page.locator(element).dragTo(this.page.locator(elementTarget));
  }

  async reloadPage() {
    await this.page.reload();
  }

  async pause(second: number) {
    await this.page.waitForTimeout(second);
  }
}
