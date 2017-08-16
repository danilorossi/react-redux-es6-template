import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {

  it('sets error message when trying to save empty title', () => {

    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); } },
      course: {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      }
    };

    // mount instead of shallo as we need to whole component to test
    const wrapper = mount(<ManageCoursePage {...props}/>);

    // to test mapStateToProps etc
    //const wrapper = mount(<Provider store={store}><ManageCoursePage /></Provider>);

    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');

    saveButton.simulate('click');

    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });

});
