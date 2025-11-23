export interface CardProps {
 title: string, 
 content: string
}

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  id?: number; // optional, in case you want to use post id
  title: string;
  body: string; // JSONPlaceholder uses `body` for post content
}


export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  username?: string;
  email: string;
  address: Address;
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
