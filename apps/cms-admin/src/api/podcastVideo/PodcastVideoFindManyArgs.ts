import { PodcastVideoWhereInput } from "./PodcastVideoWhereInput";
import { PodcastVideoOrderByInput } from "./PodcastVideoOrderByInput";

export type PodcastVideoFindManyArgs = {
  where?: PodcastVideoWhereInput;
  orderBy?: Array<PodcastVideoOrderByInput>;
  skip?: number;
  take?: number;
};
