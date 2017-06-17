import axios from 'axios';
import assert from 'assert';

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
  version: '7.5'
};
const baseUrl = 'http://iface.qiyi.com/openapi/batch';
// const baseUrl = 'http://andiedie.cn:9000/openapi/batch';

async function fetch (url, param) {
  const {data} = await axios.get(baseUrl + url, {
    params: Object.assign(defaultParam, param)
  });
  assert(data.code === 100000 || data.code === 0, `api response: code error: ${data}`);
  return data.data;
}

/**
 * @returns {Promise}
 */
const getChannels = async () => {
  return fetch('/channel', {
    type: 'list'
  });
};

/**
 * @param name : name of channel, in Chinese. i.e '电影'
 * @param mode : mode of sorting, see api pdf, page 5
 * @returns {Promise}
 */
const getChannelDetail = async (name, mode = 1) => {
  return fetch('/channel', {
    type: 'detail',
    channel_name: name
  });
};

/**
 * @returns {Promise}
 */
const getRecommends = async () => {
  return fetch('/recommend');
};

/**
 * @param key : key for searching
 * @returns {Promise}
 */
const search = async key => {
  return fetch('/search', {
    key,
    from: 'mobile_list'
  });
};

export default {
  getChannels,
  getChannelDetail,
  getRecommends,
  search
};
