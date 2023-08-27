import React from 'react';
import { render } from '@testing-library/react';
import { Severity } from './components/route-info/route/severity/Severity';

describe('Severity', () => {
    it('renders with low severity', () => {
      const { container } = render(<Severity severity="low" />);
      const severityElement = container.querySelector('.severity');
  
      expect(severityElement).toBeTruthy();
      expect(severityElement?.classList.contains('severity--low')).toBe(true);
    });
  
    it('renders with medium severity', () => {
      const { container } = render(<Severity severity="medium" />);
      const severityElement = container.querySelector('.severity');
  
      expect(severityElement).toBeTruthy();
      expect(severityElement?.classList.contains('severity--medium')).toBe(true);
    });
  
    it('renders with high severity', () => {
      const { container } = render(<Severity severity="high" />);
      const severityElement = container.querySelector('.severity');
  
      expect(severityElement).toBeTruthy();
      expect(severityElement?.classList.contains('severity--high')).toBe(true);
    });  
  });