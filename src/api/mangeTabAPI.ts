import axios from "axios";
import {
  ExecuteActionRequest,
  ManageOrderRequest,
} from "../interface/RequestBody";
import { axiosInstance } from "./apiConfig";

// export const header = {
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJob2FuZzEyMyIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJoblNob3AiLCJleHAiOjE3MjE5MDI2ODcsImlhdCI6MTcyMTg5OTA4NywianRpIjoiODY4ODNhNmMtMWQ3YS00MmFjLWFiZDAtNTEwNGMxYzZhYzg0In0.SfxiMAWj-J0FkvLrkcLc4Ei9a3A0bxz9uqkYUJeRpKOqespHT--MtakFkAYo4Eb0tbZ8RYTHHITMsSO0Zo0e9Q`,
//   },
// };

export const getAllTab = async () => {
  try {
    const response = await axiosInstance.get("/order/allTab");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const showOrderListOnTab = async (
  manageOrderRequest: ManageOrderRequest
) => {
  try {
    const response = await axiosInstance.post(
      "/order/manage-tab",
      manageOrderRequest
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const executeActionOnOrder = async (
  executeActionRequest: ExecuteActionRequest
) => {
  try {
    const response = await axiosInstance.post(
      "/order/execute-action",
      executeActionRequest
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
