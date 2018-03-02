import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DryfruitsComponent } from './dryfruits.component';

describe('DryfruitsComponent', () => {
  let component: DryfruitsComponent;
  let fixture: ComponentFixture<DryfruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryfruitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryfruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
