import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

    // Initialise state
    // and bind functions
    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     course: { title: "" }
        // };

        // Better here than in render method inside HTML
        // for performance reasons: bind() create a new function
        // and we don't want extra work while render method is being executed!
        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
      browserHistory.push('/course');
    }

    // should use components instead of HTML markup
    render() {
        const { courses } = this.props;

        return (
            <div>

                <h1>Courses</h1>

                <input
                  type="submit"
                  value="Add Course"
                  className="btn btn-primary"
                  onClick={this.redirectToAddCoursePage}
                />

                <CourseList courses={courses} />

            </div>
        );
    }
}

// Props type validation
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    // returns the store state props that we'd like to see
    // exposed on our component
    return {
        courses: state.courses // this struct depends on reducers/index.js
    };
}

function mapDispatchToProps(dispatch) {
    // define what actions are available in our component
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
