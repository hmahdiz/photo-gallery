import React from "react";
import {
  AppText,
  AppButton,
  AppImage,
  AppForm,
  AppTitle,
  AppRadioButton,
  AppList,
  AppContainer,
  AppPanel,
  AppLabel
} from "../../components";

const Layout = ({
  onSubmitForm,
  onClickDanger,
  onClickWarning,
  onClickItemList,
  itemList,
  profileMen
}) => (
  <div>
    <AppPanel>App-Panel Without App-Container</AppPanel>
    <AppContainer>
      <AppTitle big>This is Big APP Title</AppTitle>
      <AppPanel>
        <AppForm onSubmit={e => onSubmitForm(e)}>
          <AppImage
            src={profileMen}
            alt="Profile Picture"
            title="Profile Picture"
          />
          <AppTitle small>Hamideh</AppTitle>
          <AppLabel>About:</AppLabel>
          <AppText>This is Hamideh Mehdizadeh</AppText>
          {/* <AppRadioButton /> */}
          <AppButton success>Ok</AppButton>
          <AppButton onClick={onClickDanger} danger>
            Cancel
          </AppButton>
          <AppButton onClick={onClickWarning} warning>
            Warning
          </AppButton>
          <AppList
            onClickItem={item => onClickItemList(item)}
            items={itemList}
            order
          />
        </AppForm>
      </AppPanel>
    </AppContainer>
  </div>
);

export default Layout;
