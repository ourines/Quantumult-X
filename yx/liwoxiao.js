
[rewrite_local]

^http[s]?:\/\/www.liwoxiao.com\/api\/game\/account\/data\/upload url script-response-body https://raw.githubusercontent.com/ourines/Quantumult-X/main/yx/liwoxiao.js

[mitm] 

hostname = www.liwoxiao.com

*******************************/

var body = $response.body.replace(/playerInfo_gold\\":\d+/g,'playerInfo_gold\\":88888888')
.replace(/playerInfo_buildScore\\":\d+/g,'playerInfo_buildScore\\":88888888')
.replace(/playerInfo_shipuScore\\":\d+/g,'playerInfo_shipuScore\\":8888')
.replace(/playerInfo_diamond\\":\d+/g,'playerInfo_diamond\\":8888')
$done({ body });
