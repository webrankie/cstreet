import BasePage from "./base_page";

class LoginPage extends BasePage {

    //Registration Form
    fieldFirstName = () => cy.get('[data-testid="firstName"]')
    fieldLastName = () => cy.get('[data-testid="lastName"]')
    fieldEmail = () => cy.get('[data-testid="email"]')
    fieldPassword = () => cy.get('[data-testid="password"]')
    fieldConfirmPassword = () => cy.get('[data-testid="confirm-password"]')
    radioBtnYes = () => cy.get('[data-testid="accreditedOptionYes"]')
    radioBtnNo = () => cy.get('[data-testid="accreditedOptionNo"]')
    checkBtn = () => cy.get('[data-testid="hasAgreedTos"]')
    createAccountBtn = () => cy.get('[data-testid="submit-button"]')

    homeCreateAccBtn = () => cy.get('//div[@class="css-108j06w"]/a[.="Create An Account"]')


    open() {
        return super.open('/invexp/accounts/create-account');
    }

    fillInRegisterForm(firstName, lastName, email, password, confPass) {
        this.fieldFirstName().type(firstName)
        this.fieldLastName().type(lastName)
        this.fieldEmail().type(email)
        this.fieldPassword().type(password)
        this.fieldConfirmPassword().type(confPass)
        this.radioBtnYes().click()
        this.checkBtn().click()
        cy.confirmCaptcha()
        this.createAccountBtn().should('be.enabled')
        this.createAccountBtn().click()
    }

}


export default new LoginPage();
