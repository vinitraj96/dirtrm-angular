import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  questionArray = [];
  constructor() { }

  ngOnInit() {
    this.questionArray = [
      {question: 'How do I schedule my first Dirtrm Laundry?', answer: 'You can schedule your first dirtrm pickup, or on our mobile app'
      + 'available on Android. If you have any difficulties, feel free to contact us at support@dirtrm.com -' +
      'our team is always happy to help!'},
      {question: 'How do I schedule my first Dirtrm Laundry?', answer: 'You can schedule your first dirtrm pickup, or on our mobile app'
      + 'available on Android. If you have any difficulties, feel free to contact us at support@dirtrm.com -' +
      'our team is always happy to help!'},
      {question: 'How do I schedule my first Dirtrm Laundry?', answer: 'You can schedule your first dirtrm pickup, or on our mobile app'
      + 'available on Android. If you have any difficulties, feel free to contact us at support@dirtrm.com -' +
      'our team is always happy to help!'},
      {question: 'How do I schedule my first Dirtrm Laundry?', answer: 'You can schedule your first dirtrm pickup, or on our mobile app'
      + 'available on Android. If you have any difficulties, feel free to contact us at support@dirtrm.com -' +
      'our team is always happy to help!'},
      {question: 'How do I schedule my first Dirtrm Laundry?', answer: 'You can schedule your first dirtrm pickup, or on our mobile app'
      + 'available on Android. If you have any difficulties, feel free to contact us at support@dirtrm.com -' +
      'our team is always happy to help!'}
  ];
  }

}
