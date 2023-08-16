import { FirstTestComponent } from "./first-test.component"


describe("First Test", ()=>{
  let component: FirstTestComponent;

  beforeEach(async () => {
    component = new FirstTestComponent();
  });

  it('Explains more about matchers', () => {
    expect(component).toBeTruthy();
  });

  it('Checking if title exists', () => {
    expect(component.title).toEqual('This is a title');
  });

  it('adds 2 numbers', () => {
    let a = 6;
    let b = 5;

    let sum = a + b;

    expect(component.sum(a, b)).toEqual(sum);
    expect(component.sum(a, b)).toBe(sum);
  });

  /**
   * Explains more about strict equality
   *
   * using toBe & toEqual
   */

  it('checks for exact equality', () => {
    let data = {
      name: 'cohort 17',
    };

    expect(2 + 2).toBe(4);
    expect(data).toEqual({ name: 'cohort 17' });
    //expect(data).toBe({name: "cohort 17"}) //it fails
  });

  /**
   *
   * Truthiness
   */

  it('checks for truthiness', () => {
    const x = null;
    let y;

    expect(x).toBeFalsy();
    expect(x).toBeNull();
    expect(x).not.toBeUndefined();
  });

  /**
   * For number
   */

  it('explains matchers for numbers', () => {
    const value = 1 + 2;

    expect(value).toBeGreaterThan(2);
    expect(value).toBeGreaterThanOrEqual(2);
    expect(value).toBeLessThan(4);
    expect(value).toBeLessThanOrEqual(4);
  });

  it('explain matchers for decimals', () => {
    const value = 1.3 + 1.6;

    // expect(value).toBeLessThan(3)
    expect(value).toBeCloseTo(2.9);
    // expect(value).toBe(2.9)
  });

  /* 
  for strings
  
  */
  it('explains matchers for strings', () => {
    const value = 'cohort 17';

    expect(value).toMatch(/17/);
    expect(value).not.toMatch(/18/);
  });

  /*
  arrays and iterables
  */
  it('explains matchers for arrays and iterables', () => {
    const value = [1, 2, 3, 4, 5];

    expect(value).toContain(3);
    expect(new Set(value)).toContain(3);
  });

  /*
  expectation and errors 
  */
  it('explains matchers for errors', () => {
    // component.sleep()
    expect(component.sleep).toThrow();
    expect(component.sleep).toThrow(Error); 
    // expect(component.sleep).toThrow('Error thrown');
  });

})