import React from 'react'
import { useForm } from '@tanstack/react-form'
import axios from 'axios';


function Form() {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirm_password: '',
            gender: '',
        },
        onSubmit: async ({ value }) => {

            console.log(value)
            axios.post('http://localhost:8080/users/register', {
                email: value.email,
                password: value.password,
                gender: value.gender,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        },
    })

    function isEmailValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    return (
        <div className="form">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <div>

                    <form.Field
                        name="email"
                        validators={{
                            onChange: (email) => {
                                if (!isEmailValid(email.value)) {
                                    return 'Email is not valid'
                                }
                                return undefined
                            }
                        }}
                    >
                        {(field) => (
                            <div>
                                <label>
                                    <div>email</div>
                                    <input
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                </label>
                                {field.state.meta.errors.map((err) => (
                                    <div key={err}>{err}</div>
                                ))}
                            </div>

                        )}
                    </form.Field>

                    <br></br>
                    <form.Field name="password">
                        {(field) => (
                            <label>
                                <div>password</div>
                                <input
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </label>
                        )}
                    </form.Field>
                    <form.Field
                        name="confirm_password"
                        validators={{
                            onChangeListenTo: ['password'],
                            onChange: ({ value, fieldApi }) => {
                                if (value !== fieldApi.form.getFieldValue('password')) {
                                    return 'Passwords do not match'
                                }
                                return undefined
                            },
                        }}
                    >
                        {(field) => (
                            <div>
                                <label>
                                    <div>confirm password</div>
                                    <input
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                </label>
                                {field.state.meta.errors.map((err) => (
                                    <div key={err}>{err}</div>
                                ))}
                            </div>
                        )}
                    </form.Field>
                    <form.Field
                        name="gender"
                        children={(field) => (
                            <label>
                                <div>gender</div>
                                female<input
                                    type="radio"
                                    name={field.name}
                                    value="female"
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                <br></br>
                                male<input
                                    type="radio"
                                    name={field.name}
                                    value="male"
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </label>
                        )}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
