import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcaddComponent } from './ecadd.component';

describe('EcaddComponent', () => {
  let component: EcaddComponent;
  let fixture: ComponentFixture<EcaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
