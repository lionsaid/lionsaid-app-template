import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

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
      {"scrim": Theme.of(context).colorScheme.scrim},
    ];
    return Scaffold(
      appBar: AppBar(
        title: const Text('basic 按钮'),
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
                height: 200,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const Text(
                          "PopupMenuButton：这是一个弹出式菜单按钮，当用户点击它时，会显示一个弹出菜单，用户可以从中选择一个选项。"),
                      SizedBox(
                          height: 50, // 指定一个固定的高度
                          child: ListView(
                              scrollDirection: Axis.horizontal,
                              children: list.map((map) {
                                String key = map.keys.first; // 获取Map中的键
                                final color = map[key]; // 获取文本样式
                                return PopupMenuButton<String>(
                                  color: color,
                                  onSelected: (value) {
                                    // 当用户选择一个选项时执行的代码
                                    print('选择了选项: $value');
                                  },
                                  itemBuilder: (BuildContext context) {
                                    // 构建弹出菜单的选项
                                    return <PopupMenuEntry<String>>[
                                      PopupMenuItem<String>(
                                        value: 'option1',
                                        child: Text('选项 1'),
                                      ),
                                      PopupMenuItem<String>(
                                        value: 'option2',
                                        child: Text('选项 2'),
                                      ),
                                      PopupMenuItem<String>(
                                        value: 'option3',
                                        child: Text('选项 3'),
                                      ),
                                    ];
                                  },
                                );
                              }).toList()))
                    ]))),
      ]),
    );
  }
}
