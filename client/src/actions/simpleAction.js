import axios from "axios";

import {
  GET_BUILDER_DATA,
  CHANGE_PATH,
  FORM_COMPLETE,
  STATE_REFRESH,
  SET_USER_INFO,
  FORM_SUBMIT,
  SET_MESSAGE_STATUS,
  SET_LOADING,
  SET_PRICE,
  SET_VARIATION_ID,
  SET_URL_ID,
  SET_BUILD_DATA,
  SET_CUSTOM_TEXT,
  CHANGE_HAS_CUSTOM_TEXT,
  CHANGE_IMAGE_NUMBER
} from "./types";

export const getBuilderData = productName => {
  return {
    type: GET_BUILDER_DATA,
    payload: productName
  };
};

export const changePath = (selectedFieldProps, selectedField) => {
  return {
    type: CHANGE_PATH,
    payload: {
      selectedFieldProps: selectedFieldProps,
      selectedField: selectedField
    }
  };
};

export const setFormComplete = () => {
  return {
    type: FORM_COMPLETE,
    payload: null
  };
};
export const setPrice = () => {
  return {
    type: SET_PRICE,
    payload: null
  };
};

export const setVariationId = path => {
  return {
    type: SET_VARIATION_ID,
    payload: path
  };
};

export const formSubmit = data => dispatch => {
  dispatch(setLoading());
  axios
    .post("/api/product/email", data)
    .then(res => {
      dispatch({
        type: SET_MESSAGE_STATUS,
        payload: res.data
      });
    })
    .catch(e => console.log(e));
};
export const productSubmit = (
  selectedPath,
  id,
  totalPrice,
  productId,
  variationId,
  pathIndex,
  customText,
  imageNumber,
  hasCustomText
) => dispatch => {
  dispatch(setLoading());
  axios
    .post("/api/product/add", {
      selectedPath: selectedPath,
      id: id,
      totalPrice: totalPrice,
      productId: productId,
      variationId: variationId,
      pathIndex: pathIndex,
      customText: customText,
      imageNumber: imageNumber,
      hasCustomText: hasCustomText
    })
    .then(res => {
      dispatch({
        type: SET_URL_ID,
        payload: res.data
      });
    })
    .catch(e => console.log(e));
};

export const getProductBuild = id => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/product/${id}`)
    .then(res => {
      dispatch({
        type: SET_BUILD_DATA,
        payload: res.data
      });
    })
    .catch(e => console.log(e));
};

export const setUserInfo = info => {
  return {
    type: SET_USER_INFO,
    payload: info
  };
};
export const changeImageNumber = number => {
  return {
    type: CHANGE_IMAGE_NUMBER,
    payload: number
  };
};

export const changeHasCustomText = hasCustomText => {
  return {
    type: CHANGE_HAS_CUSTOM_TEXT,
    payload: hasCustomText
  };
};

export const setCustomText = text => {
  return {
    type: SET_CUSTOM_TEXT,
    payload: text
  };
};

export const refreshState = () => {
  return {
    type: STATE_REFRESH,
    payload: null
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
