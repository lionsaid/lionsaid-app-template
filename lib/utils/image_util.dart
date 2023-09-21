/// Flutter package imports
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_gallery_saver/image_gallery_saver.dart';
import 'package:permission_handler/permission_handler.dart';

void SaveWidgetAsImage(GlobalKey _containerKey, BuildContext context) async {
  try {
    final status = await Permission.photosAddOnly.status;
    if (!status.isGranted) {
      print(status.isGranted);
      await Permission.photosAddOnly.request();
    }
    RenderRepaintBoundary boundary = _containerKey.currentContext!
        .findRenderObject() as RenderRepaintBoundary;
    ui.Image image = await boundary.toImage(pixelRatio: 3.0);
    ByteData? byteData = await image.toByteData(format: ui.ImageByteFormat.png);
    if (byteData != null) {
      Uint8List pngBytes = byteData.buffer.asUint8List();
      await ImageGallerySaver.saveImage(pngBytes);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('小部件图像保存到图库')),
      );
    }
  } catch (e) {
    print(e);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('无法保存小部件图像')),
    );
  }
}
