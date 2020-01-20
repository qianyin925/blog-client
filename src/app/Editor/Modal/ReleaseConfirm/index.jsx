import React from 'react';
import scss from './index.module.scss';

import { Modal } from 'antd';
import { RELEASE_CONFIRM } from '../consts';
import { useDispatch, useSelector } from 'react-redux';

const useStateHook = () => {
  const dispatch = useDispatch();

  const article = useSelector(
    state => _.get(state, `modal[${RELEASE_CONFIRM}].article`)
  );

  const onCancel = () => {
    dispatch({
      code: RELEASE_CONFIRM,
      type: 'modal/closeModal',
    });
  };

  const onOk = async () => {
    dispatch({
      id: article.id,
      type: 'editor/releaseArticle',
    });
    onCancel();
  };

  return { article, onCancel, onOk };
};

export default () => {
  const state = useStateHook();

  return (
    <Modal
      okText="发布"
      closable={false}
      cancelText="取消"
      onOk={state.onOk}
      getContainer={false}
      className={scss.modal}
      visible={!!state.article}
      onCancel={state.onCancel}>
      发布文章:
      <span className={scss['article-name']}>
        {_.get(state, 'article.name') || '---'}
      </span>
      ？
    </Modal>
  );
};
