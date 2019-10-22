import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import Globe from 'worldwind-react-globe';
import './maps.css';

class Maps extends Component {
  render () {
    const layers = [
      'eox-sentinal2-labels',
      'coordinates',
      'view-controls',
      'stars',
      'atmosphere-day-night'
    ];
    const items = [
      {
        label:'File',
        icon:'pi pi-fw pi-file',
        items:[
          {
            label:'New',
            icon:'pi pi-fw pi-plus',
            items:[
              {
                label:'Bookmark',
                icon:'pi pi-fw pi-bookmark'
              },
              {
                label:'Video',
                icon:'pi pi-fw pi-video'
              },
            ]
          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-trash'
          },
          {
            separator:true
          },
          {
            label:'Export',
            icon:'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
              {
                label:'Save',
                icon:'pi pi-fw pi-calendar-plus'
              },
              {
                label:'Delete',
                icon:'pi pi-fw pi-calendar-minus'
              },  
            ]
          },
          {
            label:'Archieve',
            icon:'pi pi-fw pi-calendar-times',
            items:[
              {
                label:'Remove',
                icon:'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
      }
    ];
    return (
      <div className = 'fullscreen'>
        <div>
          <Menubar model = { items }/>
        </div>
        <Globe
          ref = { this.globeRef }
          layers = { layers }
          latitude = { 34.2 }
          longitude = { -119.2 }
          altitude = { 30e6 }
        />
      </div>
    );
  }
}

export default Maps;