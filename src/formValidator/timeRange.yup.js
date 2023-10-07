/* eslint-disable no-undef */
const yup = require('yup');

const timeSchema = yup.object().shape({
    startTime: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in yyyy-mm-dd format').required('Start time is required'),
    endTime: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in yyyy-mm-dd format').required('End time is required'),
  });
export default timeSchema