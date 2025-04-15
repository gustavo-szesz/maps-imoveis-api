import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImovelModule } from './imovel/imovel.module';

@Module({
  imports: [ImovelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
