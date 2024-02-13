import ApplicationCommand from './application-command';
import ApplicationResponse from './application-response';

interface ApplicationService {
  execute(command: ApplicationCommand): Promise<ApplicationResponse> | void;
}

export default ApplicationService;
