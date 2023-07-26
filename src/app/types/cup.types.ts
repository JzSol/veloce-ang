export interface Cup {
  qty: number;
  id: any;
  quantity: number;
  cupImg: string;
  stamp?: boolean;
  title: string;
  size1: number;
  size2: number;
  IsSugar: string;
  IsSugarAdded: boolean;
  choosenSize?: 250 | 500;
  buttonClicked?: boolean;

  price: Record<'250' | '500', number>;
}
