export interface Cup {
  id: any;
  cupImg: string;
  stamp?: boolean;
  title: string;
  size1: number;
  size2: number;
  IsSugar: string;
  IsSugarAdded: boolean;
  choosenSize?: 250 | 500;
  buttonClicked?: boolean;
  qty: number;
  quantity: number;
  price: Record<'250' | '500', number>;

  details: {
    calories: number;
    totalFat: number;
    cholesterol: number;
    sodium: number;
    totalCarbohydrate: number;
    protein: number;
    vitaminD: number;
    calcium: number;
  };
}
