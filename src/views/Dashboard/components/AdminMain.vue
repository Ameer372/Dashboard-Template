<template>
  <div class="layout">
    <!-- Side Panel -->
    <div class="side-panel column">
      <div class="mt-2">
        <button
          v-for="(item, index) in menuItems"
          :key="index"
          class="btn btn-primary col-10 mb-2"
        >
          <FontAwesomeIcon :icon="item.icon" /> {{ item.label }}
        </button>
      </div>
    </div>
    <!-- Body content goes here -->
    <div class="content">
      <!-- welcome message -->
      <div><h1 class="text-end my-5">مرحبا بك, username</h1></div>
      <!-- another component tourist table -->
      <div class="column m-5 w-100 mx-auto">
        <div class="col mb-5"><TouristTable /></div>
        <div class="col"><SomeOtherTable /></div>
      </div>
    </div>
  </div>
</template>

<!-- Js code is in AdminMain.js -->
<script src="./AdminMain.js"></script>

<!-- Custom CSS for the side panel -->
<style scoped>
.layout {
  display: flex;
  transition: all 0.4s ease-in-out;
}

.btn {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  direction: ltr;
  text-align: start;
  overflow: hidden;
  height: 35px;
}

.side-panel {
  background-color: rgba(210, 234, 255, 0.168);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;
  overflow: visible;
  position: relative;
  right: -1%; /* Ensure it affects the layout */
  height: 100vh;
  min-height: 100%;
  width: 5%; /* Collapsed width */
  max-width: auto;
  animation-name: slide-back;
  animation-duration: 0.4s;
  border-top-left-radius: 6%;
  border-bottom-left-radius: 100%;
}

.side-panel:hover {
  background-color: aliceblue;
  width: 20%; /* Expanded width */
  animation-name: slide;
  animation-duration: 0.4s;
  transition: all 0.6s ease-in-out;
}

.content {
  flex-grow: 1;
  padding: 1rem;
  transition: margin-left 0.4s ease-in-out;
  margin-left: 4%; /* Matches side-panel collapsed width */
}

.btn:hover {
  background-color: #0d83ea;
  border-color: #0d83ea;
  transform: scale(1.05) translateX(-5px);
  transition: all 0.4s ease-in-out;
}

@keyframes slide {
  0% {
    width: 5%;
  }
  100% {
    width: 20%;
  }
}
@keyframes slide-back {
  0% {
    width: 20%;
  }
  100% {
    width: 5%;
  }
}

/* ipad */
@media screen and (max-width: 1000px) {
  .side-panel {
    width: 8%;
  }

  .side-panel:hover {
    width: 60%;
  }

  @keyframes slide {
    0% {
      width: 8%;
    }
    100% {
      width: 60%;
    }
  }
  @keyframes slide-back {
    0% {
      width: 60%;
    }
    100% {
      width: 8%;
    }
  }
}
</style>
