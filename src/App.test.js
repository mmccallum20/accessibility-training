import React from 'react';
import { render } from '@testing-library/react';
import App from './App'
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('accessibility test for the application', async () => {
  render(<App/>, document.body)
  const results = await axe(document.body)

  const violations = results.violations;
  const incomplete = results.incomplete;

  let log = 'Violations list: \n'

  if (violations.length || incomplete.length) {
    violations.forEach((v, i) => log += `${i+1}. Impact: ${v.impact} \n Violation: ${v.description} | \n URL: ${v.helpUrl} \n`);
    log += '\n Incomplete tests list: \n';
    incomplete.forEach((inc, i) => log += `${i+1}. Incomplete test: ${inc.description} | \n URL: ${inc.helpUrl}`);
    console.log(log);
  } else {
    console.log('No accessibility violations/incomplete tests found');
  }

  //Optional expect
  // expect(results).toHaveNoViolations();
})