import {render, fireEvent, wait, waitForElement} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Note from './Note';


describe('Note', () => {
    it('save text', async() => {
      const {getByText, getByTestId, getByPlaceholderText, container, getByLabelText, debug} = render(<Note />);
      const inputel = getByLabelText('Change text');
    //   debug(inputel);
      fireEvent.change(inputel, { target: { value: 'input text' } } );
      fireEvent.click(getByText('Save'));
    //   console.log('saved', getByTestId('saved').innerHTML);
    // debug(getByTestId('saved'))
      expect(getByTestId('saved')).toHaveTextContent('input text')
    });

    it('load data', async() => {
        const {getByText, getByTestId,getAllByTestId, getByPlaceholderText, container} = render(<Note />);
        fireEvent.click(getByText('Load'));
        const parentelem = await waitForElement(() => getByTestId('data'))
        const elem = getAllByTestId('item')[0];
        // debug(elem)
        expect(elem).toHaveTextContent('test');
      });

  });


