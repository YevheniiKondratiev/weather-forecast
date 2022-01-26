import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastOverviewComponent } from './forecast-overview.component';

describe('ForecastOverviewComponent', () => {
  let component: ForecastOverviewComponent;
  let fixture: ComponentFixture<ForecastOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
