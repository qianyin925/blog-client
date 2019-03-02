import React from 'react';
import { useOptionsHook } from '@hook';
import { StableLabel } from '@components';
import { Card, Input, Select } from 'antd';
const { TextArea } = Input;

export default ({form}) => {
  const tagOptions = useOptionsHook({ model: 'Tag' });
  return (
    <Card
      title="一般设置"
      className="block_first">
      
      <StableLabel label="标题" length="3" required right>
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入文章标题' }],
        })(
          <Input placeholder="请输入文章标题"/>
        )}
      </StableLabel>

      <StableLabel label="标签" length="3" right>
        {form.getFieldDecorator('tags', {
        })(
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="请选择标签"
          >
            { tagOptions.options }
          </Select>
        )}
      </StableLabel>

      <StableLabel label="概要" length="3" right>
        {form.getFieldDecorator('desc', {
        })(
          <TextArea autosize={{ minRows: 6, maxRows: 6 }} placeholder="请输入文章概要" />
        )}
      </StableLabel>
    </Card>
  );
};
