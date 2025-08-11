import { AppDataSource } from '../config/dataSource';
import { Gender } from '../entities/Gender';

const genderRepository = AppDataSource.getRepository(Gender);

export const getAllGenders = async (): Promise<Gender[]> => {
  return await genderRepository.find();
};

export const getGenderById = async (id: string): Promise<Gender | null> => {
  return await genderRepository.findOneBy({ id });
};

export const createGender = async (name: string): Promise<Gender> => {
  const newGender = genderRepository.create({ name });
  return await genderRepository.save(newGender);
};

export const updateGender = async (id: string, name: string): Promise<Gender | null> => {
  const gender = await genderRepository.findOneBy({ id });
  if (!gender) return null;
  gender.name = name;
  return await genderRepository.save(gender);
};

export const deleteGender = async (id: string): Promise<boolean> => {
  const gender = await genderRepository.findOneBy({ id });
  if (!gender) return false;
  await genderRepository.remove(gender);
  return true;
};
