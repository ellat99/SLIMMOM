// import { Info, Message, Warning } from '@mui/icons-material';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const BASE_URL = process.env.DB_URL;
// axios.defaults.baseURL = BASE_URL; 
 
// export const getProducts = createAsyncThunk(
//   '/products',
//   async (query, thunkAPI) => {
//     try {
//       const { data, status } = await axios.post(
//         `/products?category=${query.category}&currentPage=1&pageSize=20`,
//         query.userParams
//       );

//       if (!data) {
//         return thunkAPI.rejectWithValue(status);
//       }
//       data.message && Message(data.message);

//       return data;
//     } catch (err) {
//       Error(err.response.data.message);
//       return thunkAPI.rejectWithValue(err.response.data);
//     }
//   }
// );

// export const getProductsCategories = createAsyncThunk(
//   '/products/categories',
//   async (userParams, thunkAPI) => {
//     try {
//       const { data, status } = await axios.post(
//         '/products/categories',
//         userParams
//       );

//       if (!data) {
//         return thunkAPI.rejectWithValue(status);
//       }
//       return data;
//     } catch (err) {
//       Error(err.response.data.message);
//       return thunkAPI.rejectWithValue(err.response.data);
//     }
//   }
// );


// export const addProducts = createAsyncThunk(
//   'products/addItem',
//   async (product, { rejectWithValue }) => {
//     try {
//       const result = await axios.post(`/api/diary/`, {
//         ...product,
//       });
//       return result.data;
//     } catch (error) {
//      Message('Add product in diary error');
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getDailyProducts = createAsyncThunk(
//   'products/getDaily',
//   async (value, { rejectWithValue }) => {
//     try {
//       const { data, status } = await axios.get('/diary/' + value);
//       if (!data) {
//         return await rejectWithValue(status);
//       }
//       return data;
//     } catch (err) {
//       Warning('Get get daily products error');
//       return await rejectWithValue(err.response.data);
//     }
//   }
// );

 

// export const deleteDiaryProduct = createAsyncThunk(
//   'delete',
//   async (id, thunkAPI) => {
//     try {
//       await axios.delete(`/diary/${id}`);
//       return id;
//     } catch (error) {
//       Error(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getAllDiaryProduct = createAsyncThunk(
//   'getAllDiaryProduct',
//   async (date, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/diary/${date}`);
//       return data.notes;
//     } catch (error) {
//       Warning('something went wrong!!');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const addDiaryProduct = createAsyncThunk(
//   'addDiaryProduct',
//   async (data, thunkAPI) => {
//     const { product, weight, date } = data;
//     try {
//       const { data } = await axios.post('api/diary', { product, weight, date });
//       Message('Product added success!');
//       return data.note;
//     } catch (error) {
//       Warning('something went wrong!! Try again.');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getNameProducts = createAsyncThunk(
//   '/api/products',
//   async (userQuery, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/api/products`, {
//         params: { title: userQuery },
//       });
//       data.message && Message(data.message);
//       if (data.products.length === 0) {
//         Info('product is undefined');
//       }
//       return data;
//     } catch (err) {
//       Error(err.response.data.message);
//       return thunkAPI.rejectWithValue(err.response.data);
//     }
//   }
// );
 