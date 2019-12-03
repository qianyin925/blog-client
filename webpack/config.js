const path = require('path');

// 自动加载 配置
module.exports.providePlugin = {
  _: 'lodash',
  lodash: 'lodash',
};

/* 路径别名配置 */
module.exports.alias = {
  '@app': path.resolve(__dirname, '../src/app'),
  '@api': path.resolve(__dirname, '../src/api'),
  '@hook': path.resolve(__dirname, '../src/hook'),
  '@store': path.resolve(__dirname, '../src/store'),
  '@pages': path.resolve(__dirname, '../src/pages'),
  '@utils': path.resolve(__dirname, '../src/utils'),
  '@config': path.resolve(__dirname, '../src/config'),
  '@assets': path.resolve(__dirname, '../src/assets'),
}

/* 全局变量 */
module.exports.globalConsts = {
  // 生产
  production: {
    _DEV_: false,
    PUBLICKEY: JSON.stringify(`-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxSW2MdWYl52YFeOcNdAO
    wCxVmqt4UmPYEhNjTPIQjEaBpdcXoADPv3aCRZpXnCbJNvH3bQWGl/L93UwaWkYE
    Mk6uyHxwhcpUe6xiZsJo4+uDbT1fR2tP+ZYCrIQzELepKqDlfebi9FWwU9Ti9p01
    6g1NP7FBc1H1kzf2X6fPMzPXbaLA7U3MKiNpqeEE9yC0ftagkETyfNn+6Ipzf3XW
    50nQuC84Sz0b1DqZoZBqbLzJiGsBDPUIhIvQq0SBCV8MnEK3BdAtHefeAbN4pGX2
    qokuSF2T1UCw5/YxEZ8MpD6UxxSTbGRIuWC+A0KbjW96GlMaMp6z8jaFl0U2X+Bc
    nwIDAQAB
    -----END PUBLIC KEY-----`),
    GLOBAL_SERVICE: {
      HOST: JSON.stringify('http://www.qianyin925.com:4000'),
      GRAPHQL_URL: JSON.stringify('/graphql'),
    },
  },

  // 开发
  development: {
    _DEV_: true,
    PUBLICKEY: JSON.stringify(`-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoWATfIA97hbj8rbtZBPo
    T+gR7iK5IV1weysfOSJcE1CoqJt9bePHkQeBLj1cWbM9m5wvkB2WQN3YCKDHzqVd
    9pQ6AHOkx7cCxMrjBm8QEV7ACU+NN/2MBRmOHiuRq+PdDfV+V6b/RYCn8hMmVkTU
    SGGyYkSou8bigBkCwv56x7I0AkdSkCQ1oYgWqfbW9Ms6QTIxmeCO2sI4mr/ABYDi
    oVHY0hIBM9nR8Dcb4u/faXRh2nwhBgpSm09CXaKzFv2WmYxWgul3i6zlzAhziO6s
    ogueSeM9qOIZhWn2uAd8pHsK3KHUA91EPphQvR+ReFJV6J1t5a7Cy5+I9sz62jIz
    JwIDAQAB
    -----END PUBLIC KEY-----`),
    GLOBAL_SERVICE: {
      HOST: JSON.stringify('http://localhost:4000'),
      GRAPHQL_URL: JSON.stringify('/graphql'),
    },
  },
}
