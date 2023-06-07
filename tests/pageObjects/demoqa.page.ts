import { expect, Locator, Page } from "@playwright/test";
import CommonPage from "./page";

export default class DemoQA extends CommonPage{
    page: Page;
    constructor(page: Page) {
      super(page);
      this.page = page;
    }


    get nameField():string{
        return "//label[contains (text(), 'Name')]"
    }

    get firstNameField():string{
        return "//input[@placeholder = 'First Name']"
    }

    get lastNameField():string{
        return "//input[@placeholder = 'Last Name']"
    }

    get genderField():string{
        return "//div[contains (text(), 'Gender')]"
    }
    get genderMaleField():string{
        return "//label[contains (text(), 'Male')]"
    }
    get genderFemaleField():string{
        return "//label[contains (text(), 'Female')]"
    }
    get genderOtherField():string{
        return "//label[contains (text(), 'Other')]"
    }

    get mobileField():string{
        return "//label[contains (text(), 'Mobile')]"
    }

    get mobileForm():string{
        return "//input[@placeholder = 'Mobile Number']"
    }

    get submitBtn():string{
        return "//button[contains (text(), 'Submit')]"
    }

    get popupTitle():string{
        return "//div[contains (text(), 'Thanks for submitting the form')]"
    }
}