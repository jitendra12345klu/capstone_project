import { expect, Locator, Page } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";
import { Validation } from "./validationPage";

const validation = new Validation();

export default class LoginPage {

    // validation of elements in the Login page
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

    //validating footer links
    async ValidateFooterLinks() {
        const locator1 = fixture.page.getByRole('link').first();
        await validation.ValidatePopUpLandingPages("https://www.linkedin.com/company/orangehrm", locator1);
        const locator2 = fixture.page.getByRole('link').nth(1);
        await validation.ValidatePopUpLandingPages("https://www.facebook.com/OrangeHRM/", locator2);
        const locator3 = fixture.page.getByRole('link').nth(2);
        await validation.ValidatePopUpLandingPages("https://x.com/orangehrm?lang=en", locator3);
        const locator4 = fixture.page.getByRole('link').nth(3);
        await validation.ValidatePopUpLandingPages("https://www.youtube.com/c/OrangeHRMInc", locator4);
    }


    // login with credentials in the login page
    async logInWithCredintials(UserName: string, Password: string) {
    await fixture.page.getByPlaceholder('Username').fill(UserName);
    await fixture.page.getByPlaceholder('Password').fill(Password);
    await fixture.page.getByRole('button', { name: 'Login' }).click();
}

    // validate Forgot Password page
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

    // reset password with username
    async validateResetPassword() {
    const locators = [
        fixture.page.getByRole('heading', { name: 'Reset Password link sent successfully' }),
        fixture.page.getByText('A reset password link has been sent to you via email.'),
        fixture.page.getByText('You can follow that link and select a new password.'),
        fixture.page.getByText('Note: If the email does not arrive, please contact your OrangeHRM Administrator.')
    ];
    await validation.ValidateWebElements(locators);
}
}