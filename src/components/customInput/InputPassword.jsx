import {Input} from "@nextui-org/react";
import {useController} from "react-hook-form";
import {IconAsterisk} from "@tabler/icons-react";

const InputPassword = (props) => {
	const {
		field,
		fieldState: { invalid, isTouched, isDirty , error},
		formState: { touchedFields, dirtyFields }
	} = useController({
		name: props.name,
		control: props.control,
		rules: props.rules,
	});

	return (
		<Input
			// react form hook
			onChange={field.onChange}
			onBlur={field.onBlur}
			value={field.value}
			ref={field.ref}

			// nextUI
			isInvalid={!!error}
			errorMessage={error?.message}

			type={'password'}
			size={'sm'}
			variant={'flat'}
			label={<div className={'flex items-center justify-start gap-1'}>
				{props.label} {!!props.rules?.required && <IconAsterisk size={8} className={'text-rose-600'}/>}
			</div>}
			placeholder={props.placeholder}
			isDisabled={props.isDisabled}
		/>
	)
}

export default InputPassword;