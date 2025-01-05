import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import { Validation } from "../../pages/validationPage";
import DashboardPage from "../../pages/dashboardPage";

setDefaultTimeout(60 * 1000 * 2)

const loginPage = new LoginPage();
const validation = new Validation();
const dashboard= new DashboardPage();

Then("User should Validate the Dashboard Web Elements", async function () {
    await dashboard.validateDashboard();
});

When("User click on Profile Dropdown", async function () {
    await fixture.page.getByAltText('profile picture').click();
});

Then("User should Validate the Profile Dropdown Web Elements", async function () {
    await dashboard.validateProfileDropDown();
});

Then("User click on Dropdown elements and checks their respective pages", async function () {
    await dashboard.validateDropDownElement();
});