import { render, screen } from '@testing-library/react';
import {LabelArtDestacados} from './LabelArtDestacados.tsx';

describe('Articulos Destacados Component', () => {
  test('Should display the correct text', () => {
    render(<LabelArtDestacados text="ARTICULOS DESTACADOS" />);
    expect(screen.getByText('ARTICULOS DESTACADOS')).toBeInTheDocument();
  });

  test('Should render the provided text', () => {
    render(<LabelArtDestacados text="OTHER TEXT" />);
    expect(screen.getByText('OTHER TEXT')).toBeInTheDocument();
  });

  test('Should apply the correct CSS class', () => {
    const { container } = render(<LabelArtDestacados text="ARTICULOS DESTACADOS" />);
    const labelElement = container.querySelector('.label-articulos-destacados');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('ARTICULOS DESTACADOS');
  });
});
