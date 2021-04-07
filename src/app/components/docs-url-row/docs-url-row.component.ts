import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'appdashboard-docs-url-row',
  templateUrl: './docs-url-row.component.html',
  styleUrls: ['./docs-url-row.component.scss']
})
export class DocsUrlRowComponent implements OnInit {
  @Input() doctitle: string;
  @Input() docurl: string;
  @Input() customtext: boolean;
  @Input() text_to_display: string;
  
  translateparam: any; 
  constructor() { }

  ngOnInit() {
    this.translateparam = { helpdoc: this.doctitle };
    console.log('Docs_Url_Row Component doctitle ', this.doctitle);
    console.log('Docs_Url_Row Component docurl ', this.docurl)  
    console.log('Docs_Url_Row Component customtext ', this.customtext)  
    console.log('Docs_Url_Row Component text_to_display ', this.text_to_display) 
  }

}
