import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeloworldComponent } from './heloworld.component';

describe('HeloworldComponent', () => {
  let component: HeloworldComponent;
  let fixture: ComponentFixture<HeloworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeloworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeloworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
