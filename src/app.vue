<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>

  </div>
</template>

<script>
export default {}
</script>
