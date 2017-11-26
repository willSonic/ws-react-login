import { ReduxBrokerConsumer }  from './consumers/redux.broker.consumer';
import { NGRxDataModule } from '../../data-layer/ngrx-data/ngrx.data.module';


import { BROKER_PROVIDERS }  from './redyx-stubs/index';


@NgModule({
    imports: [ CommonModule,
               NGRxDataModule ],
    providers: [ ...BROKER_PROVIDERS,
                 NGRxBrokerConsumer]
})
export class BrokerageModule {

  constructor(@Optional() @SkipSelf() parentModule: BrokerageModule) {
    if (parentModule) {
      throw new Error('PubSubBrokerageModule already loaded; Import in root module only.');
    }
  }


  static forRoot(): ModuleWithProviders{
    return {
      ngModule: BrokerageModule,
      providers: [  ...BROKER_PROVIDERS,
          ReduxBrokerConsumer ]
    }
  }

}