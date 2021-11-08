import express from 'express';
import { Logger } from './common/logger'
import { SampleController } from './controller/sampleController';
import * as dotenv from "dotenv";
import { useExpressServer } from 'routing-controllers';

// 環境変数を読み込む
dotenv.config();

const app = express();

// ロガーを設定
Logger.initialize();
app.use(Logger.connectionLogger());

// JSONオブジェクトの受信設定
app.use(express.json())
// 配列側のオブジェクトの受信設定
app.use(express.urlencoded({ extended: true }));

// ルーティング
useExpressServer(app, {
  controllers: [
    SampleController
  ]
});

// 3000ポートで受信
const port = process.env.PORT || 3000;

// APIサーバ起動
app.listen(port);
console.log('Express WebApi listening on port ' + port);