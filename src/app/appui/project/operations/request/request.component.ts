import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  breakpoint!: number;
  displayedColumns: string[] = [
    'request',
    'user',
    'date',
    'template',
    'state',
    'status',
  ];
  @ViewChild('ustable') ustable!: Table;

  users = [
    {
      id: 1,
      id_sol: '#4445',
      user: 'Mariana',
      date: '23/09/2022',
      add: 'Planillalogyca.xlsx',
      status: 'Activo',
    },
    {
      id: 2,
      id_sol: '#4445',
      user: 'Mariana',
      date: '23/09/2022',
      add: 'Planillalogyca.xlsx',
      status: 'Resuelto',
    },
    {
      id: 3,
      id_sol: '#4445',
      user: 'Mariana',
      date: '23/09/2022',
      add: 'Planillalogyca.xlsx',
      status: 'En curso',
    },
    {
      id: 4,
      id_sol: '#4445',
      user: 'Mariana',
      date: '23/09/2022',
      add: 'Planillalogyca.xlsx',
      status: 'Activo',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 700 ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 700 ? 1 : 2;
  }

  tableFilter($event: any) {
    this.ustable.filterGlobal($event.target.value, 'contains');
  }

  getClassStatus(status: string) {
    switch (status) {
      case 'Activo':
        return 'status-content-active';
      case 'Resuelto':
        return 'status-content-resolve';
      case 'En curso':
        return 'status-content-course';

      default:
        return '';
    }
  }
}
