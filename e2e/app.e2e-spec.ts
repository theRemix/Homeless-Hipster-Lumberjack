import { LHHPage } from './app.po';

describe('lhh App', function() {
  let page: LHHPage;

  beforeEach(() => {
    page = new LHHPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
