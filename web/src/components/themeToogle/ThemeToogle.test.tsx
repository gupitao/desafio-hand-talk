import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeToggle } from './ThemeToogle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Alterna tema e atualiza contagem de cliques no localStorage', () => {
    const { getByText } = render(<ThemeToggle />);

    const button = getByText(/Dark Mode/i);

    // Verifica o tema inicial e a contagem de cliques
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('changeThemeCount')).toBe('0');

    // Simula um clique no botão
    fireEvent.click(button);

    // Verifica se o tema foi alternado e a contagem de cliques incrementada
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('changeThemeCount')).toBe('1');

    // Simula outro clique no botão
    fireEvent.click(button);

    // Verifica se o tema foi alternado de volta e a contagem de cliques incrementada
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('changeThemeCount')).toBe('2');
  });
});