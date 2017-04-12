import { BeerGuidePage } from './app.po';

describe('beer-guide App', () => {
  let page: BeerGuidePage;

  beforeEach(() => {
    page = new BeerGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
