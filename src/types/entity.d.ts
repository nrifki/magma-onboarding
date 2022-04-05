/**************************************************************************
 * TYPES > ENTITY
 **************************************************************************/

export default interface Entity {
  admins: number[];
  description: string;
  logo: File | null;
  name: string;
}
