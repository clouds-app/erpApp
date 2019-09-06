/**
 * 纸板入库，出仓
 */
import axios from '@/libs/api.request'
import config from '@/config'
//import Qs from 'qs'
 let apiPath= '/clerp-app-api'  //正式环境

export const spScanOrder = ({BarCodeStr,Station,Flag,FOrderNo,FQty,FDNum,FLine,FClass,Remark}) => {
    //参数
    let data = {
      BarCodeStr,Station,Flag,FOrderNo,FQty,FDNum,FLine,FClass,Remark
     }

    return axios.request({
      url: `${apiPath}/warehouse/warehouse/execute/spScanOrder`,
      data,
      method: 'POST',
    })
  }


