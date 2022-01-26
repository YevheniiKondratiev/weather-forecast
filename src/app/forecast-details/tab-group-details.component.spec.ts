import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupDetailsComponent } from './tab-group-details.component';

describe('ForecastDetailsComponent', () => {
  let component: TabGroupDetailsComponent;
  let fixture: ComponentFixture<TabGroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGroupDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
