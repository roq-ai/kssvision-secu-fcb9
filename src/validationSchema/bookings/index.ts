import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  service_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
