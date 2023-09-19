import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';

class LionDanceAlert {
  retryAlert(BuildContext context, GestureTapCallback onTap) {
    showDialog<String>(
        context: context,
        builder: (BuildContext context) => Center(
                child: InkWell(
              onTap: () {
                onTap;
              },
              child: Text(
                context.tr("error.text004"),
                style: Theme.of(context).textTheme.titleSmall,
              ),
            )));
  }

  noDataAlert(BuildContext context) {
    showDialog<String>(
      context: context,
      builder: (BuildContext context) => AlertDialog(
        title: Text(
          context.tr("hint"),
          style: Theme.of(context).textTheme.titleSmall,
        ),
        content: Text(
          context.tr("hint.text007"),
        ),
        actions: <Widget>[
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text(
              context.tr("close"),
              style: Theme.of(context).textTheme.titleSmall,
            ),
          ),
        ],
      ),
    );
  }

  noResourceAlert(BuildContext context, Map<String, dynamic> json) {
    showDialog<String>(
      context: context,
      builder: (BuildContext context) => AlertDialog(
        title: Text(
          context.tr("hint"),
          style: Theme.of(context).textTheme.titleSmall,
        ),
        content: Text(json['exceptionInfo']),
        actions: <Widget>[
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text(
              context.tr("close"),
              style: Theme.of(context).textTheme.titleSmall,
            ),
          ),
        ],
      ),
    );
  }
}

class RetryWidget extends StatelessWidget {
  RetryWidget({required this.onTapCallback, Key? key}) : super(key: key);
  Function onTapCallback;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: InkWell(
        onTap: () {
          onTapCallback;
        },
        child: Text(
          context.tr("error.text004"),
          style: Theme.of(context).textTheme.titleSmall,
        ),
      ),
    );
  }
}

class NoDataWidget extends StatelessWidget {
  NoDataWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        context.tr("hint.text008"),
        style: Theme.of(context).textTheme.titleSmall,
      ),
    );
  }
}

class ShowDialogWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    throw UnimplementedError();
  }
}

class LoadingDialog extends Dialog {
  const LoadingDialog({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Material(
        color: Colors.black38,
        child: Center(
          child: SizedBox(
            width: 120.0,
            height: 120.0,
            child: Container(
              decoration: const ShapeDecoration(
                  color: Colors.white,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(8.0)))),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  const CircularProgressIndicator(),
                  const Padding(padding: EdgeInsets.only(top: 10.0)),
                  Text(
                    context.tr("hint.text011") + "...",
                    style: const TextStyle(fontSize: 16.0, color: Colors.black),
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

void ShowColorPicker(BuildContext context, Color initialColor,
    ValueChanged<Color> onColorChanged) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        title: Text(context.tr("chooseColor")),
        content: SingleChildScrollView(
          child: ColorPicker(
            pickerColor: initialColor,
            onColorChanged: (Color color) {
              initialColor = color;
            },
            pickerAreaHeightPercent: 0.8,
          ),
        ),
        actions: <Widget>[
          TextButton(
            child: Text(context.tr("sure")),
            onPressed: () {
              Navigator.of(context).pop();
              // 调用回调函数，将所选的颜色传递出去
              onColorChanged(initialColor);
            },
          ),
        ],
      );
    },
  );
}
