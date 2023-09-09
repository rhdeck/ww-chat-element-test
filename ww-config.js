export default {
  editor: {
    label: "Vue Advanced Chat",
  },
  triggerEvents: [
    { name: "sendMessage", label: "When a user sends a Message" },
  ],
  properties: {
    currentUserId: {
      label: {
        en: "User Id",
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
    },
    rooms: {
      label: {
        en: "Rooms",
      },
      type: "Array",
      defaultValue: [],
      bindable: true,
    },
    messages: {
      label: {
        en: "Messages",
      },
      type: "Array",
      defaultValue: [],
      bindable: true,
    },
    roomActions: {
      label: {
        en: "Room Actions",
      },
      type: "Array",
      defaultValue: [],
      bindable: true,
    },
  },
};
