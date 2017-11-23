import { MigracaoCompletaPage } from './app.po';

describe('migracao-completa App', function() {
  let page: MigracaoCompletaPage;

  beforeEach(() => {
    page = new MigracaoCompletaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
