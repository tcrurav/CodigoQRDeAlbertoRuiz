import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner, public navCtrl: NavController, private database: DatabaseProvider) {

  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {

    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }

  users: any = [];

  CreateUser() {
    this.database.CreateUser(12345, "Kenshiro", "Senpai").then((data) => {
      console.log("tiburcio");
      console.log(JSON.stringify(data));
    }, (error) => {
      console.log("tiburcio");
      console.log(error);
    });
  }

  GetAllUser() {
    this.database.getAllUsers().then((data) => {
      console.log("tiburcio");
      console.log(JSON.stringify(data));
      this.users = data;
    }, (error) => {
      console.log("tiburcio");
      console.log(error);
    });
  }
}
