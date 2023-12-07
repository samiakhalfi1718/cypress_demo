//we can use "only" after the command "it" for execute only one test case
//FindElement with tag-name

it('FindElement with tag-name', () => {
    cy.visit('cypress/index.html')
    //we put the tag-name inside the get command
    //the get command will return all the elements that matches the tag name
    cy.get('button');
})

//FindElement with id

it('FindElement with id', () => {
    cy.visit('cypress/index.html')
    //to find any element by ID we use the #
    cy.get('#welcome');
})

//FindElement with class name
it('FindElement with class name', () => {
    cy.visit('cypress/index.html')
    //to find any element by class name we use the .
    cy.get('.list1.web');
})