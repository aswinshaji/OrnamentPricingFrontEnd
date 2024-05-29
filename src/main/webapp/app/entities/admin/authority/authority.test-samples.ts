import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '4d378436-c914-4948-b218-6dad1b9e51e5',
};

export const sampleWithPartialData: IAuthority = {
  name: '7479c15b-392b-4ee2-aca6-dc158951ec3f',
};

export const sampleWithFullData: IAuthority = {
  name: 'bad7f23a-1c24-4fe7-85a4-9f22c466d1f3',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
