import LoginPage from '../../support/page_objects/registration_page'
import newUser from '../../fixtures/users'

describe('Registration: check that', () => {

    describe('User can register with correct data', () => {

        beforeEach(() => {
            LoginPage.open();
            LoginPage.fillInRegisterForm(
                newUser.firstName,
                newUser.lastName,
                newUser.email,
                newUser.password,
                newUser.password)
        });

        it('Tc-1 User should be navigated to the properties/all page', () => {
            LoginPage.urlUser().should('include', 'properties/all')
        })

        it(`Tc-2 Verify that user is logged in`, () => {
            LoginPage.headerUserName().should('have.text', `Hi ${newUser.firstName}`)
        })

    })
})
