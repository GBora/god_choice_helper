import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterEffectComponent } from './after-effect.component';

describe('AfterEffectComponent', () => {
  let component: AfterEffectComponent;
  let fixture: ComponentFixture<AfterEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
