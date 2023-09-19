import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:lionsaid_app_template/page/buildPaddingFunction.dart';
import 'package:url_launcher/url_launcher_string.dart';

class ContainerExampleScreen extends StatefulWidget {
  const ContainerExampleScreen({super.key});

  @override
  createState() => _ContainerScreenState();
}

class _ContainerScreenState extends State<ContainerExampleScreen> {
  String _exampleString = "lionsaid 狮子说 狮语";

  Alignment alignment = Alignment.bottomLeft;
  Color color = Colors.blue;
  double width = 100.0;
  double height = 100.0;
  Clip clipBehavior = Clip.none;
  double marginL = 10.0;
  EdgeInsets? margin = EdgeInsets.fromLTRB(10, 10, 10, 10);

  // EdgeInsetsGeometry padding=EdgeInsetsGeometry.lerp(a, b, t);

  List<Alignment> alignmentList = [
    Alignment.center,
    Alignment.topLeft,
    Alignment.centerLeft,
    Alignment.bottomCenter,
    Alignment.bottomLeft,
    Alignment.bottomRight,
    Alignment.centerRight,
    Alignment.topCenter,
    Alignment.topRight
  ];

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    return Scaffold(
      //  backgroundColor: Theme.of(context).colorScheme.primary,
      appBar: AppBar(
        title: Text('Container Example'),
        leading: IconButton(
          icon: const Icon(
            Icons.arrow_back_ios_new,
            size: 25,
          ),
          onPressed: () => {context.go("/home")},
        ),
        actions: [
          InkWell(
            onTap: () => {
              launchUrlString(
                  "https://api.flutter.dev/flutter/widgets/Container-class.html",
                  mode: LaunchMode.externalApplication)
            },
            child: Icon(
              Icons.earbuds,
            ),
          ),
          InkWell(
            onTap: () => {},
            child: Icon(
              Icons.code,
            ),
          )
        ],
      ),
      body: ListView(
        children: [
          Center(
            child: Container(
              decoration: BoxDecoration(color: color),
              alignment: alignment,
              margin: margin,
              clipBehavior: clipBehavior,
              width: width,
              height: height,
              child: Text(_exampleString),
            ),
          ),
          Container(
            height: screenSize.height / 3,
          ),
        ],
      ),
      bottomSheet: SizedBox(
          height: screenSize.height / 3,
          child: ListView(
            children: [
              buildPaddingColor(context, "容器色彩 ", color, (color) {
                setState(() {
                  this.color = color;
                });
              }),
              buildPaddingText(context, "高度", (text) {
                setState(() {
                  height = double.parse(text) <= screenSize.height
                      ? double.parse(text)
                      : screenSize.height;
                });
              },
                  TextEditingController.fromValue(
                    TextEditingValue(
                      text: height.toString(),
                    ),
                  )),

              buildPaddingText(context, "宽度", (text) {
                setState(() {
                  width = double.parse(text) <= screenSize.width
                      ? double.parse(text)
                      : screenSize.width;
                });
              },
                  TextEditingController.fromValue(
                    TextEditingValue(
                      text: width.toString(),
                    ),
                  )),
              buildPaddingText(context, "margin", (text) {
                setState(() {
                  margin = EdgeInsets.all(double.parse(text));
                });
              },
                  TextEditingController.fromValue(
                    TextEditingValue(
                      text: margin!.left.toString(),
                    ),
                  )),

              buildPaddingDropdownMenu(
                  context,
                  "alignment",
                  alignment.toString(),
                  alignmentList.map((Alignment value) {
                    return DropdownMenuItem<String>(
                        value: value.toString(),
                        child: Text(
                          value.toString(),
                          textAlign: TextAlign.center,
                        ));
                  }).toList(), (value) {
                alignmentList
                    .where((element) => element.toString() == value.toString())
                    .map((e) => {
                          setState(() {
                            print(e);
                            alignment = e;
                          })
                        })
                    .toList();
              }),
              buildPaddingDropdownMenu(
                  context,
                  "clipBehavior",
                  clipBehavior.toString(),
                  Clip.values.map((Clip value) {
                    return DropdownMenuItem<String>(
                        value: value.toString(),
                        child: Text(
                          value.toString(),
                          textAlign: TextAlign.center,
                        ));
                  }).toList(), (value) {
                Clip.values
                    .where((element) => element.toString() == value.toString())
                    .map((e) => {
                          setState(() {
                            print(e);
                            clipBehavior = e;
                          })
                        })
                    .toList();
              }),
              // buildPaddingBackgroundColor(context),
            ], //默认打开关闭
          )),
    );
  }
}
