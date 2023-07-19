import MessageResponse from '../interfaces/MessageResponse';

export default interface ErrorMessage extends MessageResponse {
	stack?: string;
}
