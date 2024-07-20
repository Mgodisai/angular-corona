import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDataDisplayComponent } from './covid-data-display.component';

describe('CovidDataDisplayComponent', () => {
  let component: CovidDataDisplayComponent;
  let fixture: ComponentFixture<CovidDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CovidDataDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
