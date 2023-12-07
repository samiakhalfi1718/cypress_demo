['iphone-8', 'ipad-mini', 'macbook-16'].forEach(
    (viewport) => {
        it('should be able to open a website in different views', () => {
            cy.viewport(viewport);
            cy.visit('/')
        })
    })