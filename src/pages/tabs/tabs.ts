import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { BlendersPage } from '../blenders/blenders';
import { RecipePage } from '../recipe/recipe';
import { ChatPage } from '../chat/chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecipePage;
  tab2Root = BlendersPage;
  tab3Root = DashboardPage;
  tab4Root = ChatPage;

  constructor() {

  }
}
