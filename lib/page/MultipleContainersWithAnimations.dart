import 'package:flutter/material.dart';

class MultipleContainersWithAnimations extends StatefulWidget {
  @override
  createState() => _MultipleContainersWithAnimationsState();
}

class _MultipleContainersWithAnimationsState
    extends State<MultipleContainersWithAnimations>
    with TickerProviderStateMixin {
  late AnimationController _controller1;
  late Animation<double> _animation1;
  late AnimationController _controller2;
  late Animation<double> _animation2;

  @override
  void initState() {
    super.initState();

    // 创建第一个容器的动画控制器和动画
    _controller1 =
        AnimationController(duration: Duration(seconds: 2), vsync: this);
    _animation1 = Tween<double>(begin: 0.0, end: 1.0).animate(_controller1);

    // 创建第二个容器的动画控制器和动画
    _controller2 =
        AnimationController(duration: Duration(seconds: 5), vsync: this);
    _animation2 = Tween<double>(begin: 0.0, end: 1.0).animate(_controller2);

    // 启动动画
    _controller1.forward();
    _controller2.forward();
  }

  @override
  void dispose() {
    _controller1.dispose();
    _controller2.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('多个容器的不同动画效果'),
      ),
      body: ListView(
        children: [
          AnimatedBuilder(
            animation: _animation1,
            builder: (context, child) {
              return Opacity(
                opacity: _animation1.value,
                child: Container(
                  width: 100.0,
                  height: 100.0,
                  color: Colors.blue,
                  child: Center(
                    child: Text(
                      'Container 1',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                ),
              );
            },
          ),
          SizedBox(height: 20.0),
          AnimatedBuilder(
            animation: _animation2,
            builder: (context, child) {
              return Opacity(
                opacity: _animation2.value,
                child: Container(
                  width: 100.0,
                  height: 100.0,
                  color: Colors.green,
                  child: Center(
                    child: Text(
                      'Container 2',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
