import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import { Validation } from "../../pages/validationPage";

setDefaultTimeout(60 * 1000 * 2)

const loginPage = new LoginPage();
const validation = new Validation();


Given("User is on the loginPage", async function () {
    await fixture.page.goto(process.env.BASEURL);
});

Then("User should Validate the loginPage Web Elements excluding footer links", async function () {
    await loginPage.validateLoginPage();
});

Then("User clicks on footer links checks redirects to respective footer links page", async function () {
    await loginPage.ValidateFooterLinks();
});


When('User enters {string} and {string} Clicks on LogIn Button', async function (UserName: string, Password: string) {
    await loginPage.logInWithCredintials(UserName, Password);
});

Then("User should see the dashboard", async function () {
    const locator = fixture.page.getByRole('heading', { name: 'Dashboard' });
    await validation.ValidateWebElement(locator);
    console.log(' Success! User is able to login and redirected to dashboard page');
});

Then("User should see the invalid credentials message", async function () {
    const locator = fixture.page.getByText('Invalid credentials');
    await validation.ValidateWebElement(locator);
    console.log(' Failure! User is unable to login and error message is displayed');
});

When("User click on Forgot Password", async function () {
    await fixture.page.getByText('Forgot your password?').click();
});

Then("User should see the Forgot Password Page Web Elements", async function () {
    await loginPage.validateForgotPassword();
});

When("Enter {string} and click on reset password Button", async function (username: string) {
    await fixture.page.getByPlaceholder('Username').fill(username);
    await fixture.page.getByRole('button', { name: 'Reset Password' }).click();
});

Then("User should get reset password link sent message", async function () {
    await loginPage.validateResetPassword();
});