import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appendFile } from 'fs';

import { CodeVerificationComponent } from './code-verification.component';

describe('CodeVerificationComponent', () => {
  let boxesFilled;
  let component: CodeVerificationComponent;
  let fixture: ComponentFixture<CodeVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeVerificationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CodeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check cells', () => {
    expect(boxesFilled).toBe(undefined);
  })

  it('should be finite', () => {
    expect(component.inputKeyDown).toBeTruthy;
  });

  it('should react upon backspace', () => {
    var value = (document.getElementById(`input-1`) as HTMLInputElement).value;
    expect(value).toEqual('');
    document.getElementById(`input-1`).dispatchEvent(new KeyboardEvent('keydown', { 'key': '1' }));
    var value = (document.getElementById(`input-1`) as HTMLInputElement).value;
    expect(value).toEqual('1');
    document.getElementById(`input-1`).dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Backspace' }));
    var value = (document.getElementById(`input-1`) as HTMLInputElement).value;
    expect(value).toEqual('');
    document.getElementById(`input-1`).dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Backspace' }));
    var value = (document.getElementById(`input-1`) as HTMLInputElement).value;
    expect(value).toEqual('');
  });

  // it('should focus left', () => {
  //   document.getElementById(`input-1`).dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowLeft' }));
  //   // expect(document.getElementById(`input-6`).focus());
  // });

  // it('should focus right', () => {
  //   document.getElementById(`input-1`).dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowRight' }));
  //   // expect(document.getElementById(`input-2`).focus());
  // });

  // it('should wrap at 6', () => {
  //   document.getElementById(`input-6`).dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowRight' }));
  //   // expect(document.getElementById(`input-1`).focus());
  // });

  it('should fill boxes', () => {
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`input-${i}`).dispatchEvent(new KeyboardEvent('keydown', { 'key': `${i}` }));
      var value = (document.getElementById(`input-${i}`) as HTMLInputElement).value;
      expect(value).toEqual(`${i}`);
    }
    expect(component.submitForm.call);
  });


});
