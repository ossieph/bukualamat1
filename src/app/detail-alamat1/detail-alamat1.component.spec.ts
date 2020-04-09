import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlamat1Component } from './detail-alamat1.component';

describe('DetailAlamat1Component', () => {
  let component: DetailAlamat1Component;
  let fixture: ComponentFixture<DetailAlamat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAlamat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAlamat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
