/*
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-10-21 17:26:52
 * @LastEditors: solid
 * @LastEditTime: 2022-10-26 13:59:30
 */
import request from '@/utils/request'
//上传
export function FileUpdate(data) {
    return request({
        url: '/client.php?action=upload',
        method: 'post',
        data,
        headers: { "Content-Type": "multipart/form-data;" },
    })
}
export function FileUpdate2(data) {
    return request({
        url: '/client.php?action=convertPdfTo',
        method: 'post',
        data,
    })
}
export function Other2PDF(data) {
    return request({
        url: '/client.php?action=convertToPdf',
        method: 'post',
        data,
    })
}
//存储
export function FileStatus(params) {
    return request({
        url: '/client.php',
        method: 'get',
        params,
    })
}