#!/usr/bin/env node
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const {attachMetroCli} = require('./index');
// flowlint-next-line untyped-import:off
const yargs = require('yargs');

attachMetroCli(yargs.demandCommand(1)).argv;
