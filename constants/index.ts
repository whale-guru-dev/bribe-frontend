import {
  FistStrongIcon,
  SadHeartIcon,
  NotesIcon,
  NotAvailableIcon,
} from "components/SVGicons";

const Constants = {
  BRIBE_STATUSES: {
    SUCCESSFUL: "Successful",
    UNSUCESSFUL: "Unsucessful",
    CANCELED: "Canceled",
    QUEUED: "Queued",
    NA: "NA",
  },

  STATUS_COLORS: {
    Successful: "alert-jade",
    Unsucessful: "alert-rubi",
    Canceled: "secondary-gray-dark",
    Queued: "alert-beryl",
    NA: "secondary-gray-medium",
  },

  STATUS_ICONS: {
    Successful: FistStrongIcon,
    Unsucessful: SadHeartIcon,
    Canceled: NotesIcon,
    NA: NotAvailableIcon,
  },

  STATUS_PILLS: {
    Successful: {
      text: "Executed",
      color: "text-primary-pearl dark:text-primary-pearl-alt",
      bg: "bg-alert-jade dark:bg-alert-jade-alt",
    },
    Unsucessful: {
      text: "Failed",
      color: "text-primary-pearl dark:text-primary-pearl-alt",
      bg: "bg-alert-rubi dark:bg-alert-rubi-alt ",
    },
    Canceled: {
      text: "Canceled",
      color: "text-primary-pearl dark:text-primary-pearl-alt",
      bg: "bg-secondary-gray-darkest dark:bg-secondary-gray-darkest-alt",
    },
    Queued: {
      text: "Queued",
      color: "text-primary-pearl dark:text-primary-pearl-alt",
      bg: "bg-alert-beryl dark:bg-alert-beryl-alt",
    },
    NA: {
      text: "N/A",
      color: "text-secondary-gray-darkest dark:text-primary-onix",
      bg: "bg-secondary-gray-medium dark:bg-secondary-gray-medium-alt",
    },
  },

  DECISIONS: {
    YAY: "Yay",
    NAY: "Nay",
  },

  BRIBE_ACTIONS: {
    INCREASE: "INCREASE",
    DECREASE: "DECREASE",
  },

  STAKE_ACTION: {
    DEPOSIT: "DEPOSIT",
    WITHDRAW: "WITHDRAW",
    STAKE: "STAKE",
  },
};

export default Constants;
