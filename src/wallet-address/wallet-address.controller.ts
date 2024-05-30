import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';

@Controller('wallet-address')
export class WalletAddressController {
  // eslint-disable-next-line prettier/prettier
    constructor(private readonly walletAddressService: WalletAddressService) {}

  @Get()

    findAll(): Promise<WalletAddress[]> {
        return this.walletAddressService.findAll();
    
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<WalletAddress> {
        return this.walletAddressService.findOne(+id);
    }

    @Post()
    create(@Body() walletAddress: WalletAddress): Promise<WalletAddress> {
        return this.walletAddressService.create(walletAddress);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.walletAddressService.remove(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() walletAddress: WalletAddress): Promise<any> {
        return this.walletAddressService.update(+id, walletAddress);
    }
}
