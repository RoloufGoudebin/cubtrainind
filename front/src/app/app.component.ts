import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cubtraining';

  ngOnInit() {
    this.loadScript('../assets/js/jquery.min.js');
    this.loadScript('../assets/js/jquery-migrate-3.0.1.min.js');
    this.loadScript('../assets/js/popper.min.js');
    this.loadScript('../assets/js/bootstrap.min.js');
    this.loadScript('../assets/js/jquery.easing.1.3.js');
    this.loadScript('../assets/js/jquery.waypoints.min.js');
    this.loadScript('../assets/js/jquery.stellar.min.js');
    this.loadScript('../assets/js/owl.carousel.min.js');
    this.loadScript('../assets/js/jquery.magnific-popup.min.js');
    this.loadScript('../assets/js/aos.js');
    this.loadScript('../assets/js/jquery.animateNumber.min.js');
    this.loadScript('../assets/js/scrollax.min.js');
    this.loadScript('../assets/js/google-map.js');
    this.loadScript('../assets/js/main.js')

  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
