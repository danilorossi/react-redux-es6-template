import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// stateless function component
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {

  return (
    <form>

      <h1>Manage Course</h1>

      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name="authorId"
        label="Author"
        defaultOption="Select Author"
        value={course.authorId}
        onChange={onChange}
        options={allAuthors}
        error={errors.authorId} />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />

      <input
        name="submi"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />

    </form>
  );

};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
