import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyComponentComponent } from './proxy-component.component';

describe('ProxyComponentComponent', () => {
  let component: ProxyComponentComponent;
  let fixture: ComponentFixture<ProxyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
