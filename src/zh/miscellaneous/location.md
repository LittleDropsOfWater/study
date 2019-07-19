# GPS和GPRS
GPS:定位
GPRS:通讯
本身是硬件，小模块

WEB无法实现GPS定位
仅能实现
- 调用客户端的GPS模块
- GeoLocation（有感知，弹框）
- IP定位（无感知）
## GeoLocation
	获取经纬度
	BOM上的方法
	navigator.geolocation.getCurrentPosition(res=>console.log('res...',res))

## IP定位
调用接口即可
http://baojia.chelun.com/location-client.html
返回
```json
{"code":1,"msg":"success","data":{"CityID":"201","CityName":"北京"},"timestamp":1563501771,"version":1}
```
