import React, {
  useState,
  useEffect,
} from 'react';
import moment from 'moment';
import Cards from './Cards';
import Echart from './Echart';
import classNames from 'classnames';
import scss from './index.module.scss';

import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { STATS_SAPN } from '../../consts';

// span 和 name 映射表
const SPAN_MAP_NAME = {
  [STATS_SAPN.MONTH.VALUE]: [
    moment()
      .startOf('month')
      .subtract(12, 'months')
      .format('YYYY-MM-DD'),
    moment()
      .endOf('month')
      .format('YYYY-MM-DD'),
  ],
  [STATS_SAPN.YEAR.VALUE]: [
    moment()
      .subtract(10, 'years')
      .startOf('years')
      .format('YYYY-MM-DD'),
    moment()
      .endOf('years')
      .format('YYYY-MM-DD'),
  ],
};

const useStateHook = () => {
  const [span, setSpan] = useState(STATS_SAPN.MONTH.VALUE);
  const dispatch = useDispatch();

  // 切换
  const onToggleSpan = span => {
    setSpan(span);
  };

  // 获取按钮 classNam
  const getBtnClassName = value => classNames(
    scss['header-btn'],
    { [scss['header-btn-action']]: span === value }
  );

  // 监听 span 的变化并查询数据
  useEffect(() => {
    dispatch({
      type: 'diary/getStatsBill',
      search: {
        span,
        name: SPAN_MAP_NAME[span],
      },
    });
  }, [span]);

  return { span, onToggleSpan, getBtnClassName };
};

export default () => {
  const state = useStateHook();
  return (
    <Card
      bordered={false}
      title="历史收入 / 支出"
      className={scss.card}
      extra={
        <div className={scss['header-btns']}>
          {Object.values(STATS_SAPN).map(v => (
            <div
              key={v.VALUE}
              className={state.getBtnClassName(v.VALUE)}
              onClick={state.onToggleSpan.bind(null, v.VALUE)}>
              {v.DESC}
            </div>
          ))}
        </div>
      }>
      <Cards/>
      <Echart span={state.span}/>
    </Card>
  );
};
