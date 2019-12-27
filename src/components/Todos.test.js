import {render, fireEvent, wait} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Todos from './Todos';

const todos = [
    {
      title: 'todo1'
    },
    {
      title: 'todo2'
}];

describe('Todos', () => {
    it('finds title', () => {
      const {getByText, getAllByTestId, container} = render(<Todos todos={todos} />);
      const elem = getAllByTestId('item')[0];
      const elems = getAllByTestId('item');
      expect(elem.innerHTML).toBe('todo1');
      expect(elems.length).toBe(2);
    });

    it('select todo', () => {
        const {getAllByText, getAllByTestId, container} = render(<Todos todos={todos} />);
        fireEvent.click(getAllByText('Select')[0]);
        const elem = getAllByTestId('item')[0];
        expect(elem.classList[0]).toBe('selected');
      });

  });
