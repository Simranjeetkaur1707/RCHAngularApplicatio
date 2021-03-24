import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcdisplayComponent } from './ecdisplay.component';

describe('EcdisplayComponent', () => {
  let component: EcdisplayComponent;
  let fixture: ComponentFixture<EcdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
