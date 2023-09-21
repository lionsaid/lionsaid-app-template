import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class RotatingHalfCircle extends StatefulWidget {
  @override
  _RotatingHalfCircleState createState() => _RotatingHalfCircleState();
}

class _RotatingHalfCircleState extends State<RotatingHalfCircle> {
  double rotationAngle = 0.0;
  Color topColor = Colors.red;
  Color bottomColor = Colors.blue;

  void rotateAndChangeColor() {
    setState(() {
      rotationAngle += math.pi; // 旋转180度
      if (rotationAngle >= 2 * math.pi) {
        rotationAngle -= 2 * math.pi; // 防止角度过大
      }
      if (rotationAngle == math.pi) {
        topColor = Colors.blue; // 切换颜色
        bottomColor = Colors.red;
      } else {
        topColor = Colors.red;
        bottomColor = Colors.blue;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Theme.of(context).colorScheme.primary.withGreen(10),
        appBar: AppBar(
          title: const Text('色彩主题'),
          leading: IconButton(
            icon: const Icon(
              Icons.arrow_back_ios_new,
              size: 25,
            ),
            onPressed: () => {context.go("/home")},
          ),
        ),
        body: InkWell(
          onTap: rotateAndChangeColor,
          child: CustomPaint(
            size: Size(200, 200),
            painter: HalfCirclePainter(rotationAngle, topColor, bottomColor),
          ),
        ));
  }
}

class HalfCirclePainter extends CustomPainter {
  final double rotationAngle;
  final Color topColor;
  final Color bottomColor;

  HalfCirclePainter(this.rotationAngle, this.topColor, this.bottomColor);

  @override
  void paint(Canvas canvas, Size size) {
    final centerX = size.width / 2;
    final centerY = size.height / 2;
    final radius = size.width / 2;
    final startAngle = -math.pi; // -π
    final endAngle = 0.0; // 0度
    final sweepAngle = math.pi; // π

    final paintTop = Paint()
      ..color = topColor
      ..style = PaintingStyle.fill;

    final paintBottom = Paint()
      ..color = bottomColor
      ..style = PaintingStyle.fill;

    final path = Path()
      ..arcTo(
        Rect.fromCircle(center: Offset(centerX, centerY), radius: radius),
        startAngle + rotationAngle,
        sweepAngle,
        false,
      );

    canvas.drawPath(path, paintTop);

    final path2 = Path()
      ..arcTo(
        Rect.fromCircle(center: Offset(centerX, centerY), radius: radius),
        startAngle + rotationAngle + math.pi, // 旋转180度
        sweepAngle,
        false,
      );

    canvas.drawPath(path2, paintBottom);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
