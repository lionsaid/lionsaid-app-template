import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

import '../component/show_Dialog.dart';

Padding buildPaddingColor(BuildContext context, String text, Color initColor,
    ValueChanged<Color> onColorChanged) {
  return Padding(
    padding: const EdgeInsets.fromLTRB(10, 10, 0, 0),
    child: SizedBox(
      height: 50,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Expanded(
            flex: 1,
            child: Text(
              context.tr(text),
              overflow: TextOverflow.clip,
              softWrap: false,
            ),
          ),
          Expanded(
            flex: 2,
            child: InkWell(
                onTap: () => {
                      ShowColorPicker(
                        context,
                        initColor,
                        onColorChanged,
                      ),
                    },
                child: Container(
                  height: 50,
                  width: 50,
                  alignment: Alignment.bottomLeft,
                  color: initColor,
                )),
          ),
        ],
      ),
    ),
  );
}

Padding buildPaddingDropdownMenu(
    BuildContext context,
    String text,
    dynamic value,
    List<DropdownMenuItem<dynamic>> items,
    ValueChanged onChanged) {
  return Padding(
    padding: const EdgeInsets.fromLTRB(10, 10, 0, 0),
    child: SizedBox(
      height: 50,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Expanded(
            flex: 1,
            child: Text(
              context.tr(text),
              overflow: TextOverflow.clip,
              softWrap: false,
            ),
          ),
          Expanded(
            flex: 2,
            child: Container(
              height: 50,
              alignment: Alignment.bottomLeft,
              child: DropdownButton<dynamic>(
                  focusColor: Colors.transparent,
                  underline:
                      Container(color: const Color(0xFFBDBDBD), height: 1),
                  value: value,
                  items: items,
                  onChanged: onChanged),
            ),
          ),
        ],
      ),
    ),
  );
}

Padding buildPaddingText(BuildContext context, String text,
    ValueChanged onChanged, TextEditingController _textEditingController) {
  return Padding(
      padding: const EdgeInsets.fromLTRB(10, 10, 0, 0),
      child: SizedBox(
        height: 50,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Expanded(
                flex: 1,
                child: Text(
                  context.tr(text),
                  overflow: TextOverflow.clip,
                  softWrap: false,
                )),
            Expanded(
                flex: 2,
                child: Container(
                  padding: const EdgeInsets.all(5),
                  child: TextField(
                      keyboardType: TextInputType.text,
                      onSubmitted: onChanged,
                      controller: _textEditingController),
                )),
          ],
        ),
      ));
}
