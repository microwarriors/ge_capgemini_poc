import { LocomotiveProjPage } from './app.po';

describe('locomotive-proj App', () => {
  let page: LocomotiveProjPage;

  beforeEach(() => {
    page = new LocomotiveProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
