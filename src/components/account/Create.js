import React from 'react';
import AccountCard from './AccountCard';
import { submitForm } from './utils';

const inputs = [
	{
		id: "mail",
		label: "Mail",
	},
	{
		id: "username",
		label: "username",
	},
	{
		id: "password",
		label: "password",
		type: "password"
	},
	{
		id: "passwordConfirm",
		label: "confirm password",
		type: "password"
	}
];

const buttons = [
	{
		id: "create",
		text: "Create Account",
		onClick: submitForm,
	},
]

const Create = (props) => {
	return (
		<AccountCard
			header={{
				title: "Create your account",
				subheader: "Please enter your mail and password"
			}}
			inputs={inputs}
			buttons={buttons}
		/>
	);
};

export default Create;