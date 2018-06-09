<template>
  <div>
    <SidebarMenu
      v-show="!shrink"
      :appRouter="appRouter"
      @change="handleChange"
      >
    </SidebarMenu>

    <SidebarMenuShrink
      v-show="shrink"
      :appRouter="appRouter"
      @change="handleChange"
      >
    </SidebarMenuShrink>
  </div>
</template>
<script>
import SidebarMenu from './uiComponents/sidebarMenu.vue'
import SidebarMenuShrink from './uiComponents/sidebarMenuShrink.vue'
export default {
  props: [
    'shrink',
    'appRouter'
  ],
  components: {
    SidebarMenu,
    SidebarMenuShrink
  },
  data () {
    return {}
  },
  methods: {
    handleChange (name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
