import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import UsersListScreen from "../app/screens/UserDetailsScreen/index"; // Adjust the import path accordingly
import { getAllUsersAsync } from "../app/features/ProductDetail/thunks/index";

// Mock the async thunk
jest.mock("../app/features/getAllUser/thunks/index", () => ({
  getAllUsersAsync: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe("UsersListScreen", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      searchHistory: { historyArr: [] },
      users: [],
    });
    jest.clearAllMocks();
  });

  test("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <UsersListScreen navigation={{ navigate: jest.fn() }} />
      </Provider>
    );

    expect(getByText("All users")).toBeTruthy();
    expect(getByText("Recent Searches:")).toBeTruthy();
  });

  test("fetches and displays users", async () => {
    (getAllUsersAsync as jest.Mock).mockReturnValueOnce(() =>
      Promise.resolve([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
      ])
    );

    const { getByText } = render(
      <Provider store={store}>
        <UsersListScreen navigation={{ navigate: jest.fn() }} />
      </Provider>
    );

    await waitFor(() => expect(getByText("John Doe")).toBeTruthy());
    expect(getByText("john@example.com")).toBeTruthy();
    expect(getByText("123-456-7890")).toBeTruthy();
  });

  test("displays search results", async () => {
    (getAllUsersAsync as jest.Mock).mockReturnValueOnce(() =>
      Promise.resolve([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987-654-3210",
        },
      ])
    );

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <UsersListScreen navigation={{ navigate: jest.fn() }} />
      </Provider>
    );

    const searchInput = getByPlaceholderText("Search User");
    fireEvent.changeText(searchInput, "Jane");

    await waitFor(() => expect(getByText("Jane Smith")).toBeTruthy());
    expect(() => getByText("John Doe")).toThrow();
  });

  test("saves search history", async () => {
    store = mockStore({
      searchHistory: {
        historyArr: [{ id: "1", search: "John Doe", date: new Date() }],
      },
      users: [],
    });

    const { getByText } = render(
      <Provider store={store}>
        <UsersListScreen navigation={{ navigate: jest.fn() }} />
      </Provider>
    );

    expect(getByText("John Doe")).toBeTruthy();
  });

  test("handles navigation on user press", async () => {
    (getAllUsersAsync as jest.Mock).mockReturnValueOnce(() =>
      Promise.resolve([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
      ])
    );

    const navigate = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <UsersListScreen navigation={{ navigate }} />
      </Provider>
    );

    await waitFor(() => expect(getByText("John Doe")).toBeTruthy());

    fireEvent.press(getByText("John Doe"));
    expect(navigate).toHaveBeenCalledWith("UserDetailsScreen", {
      user: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
      },
    });
  });
});
