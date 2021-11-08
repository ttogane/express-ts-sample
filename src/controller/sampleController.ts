import {
  JsonController,
  Get,
  Post,
} from 'routing-controllers';


@JsonController('/api/v1/sample')
export class SampleController {
  // GETリクエスト
  @Get('/')
  async get(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 5000))
    return '{ "id": "001", "contents": "Hello Get Requests" }';
  }

  // POSTリクエスト
  @Post('/')
  async post(): Promise<string> {
    return '{ "contents": "Hello Post Requests"}';
  }

}