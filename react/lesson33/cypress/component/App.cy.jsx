import {mount} from "cypress/react18"
import App from "../../src/ui/App"

describe('App.cy.jsx', () => {
  beforeEach(() => {
    mount(<App />)
    cy.viewport(1200, 850)
  })
  it('check:InputValue', () => {
    cy.get('input').should($input => {
      expect($input).type('Hello, World')
    })
  })
})