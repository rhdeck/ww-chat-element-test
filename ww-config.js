export default {
  editor: {
    label: "Vue Advanced Chat2",
  },
  triggerEvents: [
    {
      name: "update:send",
      label: "When a user sends a message from the box",
      event: { content: "", files: [], replyMessage: {}, roomId: "" },
      default: true,
    },
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
