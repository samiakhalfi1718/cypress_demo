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

//FindElement with Attribute
it('FindElement with Attribute', () => {
    cy.visit('cypress/index.html')
    //to find any element by Attribute we use the [name of attribute='value of attribute']
    cy.get('[name="Developer"]');
})

//Find the first element from a list of elements
it('Find the first element from a list of elements', () => {
    cy.visit('cypress/index.html')
    cy.get('h1').first();
})

//Find the last element from a list of elements
it('Find the last element from a list of elements', () => {
    cy.visit('cypress/index.html')
    cy.get('h1').last();
})

//Find an element from a list of elements by index
it('Find an element from a list of elements by index', () => {
    cy.visit('cypress/index.html')
    cy.get('h1').eq(2);
})

//Find an element from a list of elements using filter
it('Find an element from a list of elements using filter', () => {
    cy.visit('cypress/index.html')
    //to filter some elements from a list of elements we use the filter command
    //we use css selectors (ID, Attribute, ...) inside the filter command
    cy.get('li').filter('.web');
})

//Find the element using the children command
it('Find the element using the children command', () => {
    cy.visit('cypress/index.html');
    //Find the element using the children command
    //we use css selectors(ID, Attribute, ...) inside the children command
    // we can use the command "find"="children"
    cy.get('.course-list').children('.web.mobile');
    cy.get('.course-list').children('.web');
    cy.get('.course-list').children('.web').first();
    cy.get('.course-list').children('.web').last();
    cy.get('.course-list').children('.web').eq(2);
    cy.get('.course-list').find('.web');
})

//Find the element using the direct parent command
it('Find the element using the parent command', () => {
    cy.visit('cypress/index.html');
    //Find the element using the direct parent command
    //we use css selectors(ID, Attribute, ...) inside the parent command
    cy.get('.list1.web').parent();
})

//Find the list of elements using  the parents command
it('Find the element using the parents command', () => {
    cy.visit('cypress/index.html');
    //Find the list of element using the parents command
    cy.get('.list1.web').parents();
})

//Find the elements using  the siblings (brothers) command
it('Find the elements using the siblings command', () => {
    cy.visit('cypress/index.html');
    //Find the elements using  the siblings command
    cy.get('.list1.web').siblings();
})

//Find the element by text
it.only('Find the element by text', () => {
    cy.visit('cypress/index.html');
    //Find the element by text
    cy.contains('wdio');
})