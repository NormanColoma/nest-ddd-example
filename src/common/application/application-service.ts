import ApplicationCommand from './application-command';
import ApplicationResponse from './application-response';

interface ApplicationService {
  execute(command: ApplicationCommand): ApplicationResponse | void;
}

export default ApplicationService;
