import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class BasicAppBarScreen extends StatefulWidget {
  const BasicAppBarScreen({super.key});

  @override
  createState() => _BasicAppBarState();
}

class _BasicAppBarState extends State<BasicAppBarScreen> {
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
        AppBar(
          backgroundColor: Colors.blue, // 背景颜色
          title: Text(
            '自定义样式',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.white, // 文本颜色
            ),
          ),
        ),
        AppBar(
          leading: IconButton(
            icon: Icon(Icons.arrow_back),
            onPressed: () {
              // 在这里添加返回按钮的逻辑
            },
          ),
          title: Text('带返回按钮的应用栏'),
        ),
        AppBar(
          title: Text('自定义操作按钮'),
          actions: [
            PopupMenuButton<String>(
              itemBuilder: (BuildContext context) {
                return [
                  PopupMenuItem<String>(
                    value: 'option1',
                    child: Text('选项1'),
                  ),
                  PopupMenuItem<String>(
                    value: 'option2',
                    child: Text('选项2'),
                  ),
                  PopupMenuItem<String>(
                    value: 'option3',
                    child: Text('选项3'),
                  ),
                ];
              },
              onSelected: (String value) {
                // 处理选中的操作按钮
              },
            ),
          ],
        ),
        AppBar(
          title: Text('自定义操作按钮'),
          actions: [
            IconButton(
              icon: Icon(Icons.favorite),
              onPressed: () {
                // 处理收藏按钮的逻辑
              },
            ),
            IconButton(
              icon: Icon(Icons.share),
              onPressed: () {
                // 处理分享按钮的逻辑
              },
            ),
          ],
        ),
        AppBar(
          title: Text('抽屉式应用栏'),
          actions: [
            IconButton(
              icon: Icon(Icons.menu),
              onPressed: () {
                // 打开抽屉菜单
              },
            ),
          ],
        ),
        AppBar(
          title: TextField(
            decoration: InputDecoration(
              hintText: '搜索',
              border: InputBorder.none,
            ),
          ),
        ),
        Container(
          decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage("assets/screen/img_1.png"),
              fit: BoxFit.cover,
            ),
          ),
          child: AppBar(
            title: Text("背景图片 "),
            backgroundColor: Colors.transparent,
          ),
        ),
        Container(
          height: 1000,
        )
      ]),
    );
  }
}
