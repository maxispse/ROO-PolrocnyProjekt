```md
# Report [2026-02-08]

Finished pitch of database structure for the YouTube site, going to be around 27 tables to even it out with a friend of mine.

A more detailed summary of the YouTube database

(users)

Stores registered users (accounts).
Contains login and identity information for everyone using the platform.

(user_settings)

Stores personal preferences for a user, such as language or autoplay settings.
Separated to keep the users table normalized.

(channels)

Represents a creator’s channel.
Each channel belongs to one user and groups their uploaded videos.

(channel_settings)

Stores channel-specific configuration, such as whether comments or ads are enabled.

(videos)

Stores metadata about uploaded videos (title, description, visibility).
This is the central table of the platform.

(video_files)

Stores technical versions of a video (resolution, format, file path).
Allows multiple qualities for one video.

(thumbnails)

Stores thumbnail images for videos.
Separated to allow future changes or multiple thumbnails.

(captions)

Stores subtitle files for videos in different languages.

(categories)

Defines high-level video categories (e.g. Music, Gaming, Education).

(tags)

Stores individual tags used for search and discovery.

(video_tags)

Junction table connecting videos and tags (many-to-many relationship).

(video_views)

Records when a video is watched.
Used for view counting and analytics.

(video_likes)

Stores likes and dislikes on videos.
Each record connects a user to a video.

(comments)

Stores comments under videos.
Supports replies using parent_comment_id.

(comment_likes)

Stores likes and dislikes on comments.

(subscriptions)

Stores which users are subscribed to which channels.

(playlists)

Stores user-created playlists.
Can be public or private.

(playlist_videos)

Junction table connecting playlists and videos, including order position.

(watch_history)

Stores which videos a user has watched and when.

(notifications)

Stores system notifications for users (new videos, replies, etc.).

(reports)

Stores reports submitted by users for inappropriate videos.

(strikes)

Stores moderation strikes issued to channels for rule violations.

(ads)

Stores advertisement data uploaded by advertisers.

(ad_views)

Tracks when an advertisement is shown during a video.

(creators_monetization)

Stores earnings and payout data for monetized channels.

(video_stats_daily)

Stores daily aggregated statistics for each video (views, likes, comments).

(channel_stats_daily)

Stores daily aggregated statistics for each channel (subscribers, total views).
```