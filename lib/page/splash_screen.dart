import 'dart:async';
import 'dart:math';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with SingleTickerProviderStateMixin {
  late final AnimationController _animationController = AnimationController(
    duration: const Duration(milliseconds: 500),
    vsync: this,
  );

  int _countdown = 5;
  String uri = "assets/screen/img_" + Random().nextInt(27).toString() + ".png";

  @override
  void initState() {
    super.initState();
    startCountdown();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void startCountdown() {
    Timer.periodic(const Duration(seconds: 1), (timer) {
      setState(() {
        _countdown--;
      });

      if (_countdown == 0) {
        timer.cancel();
        navigateToHome();
      }
    });
  }

  navigateToHome() {
    //  GoogleAds().createInterstitialAd();
    _animationController.forward().whenComplete(() {
      context.go('/home');
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          Image.asset(
            uri, // 图片路径
            fit: BoxFit.cover,
          ),
          Positioned(
            top: 60,
            right: 40,
            child: OutlinedButton(
                onPressed: navigateToHome,
                child: Text(
                  '$_countdown ' + context.tr("clickSkip"),
                  style: const TextStyle(
                    fontSize: 18,
                    color: Colors.white,
                  ),
                )),
          ),
        ],
      ),
    );
  }
}
