import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:lionsaid_app_template/page/buildPaddingFunction.dart';
import 'package:url_launcher/url_launcher_string.dart';

class SafeAreaExampleScreen extends StatefulWidget {
  const SafeAreaExampleScreen({super.key});

  @override
  createState() => _SafeAreaScreenState();
}

class _SafeAreaScreenState extends State<SafeAreaExampleScreen> {
  String _exampleString = "lionsaid 狮子说 狮语";
  List<int> items = List<int>.generate(100, (int index) => index);
  bool left = true;
  bool top = true;
  bool right = true;
  bool bottom = true;
  EdgeInsets minimum = EdgeInsets.zero;
  bool maintainBottomViewPadding = false;

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
        title: Text('SafeArea Example'),
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
                  "https://api.flutter.dev/flutter/widgets/SafeArea-class.html",
                  mode: LaunchMode.externalApplication)
            },
            child: const Icon(
              Icons.earbuds,
            ),
          ),
        ],
      ),
      body: ListView.builder(
        itemCount: items.length,
        padding: const EdgeInsets.symmetric(vertical: 16),
        itemBuilder: (BuildContext context, int index) {
          return SafeArea(
              left: left,
              top: top,
              right: right,
              bottom: bottom,
              minimum: minimum,
              maintainBottomViewPadding: maintainBottomViewPadding,
              child: ListTile(
                title: Container(
                  height: 50,
                  width: 2000,
                  color: Colors.cyanAccent,
                  child: Text(
                    'Item ${items[index]}',
                  ),
                ),
              ));
        },
      ),
      bottomSheet: SizedBox(
          height: screenSize.height / 3,
          child: ListView(
            children: [
              buildPaddingDropdownMenu(
                  context,
                  "left",
                  left.toString(),
                  [true, false].map((bool value) {
                    return DropdownMenuItem<String>(
                        value: value.toString(),
                        child: Text(
                          value.toString(),
                          textAlign: TextAlign.center,
                        ));
                  }).toList(), (value) {
                [true, false]
                    .where((element) => element.toString() == value.toString())
                    .map((e) => {
                          setState(() {
                            print(e);
                            left = e;
                          })
                        })
                    .toList();
              }),
              buildPaddingDropdownMenu(
                  context,
                  "top",
                  top.toString(),
                  [true, false].map((bool value) {
                    return DropdownMenuItem<String>(
                        value: value.toString(),
                        child: Text(
                          value.toString(),
                          textAlign: TextAlign.center,
                        ));
                  }).toList(), (value) {
                [true, false]
                    .where((element) => element.toString() == value.toString())
                    .map((e) => {
                          setState(() {
                            print(e);
                            top = e;
                          })
                        })
                    .toList();
              }),
              buildPaddingDropdownMenu(
                  context,
                  "right",
                  right.toString(),
                  [true, false].map((bool value) {
                    return DropdownMenuItem<String>(
                        value: value.toString(),
                        child: Text(
                          value.toString(),
                          textAlign: TextAlign.center,
                        ));
                  }).toList(), (value) {
                [true, false]
                    .where((element) => element.toString() == value.toString())
                    .map((e) => {
                          setState(() {
                            print(e);
                            right = e;
                          })
                        })
                    .toList();
              }),
              buildPaddingDropdownMenu(
                  context,
                  "bottom",
                  bottom.toString(),
                  [true, false].map((bool value) {
                    return DropdownMenuItem<String>(
                        value: value.toString(),
                        child: Text(
                          value.toString(),
                          textAlign: TextAlign.center,
                        ));
                  }).toList(), (value) {
                [true, false]
                    .where((element) => element.toString() == value.toString())
                    .map((e) => {
                          setState(() {
                            print(e);
                            bottom = e;
                          })
                        })
                    .toList();
              }),
              buildPaddingDropdownMenu(
                  context,
                  "maintainBottomViewPadding",
                  maintainBottomViewPadding.toString(),
                  [true, false].map((bool value) {
                    return DropdownMenuItem<String>(
                        value: value.toString(),
                        child: Text(
                          value.toString(),
                          textAlign: TextAlign.center,
                        ));
                  }).toList(), (value) {
                [true, false]
                    .where((element) => element.toString() == value.toString())
                    .map((e) => {
                          setState(() {
                            print(e);
                            maintainBottomViewPadding = e;
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
