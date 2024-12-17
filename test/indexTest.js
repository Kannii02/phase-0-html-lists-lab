const fs = require('fs');
const { JSDOM } = require('jsdom');
const { expect } = require('chai');

describe('HTML List Tests', () => {
  let dom;
  let document;

  before(async () => {
    const html = fs.readFileSync('./index.html', 'utf-8'); // Path to index.html
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it('should have an unordered list with three main ingredients', () => {
    const ul = document.querySelector('ul'); // Select the main <ul>
    const listItems = ul.children; // Select direct children <li>
    expect(listItems.length).to.equal(3); // Expect 3 direct <li> items
  });

  it('should have a nested unordered list for cheese types', () => {
    const cheeseItem = document.querySelector('ul > li:nth-child(2) > ul'); // Select nested <ul>
    const nestedItems = cheeseItem.querySelectorAll('li'); // All <li> inside nested <ul>
    expect(nestedItems.length).to.equal(3); // Expect 3 <li> items
  });

  it('should have an ordered list for recipe steps', () => {
    const ol = document.querySelector('ol'); // Select the main <ol>
    const steps = ol.querySelectorAll('li'); // All <li> inside the <ol>
    expect(steps.length).to.equal(5); // Expect 5 <li> items
  });
});
