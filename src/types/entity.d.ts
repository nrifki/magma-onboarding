/**************************************************************************
 * TYPES > ENTITY
 **************************************************************************/

export default interface Entity {
  description: string;
  logo: File | null;
  name: string;
  admins: string[];
}
