import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDemoComponent } from './fetch-demo.component';

describe('FetchDemoComponent', () => {
  let component: FetchDemoComponent;
  let fixture: ComponentFixture<FetchDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
