//declaring a variable for the title since it repeats multiple times in the test case
const title = 'The whole working-from-home thing — Apple'

describe('YouTube Test case', function () {
    it('Visits YouTube.com and plays a video', () => {
        //Opens YouTube.com
        cy.visit('https://www.youtube.com/')

        //Grabs the searchbar input box by it's id and types the title we are looking for
        cy.get('#search')
          .type(title)
        
        //Gets the search button by it's id
        cy.get('#search-icon-legacy').click()

        //grabs the video with the title below and click on it
        cy.contains(title).click()

        //Custom command that check the StatusCode before doing any other assertions
        cy.StatusCheck('https://www.youtube.com/*')

        //Confirming that the title is what we searched for previously and the publisher is Apple
        cy.get('.ytd-watch-flexy > :nth-child(1) > .title > .style-scope').should('have.text', title)
        cy.get('#upload-info > #channel-name > #container > #text-container > #text > .yt-simple-endpoint').should('have.text', 'Apple')
    });
})