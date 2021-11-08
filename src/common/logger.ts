import { getLogger, connectLogger, configure } from 'log4js';
import { Handler } from 'express';

/**
 * Loggerクラス
 */
export class Logger {

  private static logLevel: string = process.env.LOG_LEVEL || "info";
  private static layoutType: string = process.env.LAYOUT_TYPE || "basic";
  private static logger = getLogger();

  /**
   * ロガーの初期化関数、
   * ログレベルなどを設定する。
   */
  public static initialize(): void {
    configure({
      appenders: {
        out: { type: 'stdout', layout: { type: this.layoutType } }
      },
      categories: {
        default: { appenders: ['out'], level: 'all' }
      }
    });
    this.logger.level = this.logLevel;
  }

  /**
   * HTTPアクセスハンドラーを返却する関数
   */
  public static connectionLogger(): Handler {
    return connectLogger(this.logger, { level: 'auto' });
  }

  /**
   * ログレベルINFOの標準出力をする関数
   */
  public static info(message: string): void {
    this.logger.info(message);
  }

  /**
   * ログレベルDEBUGの標準出力をする関数
   */
  public static debug(message: string): void {
    this.logger.debug(message);
  }

  /**
   * ログレベルWARNの標準出力をする関数
   */
  public static warn(message: string): void {
    this.logger.warn(message);
  }

  /**
   * ログレベルTRACEの標準出力をする関数
   */
  public static trace(message: string): void {
    this.logger.trace(message);
  }

  /**
   * ログレベルERRORの標準出力をする関数
   */
  public static error(message: string): void {
    this.logger.error(message);
  }

  /**
   * ログレベルFATALの標準出力をする関数
   */
  public static fatal(message: string): void {
    this.logger.fatal(message);
  }
}