
// Created a custom StatusCheck command because waiting for status resonse to be ok is common and might be used later in the test case and to provent duplicate code
// you can use .should(200) but some users use ad blockers and/or don't sign in to their account and that will throw a 204 status code which is missing content and that would throw an error.
//So I made a function within .should to prevent that from happening. I usually go for between 200 and 204 but you can change the condition based on your test case

Cypress.Commands.add('StatusCheck', (url) => {
    cy.intercept(url).as('getResults')
    cy.wait('@getResults').its('response.statusCode').should(($getResults) => {
        if ($getResults >= 204 & $getResults <= 200) {
            throw new Error('StatusCode not ok')
        }
    });
})

