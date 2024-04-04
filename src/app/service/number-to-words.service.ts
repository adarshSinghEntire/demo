import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberToWordsService {

  constructor() { }

  private units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  private teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  private tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  private thousands = ['', 'thousand', 'million', 'billion', 'trillion'];


  convert(n: number): string {
    if (n === 0) return this.units[0];
    if (n < 0) return 'minus ' + this.convert(-n);
    let words = '';
    for (let i = 0; n > 0 && i < this.thousands.length; i++) {
      if (n % 1000 !== 0) {
        words = this.convertLessThanOneThousand(n % 1000) + this.thousands[i] + ' ' + words;
      }
      n = Math.floor(n / 1000);
    }
    return words.trim();
  }

  private convertLessThanOneThousand(n: number): string {
    let currentWords = '';
    if (n >= 100) {
      currentWords += this.units[Math.floor(n / 100)] + ' hundred ';
      n = n % 100;
    }
    if (n >= 20) {
      currentWords += this.tens[Math.floor(n / 10)] + ' ';
      n = n % 10;
    } else if (n >= 10) {
      currentWords += this.teens[n - 10] + ' ';
      n = 0;
    }
    if (n > 0) {
      currentWords += this.units[n] + ' ';
    }
    return currentWords;
  }
}
