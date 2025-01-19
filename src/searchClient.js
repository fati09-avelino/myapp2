import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const { searchClient } = instantMeiliSearch(
    'http://18.227.13.140',
  'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be'
);

export { searchClient };