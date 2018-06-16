'use strict';

import Logger from '../utils/Logger'
import AppDirectoryDeployer from './AppDirectoryDeployer'
import ImplementationDirectory from './ImplementationDirectory'
import AppDirectoryProvider from "./AppDirectoryProvider";

export default class AppDirectory extends ImplementationDirectory {

  static async fetch(address, txParams = {}) {
    const provider = new AppDirectoryProvider(txParams)
    return provider.fetch(address)
  }

  static async deploy(stdlibAddress = 0x0, txParams = {}) {
    const deployer = new AppDirectoryDeployer(txParams)
    return deployer.deploy(stdlibAddress)
  }

  constructor(directory, txParams = {}) {
    const log = new Logger('AppDirectory');
    super(directory, txParams, log)
  }

  async stdlib() {
    return this.directory.stdlib()
  }

  async setStdlib(stdlibAddress) {
    this.log.info(`Setting stdlib ${stdlibAddress}...`)
    await this.directory.setStdlib(stdlibAddress, this.txParams)
    this.log.info(`Stdlib ${stdlibAddress} set`)
    return stdlibAddress
  }
}
