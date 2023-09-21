import 'dart:io';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:go_router/go_router.dart';
import 'package:hive/hive.dart';
import 'package:lionsaid_app_template/page/color_theme_screen.dart';
import 'package:lionsaid_app_template/page/container_example_screen.dart';
import 'package:lionsaid_app_template/page/scroll_listener_screen.dart';
import 'package:path_provider/path_provider.dart' as pathProvider;

import 'config/global_variable.dart';
import 'page/MultipleContainersWithAnimations.dart';
import 'page/animation_effects/MyAnimatedPositionedWidget.dart';
import 'page/animation_effects/MyRotatingWidget.dart';
import 'page/home_screen.dart';
import 'page/matrix_images_screen.dart';
import 'page/rotating_half_circle.dart';
import 'page/splash_screen.dart';
import 'page/text_theme_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  EasyLocalization.ensureInitialized();

  try {
    Directory directory = await pathProvider.getApplicationDocumentsDirectory();
    Hive.init(directory.path);
    print('directory: $directory');
  } catch (err) {
    print('Caught error: $err');
  }
  await SystemChrome.setPreferredOrientations(<DeviceOrientation>[
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown
  ]).then((_) => runApp(
        EasyLocalization(
            supportedLocales: supportedLocales,
            path: localizationPath,
            startLocale: startLocale,
            // <-- change the path of the translation files
            fallbackLocale: startLocale,
            child: MyApp()),
      ));
}

final GoRouter _router = GoRouter(
  routes: <RouteBase>[
    GoRoute(
        path: '/',
        builder: (BuildContext context, GoRouterState state) {
          return SplashScreen();
        },
        routes: [
          GoRoute(
            path: 'home',
            builder: (BuildContext context, GoRouterState state) {
              return const HomeScreen();
            },
          ),
          GoRoute(
            path: 'matrixImagesWidget',
            builder: (BuildContext context, GoRouterState state) {
              return const MatrixImagesWidget();
            },
          ),
          GoRoute(
            path: 'scrollableScreen',
            builder: (BuildContext context, GoRouterState state) {
              return MultipleContainersWithAnimations();
            },
          ),
          GoRoute(
            path: 'textThemeScreen',
            builder: (BuildContext context, GoRouterState state) {
              return const TextThemeScreen();
            },
          ),
          GoRoute(
            path: 'ColorThemeScreen',
            builder: (BuildContext context, GoRouterState state) {
              return const ColorThemeScreen();
            },
          ),
          GoRoute(
            path: 'ContainerExampleScreen',
            builder: (BuildContext context, GoRouterState state) {
              return const ContainerExampleScreen();
            },
          ),
          GoRoute(
            path: 'ScrollListenerScreen',
            builder: (BuildContext context, GoRouterState state) {
              return ScrollListenerScreen();
            },
          ),
          GoRoute(
            path: 'RotatingHalfCircle',
            builder: (BuildContext context, GoRouterState state) {
              return RotatingHalfCircle();
            },
          ),
          GoRoute(
            path: 'MyAnimatedPositionedWidget',
            builder: (BuildContext context, GoRouterState state) {
              return MyAnimatedPositionedWidget();
            },
          ),
          GoRoute(
            path: 'MyRotatingWidget',
            builder: (BuildContext context, GoRouterState state) {
              return MyRotatingWidget();
            },
          ),
        ]),
  ],
);

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      localizationsDelegates: context.localizationDelegates,
      supportedLocales: context.supportedLocales,
      locale: context.locale,
      routerConfig: _router,
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.light,
      theme: ThemeData.light(useMaterial3: true),
      darkTheme: ThemeData.dark(useMaterial3: true),
      builder: EasyLoading.init(),
    );
  }
}
