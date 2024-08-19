import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Networking/config";
import httpClient from "../../../Networking/httpClient";

// Get All User Lists
export const getProductDetailAsync = createAsyncThunk(
  "product/detail",
  async () => {
    const link = BASE_URL + `/product.json`;
    const response = await httpClient.callAPI("GET", link, {}, null);
    return response;
  }
);
