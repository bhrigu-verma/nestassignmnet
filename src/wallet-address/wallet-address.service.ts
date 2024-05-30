import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find();
  }

  findOne(id: number): Promise<WalletAddress> {
    return this.walletAddressRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.walletAddressRepository.delete(id);
  }

  create(walletAddress: WalletAddress): Promise<WalletAddress> {
    return this.walletAddressRepository.save(walletAddress);
  }

  update(id: number, walletAddress: WalletAddress): Promise<any> {
    return this.walletAddressRepository.update(id, walletAddress);
  }
}
