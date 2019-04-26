import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, cleanup, RenderResult } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('<App />', () => {
  let app: RenderResult;

  beforeEach(() => {
    jest.useFakeTimers();
    app = render(<App />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should render correctly', () => expect(app.asFragment()).toMatchSnapshot());

  it('should disable the spin button when spinning', () => {
    const button = app.getByText('SPIN');

    expect(button).not.toBeDisabled();
    act(() => {
      fireEvent.click(button)
    });
    expect(button).toBeDisabled();
  });

  it('should select a new cell every 350 ms', () => {
    act(() => {
      fireEvent.click(app.getByText('SPIN'))
    });

    expect(() => app.getByTestId('selected')).toThrowError('Unable to find an element by: [data-testid="selected"]');
    jest.advanceTimersByTime(350);
    expect(() => app.getByTestId('selected')).not.toThrow();
  });

  it('should stop spinning after 2700ms', () => {
    const button = app.getByText('SPIN');

    expect(button).not.toBeDisabled();
    act(() => {
      fireEvent.click(button)
    });

    jest.advanceTimersByTime(2699);
    expect(button).toBeDisabled();
    jest.advanceTimersByTime(1);
    expect(button).not.toBeDisabled();
  });
});
