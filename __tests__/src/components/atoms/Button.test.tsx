import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '../../../../src/components/atoms';

describe('Button Component', () => {
  test('debe renderizar correctamente con el texto proporcionado', () => {
    const {getByText} = render(<Button text="Presioname" onPress={() => {}} />);

    expect(getByText('Presioname')).toBeTruthy();
  });

  test('debe llamar a onPress cuando se presiona', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <Button text="Presioname" onPress={mockOnPress} />,
    );

    fireEvent.press(getByText('Presioname'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  test('debe aplicar los estilos globales al texto', () => {
    const {getByText} = render(<Button text="Test" onPress={() => {}} />);

    const textElement = getByText('Test');
    expect(textElement).toHaveStyle({
      color: 'white',
      fontSize: 16,
    });
  });
});
