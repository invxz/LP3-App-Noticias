import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnoDetalhePage } from './tecno-detalhe.page';


describe('TecnoDetalhePage', () => {
  let component: TecnoDetalhePage;
  let fixture: ComponentFixture<TecnoDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
