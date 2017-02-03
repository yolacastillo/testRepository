import { TestDesplieguePage } from './app.po';

describe('test-despliegue App', function() {
  let page: TestDesplieguePage;

  beforeEach(() => {
    page = new TestDesplieguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
