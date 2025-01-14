import TouristTable from "./Table.vue";
import SomeOtherTable from "./SomeOtherTable.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faInfoCircle,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "SidePanel",
  components: {
    FontAwesomeIcon,
    TouristTable,
    SomeOtherTable,
  },

  data() {
    return {
      // you can add buttons dynamically here
      menuItems: [
        { icon: faHouse, label: "الرئيسية" },
        { icon: faInfoCircle, label: "من نحن" },
        { icon: faGear, label: "الاعدادات" },
      ],
    };
  },
};
