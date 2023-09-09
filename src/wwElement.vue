<template>
  <vue-advanced-chat :current-user-id="content.currentUserId" :rooms="content.rooms" :messages="content.messages"
    :room-actions="content.roomActions" @send-message="sendMessage" />
</template>

<script>
import { defineComponent } from "vue";
import { register } from 'vue-advanced-chat'
register();
export default defineComponent({
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    textStyle() {
      return {
        color: this.content.textColor,
      };
    },
  },
  methods: {
    sendMessage(event) {
      this.$emit('trigger-event', { name: 'update:send', event: event.detail[0] })
    }
  }
})
</script>

<style lang="scss" scoped>
.my-element {
  p {
    font-size: 18px;
  }
}
</style>
