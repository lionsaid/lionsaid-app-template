import 'package:flutter/material.dart';

class MyAnimatedPositionedWidget extends StatefulWidget {
  @override
  _MyAnimatedPositionedWidgetState createState() =>
      _MyAnimatedPositionedWidgetState();
}

class _MyAnimatedPositionedWidgetState
    extends State<MyAnimatedPositionedWidget> {
  double _xPosition = 0.0; // 初始X坐标位置

  // 函数用于改变X坐标位置
  void _moveBox() {
    setState(() {
      _xPosition = _xPosition == 0.0 ? 200.0 : 0.0; // 移动到新的X坐标位置
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('位移效果示例'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            // 使用AnimatedContainer来创建位移效果
            AnimatedContainer(
              duration: Duration(seconds: 1),
              // 动画持续时间
              width: 100.0,
              height: 100.0,
              color: Colors.blue,
              margin: EdgeInsets.only(left: _xPosition),
              // 左边距决定X坐标位置
              child: Center(
                child: Text(
                  '移动我',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
            SizedBox(height: 20.0),
            ElevatedButton(
              onPressed: _moveBox,
              child: Text('开始移动'),
            ),
          ],
        ),
      ),
    );
  }
}
