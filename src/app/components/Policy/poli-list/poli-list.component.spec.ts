import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliListComponent } from './poli-list.component';

describe('PoliListComponent', () => {
  let component: PoliListComponent;
  let fixture: ComponentFixture<PoliListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
