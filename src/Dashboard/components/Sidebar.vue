<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faBars,
    };
  },
};
</script>

<template>
  <button
    class="btn btn-secondary"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <FontAwesomeIcon :icon="faBars" />
  </button>
  <div
    style="
      width: 20%;
      border-top-left-radius: 2%;
      border-bottom-left-radius: 2%;
    "
    class="offcanvas offcanvas-end half-show"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header justify-content-between">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">
        القائمة الجانبية
      </h5>
      <button
        style="margin-left: 0"
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body table-group-divider">
      <ul class="list-group"></ul>
      <li class="list-group-item mb-3">
        <a href="#" class="btn btn-outline-primary">الرئيسية</a>
      </li>
      <li class="list-group-item mb-3">
        <a href="#" class="btn btn-outline-primary">المحتويات</a>
      </li>
    </div>
  </div>
</template>
