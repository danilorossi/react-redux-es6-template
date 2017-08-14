import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// Action creator function
// export function createCourse(course) {
//     return { // Actual action
//         type: types.CREATE_COURSE,
//         course
//     };
// } 
// Action creator function
export function loadCoursesSuccess(courses) {
    return {// Actual action
        type: types.LOAD_COURSES_SUCCESS, 
        courses
    };
}

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