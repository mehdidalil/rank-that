import React from 'react';
import AccountCard from './AccountCard';
import { submitForm } from './utils';

const inputs = [
	{
		id: "mail",
		label: "Mail",
	},
	{
		id: "password",
		label: "Password",
		type: "password"
	}
];

const buttons = [
	{
		id: "login",
		text: "Login",
		onClick: submitForm,
	},
]

const Login = (props) => {
	return (
		<AccountCard
			header={{
				title: "Login",
				subheader: "Please enter your mail and password"
			}}
			inputs={inputs}
			buttons={buttons}
		/>
	);
};

export default Login;