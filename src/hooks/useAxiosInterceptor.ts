import { api } from "Services/api";
import { AxiosError } from "axios";
import { useEffect } from "react";

// Ajuda a debugar e analisar errors da api

export function useAxiosInterceptor() {
  useEffect(() => {
    const sessionInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        try {
          if (error instanceof AxiosError) {
            if (__DEV__) {
              // eslint-disable-next-line no-console
              console.log(
                `\n Method: ${error.response?.config?.method} \n Status: ${
                  error?.response?.status
                }\n Message: ${
                  error?.response?.data?.error
                }\n Description: ${JSON.stringify(
                  error?.response?.data?.data
                )}\n Route: ${error?.response?.config.baseURL}${
                  error?.response?.config?.url
                }`
              );
            }
          }
        } catch (error) {
          console.error("axios_interceptor", error);
        }
        return Promise.reject(error);
      }
    );
    return () => api.interceptors.response.eject(sessionInterceptor);
  }, []);
}
