const { RESCODE } = require('../../../config/conts');
const getConditions = require('../../utils/getConditions');
const getList = require('./getList');
/**
 * 修改
 * @param {Object}  data    响应基础数据
 * @param {String}  model   模型名称
 * @param {Object}  ctx     koa上下文
 * @param {Object}  conds   要更新数据的查询条件
 * @param {Object}  body    创建信息
 * @param {Object}  params  查询参数
 * @param {Object}  page    分页信息
 */
module.exports = (data) => async ({ model, ctx, conds, body, orderBy, params, page }) => {
  data = {...data};
  const server = ctx.db.mongo[model];
  const changeConds = getConditions(conds);
  try {
    body.updateTime = Date.now();
    body.updater = null;
    await server.updateMany(changeConds, body, {});
  } catch (e) {
    data.message = RESCODE.FAIL;
    data.message = '修改失败';
  }
  if (params){
    const listData = await getList(data)({ model, ctx, params, page, orderBy });
    data.stats = listData.stats || {};
    data.list = listData.list || [];
    data.page = listData.page || {};
  }
  data.change = await server.find(changeConds);
  return data;
}
