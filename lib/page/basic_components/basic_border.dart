import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../utils/random_util.dart';

class BasicBorderScreen extends StatefulWidget {
  const BasicBorderScreen({super.key});

  @override
  createState() => _BasicBorderState();
}

class _BasicBorderState extends State<BasicBorderScreen> {
  String _selectedOption = 'Option 1'; // 用于存储用户选择的选项

  @override
  Widget build(BuildContext context) {
    List<Map<String, Color>> list = [
      {"primary": Theme.of(context).colorScheme.primary},
      {"secondary": Theme.of(context).colorScheme.secondary},
      {"tertiary": Theme.of(context).colorScheme.tertiary},
      {"error": Theme.of(context).colorScheme.error},
      {"outline": Theme.of(context).colorScheme.outline},
      {"shadow": Theme.of(context).colorScheme.shadow},
    ];
    return Scaffold(
      appBar: AppBar(
        title: const Text('basic 边框'),
        leading: IconButton(
          icon: const Icon(
            Icons.arrow_back_ios_new,
            size: 25,
          ),
          onPressed: () => {context.go("/home")},
        ),
      ),
      body: ListView(children: [
        Card(
            child: SizedBox(
                height: 150,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const Text("定义了一个宽度为5.0的边框，并指定了边框的颜色"),
                      SizedBox(
                          height: 100, // 指定一个固定的高度
                          child: ListView(
                              scrollDirection: Axis.horizontal,
                              children: list.map((map) {
                                String key = map.keys.first; // 获取Map中的键
                                Color color = map[key]!; // 获取文本样式
                                return Container(
                                  width: 100,
                                  height: 100,
                                  decoration: BoxDecoration(
                                    color: getRandomColor(),
                                    border: Border.all(
                                      color: color, // 边框颜色
                                      width: 10.0, // 边框宽度
                                    ),
                                  ),
                                );
                              }).toList()))
                    ]))),
        Card(
            child: SizedBox(
                height: 150,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const Text("定义上边框的颜色"),
                      SizedBox(
                          height: 100, // 指定一个固定的高度
                          child: ListView(
                              scrollDirection: Axis.horizontal,
                              children: list.map((map) {
                                String key = map.keys.first; // 获取Map中的键
                                Color color = map[key]!; // 获取文本样式
                                return Container(
                                  width: 100,
                                  height: 100,
                                  decoration: BoxDecoration(
                                      color: getRandomColor(),
                                      border: Border(
                                        top: BorderSide(
                                          color: color,
                                          width: 10.0,
                                        ),
                                      )),
                                );
                              }).toList()))
                    ]))),
        Card(
            child: SizedBox(
                height: 150,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const Text("定义边框的阴影效果"),
                      SizedBox(
                          height: 100, // 指定一个固定的高度
                          child: ListView(
                              scrollDirection: Axis.horizontal,
                              children: list.map((map) {
                                String key = map.keys.first; // 获取Map中的键
                                Color color = map[key]!; // 获取文本样式
                                return Container(
                                  width: 100,
                                  height: 100,
                                  decoration: BoxDecoration(
                                    color: color,
                                    boxShadow: [
                                      BoxShadow(
                                        color: getRandomColor(), // 阴影颜色
                                        offset: Offset(0, 3), // 阴影偏移量
                                        blurRadius: 6.0, // 阴影模糊半径
                                        spreadRadius: 1.0, // 阴影扩散半径
                                      ),
                                    ],
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(40.0)),
                                  ),
                                );
                              }).toList()))
                    ]))),
        Card(
            child: SizedBox(
                height: 150,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const Text("定义边框的圆角效果"),
                      SizedBox(
                          height: 100, // 指定一个固定的高度
                          child: ListView(
                              scrollDirection: Axis.horizontal,
                              children: list.map((map) {
                                String key = map.keys.first; // 获取Map中的键
                                Color color = map[key]!; // 获取文本样式
                                return Container(
                                  width: 100,
                                  height: 100,
                                  decoration: BoxDecoration(
                                    color: color,
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(40.0)),
                                  ),
                                );
                              }).toList()))
                    ]))),
      ]),
    );
  }
}
