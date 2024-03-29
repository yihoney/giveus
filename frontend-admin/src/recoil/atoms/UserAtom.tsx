import { userType } from '@/types/authTypes'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'currentUser',
  storage: localStorage,
})

const defaultUser = {
  memberNo: -1,
  email: '',
  name: '',
  createdAt: '',
  imageUrl: '/img/img_default_profile.png',
  provider: '',
  snsKey: '',
}

export const userState = atom<userType>({
  key: 'userState',
  default: defaultUser,
  effects_UNSTABLE: [persistAtom],
})
