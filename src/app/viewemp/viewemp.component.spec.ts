import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewempComponent } from './viewemp.component';

describe('ViewempComponent', () => {
  let component: ViewempComponent;
  let fixture: ComponentFixture<ViewempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
