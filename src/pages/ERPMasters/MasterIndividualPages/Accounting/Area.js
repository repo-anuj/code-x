import React, { useCallback, useImperativeHandle } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CPTextBox from "../../../../Components/CPComponents/CPInputs/CPTextBox";
import CPCheckBox from "../../../../Components/CPComponents/CPInputs/CPCheckBox";
import CPTextBoxCode from "../../../../Components/CPComponents/CPInputs/CPTextBoxCode";
import debounce from 'lodash/debounce';

const AreaSchema = Yup.object().shape({
  AreaName: Yup.string().required("Area Name is required"),
  Code: Yup.string().required("Code is required"),
  City: Yup.string().required("City is required"),
});

const Area = React.forwardRef((props, ref) => {
  const fetchCode = useCallback(debounce((areaName, setFieldValue) => {
    const mockApiResponse = { code: "4900001" };
    setFieldValue("Code", mockApiResponse.code);
  }, 300), []);

  const funcnew = useCallback((resetForm) => {
    resetForm();
  }, []);

  const funcview = useCallback((objectJsonBody, setValues) => {
    console.log("funcView Called")
    // console.log(objectJsonBody.areaName, objectJsonBody.code, objectJsonBody.areaID, objectJsonBody.isActive);
    setValues({
      AreaName: objectJsonBody.areaName,
      Code: objectJsonBody.code,
      City: "Delhi",
      IsActive: objectJsonBody.isActive,
      areaID: objectJsonBody.areaID,
    }, () => {
      const jsonString = JSON.stringify(formikRef.current.values);
    console.log(jsonString);
    });
    
    // return jsonString;
    
  }, []);

  const funcsave = useCallback((values, resetForm) => {
    console.log("funcSave Called")
    const jsonString = JSON.stringify(values);
    console.log(jsonString);
    funcnew(resetForm); // Reset the form after saving
    return jsonString;
  }, [funcnew]);

  const formikRef = React.useRef(null);

  useImperativeHandle(ref, () => ({
    submitForm: () => formikRef.current.submitForm(),
    saveForm: () => {
      const { values, resetForm } = formikRef.current;
      return funcsave(values, resetForm); // Call funcsave with form values and reset function
    },
    funcView: (jsonBody) => {
        const { setValues } = formikRef.current;
        console.log("jsonBody:", jsonBody);
        // console.log("Before setting values:", formikRef.current.values);
        funcview(jsonBody,setValues);
        // console.log("After setting values:", formikRef.current.values);
      },
  }));

  return (
    <Formik
      initialValues={{
        AreaName: "",
        Code: "",
        City: "",
        IsActive: true,
        areaID: "",
      }}
      validationSchema={AreaSchema}
      onSubmit={(values, { resetForm }) => {
        if (props.onSave) {
          props.onSave(funcsave(values, resetForm)); // Call funcsave on form submission
        }
      }}
      innerRef={formikRef}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <Field
            name="AreaName"
            render={({ field }) => (
              <CPTextBox
                title={"Area Name"}
                id="AreaName"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  fetchCode(e.target.value, setFieldValue);
                }}
                onBlur={field.onBlur}
                error={touched.AreaName && errors.AreaName ? errors.AreaName : ""}
              />
            )}
          />
          <Field
            name="Code"
            render={({ field }) => (
              <CPTextBoxCode
                title={"Code"}
                id="Code"
                value={field.value}
                error={touched.Code && errors.Code ? errors.Code : ""}
              />
            )}
          />
          <Field
            name="City"
            render={({ field }) => (
              <CPTextBox
                title={"City"}
                id="City"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={touched.City && errors.City ? errors.City : ""}
              />
            )}
          />
          <Field
            name="IsActive"
            type="checkbox"
            render={({ field }) => (
              <CPCheckBox
                title={"Active"}
                id="IsActive"
                isChecked={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </Form>
      )}
    </Formik>
  );
});

export default Area;
