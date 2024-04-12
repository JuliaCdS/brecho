import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P7Page } from './p7.page';

describe('P7Page', () => {
  let component: P7Page;
  let fixture: ComponentFixture<P7Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(P7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
