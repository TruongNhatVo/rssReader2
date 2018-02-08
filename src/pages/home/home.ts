import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../model/post.class';
import { Http } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { RssProvider } from '../../providers/rss/rss';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public posts: any;
  public subscription: Subscription;
  
  constructor(
    public navCtrl: NavController,
    public rss: RssProvider
  ) {
    this.loadData();
  }

  loadData() {
    this.subscription = this.rss.loadRssData('https://vnexpress.net/rss/phap-luat.rss',50).subscribe(
      (res) => { this.posts = res.items;
        console.log(res)
      },
      (err) => { console.log(err)}
    );
  }

}

