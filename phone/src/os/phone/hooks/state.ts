import { atom } from 'recoil';
import { ResourceConfig } from '@typings/config';
import { isEnvBrowser } from '@utils/misc';

export const phoneState = {
  visibility: atom<boolean>({
    key: 'phoneVisibility',
    default: isEnvBrowser(),
  }),
  resourceConfig: atom<ResourceConfig>({
    key: 'resourceConfig',
    default: null,
  }),
  phoneTime: atom<string>({
    key: 'phoneTime',
    default: null,
  }),
  isPhoneDisabled: atom<boolean>({
    key: 'isPhoneDisabled',
    default: false,
  }),
  playerSource: atom<number>({
    key: 'playerSource',
    default: 0,
  }),
  extApps: atom({
    key: 'phoneExtApps',
    default: [],
  }),
};
