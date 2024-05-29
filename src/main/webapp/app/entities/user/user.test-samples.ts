import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 13614,
  login: 'yTm@8Ing\\;e8\\FnaRW41\\"izFmfO',
};

export const sampleWithPartialData: IUser = {
  id: 14321,
  login: '5Sr',
};

export const sampleWithFullData: IUser = {
  id: 27750,
  login: 'RdS@lmUY\\>eG\\KC53\\)Wh\\WU',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
