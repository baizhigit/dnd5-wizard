import * as React from 'react';
import { Formik, Form, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { DropdownProps, Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

import { resultToDropdown, getClasses, getRaces } from '../functions/api';

const basicInfoSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too Short!')
    .required('Required'),
  mainClass: Yup.string().required('Required'),
  race: Yup.string().required('Required')
});

interface Props {
  onComplete: (value: Partial<Character>) => any;
}

interface State {
  classOptions: DropdownProps[];
  raceOptions: DropdownProps[];
  character: Partial<Character>;
}

export class BasicInfo extends React.Component<Props, State> {
  state = {
    classOptions: [],
    raceOptions: [],
    character: {
      name: '',
      mainClass: '',
      race: ''
    }
  };

  async componentDidMount() {
    const classOptions = resultToDropdown(await getClasses());
    const raceOptions = resultToDropdown(await getRaces());

    this.setState({ classOptions, raceOptions });
  }

  handleSubmit = (e: any) => {
    this.props.onComplete(e);
  };

  render() {
    const { character, classOptions, raceOptions } = this.state;
    return (
      <>
        <h2>Basic Information</h2>
        <Formik
          initialValues={character}
          onSubmit={this.handleSubmit}
          render={({ isSubmitting, isValid }) => (
            <Form>
              <Field
                name="name"
                render={({ field }: FieldProps) => (
                  <span className="p-float-label" style={{ marginTop: '1rem' }}>
                    <InputText id="name" {...field} style={{ width: '100%' }} />
                    <label htmlFor="name">Enter Name</label>
                  </span>
                )}
              />
              <ErrorMessage name="name" />

              <Field
                name="race"
                render={({ field }: { field: any }) => (
                  <Dropdown
                    {...field}
                    options={raceOptions}
                    placeholder="Select Race"
                    style={{ width: '100%', marginTop: '1rem' }}
                  />
                )}
              />
              <ErrorMessage name="race" />

              <Field
                name="mainClass"
                render={({ field }: { field: any }) => (
                  <Dropdown
                    {...field}
                    options={classOptions}
                    placeholder="Select Class"
                    style={{ width: '100%', marginTop: '1rem' }}
                  />
                )}
              />
              <ErrorMessage name="mainClass" />

              <button
                type="submit"
                style={{ marginTop: '1rem' }}
                disabled={isSubmitting || !isValid}
              >
                Submit
              </button>
            </Form>
          )}
        />
      </>
    );
  }
}
