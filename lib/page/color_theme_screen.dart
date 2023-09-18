import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class ColorThemeScreen extends StatefulWidget {
  const ColorThemeScreen({super.key});

  @override
  createState() => _MyImageListState();
}

class _MyImageListState extends State<ColorThemeScreen> {
  @override
  Widget build(BuildContext context) {
    List<Map<String, Color>> list = [
      {"primary": Theme.of(context).colorScheme.primary},
      {"onPrimary": Theme.of(context).colorScheme.onPrimary},
      {"primaryContainer": Theme.of(context).colorScheme.primaryContainer},
      {"onPrimaryContainer": Theme.of(context).colorScheme.onPrimaryContainer},
      {"secondary": Theme.of(context).colorScheme.secondary},
      {"onSecondary": Theme.of(context).colorScheme.onSecondary},
      {"secondaryContainer": Theme.of(context).colorScheme.secondaryContainer},
      {
        "onSecondaryContainer":
            Theme.of(context).colorScheme.onSecondaryContainer
      },
      {"tertiary": Theme.of(context).colorScheme.tertiary},
      {"onTertiary": Theme.of(context).colorScheme.onTertiary},
      {"tertiaryContainer": Theme.of(context).colorScheme.tertiaryContainer},
      {
        "onTertiaryContainer": Theme.of(context).colorScheme.onTertiaryContainer
      },
      {"error": Theme.of(context).colorScheme.error},
      {"onError": Theme.of(context).colorScheme.onError},
      {"errorContainer": Theme.of(context).colorScheme.errorContainer},
      {"onErrorContainer": Theme.of(context).colorScheme.onErrorContainer},
      {"background": Theme.of(context).colorScheme.background},
      {"onBackground": Theme.of(context).colorScheme.onBackground},
      {"surface": Theme.of(context).colorScheme.surface},
      {"onSurface": Theme.of(context).colorScheme.onSurface},
      {"surfaceVariant": Theme.of(context).colorScheme.surfaceVariant},
      {"onSurfaceVariant": Theme.of(context).colorScheme.onSurfaceVariant},
      {"outline": Theme.of(context).colorScheme.outline},
      {"outlineVariant": Theme.of(context).colorScheme.outlineVariant},
      {"shadow": Theme.of(context).colorScheme.shadow},
      {"scrim": Theme.of(context).colorScheme.scrim},
      {"inverseSurface": Theme.of(context).colorScheme.inverseSurface},
      {"onInverseSurface": Theme.of(context).colorScheme.onInverseSurface},
      {"inversePrimary": Theme.of(context).colorScheme.inversePrimary},
      {"surfaceTint": Theme.of(context).colorScheme.surfaceTint},
    ];

    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.primary.withGreen(10),
      appBar: AppBar(
        title: const Text('色彩主题'),
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
            final color = map[key]; // 获取文本样式
            return Row(
              children: [
                SizedBox(
                  width: 200,
                  child: Text(
                    key,
                  ),
                ),
                Container(
                  height: 30,
                  width: 150,
                  color: color,
                  child: Text(color.toString()),
                ),
              ],
            );
          }).toList())
        ],
      ),
    );
  }
}
