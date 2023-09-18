import 'package:badges/badges.dart' as badges;
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:full_screen_menu/full_screen_menu.dart';
import 'package:go_router/go_router.dart';

import '../config/global_variable.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _cartBadgeAmount = 3;
  Color color = Colors.red;

  List<Widget> successList = [];
  bool multiple = true;
  bool isError = false;

  @override
  void initState() {
    //print(page);
    EasyLoading.show(
      status: tr('hint.text011'),
      maskType: EasyLoadingMaskType.none,
      dismissOnTap: false,
    );
    EasyLoading.dismiss();
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 2,
        child: LayoutBuilder(
            builder: (BuildContext context, BoxConstraints constraints) {
          var crossAxisCount = constraints.maxWidth ~/ 320;
          return Container(
              decoration: getDecoration(context, {"name": "home"}),
              child: Scaffold(
                  // bottomNavigationBar: _bottomNavigationBar(),
                  appBar: AppBar(
                    title: badges.Badge(
                      showBadge: false,
                      child: Image.asset(
                        "assets/logo/logo@3x.png",
                        height: 36,
                      ),
                    ),
                    actions: const <Widget>[
                      //_shoppingCartBadge(),
                    ],
                    bottom: _tabBar(),
                  ),
                  body: GridView(
                      padding: const EdgeInsets.only(left: 5, right: 5),
                      physics: const BouncingScrollPhysics(),
                      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: crossAxisCount,
                        mainAxisSpacing: 1.0,
                        crossAxisSpacing: 1.0,
                        childAspectRatio: 1.5,
                      ),
                      children: [
                        ...successList.map((item) {
                          return InkWell(
                            onTap: () {
                              //context.go(item.route);
                            },
                            child: Text("1"),
                          );
                        }).toList(),
                      ])
                  //_addRemoveCartButtons(),
                  ));
        }));
  }

  PreferredSizeWidget _tabBar() {
    return TabBar(tabAlignment: TabAlignment.fill, onTap: (s) => {}, tabs: [
      Tab(
        child: badges.Badge(
            badgeStyle: badges.BadgeStyle(
              shape: badges.BadgeShape.square,
              borderRadius: BorderRadius.circular(5),
              padding: const EdgeInsets.all(2),
              badgeGradient: const badges.BadgeGradient.linear(
                colors: [
                  Colors.lightBlueAccent,
                  Colors.blueAccent,
                ],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
            ),
            position: badges.BadgePosition.topEnd(top: -12, end: -20),
            badgeContent: Text(
              tr("info.text002"),
              style: Theme.of(context).textTheme.labelSmall,
            ),
            child: Text(
              tr("info.text001"),
              style: Theme.of(context).textTheme.titleMedium,
            )),
      ),
      Tab(
        child: badges.Badge(
          badgeStyle: badges.BadgeStyle(
            shape: badges.BadgeShape.square,
            borderRadius: BorderRadius.circular(5),
            padding: const EdgeInsets.all(2),
            badgeGradient: const badges.BadgeGradient.linear(
              colors: [
                Colors.purple,
                Colors.blue,
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          position: badges.BadgePosition.topEnd(top: -12, end: -20),
          badgeContent: Text(
            tr("info.text004"),
            style: Theme.of(context).textTheme.labelSmall,
          ),
          child: Text(
            tr(
              "info.text003",
            ),
            style: Theme.of(context).textTheme.titleMedium,
          ),
        ),
      ),
    ]);
  }

  int _selectedIndex = 0;

  Widget _bottomNavigationBar() {
    return BottomNavigationBar(
      selectedItemColor: Theme.of(context).colorScheme.tertiary,
      currentIndex: _selectedIndex,
      onTap: (int index) {
        setState(() {
          _selectedIndex = index;
        });
      },
      showSelectedLabels: false,
      showUnselectedLabels: false,
      items: [
        BottomNavigationBarItem(
          label: '',
          icon: badges.Badge(
            showBadge: false,
            position: badges.BadgePosition.topEnd(top: 10, end: 10),
            child: IconButton(
              icon: Icon(Icons.dashboard_customize_sharp),
              onPressed: () {
                context.go('/home');
              },
            ),
          ),
        ),
        BottomNavigationBarItem(
          label: '',
          icon: badges.Badge(
            showBadge: false,
            position: badges.BadgePosition.topEnd(top: 10, end: 10),
            child: IconButton(
              icon: const Icon(Icons.notifications),
              onPressed: () {},
            ),
          ),
        ),
        BottomNavigationBarItem(
          label: '',
          icon: badges.Badge(
            showBadge: false,
            position: badges.BadgePosition.topEnd(top: 10, end: 10),
            child: IconButton(
              icon: const Icon(Icons.settings),
              onPressed: () {
                context.go('/home/setting');
              },
            ),
          ),
        ),
      ],
    );
  }
}
