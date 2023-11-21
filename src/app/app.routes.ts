import { Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ChatComponent } from './pages/chat/chat.component';

export const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {
                path: '', component: ChatComponent
            }
        ]
    }
];
