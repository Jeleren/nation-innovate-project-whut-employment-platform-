import {cancelFollow, doFollow} from '@/api/user'
import store from '../store'

export const relation = {
  changeFollow: function (item) {
    let data = {}
    data.user_id = store.state.user.id
    data.target_id = item.id
    if (item.isFollow) {
      cancelFollow(data).then(res => {
        if (res.data) {
          item.isFollow = res.data.isFollow
        }
      })
    } else {
      doFollow(data).then(res => {
        if (res.data) {
          item.isFollow = res.data.isFollow
        }
      })
    }
  }
}
