interface PondDataTypes {
  id: number;
  title: string;
  location: {
    id: number;
    title: string;
  };
  motors: {
    id: number;
    title: string;
    state: number;
    starter_id: number | null;
    motor_ref_id: number | null;
    starterBox: any | null;
  }[];
  motorCount: number;
}
