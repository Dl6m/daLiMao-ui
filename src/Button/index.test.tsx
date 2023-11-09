import '@testing-library/jest-dom';
import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Button from './index';
Enzyme.configure({ adapter: new Adapter() });
describe('Button', () => {
  it('test buttoni', () => {
    const onclick = jest.fn();
    const wrapper = shallow(<Button onClick={onclick} disabled />);
    wrapper.simulate('click');
    expect(onclick).not.toBeCalled();
  });
  
});
``