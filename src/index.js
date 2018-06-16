// module information
const version = 'v' + require('../package.json').version

// helpers
import decodeLogs from './helpers/decodeLogs'
import encodeCall from './helpers/encodeCall'

// utils
import Logger from './utils/Logger'
import FileSystem from './utils/FileSystem'
import Contracts from './utils/Contracts'

// test behaviors
import { behaviors, helpers } from './test'
const assertions = helpers.assertions
const assertRevert = helpers.assertRevert

// model objects
import App from './app/App'

import PackageWithAppDirectories from './package/PackageWithAppDirectories'
import PackageWithNonFreezableDirectories from './package/PackageWithNonFreezableDirectories'
import PackageWithFreezableDirectories from './package/PackageWithFreezableDirectories'

import AppDirectory from './directory/AppDirectory'
import ImplementationDirectory from './directory/ImplementationDirectory'
import FreezableImplementationDirectory from './directory/FreezableImplementationDirectory'

export {
  version,
  decodeLogs,
  encodeCall,
  assertRevert,
  assertions,
  behaviors,
  Logger,
  FileSystem,
  Contracts,
  App,
  ImplementationDirectory,
  FreezableImplementationDirectory,
  AppDirectory,
  PackageWithAppDirectories,
  PackageWithNonFreezableDirectories,
  PackageWithFreezableDirectories,
}
