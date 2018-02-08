import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Post } from '../../model/post.class';
import 'rxjs/add/operator/map';

@Injectable()
export class RssProvider {

  public apiUrl: string = 'https://api.rss2json.com/v1/api.json';
  public apiKey: string = 'ik3oxmthz1vqgdxlszmbiqxls82k5kzfxgomc3kr';

  constructor(private httpClient: HttpClient) {
  }

  loadRssData(rssUrl: string, count?: any): Observable<any> {
    return this.httpClient.get(this.apiUrl, {
      params: {
        rss_url: rssUrl,
        api_key: this.apiKey,
        count: count || 10
      }
    })
  }


}
