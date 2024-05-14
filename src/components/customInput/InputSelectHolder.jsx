import {useEffect, useState} from "react";
import callApi from "../../apis/GatewayApi.js";
import InputAutocomplete from "./core/InputAutocomplete.jsx";
import PropTypes from "prop-types";

const InputSelectHolder = (props) => {
	const [holders, setHolders] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getHolders()
	}, []);

	const getHolders = () => {
		setHolders([])

		callApi('pkg_bud_holder.get_all', {}, (data) => {
			setHolders(data.map((e) => {
				return {
					value: e.PK_BUD_HOLDER,
					label: e.C_HOLDER_NAME
				}
			}))

			setIsLoading(false)
		})
	}

	return <InputAutocomplete
		data={holders}
		isLoading={isLoading}
		{...props}
	/>
}

export default InputSelectHolder;