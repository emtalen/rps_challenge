describe('User can visit index page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('User can see title', () => {
        cy.get('#title').should('contain', 'Rock, Paper, Scissors!')
    })

    it('User can choose way to play', () => {
        cy.get('.selectgame').should('contain', 'How do you want to play?')
    })

    it('User can see button to play the simple way', () => {
        cy.get('#simplegame-tab').should('contain', 'Scores per win')
    })

    it('User can see the button to play best out of three', () => {
        cy.get('#bestofthree-tab').should('contain', 'Best of three')
    })
})