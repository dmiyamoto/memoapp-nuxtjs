const STORAGE_NAME = 'vuex_data'
const storageData = localStorage.getItem(STORAGE_NAME)

export const state = () => storageData ? JSON.parse(storageData) : {
  memoList: []
}

export const getters = {
  memoData(state) {
    return index => state.memoList[index]
  }
}

export const plugins = [
  (store) => {
    store.subscribe(() => {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(store.state))
    })
  }
]

export const mutations = {
  addMemo(state, memo) {
    state.memoList = [
      ...state.memoList,
      memo
    ]
  },
  updateText(state, { index, text }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      text
    }
  },
  changeZindex(state, { index }) {
    state.memoList = [...state.memoList]
    state.memoList.forEach((v, idx) => {
      if (v.zindex > 0) state.memoList[idx].zindex = state.memoList[idx].zindex - 1
      if (index === idx) state.memoList[idx].zindex = state.memoList.length - 1
    })
  },
  minusMemo(state, { index }) {
    state.memoList = [...state.memoList]
    state.memoList.splice(index, 1)
  },
  changeColor(state, { index, color }) {
    state.memoList = [...state.memoList]
    state.memoList[index].background = color
  },
  moveMemo(state, { index, target }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = target
  }
}
