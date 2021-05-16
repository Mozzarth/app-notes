export interface IUserRestorePassGetKeyDto {
  email: string;
}

export interface IUserRestorePassDto {
  key: string;
  newPass: string;
}
