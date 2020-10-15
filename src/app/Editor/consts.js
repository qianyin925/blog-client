import { APP_CODE, DATASETSFROM_CODE } from '@config/consts';

// 弹窗类型常量 - 发布
export const RELEASE_CONFIRM = 'EDITOR_RELEASE_CONFIRM';

// 弹窗类型常量 - 撤销
export const REVOKE_CONFIRM = 'EDITOR_REVOKE_CONFIRM';

// 弹窗类型常量 - 缩略图配置
export const THUMB_SETTING = 'EDITOR_THUMB_SETTING';

// 弹窗类型常量 - 移动文章
export const MOVE_ARTICLE = 'EDITOR_MOVE_ARTICLE';

// Activity 配置
export const ACTIVITY_LIST = {
  ALL: {
    KEY: 'resource',
    TITLE: '全部',
    ICON: 'icon-all',
  },
};

// 未定义 tag: 存储那些未设置 tag 或者 tag 已删除的文章
export const UNDEFINED_TAG = {
  name: '未定义',
  parent: null,
  value: -99999,
  id: 'undefinedTag',
  code: DATASETSFROM_CODE.ARTICLE_TYPE.VALUE,
};

// message 配置
export const MESSAGE_CONFIG = {
  bottom: 10,
  code: APP_CODE.EDITOR,
  placement: 'bottomRight',
};
