import React from "react";
import ReactDOM from "react-dom";
import {
  AppText,
  AppButton,
  AppImage,
  AppForm,
  AppTitle,
  AppRadioButton,
  AppList,
  AppContainer,
  AppContent
} from "./components";
// import profilePicture from "./assets/profile-men.jpeg";
import "./styles/index.css";

ReactDOM.render(
  <div>
    <AppContent>App Content Without Container</AppContent>
    <AppContainer>
      <AppTitle big>This is Big APP Title</AppTitle>
      <AppContent>
        <AppForm>
          {/*<AppImage
            src={profilePicture}
            alt="Profile Picture"
            title="Profile Picture"
          />*/}
          <AppTitle small>Hamideh</AppTitle>
          <AppText>This is Hamideh Mehdizadeh</AppText>
          {/* <AppRadioButton /> */}
          <AppButton onClick={() => alert("ok")} success>
            Ok
          </AppButton>
          <AppButton onClick={() => alert("Cancel")} danger>
            Cancel
          </AppButton>
          <AppButton onClick={() => alert("Warning")} warning>
            Warning
          </AppButton>
          <AppList
            onClickItem={item => alert(item.name)}
            items={[
              { id: 1, name: "One" },
              { id: 2, name: "Two" },
              { id: 3, name: "Three" },
              { id: 4, name: "Four" }
            ]}
            order
          />
        </AppForm>
      </AppContent>
    </AppContainer>
  </div>,
  document.getElementById("root")
);
