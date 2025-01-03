import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import myLoginPage from "../../pages/myLoginPage";
import { fixture } from "../../hooks/pageFixture";
import { Validation } from "../../pages/myValidationPage";

const validation = new Validation();

setDefaultTimeout(60 * 1000 * 2)

let loginPage: myLoginPage;
loginPage = new myLoginPage();

Given("User is on the loginPage", async function () {
    await fixture.page.goto(process.env.BASEURL);
});
Then("User should Validate the loginPage Web Elements", async function () {
    await loginPage.validateLoginPage();
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

Then("User should get reset password link message", async function () {
    await loginPage.validateResetPassword();
});

Then("User should Validate the Dashboard Web Elements", async function () {
    await loginPage.validateDashboard();
});


When("User click on Profile Dropdown", async function () {
    await fixture.page.getByAltText('profile picture').click();
});

Then("User should Validate the Profile Dropdown Web Elements", async function () {
    await loginPage.validateProfileDropDown();
});

When("User click on Leave Button", async function () {
    await fixture.page.getByRole('link', { name: 'Leave' }).click();
});

Then("User should Validate the leave Page Web Elements", async function () {
    await loginPage.validateleavePage();
});

When("User click on Apply Leave Button", async function () {
    await fixture.page.getByRole('listitem').filter({ hasText: 'Apply' }).click();
});

When("User click on Leave List Button", async function () {
    await fixture.page.getByRole('link', { name: 'Leave List' }).click();
});

When("User click on My Leave Button", async function () {
    await fixture.page.getByRole('link', { name: 'My Leave' }).click();
});

When("User click on Logout Button", async function () {
    await fixture.page.getByRole('menuitem', { name: 'Logout' }).click();
});

Then("User should Validate the logout Page Web Elements", async function () {
    await loginPage.validatelogout();
});

When("User click on Dropdown element {string}", async function (element: string) {
    await fixture.page.getByRole('menuitem', { name: element }).click();
});

Then("User should Validate {string}", async function (element: string) {
    await loginPage.validateDropDownElement(element);
});

When("User enters the leave details {string}, {string}, {string}", async function (fromDate: string,toDate: string,comment: string) {
    await loginPage.applyLeave( fromDate, toDate, comment);
});

Then("User should see the leave applied successfully message", async function () {
    await loginPage.validateLeaveAppliedMessage();
});

Then("User should see the leave applied unsuccessfully message", async function () {
    await loginPage.validateLeaveNotAppliedMessage();
});

Then("User should Validate the My Leave Page", async function () {
    await loginPage.validateMyLeavePage();
});

When("User click on My List Button", async function () {
    await fixture.page.getByRole('link', { name: 'My Leave' }).click();
});


Then("User fetch data from Table and Console it", async function () {
    await fixture.page.waitForTimeout(2000);
    const table = await loginPage.fetchDatafromTablemapColumn();
    console.log(table);
});






