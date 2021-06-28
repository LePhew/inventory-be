import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './core/product/product.module';
import { UserModule } from './core/user/user.module';
import { CustomerModule } from './core/customer/customer.module';
import { CompanyModule } from './core/company/company.module';
import { CategoryModule } from './core/category/category.module';
import { OrderModule } from './core/order/order.module';
import { RoleModule } from './core/role/role.module';
import { ManufacturerModule } from './core/manufacturer/manufacturer.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProductModule, UserModule, CustomerModule, CompanyModule, CategoryModule, OrderModule, RoleModule, ManufacturerModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }