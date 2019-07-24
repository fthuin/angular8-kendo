import { Component } from '@angular/core';
import {NotificationService} from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
        .example {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .img {
            width: 490px;
            height: 290px;
            background-image: url('https://demos.telerik.com/kendo-ui/content/web/colorpicker/motor.png');
        }
        .wrapper {
            margin-top: 10px;
        }
    `]
})
export class AppComponent {
  title = 'angular8-kendo';
  value = new Date();
  data: Array<any> = [{
    text: 'My Profile'
  }, {
    text: 'Friend Requests'
  }, {
    text: 'Account Settings'
  }, {
    text: 'Support'
  }, {
    text: 'Log Out'
  }];

  listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];

  public currentColor: string = 'rgba(195, 0, 47, 1)';

  constructor(private notificationService: NotificationService) {
  }


  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }

  show(): void {
    this.notificationService.show({
      content: 'Your data has been saved. Time for tea!',
      cssClass: 'button-notification',
      animation: { type: 'slide', duration: 400 },
      position: { horizontal: 'center', vertical: 'bottom' },
      type: { style: 'success', icon: true },
      closable: true
    });
  }
}
