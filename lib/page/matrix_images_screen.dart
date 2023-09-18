import 'dart:math';

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class MatrixImagesWidget extends StatefulWidget {
  const MatrixImagesWidget({super.key});

  @override
  createState() => _MyImageListState();
}

class _MyImageListState extends State<MatrixImagesWidget> {
  int _highlightedIndex = 0;
  int desiredOddIndex = 0;
  double _stackX = 0.0;
  double _stackY = 0.0;
  List<List<int>> coordinates = [];
  int horizontal = 0;
  int vertical = 0;

  @override
  void initState() {
    List<int> list = findMatrixDimensions(25);
    for (int i = 0; i < list[0]; i++) {
      for (int j = 0; j < list[1]; j++) {
        coordinates.add([i, j]);
      }
    }
    int middleIndex = coordinates.length ~/ 2; // 中间位置的索引
    desiredOddIndex =
        middleIndex.isOdd ? middleIndex : middleIndex + 1; // 获取最接近的奇数索引
    horizontal = coordinates[desiredOddIndex][0];
    vertical = coordinates[desiredOddIndex][1];
    _highlightedIndex = desiredOddIndex;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    final screenWidth = screenSize.width / 2;
    final screenHeight = screenSize.height / 2;
    return Scaffold(
     //  backgroundColor: Theme.of(context).colorScheme.primary,
      appBar: AppBar(
        title: Text('Image List'),
        leading: IconButton(
          icon: const Icon(
            Icons.arrow_back_ios_new,
            size: 25,
          ),
          onPressed: () => {context.go("/home")},
        ),
      ),
      body: Stack(
        children: [
          for (int index = 0, j = 0; index < 25; index++, j++)
            Positioned(
              top: _stackY +
                  (coordinates[j][0] * screenHeight) +
                  screenHeight / 2 +
                  (-coordinates[desiredOddIndex][0] * screenHeight),
              left: _stackX +
                  (coordinates[j][1] * screenWidth) +
                  screenWidth / 2 +
                  (-coordinates[desiredOddIndex][1] * screenWidth),
              child: InkWell(
                onTap: () => {
                  setState(() {
                    String str = getDirection(coordinates[index][0],
                        coordinates[index][1], horizontal, vertical);
                    switch (str) {
                      case "上方":
                        _stackY += screenHeight;
                        break;
                      case "下方":
                        _stackY -= screenHeight;
                        break;
                      case "左方":
                        _stackX += screenWidth;
                        break;
                      case "右方":
                        _stackX -= screenWidth;
                        break;
                      case "右下方":
                        _stackX -= screenWidth;
                        _stackY -= screenHeight;
                        break;
                      case "右上方":
                        _stackX -= screenWidth;
                        _stackY += screenHeight;
                        break;
                      case "左下方":
                        _stackX += screenWidth;
                        _stackY -= screenHeight;
                        break;
                      case "左上方":
                        _stackX += screenWidth;
                        _stackY += screenHeight;
                        break;
                      default:
                        break;
                    }
                    horizontal = coordinates[index][0];
                    vertical = coordinates[index][1];
                    _highlightedIndex = index;
                  })
                },
                child: AnimatedContainer(
                  color: Theme.of(context).colorScheme.secondary,
                  height: screenHeight,
                  width: screenWidth,
                  duration: const Duration(milliseconds: 500),
                  curve: Curves.linear,
                  transform: _highlightedIndex == index
                      ? Matrix4.identity() // 不进行旋转
                      : Matrix4.rotationZ(pi),
                  // 旋转90度
                  transformAlignment: Alignment.center,
                  child: ColorFiltered(
                    colorFilter: ColorFilter.mode(
                      _highlightedIndex == index
                          ? Colors.transparent // 彩色
                          : Colors.black.withOpacity(0.8), // 降低不透明度
                      BlendMode.srcATop, // BlendMode可根据需要调整
                    ),
                    child: Image.asset(
                      "assets/screen/img_" + index.toString() + ".png",
                      fit: BoxFit.fill,
                    ),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }

//获取矩阵的rows 与 cols
  List<int> findMatrixDimensions(int n) {
    int rows = 1;
    int cols = 1;

    while (rows * cols < n) {
      if (rows <= cols) {
        rows++;
      } else {
        cols++;
      }
    }
    return [rows, cols];
  }

//点击的位置与当前位置的判断
  String getDirection(int row, int col, int targetRow, int targetCol) {
    if (row < targetRow && col < targetCol) {
      return '左上方';
    } else if (row < targetRow && col > targetCol) {
      return '右上方';
    } else if (row > targetRow && col < targetCol) {
      return '左下方';
    } else if (row > targetRow && col > targetCol) {
      return '右下方';
    } else if (row < targetRow) {
      return '上方';
    } else if (row > targetRow) {
      return '下方';
    } else if (col < targetCol) {
      return '左方';
    } else if (col > targetCol) {
      return '右方';
    } else {
      return '当前位置';
    }
  }
}
