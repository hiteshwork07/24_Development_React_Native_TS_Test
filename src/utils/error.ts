// Simplified error message thrown by API to display on FE
export const getSimplifiedError = error => {
  const errorResponse =
    error.response && (error.response.data || error.response.data.message);
  if (!errorResponse) {
    return 'Something went wrong, please try again later';
  }

  const errorKeys = Object.keys(errorResponse);
  if (errorKeys.includes('message')) {
    return errorResponse.message;
  }
  return errorResponse;
};
