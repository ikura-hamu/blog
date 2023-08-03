import { createClient } from "contentful";

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogFields {
    title: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Text;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

export const buildClient = () => {
  const client = createClient({
    space: import.meta.env.VUE_APP_CF_SPACE_ID || "",
    accessToken: import.meta.env.VUE_APP_CF_ACCESS_TOKEN || "",
  });
  return client;
};
