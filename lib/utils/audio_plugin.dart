import 'package:audioplayers/audioplayers.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';

class AudioPlugin {
  AudioPlayer audioPlayer = AudioPlayer();

  AudioPlayer play(String url) {
    audioPlayer.setPlayerMode(PlayerMode.lowLatency);
    audioPlayer.play(UrlSource(url)).catchError((onError) => {
          EasyLoading.showError("加载失败$onError",
              maskType: EasyLoadingMaskType.none,
              dismissOnTap: false,
              duration: const Duration(seconds: 2)),
        });

    return audioPlayer;
  }
}
