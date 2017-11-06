import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { Actions as ErrorActions } from './error/error.actions';
import { Actions as ProfileActions } from './profile/profile.actions';
import { Actions as LayoutActions } from './layout/layout.actions';
import { Actions as UserSessionActions } from './user-session/user.session.actions';

type ReactRouterAction = RouterAction | LocationChangeAction;


export type RootAction =
  | ReactRouterAction
  | ErrorActions[keyof ErrorActions]
  | ProfileActions[ keyof ProfileActions]
  | LayoutActions[keyof LayoutActions]
  | UserSessionActions[keyof UserSessionActions];