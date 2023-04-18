import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Formik, Form, ErrorMessage } from "formik";
import { ValidateFormContact } from "../../screen/validate_form/ValidateContact";
import "../components/style.css";

import { NavLink  } from "react-router-dom";

import Select from 'react-select';

const options = [
  { value: 'paperback', label: 'Paperback' },
  { value: 'hardcover', label: 'Hardcover' },
];

export default function EditPage() {

  const [selectedOption, setSelectedOption] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


  return (
    <>
      <div>
      <div className="main-panel">
        <div className="content">
          <Formik
            enableReinitialize={true}
            initialValues={{
              Name: "",
              Price: "",
              Description: ""
            }}
            validationSchema={ValidateFormContact}
            onSubmit={(values) => {
              let data = { ...values };
              console.log("data : " + JSON.stringify(data));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit} className="php-email-form">
                <text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Edit Product
                </text>

                <hr />

                <div className="row">
                  <div className="col-4">
                    <div className="dropzone">
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <p>Drop the files here ...</p>
                        ) : (
                          <p style={{ fontSize: 18 }}>Choose Image</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row col-8">
                    <div className="col-md-6">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Name}
                        className={
                          "form-control" +
                          (errors.Name && touched.Name ? " is-invalid" : "")
                        }
                        placeholder="Name"
                        style={{ height: 50 }}
                      />
                      <ErrorMessage
                        name="Name"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="name">Price</label>
                      <input
                        type="text"
                        name="Price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Price}
                        className={
                          "form-control" +
                          (errors.Price && touched.Price ? " is-invalid" : "")
                        }
                        placeholder="Price"
                        style={{ height: 50 }}
                      />
                      <ErrorMessage
                        name="Price"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <label htmlFor="name">Description</label>
                      <textarea
                        className={
                          "form-control" +
                          (errors.Description && touched.Description
                            ? " is-invalid"
                            : "")
                        }
                        name="Description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Description}
                        rows="auto"
                        placeholder="Description"
                      />
                      <ErrorMessage
                        name="Description"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group col-md-6">                  
                        <label htmlFor="name">Book Format</label>   
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}                         
                        />    
                      </div>
                    </div>
                  </div>
               

                <div className="text-center" style={{ marginTop: 20 }}>
                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ fontSize: 18, margin: 15 }}
                  >
                    Update
                  </button>

                  <NavLink to="/All_Products">
                  <button
                    className="btn btn-danger" 
                    style={{ fontSize: 18, margin: 15 }}
                  >
                    Cancel
                  </button>
                  </NavLink>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </>
  );
}

