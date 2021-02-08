import * as Yup from "yup";

export default Yup.object().shape({
  displayName: Yup.string().required(),
  // phoneNumber: Yup.number(), WARNING: if you want to update phone number have to use another way
});
