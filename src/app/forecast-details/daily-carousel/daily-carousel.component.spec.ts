import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCarouselComponent } from './daily-carousel.component';

describe('DailyCarouselComponent', () => {
  let component: DailyCarouselComponent;
  let fixture: ComponentFixture<DailyCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
