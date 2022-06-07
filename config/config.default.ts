import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1653723563623_8818';

  // add your egg config in here
  config.middleware = ['errorHandler', 'jwtHandler'];

  config.errorHandler = {
    enable: true,
  };

  config.jwt = {
    secret: 'eb21923b9da873b987e07a2fce4755de1cfffb710747c5a40c3b622f8ca6ec3f',
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // add your egg plugin config in here
  const plugin = {
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/apifox', // url/db_name
        options: {
          useNewUrlParser: true,
          useFindAndModify: false,
        },
      },
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...plugin,
  };
};
