import React from 'react';
import { mount } from 'enzyme';
import App from '../../App';

describe('Test case for testing login', () => {
  let wrapper;
  test('email check', () => {
    wrapper = mount(<App />);
    expect(wrapper.find('input[type="email"]').exists()).toBeTruthy();
  });
  test('password check', () => {
    wrapper = mount(<App />);
    expect(wrapper.find('input[type="password"]').exists()).toBeTruthy();
  });
  // test('forgot password check', () => {
  //   wrapper = mount(<App />);
  //   expect(wrapper.find('#forgotPassword').exists()).toBeTruthy();
  // });
  // Add the following tests
  // test: check if login button exists
  // test: check if forgot password link is correct
  // test: check if forgot password text is correct
  // test: check if login functionality works
})
