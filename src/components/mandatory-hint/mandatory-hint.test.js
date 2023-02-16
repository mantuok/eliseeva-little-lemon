import React from 'react';
import {render, screen} from '@testing-library/react';
import MandatoryHint from './mandatory-hint';

test('Renders mandatory hint label', () => {
    render(<MandatoryHint />);
    const labelElement = screen.getByText("- mandatory fields");
    expect(labelElement).toBeInTheDocument();
})