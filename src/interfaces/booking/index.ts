import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  date_time: any;
  service_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  service?: ServiceInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  service_id?: string;
  user_id?: string;
}
