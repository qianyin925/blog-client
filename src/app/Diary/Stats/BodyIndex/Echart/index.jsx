import React from 'react';

import { Echart } from 'qyrc';
import { useSelector } from 'react-redux';

const useStateHook = () => {
  const statsBodyIndex = useSelector(state => state.diary.statsBodyIndex);

  // 处理数据
  const data = React.useMemo(
    () => (statsBodyIndex.reduce((total, { name, bodyIndex }) => ({
      xAxis: [... total.xAxis, name],
      weight: [... total.weight, bodyIndex.weight],
      bodyfat: [... total.bodyfat, bodyIndex.bodyfat],
      moistureContent: [... total.moistureContent, bodyIndex.moistureContent],
    }), { xAxis: [], bodyfat: [], weight: [], moistureContent: [] })),
    [statsBodyIndex]
  );

  // echarts 配置
  const option = React.useMemo(() => ({
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      right: 0,
      data: ['体重', '体脂', '水分'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
    },
    xAxis: {
      type: 'category',
      data: data.xAxis,
    },
    yAxis: {
      type: 'value',
      min: 'dataMin',
    },
    series: [
      {
        name: '体重',
        type: 'line',
        color: '#f8d613',
        data: data.weight,
      },
      {
        name: '体脂',
        type: 'line',
        color: '#1db7b5',
        data: data.bodyfat,
      },
      {
        name: '水分',
        type: 'line',
        color: '#5e0ac7',
        data: data.moistureContent,
      },
    ],
  }), [data]);

  return { option };
};

export default props => {
  const state = useStateHook(props);

  return (
    <Echart
      height={300}
      option={state.option}
    />
  );
};
