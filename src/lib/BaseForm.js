import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Input } from 'semantic-ui-react'
import { Text, Wrapper } from '../ui/atoms'
import { ModalContext } from '../context/ModalContext'

export const BaseForm = ({
	initialValues,
	fields,
	shema,
	onSubmit,
	error,
	nameSubmit,
}) => {
	const { hideModal } = useContext(ModalContext)
	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={shema}
				onSubmit={(values, actions) => {
					onSubmit(values, initialValues).then((res) => {
						actions.setSubmitting(false)
						hideModal()
					})
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						{fields.map((item, id) => (
							<Wrapper key={id}>
								<Input
									size='big'
									label={{ icon: 'asterisk' }}
									labelPosition='left corner'
									placeholder={item.placeholder}
									name={item.name}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values[item.name]}
								/>
								<Text params='err'>
									{errors[item.name] && touched[item.name] && errors[item.name]}
								</Text>
							</Wrapper>
						))}

						{error && <Text params='err'>{error.password}</Text>}
						<Input
							loading={isSubmitting}
							type='submit'
							disabled={isSubmitting}
							value={nameSubmit}
						/>
					</form>
				)}
			</Formik>
		</>
	)
}

BaseForm.propTypes = {
	initialValues: PropTypes.object.isRequired,
	fields: PropTypes.array.isRequired,
	shema: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	error: PropTypes.string,
	nameSubmit: PropTypes.string,
}

BaseForm.defaultProps = {
	error: '',
	nameSubmit: '',
}