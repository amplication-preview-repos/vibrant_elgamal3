import { PodcastVideo as TPodcastVideo } from "../api/podcastVideo/PodcastVideo";

export const PODCASTVIDEO_TITLE_FIELD = "title";

export const PodcastVideoTitle = (record: TPodcastVideo): string => {
  return record.title?.toString() || String(record.id);
};
