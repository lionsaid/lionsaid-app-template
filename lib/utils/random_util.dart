import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';

Random random = Random();

Color getRandomColor() {
  final hue = random.nextInt(360);
  final saturation = random.nextDouble() * 0.5 + 0.5;
  final value = random.nextDouble() * 0.5 + 0.5;
  return HSVColor.fromAHSV(1.0, hue.toDouble(), saturation, value).toColor();
}

int getRandomNum(int min, int max) {
  Random random = Random();
  return min + random.nextInt(max - min + 1);
}

double getRandomDouble(double min, double max) {
  Random random = Random();
  return min + random.nextDouble() * (max - min);
}
String generateRandomChinese(int length) {
  Random random = Random();
  String randomString = '';

  for (int i = 0; i < length; i++) {
    int randomCode = random.nextInt(20902 - 19968 + 1) + 19968; // 汉字Unicode范围
    randomString += String.fromCharCode(randomCode);
  }
  return randomString;
}
