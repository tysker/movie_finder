import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Movie from '../components/Movie';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Movie />', () => {
  render(<MemoryRouter><Movie /></MemoryRouter>);
  expect(console.error).toHaveBeenCalled();
});

const movie = {
  id: '123',
  title: 'Star Wars',
  poster_path: 'lgygfogo.jpg',
};

test('<Movie / with movie>', () => {
  render(<MemoryRouter><Movie movie={movie} /></MemoryRouter>);
  expect(console.error).not.toHaveBeenCalled();
});
