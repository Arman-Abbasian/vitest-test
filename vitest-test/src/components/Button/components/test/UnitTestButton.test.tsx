import { describe, expect, it } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import UnitTestButton from '../UnitTestButton';


describe('UnitTestButtonGetElements', () => {
  it('should render hello world', () => {
    // Arrange
    render(<UnitTestButton />);
    expect(screen.getByText(/hello worLd/i)).toBeInTheDocument()
  });
  it('should add 1 to the count when click on + Button', () => {
    // Arrange
    render(<UnitTestButton />);
    const increaseButton=screen.getByRole('button',  { name:"+"})
    expect(increaseButton).toBeInTheDocument()
  });
});
describe('UnitTestButtonFiteEvents', () => {
  it('should add 1 to the count when click on + Button', () => {
    // Arrange
    render(<UnitTestButton />);
    const countElement = screen.getByTestId(/Count/i);
    const increaseButton=screen.getByRole('button',  { name:"+"});
  
    // Initial count should be 0
    expect(countElement).toHaveTextContent('0');
  
    // Click the button
    fireEvent.click(increaseButton);
  
    // Count should increase to 1 after clicking the button
    expect(countElement).toHaveTextContent('1');
  
    // Click the button again
    fireEvent.click(increaseButton);
  
    // Count should increase to 2 after clicking the button again
    expect(countElement).toHaveTextContent('2');
  });
});