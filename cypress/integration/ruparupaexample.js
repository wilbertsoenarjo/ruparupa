// / <reference types="cypress" />

Cypress.on('uncaught:exception', () => {
    return false;
  });

beforeEach(() => {
    cy.viewport(1280, 720);
});

context('Ruparupa test technical', () => {
  it('Akses ruparupa.com', () => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('https://www.ruparupa.com/');
    cy.get('[id="close-btn"]').click();
  });

  it('Search "Kategori Belanja" lalu "Rumah Tangga"', () => {
    cy.get('[id="rumah-tangga"]').click({force: true});
  });

  it('Pilih berdasarkan promo "Buy 1 Get 1"', () => {
    cy.get('[id="label-Buy_1_Get_1"]').click({force: true});
  });

  it('Berdasarkan hasil tersebut pilih "Urut Berdasarkan - Produk Terbaru"', () => {
    cy.get('[name="order"]').select('Produk Terbaru');
  });

  it('Klik produk yang muncul di baris pertama', () => {
    cy.wait(5000);
    cy.get('[id="categoryItemList"]').click(10,30);
  });

  it('Pada halaman produk, masukkan produk ke "Tambah ke keranjang"', () => {
    cy.reload();
    cy.get('.form-button > .btn').click();
    cy.wait(5000);
  });

  it('Klik button lanjut ke keranjang', () => {
    cy.get('.added-to-cart > .btn').click();
  });

  it('Klik button lanjutkan ke pembayaran', () => {
    cy.reload();
    cy.get('[class="btn btn-m btn-primary btn-full btn-payment"]').click();
    cy.wait(5000);
  });

  it('Masukkan random email dan password dan verify result loginnya', () => {
    cy.get('[placeholder="Alamat email atau nomor telepon"]').type('abc@yahoo.com');
    cy.get('[name="password"]').type('rahasia123');
  });
  
  it('Kilk masuk', () => {
    cy.get('#submit-btn').click();
  });
});
  