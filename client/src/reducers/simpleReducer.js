import {
	GET_BUILDER_DATA,
	CHANGE_PATH,
	FORM_COMPLETE,
	STATE_REFRESH,
	SET_USER_INFO,
	SET_MESSAGE_STATUS,
	SET_LOADING,
	SET_PRICE,
	SET_VARIATION_ID,
	SET_URL_ID,
	SET_BUILD_DATA,
	SET_CUSTOM_TEXT,
	CHANGE_IMAGE_NUMBER
} from "../actions/types";

const initialState = {
	errors: false,
	success: false,
	loading: false,
	userInfo: {},
	price: 0,
	formComplete: false,
	pathIndex: [0],
	selectedPath: [],
	productId: 0,
	variationId: 0,
	UrlId: null,
	buildData: [],
	customText: "BULLDOG HOSE COMPANY",
	imageNumber: 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_BUILDER_DATA:
			const formData = require(`../formData/json/${action.payload}.json`);
			return {
				...state,
				selectedPath: [formData],
				productId: formData.productId
			};
		case CHANGE_PATH:
			let oldPath = [...state.selectedPath];
			let oldPathIndex = [...state.pathIndex];
			oldPath.length = action.payload.selectedFieldProps.stage;
			oldPathIndex.length = action.payload.selectedFieldProps.stage;
			let newPath = {
				selectedFieldProps: action.payload.selectedFieldProps,
				selectedField: action.payload.selectedField
			};
			let newPathIndex = [...oldPathIndex, action.payload.selectedField];
			let newPathArray = [...oldPath, newPath];
			return {
				...state,
				selectedPath: [...newPathArray],
				pathIndex: [...newPathIndex]
			};
		case FORM_COMPLETE:
			return {
				...state,
				formComplete: true
			};

		case SET_MESSAGE_STATUS:
			return {
				...state,
				errors: action.payload.errors,
				success: action.payload.success,
				loading: false
			};
		case SET_PRICE:
			let selectPath = [...state.selectedPath];
			let price = selectPath[0].price;
			for (let i = 1; i < selectPath.length; i++) {
				console.log(selectPath[i].selectedFieldProps.price);
				price += parseInt(selectPath[i].selectedFieldProps.price);
			}
			console.log(price);
			return {
				...state,
				price: price
			};

		case SET_VARIATION_ID:
			return {
				...state,
				variationId: action.payload.slice(-1)[0].selectedFieldProps.variationId
			};

		case SET_URL_ID:
			return {
				...state,
				UrlId: action.payload,
				loading: false
			};

		case SET_BUILD_DATA:
			return {
				...state,
				buildData: action.payload,
				loading: false
			};
		case CHANGE_IMAGE_NUMBER:
			return {
				...state,
				imageNumber: action.payload
			};

		case SET_LOADING:
			return {
				...state,
				loading: !state.loading
			};
		case STATE_REFRESH:
			return {
				...state,
				errors: false,
				success: false,
				loading: false,
				userInfo: {},
				price: 0,
				formComplete: false,
				pathIndex: [0],
				selectedPath: [],
				productId: 0,
				variationId: 0,
				UrlId: null,
				buildData: [],
				imageNumber: 0
			};
		case SET_USER_INFO:
			return {
				...state,
				userInfo: action.payload
			};

		case SET_CUSTOM_TEXT:
			return {
				...state,
				customText: action.payload
			};

		default:
			return state;
	}
}
