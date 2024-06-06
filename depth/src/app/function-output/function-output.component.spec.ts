import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionOutputComponent } from './function-output.component';

describe('FunctionOutputComponent', () => {
  let component: FunctionOutputComponent;
  let fixture: ComponentFixture<FunctionOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
