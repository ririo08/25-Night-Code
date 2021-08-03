# ナイトコードの作業を覗きに行くツール

## これは何？
2021/07/30にて行われた「25時、ナイトコードで行われるメンバーの作業風景を公開！」を実時間で再生するためのリンクを提供するサイトです。  
YouTubeのプレミア公開という形で公開されたのですが、3本に分割された8時間ずつの動画を実時間に合わせて公開するという仕様だったため、リアルタイムで見ていた方以外は実時間に合わせ辛いと思いこちらを作成しました。  
参考：[25時、ナイトコードで行われるメンバーの作業風景を公開！#1](https://youtu.be/JgSV96MQC6Q)
リンクをクリックすると、現在の実時間に合わせてYouTubeの再生ページが開きます。
仕様上、再生が終了すると止まってしまうので、もう一度リンクを開く必要があります。    
## 仕組み
  
```javascript
let time = new Date()
    let fullTime = 3600 * time.getHours() + 60 * time.getMinutes() + time.getSeconds() +2
    let idData = ""
    let timeData = fullTime
    if (1 <= fullTime && fullTime <= 3599) {
        console.log("#3")
        timeData += 25200
        idData = "iirpWIYpSKw"
    }
    if (3600 <= fullTime && fullTime <= 32399) {
        console.log("#1")
        timeData -= 3600
        idData = "JgSV96MQC6Q"
    }
    if (32400 <= fullTime && fullTime <= 61199) {
        console.log("#2")
        timeData -= 32400
        idData = "3r8xtntA3ZU"
    }
    if (61200 <= fullTime && fullTime <= 86399) {
        console.log("#3")
        timeData -= 61200
        idData = "iirpWIYpSKw"
    }
    let urlData = `https://youtu.be/${idData}?t=${timeData}`;
    window.location.href = urlData
```
  
現在の時刻から秒数を取得、秒数を条件分岐させて目的のURLに飛ぶように設定しています。  
ネットワークの都合上確実にイコールの時間になるわけではありません。自分の環境（多分最速）ではアベレージが3秒だったので現在の時刻+3秒で取得するようになっています。