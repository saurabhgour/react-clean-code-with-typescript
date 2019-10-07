import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router';
import MovieDetail from './movie-detail';
import PopularMovies from './popular-movies';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});
  
  test('Movie detail page should be loaded properly', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/movie/1212' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(MovieDetail)).toHaveLength(1);
    expect(wrapper.find(PopularMovies)).toHaveLength(0);
  });

  test('Popular movies page is loaded', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(MovieDetail)).toHaveLength(0);
    expect(wrapper.find(PopularMovies)).toHaveLength(1);
  });