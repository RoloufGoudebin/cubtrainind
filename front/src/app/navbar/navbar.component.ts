import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}

var scrollWindow = function () {
  $(window).scroll(function () {
    var $w = $(this),
      st = $w.scrollTop(),
      navbar = $('.ftco_navbar'),
      sd = $('.js-scroll-wrap');

    if (st > 50) {
      if (!navbar.hasClass('scrolled')) {
        navbar.addClass('scrolled');
      }
    }
    if (st < 50) {
      if (navbar.hasClass('scrolled')) {
        navbar.removeClass('scrolled sleep');
      }
    }
    if (st > 50) {
      if (!navbar.hasClass('awake')) {
        navbar.addClass('awake');
      }

      if (sd.length > 0) {
        sd.addClass('sleep');
      }
    }
    if (st < 50) {
      if (navbar.hasClass('awake')) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
      if (sd.length > 0) {
        sd.removeClass('sleep');
      }
    }
  });
};
scrollWindow();

$('nav .dropdown').hover(function(){
  var $this = $(this);
  // 	 timer;
  // clearTimeout(timer);
  $this.addClass('show');
  $this.find('> a').attr('aria-expanded', true);
  // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
  $this.find('.dropdown-menu').addClass('show');
}, function(){
  var $this = $(this);
    // timer;
  // timer = setTimeout(function(){
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
    $this.find('.dropdown-menu').removeClass('show');
  // }, 100);
});


$('#dropdown04').on('show.bs.dropdown', function () {
  console.log('show');
});


