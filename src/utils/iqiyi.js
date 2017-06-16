const axios = require('axios');
const assert = require('assert');
const {URL, resolve} = require('url');

const defaultParam = {
  app_k: 'f0f6c3ee5709615310c0f053dc9c65f2',
  app_v: 8.4,
  app_t: 0,
  platform_id: 12,
  dev_os: '10.3.1',
  dev_ua: 'iPhone9,3',
  dev_hw: '{"cpu":0,"gpu":"","mem":"50.4MB"}',
  net_sts: 1,
  scrn_sts: 1,
  scrn_res: '1334*750',
  scrn_dpi: 153600,
  qyid: '87390BD2-DACE-497B-9CD4-2FD14354B2A4',
  secure_v: 1,
  secure_p: 'iPhone',
  core: 1,
  req_sn: 1493946331320,
  req_times: 1,
  version: '7.5' // client version
};
const baseUrl = 'http://iface.qiyi.com/openapi/realtime/';

async function fetch (url, param) {
  let obj = Object.assign({}, defaultParam, param);
  const {data} = await axios.get(new URL(resolve(baseUrl, url) + encodeUrlQueries(obj)).toString());
  assert(data.code === 100000 || data.code === 0, `api response: code error: ${data}`);
  return data.data;
}

function encodeUrlQueries (obj) {
  let param = '';
  for (let key of Object.keys(obj)) {
    param += '&' + key + '=' + obj[key];
  }
  return '?' + param.slice(1);
}

/**
 *
 * @returns {Promise}
 */
exports.getChannels = async () => {
  return fetch('channel', {
    type: 'list'
  });
};

/**
 *
 * @param name : name of channel, in Chinese. i.e '电影'
 * @param mode : mode of sorting, see api pdf, page 5
 * @returns {Promise}
 */
exports.getChannelDetail = async (name, mode = 1) => {
  return fetch('channel', {
    type: 'detail',
    channel_name: name
  });
};

/**
 *
 * @returns {Promise}
 */
exports.getRecommends = async () => {
  return fetch('recommend');
};

/**
 *
 * @param key : key for searching
 * @returns {Promise}
 */
exports.search = async key => {
  return fetch('search', {
    key,
    from: 'mobile_list'
  });
};
