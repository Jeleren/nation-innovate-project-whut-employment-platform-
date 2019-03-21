import {cancelFollow, doFollow} from '@/api/user'
import store from '../store'
import {recProsCancelFollow, recProsFollow} from '@/api/personal'

export const relation = {
  changeFollow: function (item) {
    let formData = new FormData()
    let id = store.state.user.userInfo.id
    formData.append('id', id)
    formData.append('target_id', item.id)
    if (item.isFollow) {
      cancelFollow(formData).then(res => {
        if (res.data) {
          item.isFollow = res.data.isFollow
        }
      })
    } else {
      doFollow(formData).then(res => {
        if (res.data) {
          item.isFollow = res.data.isFollow
        }
      })
    }
  },
  changeFollowPros: function (item) {
    let formData = new FormData()
    let id = store.state.user.userInfo.id
    formData.append('id', id)
    formData.append('pros_id', item.id)
    if (item.isFollow) {
      recProsCancelFollow(formData).then(res => {
        item.isFollow = res.data.isFollow
        item.follow--
      })
    } else {
      recProsFollow(formData).then(res => {
        item.isFollow = res.data.isFollow
        item.follow++
      })
    }
  }
}
