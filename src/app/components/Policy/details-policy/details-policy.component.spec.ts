import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPolicyComponent } from './details-policy.component';

describe('DetailsPolicyComponent', () => {
  let component: DetailsPolicyComponent;
  let fixture: ComponentFixture<DetailsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
