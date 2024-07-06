import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

  timer: any;
  @ViewChild('carousel') carousel!: ElementRef;

  private c_w: number = 0;
  private c_sw: number = 0;

  img_idx: number = 0;

  images: string[] = [
    'carousel/img1.jpg',
    'carousel/img2.jpg',
    'carousel/img3.jpg',
    'carousel/img4.jpg'
  ];

  constructor() {

    this.timer = setInterval(() => {
      this.next();      
    }, 1500);
  }


  ngAfterViewInit(): void {
    this.c_w = this.carousel!.nativeElement.clientWidth;
    this.c_sw = this.carousel!.nativeElement.scrollWidth;



  }




  next() {
    this.img_idx = this.img_idx + 1;
    if (this.img_idx == this.images.length) {
      this.img_idx = 0;
      this.carousel!.nativeElement.scrollLeft -= this.c_sw;

    } else {
      if (this.carousel?.nativeElement.scrollLeft + this.c_w >= this.c_sw) {
        this.carousel!.nativeElement.scrollLeft -= this.c_sw;

      } else {
        this.carousel!.nativeElement.scrollLeft += this.c_w;
      }
    }
  }


  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }



  prev() {
    this.img_idx = this.img_idx - 1;
    if (this.img_idx < 0) {
      this.img_idx = this.images.length - 1;
    }
  }



  //   const $ = document.querySelector.bind(document);
  // const $$ = document.querySelectorAll.bind(document);

  // let slides = $$(".slide").length;
  // let slide = 1;
  // let w = $(".carousel").clientWidth;
  // let sw = $(".carousel").scrollWidth;

  // $(".next").addEventListener("click", () => {
  // 	slide++;
  // 	if ($(".carousel").scrollLeft + w >= sw) {
  // 		slide = 1;
  // 		$(".carousel").scrollLeft -= sw;
  // 	} else $(".carousel").scrollLeft += w;
  // });
  // $(".prev").addEventListener("click", () => {
  // 	slide--;
  // 	if ($(".carousel").scrollLeft <= 0) {
  // 		slide = slides;
  // 		$(".carousel").scrollLeft = sw;
  // 	} else $(".carousel").scrollLeft -= w;
  // });
}
