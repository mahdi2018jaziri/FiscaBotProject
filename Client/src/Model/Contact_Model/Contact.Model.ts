import { State } from './State.Enum';

export class Contact {
    public FullName: string;
    public email: string;
    public subject: string;
    public message: string;
    public state: State; // Ajout de l'attribut énumérable

    constructor(fullName: string, email: string, subject: string, message: string , state: State) {
      this.FullName = fullName;
      this.email = email;
      this.subject = subject;
      this.message = message;
      this.state = state;

    }
  }