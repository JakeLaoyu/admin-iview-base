<template>
  <div class="dropdown-wrap">
    <template v-for="(item,index) in appRouter">
      <Dropdown v-if="item.children.length !== 1" transfer placement="right-start" :key="index" @on-click="changeMenu">
        <Button style="width: 60px;margin-left: -5px;padding:10px 0;" type="text">
          <i :class="['iconfont', `${item.icon}`]" :key="`menuicon${item.name}`" style="font-size:20px;"></i>
        </Button>
        <DropdownMenu slot="list">
          <template v-for="(child,i) in item.children">
            <DropdownItem :name="child.name" :key="i">{{ child.title }}</DropdownItem>
          </template>
        </DropdownMenu>
      </Dropdown>

      <Dropdown transfer v-else placement="right-start" :key="index" @on-click="changeMenu">
        <Button @click="changeMenu(item.children[0].name)" style="width: 60px;margin-left: -5px;padding:10px 0;" type="text">
          <i :class="['iconfont', `${item.icon}`]" :key="`menuicon${item.name}`" style="font-size:20px;"></i>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem :name="item.children[0].name" :key="`d${index}`">{{ item.children[0].title }}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </template>
  </div>
</template>
<script>
export default {
  props: ['appRouter'],
  data () {
    return {}
  },
  methods: {
    changeMenu (active) {
      this.$emit('change', active)
    }
  }
}
</script>
<style lang="less" scoped>
.dropdown-wrap {
  text-align: center;
}
</style>
