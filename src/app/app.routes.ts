import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { UsersComponent} from '../components/users/users.component';
import { RequestsComponent } from '../components/requests/requests.component';
import { SettingsComponent } from '../components/settings/settings.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'requests', component: RequestsComponent },
    { path: 'settings', component: SettingsComponent }
];
