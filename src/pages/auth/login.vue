<template>
  <!-- Login Screen -->
  <f7-login-screen id="login-screen">
    <f7-view>
      <f7-page login-screen>
        <f7-login-screen-title>Login</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-label>Username</f7-label>
            <f7-input name="username" placeholder="Username" type="text"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Password</f7-label>
            <f7-input name="password" type="password" placeholder="Password"></f7-input>
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-button title="Sign In" login-screen-close></f7-list-button>
          <f7-block-footer>
            <p>Click Sign In to close Login Screen</p>
          </f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-login-screen>
</template>
