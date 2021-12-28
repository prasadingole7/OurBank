import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDataComponent } from './put-data.component';

describe('PutDataComponent', () => {
  let component: PutDataComponent;
  let fixture: ComponentFixture<PutDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
