import { BrokerPublisher } from '../../pubsub-broker/outlet/broker.publisher';
import { ReduxBrokerConsumer }  from '../consumers/redux.broker.consumer';


export class  ReduxBrokerRegistrationService {

      constructor(  private reduxBrokerConsumer: ReduxBrokerConsumer,
                    private brokerPublisher:BrokerPublisher){
                    this.brokerPublisher.RegisterBrokerConsumer(this.reduxBrokerConsumer);
      }

}

