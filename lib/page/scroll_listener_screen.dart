import 'package:flutter/material.dart';
import 'package:visibility_detector/visibility_detector.dart';

class ScrollListenerScreen extends StatefulWidget {
  @override
  _ContainerDemoState createState() => _ContainerDemoState();
}

class _ContainerDemoState extends State<ScrollListenerScreen> {
  ScrollController _scrollController = ScrollController();
  List<Key> globalKeyList = [
    Key("隋"),
    Key("唐"),
    Key("五代十国"),
    Key("十国"),
    Key("宋辽"),
    Key("西夏"),
    Key("金"),
    Key("元"),
    Key("明"),
  ];
  String str = "Container Demo";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: ClockwiseRotationText(
          text: str,
          duration: Duration(seconds: 4), // 旋转一圈所需的时间
        ),
      ),
      body: ListView(
        children: List.generate(
          globalKeyList.length,
          (index) {
            Key key = globalKeyList[index];
            return VisibilityDetector(
                key: key,
                onVisibilityChanged: (visibilityInfo) {
                  if (double.parse(
                          visibilityInfo.visibleFraction.toStringAsFixed(2)) >
                      0.35) {
                    setState(() {
                      str = visibilityInfo.key.toString();
                    });
                    debugPrint('Widget ${visibilityInfo.key}  visible');
                  }
                },
                child: Container(
                  key: key,
                  height: 500,
                  color: index % 2 == 0 ? Colors.blue : Colors.green,
                  alignment: Alignment.center,
                  child: Text('Container $key.toString()'),
                ));
          },
        ),
      ),
    );
  }

  @override
  void initState() {
    super.initState();

    // 添加滚动监听器
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }
}

class ClockwiseRotationText extends StatefulWidget {
  final String text;
  final Duration duration;

  ClockwiseRotationText({
    required this.text,
    required this.duration,
  });

  @override
  _ClockwiseRotationTextState createState() => _ClockwiseRotationTextState();
}

class _ClockwiseRotationTextState extends State<ClockwiseRotationText>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: widget.duration,
    );
    _controller.forward(from: 0.0); // 启动动画并从0.0开始
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        return Transform.rotate(
          angle: _controller.value * 2 * 3.14159265359, // 2π表示一圈
          child: Text(
            widget.text,
            style: TextStyle(fontSize: 24),
          ),
        );
      },
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
