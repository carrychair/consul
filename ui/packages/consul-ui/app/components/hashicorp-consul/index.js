/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class HashiCorpConsul extends Component {
  @service('flashMessages') flashMessages;
  @service('env') env;

  get consulVersion() {
    const suffix = this.env.isEnterprise ? '+ent' : '';
    return `${this.env.var('CONSUL_VERSION')}${suffix}`;
  }
}
