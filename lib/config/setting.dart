import 'dart:convert';

import 'package:convert/convert.dart';
import 'package:crypto/crypto.dart';
import 'package:dio/dio.dart';
import 'package:encrypt/encrypt.dart';

const String fontFamily = "alibaba";
const bool debugShowCheckedModeBanner = false;
const bool debugShowMaterialGrid = false;

const String lionsaid_gateway_url = "http://localhost:8080";
var appVersion = "20230614";
var apiVersion = "v1.2022.03.12";
final key = Key.fromUtf8('axap1tanexmj7kiveunnawse');
final iv = IV.fromUtf8("1954682228745975");
final encrypter = Encrypter(AES(key, mode: AESMode.cbc));

bool isEncrypt = false;
const Duration cacheDuration = Duration(hours: 1);
var options = BaseOptions(
    sendTimeout: const Duration(minutes: 1),
    baseUrl: lionsaid_gateway_url,
    connectTimeout: const Duration(minutes: 1),
    receiveTimeout: const Duration(minutes: 1),
    headers: {
      "Access-Control-Allow-Origin": "*",
    });

// md5 加密
String generateMD5(String data) {
  var content = const Utf8Encoder().convert(data);
  var digest = md5.convert(content);
  // 这里其实就是 digest.toString()
  return hex.encode(digest.bytes);
}
