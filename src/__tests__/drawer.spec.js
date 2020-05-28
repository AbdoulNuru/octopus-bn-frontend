import ResponsiveDrawer from "../components/ResponsiveDrawer";
import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import userEvent from "@testing-library/user-event";
import IntlProvider from "../languages/components/IntlProvider";
import { BrowserRouter as Router, Link } from "react-router-dom";

const LostComponent = () => {
  return render(
    <Provider store={store}>
      <IntlProvider>
        <Router>
          <ResponsiveDrawer />
        </Router>
      </IntlProvider>
    </Provider>
  );
};

describe("LOST", () => {
  afterEach(cleanup);
  it("should render ResponsiveDrawer component", () => {
    localStorage.setItem(
      "bn-user-data",
      '{"id":"d01cf3f2-4601-4b53-8ffd-fd46b6ded623","method":"local","firstName":"Izabayo","lastName":"Blaise","email":"octopusbn@gmail.com","isVerified":true,"isUpdated":true,"gender":"male","birthDate":"1998-02-20T00:00:00.000Z","preferedLang":"en","preferedCurrency":"USD","residence":"kimironko","department":"travel","managerEmail":"needs.grid@gmail.com","imageUrl":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fman-profile&psig=AOvVaw1-_OdOwQ-SYcfMGvGLOYb4&ust=1582456400155000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjsvNCD5ecCFQAAAAAdAAAAABAD","bio":"I love travel administrator","passportNumber":"RW1234567","role":"travel_administrator","notifyByEmail":true,"createdAt":"2020-05-05T13:11:19.884Z","updatedAt":"2020-05-05T13:11:19.884Z"}'
    );
    const { asFragment } = LostComponent();
    expect(asFragment(<ResponsiveDrawer />)).toMatchSnapshot();
  });
});
