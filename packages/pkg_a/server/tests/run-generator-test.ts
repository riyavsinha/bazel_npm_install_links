import { runsGenerateTwoCharacters } from '../src/run-generator';
import test from 'ava';

test('Random generator works', (t) => {
  t.truthy(runsGenerateTwoCharacters())
})