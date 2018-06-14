import * as React from 'react';
import * as ReactDOM from 'react-dom';
import enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import initialState from '../../utils/initialState';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';

import App from './index';
import SnackBar from '../../components/SnackBar';

enzyme.configure({ adapter: new Adapter() });

describe('Form', () => {
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <App className={'App-class'} />
            </Provider>
        );
    });

    it('Render App Container', () => {
        expect(
            wrapper.contains(
                <div className="App-header">{'Form Trial Project'}</div>
            )
        ).toBe(true);
    });

    it('Submit form action', () => {
        wrapper.find('.submit_button').props('onClick');
        let action = store.getActions();
        // console.log('action:', store);
    });
});
