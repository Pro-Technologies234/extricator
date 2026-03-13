type HeaderNavigator = {
  id?: string;
  label: string;
};

type ListView<T> = {
  data: T[];
  isLoading?: boolean;
  type?: "list" | "carousel";
  className?: string;
  selected?: T;
  onClick?: (id: string) => void;
};

type ListItem<T> = {
  data: T;
  className?: string;
  isSelected?: boolean;
  onClick?: (id: string) => void;
};

interface ArtCard {
  id: string;
  name: string;
  price: string;
  currency: string;
  likes: number;
  imageUrl: string;
  bgColor: string;
}

interface TeamCard {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}
