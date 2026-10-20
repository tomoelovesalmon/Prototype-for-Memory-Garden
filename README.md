# Memory Garden — Diary & Focus update

Extract the ZIP and open index.html in a recent browser. The planner, diary, timer, XP, and saved data work without an account or build step.

## New diary controls
The diary has a clear **Save diary** button beside the date and a second save control below the writing area. Saving a page immediately adds a preview to **Today**, and the full page remains in **Memory lane**.

Choose from 12 fonts that support Thai and Latin lettering: Mali, Itim, Sriracha, Charm, Charmonman, Chonburi, Pattaya, Srisakdi, Kodchasan, Mitr, Bai Jamjuree, and Sarabun. These free fonts load through Google Fonts when online. Offline, the browser uses the supplied system-font fallbacks; the selector remains available and your selected font is remembered.

Pick an ink colour and one of six paper types: ruled, plain cream, dotted, squared, kraft, or blush. Appearance is saved separately with each diary page and is retained in its Today preview and memory view. Unsaved text and appearance survive language switches and moving between diary dates.

Use **Choose your own picture** below the image on the diary's right side to upload a replacement. It is resized in the browser and saved with your garden. The restore button returns to the cottage-window illustration. This side picture is a garden preference, while attached photos belong to individual diary pages.

## Focus nook
Open **Focus nook** in the sidebar or through the card on Today. Enter a task, such as “I want to study JavaScript”, choose a duration, and start. Presets include 15, 25, 30, 45, 60, and 90 minutes; custom sessions can last 5–180 minutes.

Pause, resume, or minimise the timer and keep using the site. A small timer dock remains visible outside the Focus page. The saved finish time keeps the countdown accurate across navigation, background-tab delays, and reloads. Paused time does not count. If you close the app, the elapsed session is reconciled and its reward is recorded when you return; this app cannot alert you while closed.

A finished session awards one XP per planned minute, with a minimum of 10 XP and a maximum of 90 XP. A 30-minute session gives 30 XP. Each session can award XP once. Ending early does not award focus XP. Existing checklist tasks continue to earn 10 XP once per occurrence.

Study ranks depend on completed focus minutes:

| Completed minutes | Rank |
| --- | --- |
| 0 | Little Seed |
| 30 | Curious Sprout |
| 120 | Steady Sapling |
| 300 | Study Oak |
| 600 | Garden Sage |

Focus rewards also contribute to the normal garden levels and companion unlocks. Finished sessions appear in the Focus history, and newly gathered monthly keepsakes include focus minutes.

## YouTube playlists
The Focus nook contains a soundtrack area. Create a named playlist, paste YouTube **video** links, optionally add track names, and press Play. You can switch playlists, remove tracks, and move tracks up or down. Each playlist can contain up to 50 links.

The player stays visible as you navigate around the site. Its native YouTube controls can pause or advance through the queued videos. Closing the player stops it. Editing a playlist updates saved links; press Play again to load the edited queue. Playlists are stored in this app and do not change your YouTube account.

YouTube requires an internet connection. The app does not request music data until you press Play or follow a YouTube link. Some video owners do not permit embedding. Also, opening index.html directly as a local file may prevent YouTube playback because the player requires a valid referring site. Use trusted localhost/HTTPS hosting for embedding, or choose **Open in YouTube**. Browser autoplay settings may require pressing Play inside the player.

Official references: [YouTube player parameters](https://developers.google.com/youtube/player_parameters), [player errors and embed restrictions](https://developers.google.com/youtube/iframe_api_reference#onError), and [embedded-player identity](https://developers.google.com/youtube/terms/required-minimum-functionality#embedded-player-api-client-identity).

## Your existing garden
Daily, weekly, and yearly tasks; birthdays; the year calendar; companion reactions; photo diaries; bilingual Thai/English text; and monthly keepsakes remain available. Leap-day birthdays appear on February 28 in years without February 29.

All app data stays in this browser's localStorage. Use **Garden settings → Save a backup** to keep your tasks, styled diary pages, uploaded side picture, playlists, focus session/history, XP, and keepsakes. Backups from the previous build are upgraded when restored. Browser privacy settings or clearing site data can remove saved data.

Use the same browser and folder/address when replacing older app files. Export a backup before moving to a different location.

## Reminder limits
Browser notifications need permission and an open page. Background tabs can delay callbacks. This standalone app cannot send notifications after it has been closed.

## Beginner file map
- index.html: page structure and controls.
- styles.css: layout, paper styles, focus timer, and music dock.
- diary-fonts.css: the 12 optional Thai/English web fonts.
- i18n.js: matching English/Thai interface messages.
- garden-core.js: recurrence, migration, rewards, focus timing/ranks, font/style validation, and YouTube link parsing.
- app.js: diary, focus, playlist, and planner interactions.
- assets/: the three current illustrations.
- ARTWORK.md: original generation prompts.
- CHECKS.md: verification details.

The UI uses data-i18n keys rather than replacing text fragments. Your own task titles, diary text, and playlist names stay exactly as you type them.
