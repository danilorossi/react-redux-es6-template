import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// Action creator function
export function loadCoursesSuccess(courses) {
    return {// Actual action
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function updateCourseSuccess(course) {
  return {
      type: types.UPDATE_COURSE_SUCCESS,
      course
  };
}
export function createCourseSuccess(course) {
  return {
      type: types.CREATE_COURSE_SUCCESS,
      course
  };
}


// THUNKs

// or in separate file
// async call here > promise
export function loadCourses() {

    // in any thunk
    return function(dispatch) {
        // return promise
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ?
        dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    });
  };
}
