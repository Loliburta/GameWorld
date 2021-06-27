export interface Types {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  id: number;
  user: User | null;
  game: number;
  text: string;
  text_preview: string;
  text_previews: any[];
  text_attachments: number;
  rating: number;
  reactions: number[];
  created: Date;
  edited: Date;
  likes_count: number;
  likes_positive: number;
  likes_rating: number;
  comments_count: number;
  comments_parent_count: number;
  posts_count: number;
  share_image: string;
  is_text: boolean;
  external_avatar: null | string;
  comments: Comments;
  can_delete: boolean;
  external_store?: ExternalStore;
  external_lang?: string;
  external_author?: string;
  external_source?: string;
  is_external?: boolean;
}

export interface Comments {
  count: number;
  results: any[];
}

export interface ExternalStore {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface User {
  id: number;
  username: string;
  slug: string;
  full_name: string;
  avatar: null | string;
  games_count: number;
  collections_count: number;
}
