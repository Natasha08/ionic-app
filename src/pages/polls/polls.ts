import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { testProvider } from '../../providers/test-provider';

@Component({
  selector: 'page-polls',
  templateUrl: 'polls.html'
})

export class PollsPage {
  constructor(public navCtrl: NavController, public testProvider: testProvider) {
    this.testProvider = testProvider
  }

  testClicker = function() {
    this.testProvider.load()
  }



}
