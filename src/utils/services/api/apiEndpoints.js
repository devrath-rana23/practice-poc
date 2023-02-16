export const apiEndpoints = {
  // Authentication APIs
  auth: {
    url: "/auth",
    method: "get",
  },
};

export const apiConstants = Object.keys(apiEndpoints).reduce((cb, iv) => {
  return { ...cb, [iv]: iv };
}, {});
