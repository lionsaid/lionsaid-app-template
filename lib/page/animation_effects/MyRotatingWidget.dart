import 'dart:math';

import 'package:flutter/material.dart';

import '../../utils/random_util.dart';

class MyRotatingWidget extends StatefulWidget {
  @override
  _MyRotatingWidgetState createState() => _MyRotatingWidgetState();
}

class _MyRotatingWidgetState extends State<MyRotatingWidget> {
  double _rotationAngle = 0.0; // 初始旋转角度

  // 函数用于改变旋转角度为180度
  void _rotateBox() {
    setState(() {
      _rotationAngle += 360.0; // 设置旋转角度为180度
    });
  }

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;

    return CustomScrollView(
      slivers: <Widget>[
        SliverAppBar(
            automaticallyImplyLeading: false,
            collapsedHeight: 200,
            expandedHeight: 200.0,
            // 设置SliverAppBar的高度
            pinned: false,
            // 将SliverAppBar固定在顶部
            // 关闭浮动效果
            flexibleSpace: Container(
              height: 200,
              color: Colors.cyanAccent,
            )),
        SliverAppBar(
          collapsedHeight: 200,
          expandedHeight: 200.0,
          // 设置SliverAppBar的高度
          pinned: true,
          // 将SliverAppBar固定在顶部
          floating: false,
          // 关闭浮动效果
          flexibleSpace: Container(
            height: 200,
            color: Colors.cyanAccent,
            child: Stack(
              children: [
                Positioned(
                    top: 60,
                    left: screenSize.height / 2 + 90,
                    child: GestureDetector(
                      onTap: () {
                        _rotateBox(); // 点击时触发旋转事件
                      },
                      child: Center(
                          child: AnimatedRotation(
                              angle: _rotationAngle,
                              duration: const Duration(seconds: 2),
                              // 动画持续时间为2秒
                              curve: Curves.easeInOut,
                              // 使用缓动曲线
                              child: Stack(
                                alignment: Alignment.center,
                                children: [
                                  CircularRing(
                                    innerRadius: 100,
                                    outerRadius: 150,
                                  ),
                                  Icon(Icons.star,
                                      size: 40.0, color: Colors.yellow),
                                  //在圆环中间
                                ],
                              ))),
                    )),
                Positioned(
                  top: 120,
                  child: Container(
                    color: Colors.green,
                    width: screenSize.width,
                    height: 80,
                  ),
                ),
              ],
            ),
          ),
        ),
        SliverList(
          delegate: SliverChildBuilderDelegate(
            (BuildContext context, int index) {
              // 在这里添加您的可滚动内容
              return ListTile(
                title: Text('Item $index'),
              );
            },
            childCount: 100, // 假设有100个列表项
          ),
        ),
      ],
    );
    Scaffold(
        body: ListView(
      children: [
        Container(
          height: 200,
          color: Colors.cyanAccent,
          child: Stack(
            children: [
              Positioned(
                  top: 60,
                  left: screenSize.height / 2 + 90,
                  child: GestureDetector(
                    onTap: () {
                      _rotateBox(); // 点击时触发旋转事件
                    },
                    child: Center(
                        child: AnimatedRotation(
                            angle: _rotationAngle,
                            duration: const Duration(seconds: 2),
                            // 动画持续时间为2秒
                            curve: Curves.easeInOut,
                            // 使用缓动曲线
                            child: Stack(
                              alignment: Alignment.center,
                              children: [
                                CircularRing(
                                  innerRadius: 100,
                                  outerRadius: 150,
                                ),
                                Icon(Icons.star,
                                    size: 40.0, color: Colors.yellow),
                                //在圆环中间
                              ],
                            ))),
                  )),
              Positioned(
                top: 120,
                child: Container(
                  color: Colors.green,
                  width: screenSize.width,
                  height: 80,
                ),
              ),
            ],
          ),
        ),
        Container(
          color: getRandomColor(),
          height: 500,
        ),
        Container(
          color: getRandomColor(),
          height: 500,
        ),
        Container(
          color: getRandomColor(),
          height: 500,
        ),
        Container(
          color: getRandomColor(),
          height: 500,
        ),
      ],
    ));
  }
}

class AnimatedRotation extends StatelessWidget {
  final double angle;
  final Duration duration;
  final Curve curve;
  final Widget child;

  AnimatedRotation({
    required this.angle,
    required this.duration,
    required this.curve,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      tween: Tween<double>(
        begin: 0.0,
        end: angle / 360.0, // 将角度转化为0到1之间的值
      ),
      duration: duration,
      curve: curve,
      builder: (context, value, child) {
        return Transform.rotate(
          angle: value * 2 * pi, // 乘以2*pi将值转化为弧度
          child: child,
        );
      },
      child: child,
    );
  }
}

class CircularRing extends StatelessWidget {
  final double innerRadius;
  final double outerRadius;

  CircularRing({
    required this.innerRadius,
    required this.outerRadius,
  });

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      size: Size(outerRadius / 2, outerRadius / 2),
      painter: CircularRingPainter(innerRadius, outerRadius),
    );
  }
}

class CircularRingPainter extends CustomPainter {
  final double innerRadius;
  final double outerRadius;

  CircularRingPainter(this.innerRadius, this.outerRadius);

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);

    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 40
      ..shader = _createRainbowShader(size);

    // canvas.drawCircle(center, outerRadius, paint);
    canvas.drawCircle(center, 70, paint);
    final textPainter = TextPainter(
      text: const TextSpan(
        text: "建筑",
        style: TextStyle(
          color: Colors.blue,
          fontSize: 16.0,
          fontWeight: FontWeight.bold,
        ),
      ),
      textDirection: TextDirection.ltr,
      textAlign: TextAlign.center,
    );

    textPainter.layout(minWidth: 0, maxWidth: size.width);
    textPainter.paint(
        canvas, Offset(center.dx - textPainter.width / 2 - 2, -40));
  }

  Shader _createRainbowShader(Size size) {
    final colors = [
      Colors.red,
      Colors.orange,
      Colors.yellow,
      Colors.green,
      Colors.blue,
      Colors.indigo,
      Colors.purple,
      Colors.red,
    ];

    final stops = List.generate(
      colors.length,
      (index) => (index.toDouble() / (colors.length - 1)),
    );

    return SweepGradient(
      colors: colors,
      stops: stops,
    ).createShader(Rect.fromCircle(
      center: Offset(size.width / 2, size.height / 2),
      radius: outerRadius,
    ));
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
