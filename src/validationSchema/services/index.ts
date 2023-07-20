import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  availability: yup.boolean().required(),
  organization_id: yup.string().nullable(),
});
