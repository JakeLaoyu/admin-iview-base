<template>
<div class="layout">
  <Layout>
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="60" v-model="shrink" :style="{background: '#fff'}">
      <div class="site-title">播咖管理系统</div>
      <bc-shrinkable-menu
        :appRouter="appRouter"
        :shrink="shrink"
        >
    </bc-shrinkable-menu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon @click.native="collapsedSider" :class="rotateIcon" color="#fff" type="navicon-round" size="24"></Icon>
        <div class="main-breadcrumb">
          <bc-breadcrumb-nav :currentPath="currentPath"></bc-breadcrumb-nav>
        </div>
        <div class="user-dropdown-menu-con">
          <Row type="flex" justify="end" align="middle">
            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
              <a href="javascript:void(0)">
                <Icon type="ios-person-outline" :size="20" style="vertical-align: middle;"></Icon>
                <span class="main-user-name">倪杨洋</span>
                <Icon type="arrow-down-b"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>返回SIM</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
        </div>
      </Header>
      <Content :style="{margin: '20px', background: '#fff', minHeight: 'calc(100vh - 104px)'}">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </Content>
    </Layout>
  </Layout>
</div>
</template>
<script>
import {
  appRouter
} from '@/router/router.js'

import {
  setCurrentPath
} from '@/libs/util.js'

import {
  mapMutations
} from 'vuex'

export default {
  data () {
    return {
      appRouter,
      shrink: false
    }
  },
  computed: {
    currentPath () {
      return this.$store.state.currentPath // 当前面包屑数组
    },
    rotateIcon () {
      return [
        'menu-icon',
        this.shrink ? 'rotate-icon' : ''
      ]
    }
  },
  watch: {
    '$route' (to) {
      setCurrentPath(this, to.name)
    }
  },
  methods: {
    ...mapMutations([
      'addOpenSubmenu'
    ]),
    handleClickUserDropdown () {
      window.location.href = 'https://sim.dxy.cn'
    },
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  },
  mounted () {
    // do something after mounting vue instance
    let pathArr = setCurrentPath(this, this.$route.name)
    this.addOpenSubmenu(pathArr[0].name)
  }
}
</script>
<style scoped lang="less">
.menu-icon{
  transition: all .3s;
  margin: 0 20px;
  vertical-align: middle;
}
.rotate-icon{
  transform: rotate(-90deg);
}
.site-title{
  width: 100%;
  color: #fff;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  background: #7e6dbe;
}
.ivu-layout-sider-collapsed {
  .site-title {
    font-size: 0;
  }
}
.ivu-layout-header {
  .main-breadcrumb {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    .ivu-breadcrumb {
      color: #ffffff;
    }
  }
  &:after{
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
}
.user-dropdown-menu-con {
  position: absolute;
  right: 0;
  top: 0;
  width: 150px;
  height: 100%;
  padding-right: 20px;
  font-size: 14px;
  a {
    color: #fff;
    font-weight: bold;
  }
  .ivu-select-dropdown {
    top: 40px!important;
  }
}
</style>
