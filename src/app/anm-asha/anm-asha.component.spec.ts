import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmAshaComponent } from './anm-asha.component';

describe('AnmAshaComponent', () => {
  let component: AnmAshaComponent;
  let fixture: ComponentFixture<AnmAshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmAshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmAshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
