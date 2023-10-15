export class ResponseData<T> {
    data!: T;
    stringCode!: string;
  }

export class Xater {
    Gmail!: string;
    FirstName!: string;
    LastName!: string;
    Dob!: Date;
    City!: string;
    Community!: string;
    ProfileImage!: Uint8Array;
    Gender!: string;
    Password!: string;
    SignupStatus!: boolean;
}