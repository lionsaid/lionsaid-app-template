import 'dart:convert';

import 'package:cookie_jar/cookie_jar.dart';
import 'package:dio/dio.dart';
import 'package:dio_cookie_manager/dio_cookie_manager.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:hive/hive.dart';

import '../config/setting.dart';

void main() async {
  var dio = Dio();
  var cookieJar = CookieJar();
  dio.interceptors.add(CookieManager(cookieJar));
  await dio.get("https://baidu.com/");
  // Print cookies
  print(cookieJar.loadForRequest(Uri.parse("https://baidu.com/")));
  // second request with the cookie
  await dio.get("https://baidu.com/");
}

class HttpClientUtils {
  //进行GET请求
  Future<dynamic> getCache(
      BaseOptions baseOptions, String path, Map<String, dynamic> map) async {
    var box = await Hive.openBox('http_cache');
    var key = generateMD5(apiVersion + path + map.toString());
    print(box.containsKey(key));
    if (box.containsKey(key)) {
      if (isEncrypt) {
        dynamic decode =
            json.decode(encrypter.decrypt64(await box.get(key), iv: iv));
        return decode;
      } else {
        return await box.get(key);
      }
    } else {
      Dio dio = Dio(baseOptions);
      dio.interceptors.add(interceptorsWrapper());
      Response response = await dio.get(
        path,
        queryParameters: map,
      );
      if (isEncrypt) {
        dynamic decode =
            json.decode(encrypter.decrypt64(response.data, iv: iv));
        //print(decode);
        box.put(key, response.data);
        return decode;
      } else {
        box.put(key, response.data);
        return response.data;
      }
    }
  }

  Future<dynamic> get(
      BaseOptions baseOptions, String path, Map<String, dynamic> map) async {
    Dio dio = Dio(baseOptions);
    dio.interceptors.add(interceptorsWrapper());
    Response response = await dio.get(
      path,
      queryParameters: map,
    );
    return response.data;
  }

  InterceptorsWrapper interceptorsWrapper() {
    return InterceptorsWrapper(
      onError: (DioException error, handler) {
        if (error.type == error.response) {
          // 在这里处理响应异常，比如服务器返回的错误信息
          print(
              'Response Error: ${error.response?.statusCode} - ${error.response?.data}');
          EasyLoading.showError('服务器错误: ${error.response?.statusCode}');
        } else if (error.type == DioExceptionType.connectionTimeout ||
            error.type == DioExceptionType.receiveTimeout) {
          EasyLoading.showError("请求服务超时请稍后再试");
        } else {
          EasyLoading.showError(error.response?.data['message']);
        }
        // 你可以选择如何处理异常，比如弹出一个通知、显示一个错误页面等
        // 继续传递错误，以便后续拦截器可以处理
        // handler.next(error);
      },
    );
  }

  Future<dynamic> put(
      BaseOptions baseOptions, String path, Map<String, dynamic> map) async {
    Dio dio = Dio(baseOptions);
    dio.interceptors.add(interceptorsWrapper());
    Response response = await dio.put(
      path,
      queryParameters: map,
    );
    return response.data;
  }

  Future<dynamic> post(
      BaseOptions baseOptions, String path, Map<String, dynamic> map) async {
    Dio dio = Dio(baseOptions);
    dio.interceptors.add(interceptorsWrapper());
    Response response = await dio.post(
      path,
      data: map,
    );
    return response.data;
  }

  Future<dynamic> postJson(
      BaseOptions baseOptions, String path, String json) async {
    Dio dio = Dio(baseOptions);
    dio.interceptors.add(interceptorsWrapper());
    Response response = await dio.post(
      path,
      data: json,
    );
    return response.data;
  }
}
