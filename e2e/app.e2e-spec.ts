import { ICMPage } from './app.po';

describe('icm App', function() {
  let page: ICMPage;

  beforeEach(() => {
    page = new ICMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
