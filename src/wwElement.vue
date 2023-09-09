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
    sendMessage(...args) {
      console.log('send message now')
      this.$emit('element-event', { name: 'sendMessage' })
      console.log("I sent the message")
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
