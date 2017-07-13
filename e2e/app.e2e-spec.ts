import { DemoMdIconPage } from './app.po';

describe('demo-md-icon App', () => {
  let page: DemoMdIconPage;

  beforeEach(() => {
    page = new DemoMdIconPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
