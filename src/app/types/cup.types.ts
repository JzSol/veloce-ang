export interface Cup {
  cupImg: string;
  stamp?: boolean;
  price: string;
  title: string;
  size1: number;
  size2: number;
  IsSugar: string;
  isChecked: boolean;
  choosenSize: '250' | '500' | string;
  buttonClicked?: boolean;
}
