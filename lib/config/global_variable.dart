import 'package:flutter/material.dart';
import 'package:uuid/uuid.dart';


Map<String, dynamic> recommend = {"param": "", "name": ""};
String accessToken = "";
String refreshToken = "";
String tokenType = "";
String successVerity = "";
List<Locale> supportedLocales = const [
  Locale('zh', 'Hans'),
  Locale('zh', 'Hant'),
  Locale('en', 'US'),
  Locale('en')
];
Locale startLocale=Locale('zh', 'Hans');


String localizationPath = "assets/i18n";
String webBrowserInfoUuid = Uuid().v4();

bool isDark(BuildContext context) {
  return Theme.of(context).brightness == Brightness.dark;
}

BoxDecoration getDecoration(BuildContext context, Map<String, String> map) {
  print(map);
  print(isDark(context));
  return BoxDecoration(
    color: Colors.blueGrey,
    //   image: DecorationImage(
    // image: isDarkGetBackgroundImage(context),
    // fit: BoxFit.cover,)
  );
}
