import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahAlamat1Component } from './tambah-alamat1.component';

describe('TambahAlamat1Component', () => {
  let component: TambahAlamat1Component;
  let fixture: ComponentFixture<TambahAlamat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahAlamat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahAlamat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
