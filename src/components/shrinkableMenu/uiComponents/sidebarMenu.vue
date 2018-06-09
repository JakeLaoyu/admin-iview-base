<template>
  <Menu ref="menu" :active-name="$route.name" :open-names="openedSubmenuArr" theme="light" width="auto" :class="menuitemClasses" @on-select="changeMenu">
    <template v-for="item in appRouter">
      <MenuItem v-if="item.children.length <= 1" :name="item.children[0].name" :key="item.name">
        <i :class="['iconfont', `${item.icon}`]" :key="`menuicon${item.name}`"></i>
        <span :key="`title${item.name}`">{{ item.title }}</span>
      </MenuItem>

      <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.name">
        <template slot="title">
          <i :class="['iconfont', `${item.icon}`]" :key="`menuicon${item.name}`"></i>
          {{ item.title }}
        </template>
        <template v-for="child in item.children">
          <MenuItem :name="child.name" :key="`menuitem${child.name}`">
            <span :key="`title${child.name}`">{{ child.title }}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  props: ['appRouter'],
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'openedSubmenuArr'
    ]),
    menuitemClasses () {
      return [
        'menu-item',
        this.shrink ? 'collapsed-menu' : ''
      ]
    }
  },
  watch: {
    openedSubmenuArr () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  methods: {
    changeMenu (active) {
      this.$emit('change', active)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
