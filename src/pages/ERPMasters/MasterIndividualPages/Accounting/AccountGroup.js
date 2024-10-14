import React, { useCallback, useImperativeHandle } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CPTextBox from "../../../../Components/CPComponents/CPInputs/CPTextBox";
import CPCheckBox from "../../../../Components/CPComponents/CPInputs/CPCheckBox";
import CPTextBoxCode from "../../../../Components/CPComponents/CPInputs/CPTextBoxCode";
import CPComboBox from "../../../../Components/CPComponents/CPInputs/CPComboBox";

const yourApiChoices = [
  {
    "code": "AGNT01",
    "mainColumn": "_Direct",
    "primaryKey": "4302bebf-3e6c-45a9-8e6b-d8222d3dcfe6",
    "masterFilter": "AGNT01Direct",
    "isActive": true,
    "isApproved": true
},
{
    "code": "1",
    "mainColumn": "_KARNATAKA BANK",
    "primaryKey": "d8808dd4-58be-4c78-88dd-e7485b03924d",
    "masterFilter": "1KARNATAKABANK",
    "isActive": true,
    "isApproved": false
},
{
    "code": "2",
    "mainColumn": "5D DESIGNER SURAT",
    "primaryKey": "915d9b67-4b44-4600-98c0-9ee31c685400",
    "masterFilter": "25DDESIGNERSURAT",
    "isActive": true,
    "isApproved": false
},
{
    "code": "3",
    "mainColumn": "A B FASHION BHEDVAN",
    "primaryKey": "915d9b67-a67d-456e-a2db-eaeb8633c51a",
    "masterFilter": "3ABFASHIONBHEDVAN",
    "isActive": true,
    "isApproved": false
},
{
    "code": "4",
    "mainColumn": "A BANK RAIGARH",
    "primaryKey": "d8808dd4-bf19-4a16-80a0-edf3fa48f9fd",
    "masterFilter": "4ABANKRAIGARH",
    "isActive": true,
    "isApproved": false
},
{
    "code": "5",
    "mainColumn": "A BLUE STITCH KOLKATA",
    "primaryKey": "915d9b67-25bd-44ea-9a2f-6ca249cc7f87",
    "masterFilter": "5ABLUESTITCHKOLKATA",
    "isActive": true,
    "isApproved": false
},
{
    "code": "6",
    "mainColumn": "A J JARI INDUSTRIES SURAT",
    "primaryKey": "d8808dd4-f147-4b98-b2f3-7092c77158cb",
    "masterFilter": "6AJJARIINDUSTRIESSURAT",
    "isActive": true,
    "isApproved": false
},
{
    "code": "7",
    "mainColumn": "A K INDUSTRIES RAIGARH (AKHIL)",
    "primaryKey": "d8808dd4-a58e-45f4-ac0b-87514a6440ef",
    "masterFilter": "7AKINDUSTRIESRAIGARHAKHIL",
    "isActive": true,
    "isApproved": false
},
{
    "code": "8",
    "mainColumn": "A K KRISHNA FABRICS HOWRAH",
    "primaryKey": "d8808dd4-6370-4254-9177-1912545d83af",
    "masterFilter": "8AKKRISHNAFABRICSHOWRAH",
    "isActive": true,
    "isApproved": false
},
{
    "code": "9",
    "mainColumn": "A K NARANG HOSIERY LUDHIANA",
    "primaryKey": "915d9b67-8f2c-4c12-a0a1-63f9388a4b54",
    "masterFilter": "9AKNARANGHOSIERYLUDHIANA",
    "isActive": true,
    "isApproved": false
},
{
    "code": "10",
    "mainColumn": "A K R THAIYAL NILAYAM TIRUPUR",
    "primaryKey": "915d9b67-8609-4802-b384-015a42532acb",
    "masterFilter": "10AKRTHAIYALNILAYAMTIRUPUR",
    "isActive": true,
    "isApproved": false
},
];

const AccountGroupSchema = Yup.object().shape({
  AccountGroup: Yup.string().required("A/C Group is required"),
  ParentGroup: Yup.string().required("Parent is required"),
  Code: Yup.string().required("Code is required"),
  UseGroupFor: Yup.string().required("Use For is required"),
});

const AccountGroup = React.forwardRef((props, ref) => {
  const funcnew = useCallback((resetForm) => {
    resetForm();
  }, []);

  const funcview = useCallback((objectJsonBody, setValues) => {
    setValues({
      AccountGroup: objectJsonBody.AccountGroup,
      ParentGroup: objectJsonBody.ParentGroup,
      Code: objectJsonBody.Code,
      UseGroupFor: objectJsonBody.UseGroupFor,
      isActive: objectJsonBody.isActive,
    });
  }, []);

  const funcsave = useCallback(
    (values, resetForm) => {
      const jsonString = JSON.stringify(values);
      console.log(jsonString);
      funcnew(resetForm);
      return jsonString;
    },
    [funcnew]
  );

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
        AccountGroup: "",
        ParentGroup: "",
        Code: "",
        UseGroupFor: "",
        isActive: true,
      }}
      validationSchema={AccountGroupSchema}
      onSubmit={(values, { resetForm }) => {
        if (props.onSave) {
          props.onSave(funcsave(values, resetForm));
        }
      }}
      innerRef={formikRef} // Added this line to access Formik methods via ref
    >
      {({ errors, touched, setFieldValue, values, setValues, resetForm }) => (
        <Form>
          <Field
            name="AccountGroup"
            render={({ field }) => (
              <CPTextBox
                title={"A/C Group"}
                id="AccountGroup"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                }}
                onBlur={field.onBlur}
                error={touched.AccountGroup && errors.AccountGroup ? errors.AccountGroup : ""}
              />
            )}
          />
          <Field
            name="ParentGroup"
            render={({ field }) => (
              <CPComboBox
                labelTitle={"Parent"}
                id="ParentGroup"
                value={field.value}
                choicesFromApi={yourApiChoices}
                onChange={(value) => {
                  // Set the ParentGroup in Formik
                  setFieldValue("ParentGroup", value);
                  
                  // Clear Code field if nothing is selected
                  if (!value) {
                    setFieldValue("Code", ""); // Set Code to an empty string
                  } else {
                    // Find the selected ParentGroup in choices and update the Code field
                    const selectedChoice = yourApiChoices.find(choice => choice.mainColumn === value);
                    if (selectedChoice) {
                      setFieldValue("Code", selectedChoice.code); // Set Code field with ParentGroup's code 
                    }
                  }
                }}
                onBlur={field.onBlur}
                error={touched.ParentGroup && errors.ParentGroup ? errors.ParentGroup : ""}
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
            name="UseGroupFor"
            render={({ field }) => (
              <CPTextBox
                title={"Use For"}
                id="UseGroupFor"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={touched.UseGroupFor && errors.UseGroupFor ? errors.UseGroupFor : ""}
              />
            )}
          />
          <Field
            name="isActive"
            type="checkbox"
            render={({ field }) => (
              <CPCheckBox
                title={"Active"}
                id="isActive"
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

export default AccountGroup;
