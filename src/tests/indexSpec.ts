import myFunc from '../index';
/* import app from '../index'; */
import supertest from 'supertest';

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});