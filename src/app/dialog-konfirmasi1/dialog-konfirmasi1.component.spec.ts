import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKonfirmasi1Component } from './dialog-konfirmasi1.component';

describe('DialogKonfirmasi1Component', () => {
  let component: DialogKonfirmasi1Component;
  let fixture: ComponentFixture<DialogKonfirmasi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogKonfirmasi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogKonfirmasi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
