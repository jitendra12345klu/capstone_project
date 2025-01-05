import { expect, Locator, Page } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";


export class Validation {

    // validation of elements in the current page
    // It takes an array of locators and validates if they are visible
    async ValidateWebElements(locators: Locator[]) {
        for (const a of locators) {
            await expect(a).toBeVisible();
        }
    }

    async ValidateWebElement(locatorElement: Locator) {
        await expect(locatorElement).toBeVisible();
    }

    async ValidatePopUpLandingPages(expectedUrl: string, locator: Locator) {
        const page1Promise = fixture.page.waitForEvent('popup');
        await locator.click();
        const page1 = await page1Promise;
        const newUrl = page1.url();
        expect(newUrl).toBe(expectedUrl);
    }

}