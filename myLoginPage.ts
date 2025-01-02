import { expect, Locator, Page } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";
import { Validation } from "./myValidationPage";

const validation = new Validation();

export default class myLoginPage {
    async validateLoginPage() {
        const locators = [
            fixture.page.locator('.orangehrm-login-branding'),
            fixture.page.locator('.orangehrm-login-logo'),
            fixture.page.getByRole('heading', { name: 'Login' }),
            fixture.page.getByText('Username : Admin'),
            fixture.page.getByText('Password : admin123'),
            fixture.page.getByText('Username', { exact: true }),
            fixture.page.getByPlaceholder('Username'),
            fixture.page.getByText('Password', { exact: true }),
            fixture.page.getByPlaceholder('Password'),
            fixture.page.getByRole('button', { name: 'Login' }),
            fixture.page.getByText('Forgot your password?'),
            fixture.page.getByRole('link').first(),
            fixture.page.getByRole('link').nth(1),
            fixture.page.getByRole('link').nth(2),
            fixture.page.getByRole('link').nth(3)
        ];
        await validation.ValidateWebElements(locators);
    }

    async logInWithCredintials(UserName: string, Password: string) {
        await fixture.page.getByPlaceholder('Username').fill(UserName);
        await fixture.page.getByPlaceholder('Password').fill(Password);
        await fixture.page.getByRole('button', { name: 'Login' }).click();
    }

    async validateForgotPassword() {
        const locators = [
            fixture.page.getByRole('heading', { name: 'Reset Password' }),
            fixture.page.getByText('Please enter your username to identify your account to reset your password'),
            fixture.page.getByText('Username', { exact: true }),
            fixture.page.getByPlaceholder('Username'),
            fixture.page.getByRole('button', { name: 'Cancel' }),
            fixture.page.getByRole('button', { name: 'Reset Password' })
        ];
        await validation.ValidateWebElements(locators);
    }

    async validateResetPassword() {
        const locators = [
            fixture.page.getByRole('heading', { name: 'Reset Password link sent successfully' }),
            fixture.page.getByText('A reset password link has been sent to you via email.'),
            fixture.page.getByText('You can follow that link and select a new password.'),
            fixture.page.getByText('Note: If the email does not arrive, please contact your OrangeHRM Administrator.')
        ];
        await validation.ValidateWebElements(locators);
    }

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

    async validateleavePage() {
        const locators = [
            fixture.page.getByRole('heading', { name: 'Leave List' }),
            fixture.page.getByText('From Date'),
            fixture.page.getByPlaceholder('yyyy-dd-mm').first(),
            fixture.page.getByText('To Date'),
            fixture.page.getByPlaceholder('yyyy-dd-mm').nth(1),
            fixture.page.getByText('Show Leave with Status'),
            fixture.page.getByText('-- Select --').first(),
            fixture.page.locator('label').filter({ hasText: 'Leave Type' }),
            fixture.page.getByText('-- Select --').nth(1),
            fixture.page.locator('label').filter({ hasText: 'Employee Name' }),
            fixture.page.getByPlaceholder('Type for hints...'),
            fixture.page.getByText('Sub Unit'),
            fixture.page.getByText('-- Select --').nth(2),
            fixture.page.getByText('Include Past Employees'),
            fixture.page.getByRole('button', { name: 'Reset' }),
            fixture.page.getByRole('button', { name: 'Search' })
        ];
        await validation.ValidateWebElements(locators);
    }

    async validatelogout() {
        const locators = [
            fixture.page.getByRole('heading', { name: 'Login' }),
            fixture.page.getByRole('button', { name: 'Login' }),
            fixture.page.getByText('Forgot your password?'),
        ];
        await validation.ValidateWebElements(locators);
    }


    async validateDropDownElement(element: string) {
        switch (element) {
            case "About":
                const About = [
                    fixture.page.getByRole('heading', { name: 'About' }),
                    fixture.page.getByText('Company Name:'),
                    fixture.page.getByText('Version:'),
                    fixture.page.getByText('Active Employees:'),
                    fixture.page.getByText('Employees Terminated:')
                ]
                await validation.ValidateWebElements(About);
                await fixture.page.getByRole('button', { name: '×' }).click();
                break;
            case "Support":
                const Support = [
                    fixture.page.getByRole('heading', { name: 'Getting Started with OrangeHRM' }),
                    fixture.page.getByText('Learning how to use a new application can be challenging. At OrangeHRM, we are c'),
                    fixture.page.getByText('The following information repositories are available to help you understand the '),
                    fixture.page.getByText('Customer Support'),
                    fixture.page.getByText('Should you experience any issues, please do not hesitate to contact us on ossupp')
                ]
                await validation.ValidateWebElements(Support);
                break;
            case "Change Password":
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
                break;
        }
    }


}