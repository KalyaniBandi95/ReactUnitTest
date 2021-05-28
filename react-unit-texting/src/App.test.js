import React from 'react'
import { shallow, mount} from 'enzyme'
import Account from './Account'
import App from './App'

it("Check for render", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state("error")).toEqual(null);
  });

it('render header', () => {
    const wrapper = shallow(<App />);
    const header = <h1>Display Active Users Account Details</h1>
    expect(wrapper.contains(header)).toEqual(true);
})

const user = {
    name: 'Kalyani',
    email: 'kalyani.bandi95@gmail.com'
}

describe('account details', () =>{
    it('contain account', () => {
        const wrapper = mount(<Account user={user}/>);
        const value = wrapper.find('p').text();
        expect(value).toEqual('kalyani.bandi95@gmail.com');
    })
    it('props demo', () => {
        const wrapper = mount(<Account user={user}/>);
        expect(wrapper.props().user).toEqual(user);
    })
})
