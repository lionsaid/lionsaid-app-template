import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:go_router/go_router.dart';

class TextThemeScreen extends StatefulWidget {
  const TextThemeScreen({super.key});

  @override
  createState() => _MyImageListState();
}

class _MyImageListState extends State<TextThemeScreen> {
  String _exampleString = "lionsaid 狮子说 狮语";

  @override
  Widget build(BuildContext context) {
    List<Map<String, TextStyle?>> list = [
      {"displayLarge": Theme.of(context).textTheme.displayLarge},
      {"displayMedium": Theme.of(context).textTheme.displayMedium},
      {"displaySmall": Theme.of(context).textTheme.displaySmall},
      {"headlineLarge": Theme.of(context).textTheme.headlineLarge},
      {"headlineMedium": Theme.of(context).textTheme.headlineMedium},
      {"headlineSmall": Theme.of(context).textTheme.headlineSmall},
      {"titleLarge": Theme.of(context).textTheme.titleLarge},
      {"titleMedium": Theme.of(context).textTheme.titleMedium},
      {"titleSmall": Theme.of(context).textTheme.titleSmall},
      {"bodyLarge": Theme.of(context).textTheme.bodyLarge},
      {"bodyMedium": Theme.of(context).textTheme.bodyMedium},
      {"bodySmall": Theme.of(context).textTheme.bodySmall},
      {"labelLarge": Theme.of(context).textTheme.labelLarge},
      {"labelMedium": Theme.of(context).textTheme.labelMedium},
      {"labelSmall": Theme.of(context).textTheme.labelSmall},
    ];
    return Scaffold(
      //  backgroundColor: Theme.of(context).colorScheme.primary,
      appBar: AppBar(
        title: const Text('文本主题'),
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
          Column(
              children: list.map((map) {
            final key = map.keys.first; // 获取Map中的键
            final textStyle = map[key]; // 获取文本样式
            return Row(
              children: [
                SizedBox(
                  width: 150,
                  child: Text(
                    key,
                  ),
                ),
                InkWell(
                  child: Text(
                    _exampleString,
                    style: textStyle,
                  ),
                  onTap: () => {
                  },
                ),
              ],
            );
          }).toList())
        ],
      ),
    );
  }
}
