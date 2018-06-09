import { appRouter } from '@/router/router.js'

export const toDefaultPage = (routers, name, route, next) => {
  let len = routers.length
  let i = 0
  let notHandle = true
  while (i < len) {
    if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
      route.replace({
        name: routers[i].children[0].name
      })
      notHandle = false
      next()
      break
    }
    i++
  }
  if (notHandle) {
    next()
  }
}

export const setCurrentPath = (vm, name) => {
  let currentPathArr = []

  let currentPathObj = appRouter.filter(item => {
    if (item.children.length <= 1) {
      return item.children[0].name === name
    } else {
      let i = 0
      let childArr = item.children
      let len = childArr.length
      while (i < len) {
        if (childArr[i].name === name) {
          return true
        }
        i++
      }
      return false
    }
  })[0]
  if (currentPathObj.children.length <= 1) {
    currentPathArr = [
      {
        title: currentPathObj.title,
        path: '',
        name: name
      }
    ]
  } else {
    let childObj = currentPathObj.children.filter((child) => {
      return child.name === name
    })[0]
    currentPathArr = [
      {
        title: currentPathObj.title,
        path: '',
        name: currentPathObj.name
      },
      {
        title: childObj.title,
        // path: currentPathObj.path + '/' + childObj.path,
        path: '',
        name: name
      }
    ]
  }
  vm.$store.commit('setCurrentPath', currentPathArr)

  return currentPathArr
}
