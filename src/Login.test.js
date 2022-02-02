import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Login from "./Login"

describe('<Login />', () => {
    it('matches snapshot', () => {
        const utils = render(<Login />);
        expect(utils.container).toMatchSnapshot();
    });
    it('has two input', () => {
        render(<Login />);
        screen.getByLabelText('ID:');
        screen.getByLabelText('PassWord:')
    });
    it('text change', () => {
        render(<Login />);
        const IdBtn = screen.getByLabelText('ID:');
        const PwBtn = screen.getByLabelText('PassWord:');
        fireEvent.change(IdBtn, { target: { value: '김용주' } });
        fireEvent.change(PwBtn, { target: { value: 'kyj130656' } });
        expect(IdBtn.value).toBe('김용주');
        expect(PwBtn.value).toBe('kyj130656');
    });
})