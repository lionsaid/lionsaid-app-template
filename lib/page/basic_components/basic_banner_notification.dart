import 'package:flutter/material.dart';

class BasicBannerNotificationScreen extends StatefulWidget {
  const BasicBannerNotificationScreen({super.key});

  @override
  createState() => _BasicBannerNotificationState();
}

class _BasicBannerNotificationState
    extends State<BasicBannerNotificationScreen> {
  bool bool1 = true; // 用于存储用户选择的选项

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
        title: Text("横幅通知"),
      ),
      body:

// 在你的StatefulWidget类中
          ListView(
        children: [
          // 横幅通知
          bool1
              ? Card(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        height: 20,
                      ),
                      const Row(children: [
                        Icon(
                          Icons.account_circle_rounded,
                          size: 50,
                        ),
                        Text(
                          '检测到您的账户在上海登录',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 16.0,
                          ),
                        )
                      ]),
                      Row(
                        children: [
                          Expanded(child: Center()),
                          IconButton(
                            icon: Text("管理登录状态"),
                            onPressed: () {
                              setState(() {
                                bool1 = false;
                              });
                              // 在这里执行关闭操作
                            },
                          ),
                          IconButton(
                            icon: Text("关闭"),
                            onPressed: () {
                              setState(() {
                                bool1 = false;
                              });
                              // 在这里执行关闭操作
                            },
                          ),
                        ],
                      ),
                      Container(
                        height: 20,
                      ),
                    ],
                  ),
                )
              : Container(),
          // 列表部分
          Container(
            height: MediaQuery.of(context).size.height -
                (bool1 ? kToolbarHeight : 0), // 调整列表高度
            child: ListView.builder(
              itemCount: 100,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text('列表项 $index'),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
