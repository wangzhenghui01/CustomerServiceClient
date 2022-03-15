<template>
  <!-- <app-base> -->
  <div id="android-app">
    <article>
      <!--      <route :comp="{name: 'login-app'}"></route>-->
      <route :comp="{name: 'app-exploration-user'}"></route>
    </article>
    <time-out></time-out>
    <message-box>
    </message-box>
  </div>
</template>

<script>

  export default {
    ready () {
      if(!window.onerror) {
        window.onerror = function (message, file, line, col, error) {
          // HostApp.alert("Error occured: " + error.message)
          return false
        }
      }
    }
  }
</script>
