export default class BasePage {
    open(path) {
        cy.visit(path);
    }

    urlUser = () => cy.url()
    headerUserName = () => cy.get('abbr.head-link').eq(1)
}
