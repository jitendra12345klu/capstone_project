import { expect, Locator, Page } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";
import { Validation } from "./validationPage";

const validation = new Validation();

export default class DashboardPage {

    // Dashboard elements excluding dashboard content
    async validateDashboard() {
        const locators: Locator[] = [

            fixture.page.getByRole('heading', { name: 'Dashboard' }),
            fixture.page.getByRole('button', { name: 'Upgrade' }),
            fixture.page.getByAltText('profile picture'),

            fixture.page.getByRole('button', { name: '' }),
            fixture.page.getByRole('link', { name: 'client brand banner' }),
            fixture.page.getByPlaceholder('Search'),
            fixture.page.getByRole('link', { name: 'Admin' }),
            fixture.page.getByRole('link', { name: 'PIM' }),
            fixture.page.getByRole('link', { name: 'Leave' }),
            fixture.page.getByRole('link', { name: 'Time' }),
            fixture.page.getByRole('link', { name: 'Recruitment' }),
            fixture.page.getByRole('link', { name: 'My Info' }),
            fixture.page.getByRole('link', { name: 'Performance' }),
            fixture.page.getByRole('link', { name: 'Dashboard' }),
            fixture.page.getByRole('link', { name: 'Directory' }),
            fixture.page.getByRole('link', { name: 'Maintenance' }),
            fixture.page.getByRole('link', { name: 'Claim' }),
            fixture.page.getByRole('link', { name: 'Buzz' })
        ];
        await validation.ValidateWebElements(locators);
    }

    async validateProfileDropDown() {
        const locators = [
            fixture.page.getByRole('menuitem', { name: 'About' }),
            fixture.page.getByRole('menuitem', { name: 'Support' }),
            fixture.page.getByRole('menuitem', { name: 'Change Password' }),
            fixture.page.getByRole('menuitem', { name: 'Logout' })
        ];
        await validation.ValidateWebElements(locators);
    }


    async validateDropDownElement() {
        await fixture.page.locator(".oxd-userdropdown").click();
        await fixture.page.getByRole('menuitem', { name: "About" }).click();
        const About = [
            fixture.page.getByRole('heading', { name: 'About' }),
            fixture.page.getByText('Company Name:'),
            fixture.page.getByText('Version:'),
            fixture.page.getByText('Active Employees:'),
            fixture.page.getByText('Employees Terminated:')
        ]
        await validation.ValidateWebElements(About);
        await fixture.page.getByRole('button', { name: '×' }).click();
        await fixture.page.locator(".oxd-userdropdown").click();
        await fixture.page.getByRole('menuitem', { name: "Support" }).click();
        const Support = [
            fixture.page.getByRole('heading', { name: 'Getting Started with OrangeHRM' }),
            fixture.page.getByText('Learning how to use a new application can be challenging. At OrangeHRM, we are c'),
            fixture.page.getByText('The following information repositories are available to help you understand the '),
            fixture.page.getByText('Customer Support'),
            fixture.page.getByText('Should you experience any issues, please do not hesitate to contact us on ossupp')
        ]
        await validation.ValidateWebElements(Support);
        await fixture.page.locator(".oxd-userdropdown").click();
        await fixture.page.getByRole('menuitem', { name: "Change Password" }).click();
        const Change_Password = [
            fixture.page.getByRole('heading', { name: 'Update Password' }),
            fixture.page.getByText('Username'),
            fixture.page.getByRole('paragraph').filter({ hasText: 'Admin' }),
            fixture.page.getByText('Current Password'),
            fixture.page.getByRole('textbox').nth(1),
            fixture.page.getByText('Password', { exact: true }),
            fixture.page.getByRole('textbox').nth(2),
            fixture.page.getByText('Confirm Password'),
            fixture.page.getByRole('textbox').nth(3),
            fixture.page.getByRole('button', { name: 'Save' }),
            fixture.page.getByRole('button', { name: 'Cancel' })
        ]
        await validation.ValidateWebElements(Change_Password);
    }
}