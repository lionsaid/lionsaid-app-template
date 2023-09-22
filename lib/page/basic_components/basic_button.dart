import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class BasicButtonScreen extends StatefulWidget {
  const BasicButtonScreen({super.key});

  @override
  createState() => _BasicButtonState();
}

class _BasicButtonState extends State<BasicButtonScreen> {
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
      body: ListView(
        children: [
          Card(
              child: SizedBox(
                  height: 200,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const Text("ElevatedButton：这是一个凸起的按钮，通常用于主要操作，具有高亮的外观"),
                      SizedBox(
                          height: 50, // 指定一个固定的高度
                          child: ListView(
                              scrollDirection: Axis.horizontal,
                              children: list.map((map) {
                                String key = map.keys.first; // 获取Map中的键
                                final color = map[key]; // 获取文本样式
                                return ElevatedButton(
                                  onPressed: () {
                                    // 在按钮被点击时执行的代码
                                    print('ElevatedButton 被点击了！');
                                  },
                                  style: ElevatedButton.styleFrom(
                                    primary: color, // 修改背景颜色
                                  ),
                                  child: Text(
                                    key,
                                    style: TextStyle(
                                        color: Theme.of(context)
                                            .colorScheme
                                            .background),
                                  ),
                                );
                              }).toList())),
                    ],
                  ))),
          Card(
              child: SizedBox(
          height: 200,
          child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            const Text("TextButton 这是一个简单的文本按钮，通常用于次要操作，没有凸起的外观"),
            SizedBox(
                height: 50, // 指定一个固定的高度
                child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: list.map((map) {
                      String key = map.keys.first; // 获取Map中的键
                      final color = map[key]; // 获取文本样式
                      return TextButton(
                        onPressed: () {
                          // 在按钮被点击时执行的代码
                          print('ElevatedButton 被点击了！');
                        },
                        child: Text(
                          key,
                          style: TextStyle(color: color),
                        ),
                      );
                    }).toList()))
          ]))),
          Card(
              child: SizedBox(
    height: 200,
    child: Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
            const Text("IconButton：这是一个带有图标的按钮，通常用于触发某些特定操作。"),
            SizedBox(
                height: 50, // 指定一个固定的高度
                child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: list.map((map) {
                      String key = map.keys.first; // 获取Map中的键
                      final color = map[key]; // 获取文本样式
                      return IconButton(
                        icon: Row(
                          children: [
                            const Icon(Icons.ac_unit),
                            const SizedBox(
                              width: 5,
                            ),
                            Text(
                              key,
                            )
                          ],
                        ),
                        color: color,
                        onPressed: () {
                          // 在按钮被点击时执行的代码
                          print('ElevatedButton 被点击了！');
                        },
                      );
                    }).toList()))
          ]))),
          Card(
              child: SizedBox(
    height: 200,
    child: Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
            const Text(
                "OutlinedButton：这是一个带有轮廓边框的按钮，通常用于中等重要性的操作。它有一个轮廓，不会填充颜色。"),
            SizedBox(
                height: 50, // 指定一个固定的高度
                child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: list.map((map) {
                      String key = map.keys.first; // 获取Map中的键
                      final color = map[key]; // 获取文本样式
                      return OutlinedButton(
                        child: Text(
                          key,
                          style: TextStyle(color: color),
                        ),
                        onPressed: () {
                          // 在按钮被点击时执行的代码
                          print('ElevatedButton 被点击了！');
                        },
                      );
                    }).toList()))
          ]))),
          Card(
              child: SizedBox(
    height: 200,
    child: Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
            const Text(
                "FloatingActionButton：这是一个悬浮的圆形按钮，通常用于启动主要操作，例如添加或拍照。它经常出现在屏幕底部或右下角。"),
            SizedBox(
                height: 50, // 指定一个固定的高度
                child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: list.map((map) {
                      String key = map.keys.first; // 获取Map中的键
                      final color = map[key]; // 获取文本样式
                      return FloatingActionButton(
                        backgroundColor: color,
                        child: Icon(
                          Icons.ac_unit,
                          color: Theme.of(context).colorScheme.background,
                        ),
                        onPressed: () {
                          // 在按钮被点击时执行的代码
                          print('ElevatedButton 被点击了！');
                        },
                      );
                    }).toList()))
          ]))),
          Card(
              child: SizedBox(
    height: 200,
    child: Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
            const Text("DropdownButton：这是一个用于显示下拉菜单的按钮，用户可以从列表中选择一个选项。"),
            SizedBox(
                height: 50, // 指定一个固定的高度
                child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: list.map((map) {
                      String key = map.keys.first; // 获取Map中的键
                      final color = map[key]; // 获取文本样式
                      return DropdownButton<String>(
                        dropdownColor: color,
                        value: _selectedOption, // 当前选定的选项
                        items: <String>[
                          'Option 1',
                          'Option 2',
                          'Option 3',
                          'Option 4',
                        ].map<DropdownMenuItem<String>>((String value) {
                          return DropdownMenuItem<String>(
                            value: value,
                            child: Text(value),
                          );
                        }).toList(),
                        onChanged: (newValue) {
                          setState(() {
                            _selectedOption = newValue!; // 用户选择的新选项
                          });
                        },
                      );
                    }).toList()))
          ]))),
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
        ],
      ),
    );
  }
}
