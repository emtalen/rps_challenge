import { getByAltText } from "@testing-library/react"

describe('User can navigate trough the page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    describe('to the Score per win page', () => {
        beforeEach(() => {
            cy.get('#simplegame-tab').click()
        })
        
        it('and it displays header', () => {
            cy.get('#simplegame-header').should('contain', 'Play to score for every win!')
        })

        it('and it does not display best fo three header', () => {
            cy.get('#bestofthree-header').should('not.exist')
        })
    })

    describe('to Best of three page', () => {
        beforeEach(() => {
            cy.get('#bestofthree-tab').click()
        })

        it('and it displays header', () => {
            cy.get('#bestofthree-header').should('contain', 'Play to score by best out of three games!')
        })

        it('and it does not display simple game header', () => {
            cy.get('#simplegame-header').should('not.exist')
        })
    })
})