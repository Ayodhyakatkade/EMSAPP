import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertempComponent } from './insertemp.component';

describe('InsertempComponent', () => {
  let component: InsertempComponent;
  let fixture: ComponentFixture<InsertempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
