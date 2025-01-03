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
        const locators1 = [
            fixture.page.getByRole('heading', { name: 'Leave List' }),
            fixture.page.getByText('From Date'),
            fixture.page.getByPlaceholder('yyyy-dd-mm').first(),
            fixture.page.getByText('To Date'),
            fixture.page.getByPlaceholder('yyyy-dd-mm').nth(1),
            fixture.page.getByText('Show Leave with Status'),
            fixture.page.getByText('-- Select --').first(),
        ];
        await validation.ValidateWebElements(locators1);
        await fixture.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
        const locators12 = [
            fixture.page.getByRole('option', { name: 'Rejected' }),
            fixture.page.getByRole('option', { name: 'Cancelled' }),
            fixture.page.getByText('Scheduled'),
            fixture.page.getByRole('option', { name: 'Taken' }),
        ];
        await validation.ValidateWebElements(locators12);
        const locators2 = [
            fixture.page.locator('label').filter({ hasText: 'Leave Type' }),
            fixture.page.getByText('-- Select --').nth(1),
        ];
        await validation.ValidateWebElements(locators2);
        await fixture.page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').first().click();
        const locators22 = [
            fixture.page.getByRole('option', { name: 'CAN - FMLA' }).getByText('CAN - FMLA'),
            fixture.page.getByText('CAN - Matternity'),
            fixture.page.getByText('CAN - Personal'),
            fixture.page.getByText('CAN - Vacation'),
            fixture.page.getByText('US - Bereavement'),
            fixture.page.getByRole('option', { name: 'US - FMLA' }),
            fixture.page.getByText('US - Matternity'),
            fixture.page.getByText('US - Personal'),
            fixture.page.getByText('US - Vacation'),
        ];
        await validation.ValidateWebElements(locators22);
        const locators3 = [
            fixture.page.locator('label').filter({ hasText: 'Employee Name' }),
            fixture.page.getByPlaceholder('Type for hints...'),
            fixture.page.getByText('Sub Unit'),
            fixture.page.getByText('-- Select --').nth(2),
        ];
        await validation.ValidateWebElements(locators3);
        await fixture.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        const locators32 = [
            fixture.page.getByText('Administration'),
            fixture.page.getByRole('option', { name: 'Engineering' }),
            fixture.page.getByText('Development'),
            fixture.page.getByText('Quality Assurance'),
            fixture.page.getByRole('option', { name: 'TechOps' }),
            fixture.page.getByText('Sales & Marketing'),
            fixture.page.getByRole('option', { name: 'Sales', exact: true }),
            fixture.page.getByText('Marketing', { exact: true }),
            fixture.page.getByText('Client Services'),
            fixture.page.getByRole('option', { name: 'Technical Support' }),
            fixture.page.getByRole('option', { name: 'Finance' }),
            fixture.page.getByText('Human Resources'),
            fixture.page.getByRole('option', { name: 'hola' }),
            fixture.page.getByRole('option', { name: 'juan perez' }),
        ];
        await validation.ValidateWebElements(locators32);
        const locators4 = [
            fixture.page.getByText('Include Past Employees'),
            fixture.page.getByRole('button', { name: 'Reset' }),
            fixture.page.getByRole('button', { name: 'Search' })
        ];
        await validation.ValidateWebElements(locators4);
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

    async applyLeave(fromDate: string, toDate: string, comment: string) {
        await fixture.page.getByText('Leave Type').click();
        await fixture.page.locator('form i').first().click();
        await fixture.page.getByRole('option', { name: 'CAN - FMLA' }).click();
        await fixture.page.getByPlaceholder('yyyy-dd-mm').first().click();
        await fixture.page.getByPlaceholder('yyyy-dd-mm').first().fill(fromDate);
        await fixture.page.getByPlaceholder('yyyy-dd-mm').nth(1).click();
        await fixture.page.getByPlaceholder('yyyy-dd-mm').nth(1).fill(toDate);
        await fixture.page.locator('textarea').fill(comment);
        await fixture.page.getByRole('button', { name: 'Apply' }).click();
    }


    async validateLeaveAppliedMessage() {
        const locators = [
            fixture.page.getByText('Successfully Saved'),
        ];
        await validation.ValidateWebElements(locators);
    }

    async validateLeaveNotAppliedMessage() {
        const locators = [
            fixture.page.getByText('Error'),
        ];
        await validation.ValidateWebElements(locators);
    }


    async validateMyLeavePage() {
        const locators1 = [
            fixture.page.getByRole('heading', { name: 'My Leave List' }),
            fixture.page.getByText('From Date'),
            fixture.page.getByPlaceholder('dd-mm-yyyy').first(),
            fixture.page.getByText('To Date'),
            fixture.page.getByPlaceholder('dd-mm-yyyy').nth(1),
            fixture.page.getByText('Show Leave with Status'),
            fixture.page.locator('label').filter({ hasText: 'Leave Type' })
        ];
        await validation.ValidateWebElements(locators1);
        await fixture.page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        const locators12 = [
            fixture.page.getByRole('option', { name: 'CAN - FMLA' }).getByText('CAN - FMLA'),
            fixture.page.getByText('US - Bereavement'),
            fixture.page.getByText('US - FMLA'),
            fixture.page.getByText('US - Personal'),
            fixture.page.getByText('US - Vacation')
        ];
        await validation.ValidateWebElements(locators12);
        const locators2 = [
            fixture.page.getByRole('button', { name: 'Reset' }),
            fixture.page.getByRole('button', { name: 'Search' })
        ];
        await validation.ValidateWebElements(locators2);
    }

    async fetchDatafromTable() {
        const tableData: string[][] = [];
        const rows = await fixture.page.locator('.oxd-table-row.oxd-table-row--with-border').all();
        for (const row of rows) {
            const headers = await row.locator('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th').all();
            const headersData = [];
            for (const cell of headers) {
                headersData.push(await cell.innerText());
            }
            tableData.push(headersData);

            const cells = await row.locator('.oxd-table-cell.oxd-padding-cell').all();
            const rowsData: string[] = [];
            for (const cell of cells) {
                rowsData.push(await cell.innerText())
            }
            if (rowsData.length > 0) {
                tableData.push(rowsData);
            }
        }
        return tableData;
    }


    async fetchDatafromTablemap() {
        const tableData: string[][] = [];
        const rows = await fixture.page.locator('.oxd-table-row.oxd-table-row--with-border').all();

        const headersData = await Promise.all(rows.map(async row => {
            const headers = await row.locator('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th').all();
            return Promise.all(headers.map(async cell => await cell.innerText()));
        }));
        tableData.push(...headersData);

        const rowsData = await Promise.all(rows.map(async row => {
            const cells = await row.locator('.oxd-table-cell.oxd-padding-cell').all();
            return Promise.all(cells.map(async cell => await cell.innerText()));
        }));
        tableData.push(...rowsData.filter(row => row.length > 0));

        return tableData;
    }

    async fetchDatafromTablemapColumn() {
        const tableData: string[][] = [];
        const rows = await fixture.page.locator('.oxd-table-row.oxd-table-row--with-border').all();

        const headers = await rows[0].locator('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th').all();
        const headersData = await Promise.all(headers.map(async cell => await cell.innerText()));
        tableData.push(headersData);

        const columnsData: string[][] = headersData.map(() => []);

        for (const row of rows) {
            const cells = await row.locator('.oxd-table-cell.oxd-padding-cell').all();
            const cellsData = await Promise.all(cells.map(async cell => await cell.innerText()));
            cellsData.forEach((cellData, index) => {
                columnsData[index].push(cellData);
            });
        }

        columnsData.forEach(column => {
            tableData.push(column);
        });

        // return tableData;
        const tableDataMap = new Map<string, string[]>();

        headersData.forEach((header, index) => {
            tableDataMap.set(header, columnsData[index]);
        });

        return tableDataMap;
    }
}