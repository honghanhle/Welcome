import { test, expect, Page } from "@playwright/test";
import DemoQA from "../pageObjects/demoqa.page";

const baseURL = "https://demoqa.com";
let page: Page;
let demoqa: DemoQA;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.beforeEach(async ({}, testInfo) => {
  testInfo.setTimeout(testInfo.timeout + 60000);
  await demoqa.openBrowser(`${baseURL}/automation-practice-form`);
});
test.afterEach(async ({ browser }) => {
  await browser.close();
});
test.describe("Verify mandatory of First name form", async () => {
  test("Verify insert all mandatory data and click on Submit ", async ({}) => {
    await demoqa.openBrowser(`${baseURL}/automation-practice-form`);
    await demoqa.fillToElement(demoqa.firstNameField, "Hello");
    await demoqa.fillToElement(demoqa.lastNameField, "Guys");
    await demoqa.clickToElement(demoqa.genderFemaleField);
    await demoqa.fillToElement(demoqa.mobileForm, "0123456789");
    await demoqa.clickToElement(demoqa.submitBtn);
    await expect(demoqa.popupTitle).toBeDefined();
  });

  test("Verify insert all mandatory data but not Firstt Name and click on Submit ", async ({}) => {
    await demoqa.openBrowser(`${baseURL}/automation-practice-form`);
    await demoqa.fillToElement(demoqa.lastNameField, "Guys");
    await demoqa.clickToElement(demoqa.genderFemaleField);
    await demoqa.fillToElement(demoqa.mobileForm, "0123456789");
    await demoqa.clickToElement(demoqa.submitBtn);
    await expect(demoqa.popupTitle).toBeDefined();
  });
});
