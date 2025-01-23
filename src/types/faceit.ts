export type FaceitProfile = {
  player_id: string;
  nickname: string;
  country: string; // "nl"...
  games: {
    cs2: {
      region: string; // "EU"...
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
    };
  };
  settings: { language: "en" };
  friends_ids: string[];
  faceit_url: string;
  verified: boolean;
  activated_at: string;
  // other props
};

export type FaceitStats = {
  player_id: string;
  game_id: "cs2";
  lifetime: {
    "Total Flash Count": "1795";
    "Total Utility Successes": "517";
    "Utility Usage per Round": "0.37";
    "Total Enemies Flashed": "1344";
    "Total Utility Count": "1405";
    "Total Headshots %": "27365";
    "Win Rate %": "53";
    "Total Utility Damage": "17791";
    "Current Win Streak": "2";
    "Total Rounds with extended stats": "3763";
    "K/D Ratio": "773";
    "Total Kills with extended stats": "2958";
    "Flashes per Round": "0.48";
    "Sniper Kill Rate": "0.01";
    "Utility Success Rate": "0.37";
    "Total Damage": "315986";
    "Total Entry Wins": "392";
    "Total Flash Successes": "926";
    "Entry Success Rate": "0.56";
    "Total 1v2 Wins": "30";
    "Total 1v2 Count": "141";
    "1v1 Win Rate": "0.44";
    "Recent Results": ["0", "0", "0", "1", "1"];
    "Enemies Flashed per Round": "0.36";
    "Total 1v1 Wins": "53";
    "Average Headshots %": "49";
    "Longest Win Streak": "7";
    "Total 1v1 Count": "121";
    "Utility Damage per Round": "4.73";
    Matches: "559";
    Wins: "297";
    "Total Entry Count": "702";
    "Flash Success Rate": "0.52";
    ADR: "83.97";
    "Total Matches": "172";
    "Sniper Kill Rate per Round": "0.01";
    "1v2 Win Rate": "0.21";
    "Utility Damage Success Rate": "12.66";
    "Average K/D Ratio": "1.38";
    "Entry Rate": "0.19";
    "Total Sniper Kills": "25";
  };
  segments: [
    {
      type: "Map";
      mode: "5v5";
      label: "Train";
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/6c361bc4-00bf-4700-8d4d-48ab5ae3df1f_1695827671063.jpeg";
      img_regular: "https://distribution.faceit-cdn.net/images/9e2d5b60-e16e-4309-8e77-8d4427938095.jpeg";
      stats: {
        "Entry Success Rate": "0.6";
        "Average Quadro Kills": "0";
        "Average K/R Ratio": "0.68";
        ADR: "69.21";
        "Utility Damage per Round": "2.32";
        "Total 1v1 Count": "1";
        "Total Utility Successes": "0";
        "Average Headshots %": "31";
        "Flashes per Round": "0.63";
        "Total Headshots %": "31";
        "Sniper Kill Rate": "0";
        "Headshots per Match": "4";
        "Average Deaths": "15";
        "Total Flash Successes": "5";
        "Total 1v1 Wins": "1";
        "Total Utility Count": "2";
        "Average Kills": "13";
        MVPs: "1";
        "Average Assists": "2";
        "Utility Success Rate": "0";
        "Average MVPs": "1";
        "Average Penta Kills": "0";
        "Entry Rate": "0.26";
        "Total Flash Count": "12";
        "K/D Ratio": "0.87";
        "Win Rate %": "0";
        Rounds: "19";
        "Penta Kills": "0";
        "Enemies Flashed per Round": "0.42";
        "K/R Ratio": "0.68";
        "Utility Usage per Round": "0.11";
        "1v2 Win Rate": "0";
        "Average K/D Ratio": "0.87";
        "Total Rounds with extended stats": "19";
        Wins: "0";
        "Flash Success Rate": "0.42";
        "Total Utility Damage": "44";
        "Triple Kills": "0";
        "Utility Damage Success Rate": "22";
        "Total Matches": "1";
        Assists: "2";
        "Sniper Kill Rate per Round": "0";
        Headshots: "4";
        "Total Damage": "1315";
        Kills: "13";
        "Total 1v2 Wins": "0";
        "Quadro Kills": "0";
        "Total Sniper Kills": "0";
        Matches: "1";
        "Total Entry Wins": "3";
        "Total Entry Count": "5";
        "1v1 Win Rate": "1";
        Deaths: "15";
        "Total Kills with extended stats": "13";
        "Average Triple Kills": "0";
        "Total 1v2 Count": "1";
        "Total Enemies Flashed": "8";
      };
    },
    {
      type: "Map";
      mode: "5v5";
      label: "Mirage";
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/796b5b23-41e4-4387-a4a9-0d28c1c57456_1695819136505.jpeg";
      img_regular: "https://distribution.faceit-cdn.net/images/c47710c4-4407-4dbd-ac89-2ef3b20a262e.jpeg";
      stats: {
        Wins: "46";
        "Total Enemies Flashed": "545";
        "Entry Rate": "0.2";
        "Total 1v1 Wins": "16";
        "K/R Ratio": "58.06";
        "Total Matches": "49";
        "Total Utility Successes": "109";
        "Total Damage": "86397";
        "Total 1v2 Wins": "5";
        "Average Triple Kills": "0.85";
        "Average K/R Ratio": "0.78";
        "Flashes per Round": "0.58";
        "Average Headshots %": "55";
        "Total Sniper Kills": "17";
        "1v2 Win Rate": "0.12";
        Headshots: "694";
        "Total Rounds with extended stats": "1073";
        "Average Quadro Kills": "0.24";
        "Triple Kills": "63";
        ADR: "80.52";
        "Quadro Kills": "18";
        "Average Kills": "17.2";
        "Total Flash Count": "622";
        "Flash Success Rate": "0.58";
        "Total Entry Wins": "109";
        "Utility Usage per Round": "0.33";
        "Total 1v2 Count": "41";
        "Total Headshots %": "4073";
        "K/D Ratio": "94.78";
        "Total Entry Count": "210";
        "Total Utility Damage": "3019";
        "Total Utility Count": "354";
        Matches: "74";
        "Utility Damage per Round": "2.81";
        "Average Penta Kills": "0.01";
        "Average MVPs": "2.61";
        "Average Deaths": "14.49";
        "Penta Kills": "1";
        Assists: "337";
        "Utility Success Rate": "0.31";
        Deaths: "1072";
        "Win Rate %": "62";
        Rounds: "1620";
        "Entry Success Rate": "0.52";
        MVPs: "193";
        "Average K/D Ratio": "1.28";
        "Sniper Kill Rate per Round": "0.02";
        Kills: "1273";
        "Sniper Kill Rate": "0.02";
        "Headshots per Match": "9.38";
        "Total 1v1 Count": "32";
        "Total Kills with extended stats": "833";
        "Utility Damage Success Rate": "8.53";
        "Enemies Flashed per Round": "0.51";
        "1v1 Win Rate": "0.5";
        "Total Flash Successes": "359";
        "Average Assists": "4.55";
      };
    },
    {
      type: "Map";
      mode: "5v5";
      label: "Anubis";
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/847a46ed-fbcc-4347-a64a-bc2d6a24be89_1695819226252.jpeg";
      img_regular: "https://distribution.faceit-cdn.net/images/1c2412c7-ae0c-4fa1-ad86-82a3287cb479.jpeg";
      stats: {
        "Average Quadro Kills": "0.2";
        Kills: "1302";
        "Total 1v1 Count": "32";
        "Average Penta Kills": "0.06";
        "K/D Ratio": "101.54";
        "1v2 Win Rate": "0.39";
        Assists: "348";
        "Sniper Kill Rate per Round": "0";
        Headshots: "749";
        Rounds: "1565";
        Deaths: "981";
        "Average Assists": "4.9";
        Matches: "71";
        "Entry Rate": "0.17";
        "Total 1v2 Count": "33";
        "Sniper Kill Rate": "0";
        "Average Headshots %": "57";
        "Total Flash Count": "307";
        "Average Deaths": "13.82";
        "K/R Ratio": "59.14";
        "Total Utility Successes": "149";
        "Total Entry Count": "134";
        "Utility Damage Success Rate": "17.57";
        "Average K/D Ratio": "1.43";
        MVPs: "211";
        "Average MVPs": "2.97";
        "Average Kills": "18.34";
        "Penta Kills": "4";
        "Win Rate %": "54";
        "Entry Success Rate": "0.57";
        "Average Triple Kills": "1.3";
        "Total Entry Wins": "77";
        Wins: "38";
        "Flash Success Rate": "0.43";
        "Total Kills with extended stats": "600";
        "Utility Success Rate": "0.45";
        "Total 1v1 Wins": "12";
        "Triple Kills": "92";
        "Flashes per Round": "0.39";
        "Quadro Kills": "14";
        "Total Damage": "65655";
        "Total Utility Damage": "5817";
        "1v1 Win Rate": "0.38";
        "Total Matches": "36";
        "Utility Damage per Round": "7.39";
        "Total Enemies Flashed": "184";
        "Total Flash Successes": "131";
        "Total Rounds with extended stats": "787";
        "Total Utility Count": "331";
        "Total 1v2 Wins": "13";
        "Average K/R Ratio": "0.83";
        ADR: "83.42";
        "Utility Usage per Round": "0.42";
        "Headshots per Match": "10.55";
        "Enemies Flashed per Round": "0.23";
        "Total Sniper Kills": "0";
        "Total Headshots %": "4067";
      };
    },
    {
      type: "Map";
      mode: "5v5";
      label: "Ancient";
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/a7d193ca-9498-4546-bf7b-da33e3e429a5_1695819186093.jpeg";
      img_regular: "https://distribution.faceit-cdn.net/images/6f72ffec-7607-44cf-9c31-09a865fa92f5.jpeg";
      stats: {
        "Utility Success Rate": "0.36";
        "Average K/D Ratio": "1.35";
        "Total 1v2 Wins": "8";
        "Total Utility Count": "446";
        Kills: "1338";
        "Average Assists": "4.91";
        "Total Matches": "49";
        "Penta Kills": "1";
        "Average Deaths": "14.47";
        Headshots: "711";
        "Total Damage": "92229";
        "Total Entry Wins": "116";
        "Total 1v1 Wins": "18";
        "Average Headshots %": "54";
        "Total Flash Count": "553";
        Matches: "75";
        "Flashes per Round": "0.53";
        Assists: "368";
        "Average Quadro Kills": "0.17";
        "Sniper Kill Rate per Round": "0";
        "K/R Ratio": "63.5";
        "Total Utility Damage": "5421";
        Rounds: "1586";
        "Enemies Flashed per Round": "0.37";
        "Total 1v2 Count": "35";
        Wins: "39";
        "1v1 Win Rate": "0.56";
        "Total Flash Successes": "270";
        "Average Penta Kills": "0.01";
        MVPs: "204";
        "Quadro Kills": "13";
        "Average Kills": "17.84";
        "Total Sniper Kills": "3";
        "Total Utility Successes": "160";
        "K/D Ratio": "101.01";
        "Total 1v1 Count": "32";
        "Win Rate %": "52";
        "Total Kills with extended stats": "888";
        "Entry Rate": "0.19";
        "Total Entry Count": "195";
        "Total Rounds with extended stats": "1034";
        ADR: "89.2";
        "Utility Usage per Round": "0.43";
        Deaths: "1085";
        "Average Triple Kills": "1.11";
        "Average MVPs": "2.72";
        "Average K/R Ratio": "0.85";
        "Headshots per Match": "9.48";
        "1v2 Win Rate": "0.23";
        "Flash Success Rate": "0.49";
        "Triple Kills": "83";
        "Entry Success Rate": "0.59";
        "Total Enemies Flashed": "382";
        "Sniper Kill Rate": "0";
        "Utility Damage Success Rate": "12.15";
        "Total Headshots %": "4040";
        "Utility Damage per Round": "5.24";
      };
    },
    {
      stats: {
        Rounds: "570";
        "Average Triple Kills": "1.25";
        "Total Utility Damage": "918";
        Headshots: "321";
        "Utility Damage Success Rate": "11.62";
        "Average Quadro Kills": "0.25";
        "Total Headshots %": "1693";
        "Entry Success Rate": "0.6";
        "Average Headshots %": "60";
        "Total Sniper Kills": "0";
        "Average MVPs": "2.68";
        "Enemies Flashed per Round": "0.21";
        MVPs: "75";
        "Average Kills": "19.14";
        Matches: "28";
        "Total Enemies Flashed": "40";
        "Penta Kills": "2";
        "Total 1v1 Count": "6";
        "Sniper Kill Rate": "0";
        "Average Deaths": "13.82";
        "Total Entry Count": "45";
        "Total Utility Successes": "30";
        "Total Utility Count": "79";
        "Total Rounds with extended stats": "189";
        "K/R Ratio": "26.72";
        "Flash Success Rate": "0.52";
        "Average K/D Ratio": "1.52";
        "Utility Success Rate": "0.38";
        "Average Penta Kills": "0.07";
        "K/D Ratio": "42.51";
        "Total 1v2 Wins": "0";
        "Triple Kills": "35";
        "Total Flash Successes": "27";
        ADR: "100.35";
        "Total 1v2 Count": "4";
        "1v2 Win Rate": "0";
        "Average K/R Ratio": "0.95";
        "Win Rate %": "54";
        "Total Matches": "9";
        "Sniper Kill Rate per Round": "0";
        "Quadro Kills": "7";
        "Total Flash Count": "52";
        "Total Damage": "18966";
        Wins: "15";
        Deaths: "387";
        "Flashes per Round": "0.28";
        "Headshots per Match": "11.46";
        Kills: "536";
        "Total Kills with extended stats": "164";
        "Entry Rate": "0.24";
        "Average Assists": "4.79";
        "Utility Damage per Round": "4.86";
        Assists: "134";
        "Total 1v1 Wins": "1";
        "Total Entry Wins": "27";
        "1v1 Win Rate": "0.17";
        "Utility Usage per Round": "0.42";
      };
      type: "Map";
      mode: "5v5";
      label: "Nuke";
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/15ff938d-a70d-4d0b-9bf9-6be215cdb193_1695819151395.jpeg";
      img_regular: "https://distribution.faceit-cdn.net/images/faa7775b-f42b-4627-891a-21ee7cc13637.jpeg";
    },
    {
      img_regular: "https://distribution.faceit-cdn.net/images/4eafa800-b504-4dd2-afd0-90882c729140.jpeg";
      stats: {
        "Total Flash Count": "121";
        "Total Utility Damage": "670";
        "Triple Kills": "18";
        "Enemies Flashed per Round": "0.34";
        Rounds: "418";
        "Total 1v2 Wins": "1";
        "Average K/D Ratio": "1.07";
        "Utility Usage per Round": "0.24";
        "Penta Kills": "2";
        "Sniper Kill Rate": "0";
        "Win Rate %": "41";
        "Total Matches": "10";
        "K/R Ratio": "12.5";
        "Average Headshots %": "56";
        "1v1 Win Rate": "0.1";
        "Flash Success Rate": "0.5";
        "Total Utility Successes": "19";
        "Flashes per Round": "0.48";
        Matches: "17";
        MVPs: "41";
        "Utility Damage Success Rate": "10.98";
        "Utility Success Rate": "0.31";
        "1v2 Win Rate": "0.08";
        Wins: "7";
        "Average Kills": "18.29";
        "Total 1v1 Wins": "1";
        "Total Utility Count": "61";
        Kills: "311";
        ADR: "79.31";
        "Entry Success Rate": "0.44";
        "Total Damage": "20066";
        "Headshots per Match": "9.88";
        Headshots: "168";
        "Total Rounds with extended stats": "253";
        "Total Sniper Kills": "1";
        "Total Kills with extended stats": "178";
        "Average K/R Ratio": "0.74";
        "Average Penta Kills": "0.12";
        "Total Headshots %": "954";
        "Total Enemies Flashed": "87";
        "Total 1v2 Count": "12";
        "Entry Rate": "0.15";
        "Total Flash Successes": "61";
        "Total Entry Wins": "17";
        "Utility Damage per Round": "2.65";
        "Quadro Kills": "2";
        "Average MVPs": "2.41";
        "Average Assists": "6.29";
        "Total 1v1 Count": "10";
        Assists: "107";
        "Sniper Kill Rate per Round": "0.01";
        "Average Quadro Kills": "0.12";
        Deaths: "290";
        "K/D Ratio": "18.13";
        "Average Deaths": "17.06";
        "Total Entry Count": "39";
        "Average Triple Kills": "1.06";
      };
      type: "Map";
      mode: "5v5";
      label: "Dust2";
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/adf58ac6-b0f3-40e9-87ef-0af23fc60918_1695819116078.jpeg";
    },
    {
      img_regular: "https://distribution.faceit-cdn.net/images/d71cae42-b38c-470d-a548-0c59d6c71fbe.jpeg";
      stats: {
        "K/R Ratio": "30.76";
        "Total Enemies Flashed": "98";
        "Utility Usage per Round": "0.32";
        "Total Utility Successes": "50";
        "Total Entry Count": "74";
        "Average MVPs": "2.6";
        "Total Entry Wins": "43";
        "Total Rounds with extended stats": "408";
        ADR: "76.86";
        Wins: "16";
        "Headshots per Match": "8.78";
        Headshots: "351";
        Assists: "190";
        "Flash Success Rate": "0.57";
        Matches: "40";
        "Total 1v1 Wins": "4";
        "Average Triple Kills": "0.85";
        "Average Headshots %": "51";
        "Quadro Kills": "11";
        "Total Matches": "18";
        "Win Rate %": "40";
        "Utility Success Rate": "0.38";
        "Average Quadro Kills": "0.28";
        Kills: "669";
        "K/D Ratio": "53.37";
        "Average Penta Kills": "0";
        "Total 1v1 Count": "8";
        "Entry Success Rate": "0.58";
        "Total Kills with extended stats": "282";
        "Total Sniper Kills": "4";
        "Sniper Kill Rate per Round": "0.01";
        "Total 1v2 Wins": "3";
        Deaths: "580";
        "Average Assists": "4.75";
        "Utility Damage per Round": "4.66";
        "Total Flash Count": "128";
        "Entry Rate": "0.18";
        "Total Flash Successes": "73";
        "Total Utility Count": "132";
        "1v2 Win Rate": "0.2";
        "Sniper Kill Rate": "0.01";
        "Flashes per Round": "0.31";
        "Total Headshots %": "2058";
        "Utility Damage Success Rate": "14.41";
        "Average K/R Ratio": "0.77";
        MVPs: "104";
        "Total 1v2 Count": "15";
        "Enemies Flashed per Round": "0.24";
        "Penta Kills": "0";
        "Total Damage": "31358";
        "Total Utility Damage": "1902";
        "Average Deaths": "14.5";
        "Average K/D Ratio": "1.33";
        "Average Kills": "16.72";
        "Triple Kills": "34";
        "1v1 Win Rate": "0.5";
        Rounds: "874";
      };
      type: "Map";
      mode: "5v5";
      label: "Inferno";
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/a2cb95be-1a3f-49f3-a5fa-a02503d02086_1695819214782.jpeg";
    },
    {
      label: "Vertigo";
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/57652f05-ce5a-4c89-8211-d9eb79a399f1_1695819175416.jpeg";
      img_regular: "https://distribution.faceit-cdn.net/images/a8d0572f-8a89-474a-babc-c2009cdc42f7.jpeg";
      stats: {
        "Win Rate %": "86";
        Wins: "6";
        MVPs: "20";
        "K/D Ratio": "8.63";
        "Average Kills": "19.14";
        "Average Penta Kills": "0";
        "Average MVPs": "2.86";
        "Average Deaths": "16.29";
        "Triple Kills": "11";
        "Average Triple Kills": "1.57";
        "Quadro Kills": "1";
        Assists: "38";
        "Headshots per Match": "11.57";
        "Average K/R Ratio": "0.8";
        "Total Headshots %": "438";
        Kills: "134";
        Rounds: "172";
        "Penta Kills": "0";
        Deaths: "114";
        Headshots: "81";
        "Average K/D Ratio": "1.23";
        "Average Quadro Kills": "0.14";
        "Average Assists": "5.43";
        Matches: "7";
        "K/R Ratio": "5.6";
        "Average Headshots %": "63";
      };
      type: "Map";
      mode: "5v5";
    },
    {
      img_small: "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/6d7e8e7f-f136-49f3-a4ca-a9afffbe8022_1695819165013.jpeg";
      img_regular: "https://distribution.faceit-cdn.net/images/8ba6f730-fa31-4dd7-9b41-4cff81d79fef.jpeg";
      stats: {
        Matches: "5";
        "Quadro Kills": "2";
        MVPs: "16";
        "Win Rate %": "40";
        Kills: "105";
        "Average Assists": "3";
        "Average K/D Ratio": "1.54";
        Headshots: "54";
        "Average Kills": "21";
        "Penta Kills": "1";
        Wins: "2";
        "Headshots per Match": "10.8";
        "Average K/R Ratio": "0.96";
        "Average Quadro Kills": "0.4";
        Rounds: "109";
        "Average Triple Kills": "2";
        "Triple Kills": "10";
        "Total Headshots %": "265";
        "Average Penta Kills": "0.2";
        Assists: "15";
        "K/R Ratio": "4.81";
        Deaths: "70";
        "Average Deaths": "14";
        "Average MVPs": "3.2";
        "K/D Ratio": "7.69";
        "Average Headshots %": "53";
      };
      type: "Map";
      mode: "5v5";
      label: "Overpass";
    },
  ];
};

// const a: FaceitStats = {
//   "player_id": "b5542031-15ab-4385-ad39-fa1cde5a3f70",
//   "game_id": "cs2",
//   "lifetime": {
//       "Total Flash Count": "1795",
//       "Total Utility Successes": "517",
//       "Utility Usage per Round": "0.37",
//       "Total Enemies Flashed": "1344",
//       "Total Utility Count": "1405",
//       "Total Headshots %": "27365",
//       "Win Rate %": "53",
//       "Total Utility Damage": "17791",
//       "Current Win Streak": "2",
//       "Total Rounds with extended stats": "3763",
//       "K/D Ratio": "773",
//       "Total Kills with extended stats": "2958",
//       "Flashes per Round": "0.48",
//       "Sniper Kill Rate": "0.01",
//       "Utility Success Rate": "0.37",
//       "Total Damage": "315986",
//       "Total Entry Wins": "392",
//       "Total Flash Successes": "926",
//       "Entry Success Rate": "0.56",
//       "Total 1v2 Wins": "30",
//       "Total 1v2 Count": "141",
//       "1v1 Win Rate": "0.44",
//       "Recent Results": [
//           "0",
//           "0",
//           "0",
//           "1",
//           "1"
//       ],
//       "Enemies Flashed per Round": "0.36",
//       "Total 1v1 Wins": "53",
//       "Average Headshots %": "49",
//       "Longest Win Streak": "7",
//       "Total 1v1 Count": "121",
//       "Utility Damage per Round": "4.73",
//       "Matches": "559",
//       "Wins": "297",
//       "Total Entry Count": "702",
//       "Flash Success Rate": "0.52",
//       "ADR": "83.97",
//       "Total Matches": "172",
//       "Sniper Kill Rate per Round": "0.01",
//       "1v2 Win Rate": "0.21",
//       "Utility Damage Success Rate": "12.66",
//       "Average K/D Ratio": "1.38",
//       "Entry Rate": "0.19",
//       "Total Sniper Kills": "25"
//   },
//   "segments": [
//       {
//           "type": "Map",
//           "mode": "5v5",
//           "label": "Train",
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/6c361bc4-00bf-4700-8d4d-48ab5ae3df1f_1695827671063.jpeg",
//           "img_regular": "https://distribution.faceit-cdn.net/images/9e2d5b60-e16e-4309-8e77-8d4427938095.jpeg",
//           "stats": {
//               "Entry Success Rate": "0.6",
//               "Average Quadro Kills": "0",
//               "Average K/R Ratio": "0.68",
//               "ADR": "69.21",
//               "Utility Damage per Round": "2.32",
//               "Total 1v1 Count": "1",
//               "Total Utility Successes": "0",
//               "Average Headshots %": "31",
//               "Flashes per Round": "0.63",
//               "Total Headshots %": "31",
//               "Sniper Kill Rate": "0",
//               "Headshots per Match": "4",
//               "Average Deaths": "15",
//               "Total Flash Successes": "5",
//               "Total 1v1 Wins": "1",
//               "Total Utility Count": "2",
//               "Average Kills": "13",
//               "MVPs": "1",
//               "Average Assists": "2",
//               "Utility Success Rate": "0",
//               "Average MVPs": "1",
//               "Average Penta Kills": "0",
//               "Entry Rate": "0.26",
//               "Total Flash Count": "12",
//               "K/D Ratio": "0.87",
//               "Win Rate %": "0",
//               "Rounds": "19",
//               "Penta Kills": "0",
//               "Enemies Flashed per Round": "0.42",
//               "K/R Ratio": "0.68",
//               "Utility Usage per Round": "0.11",
//               "1v2 Win Rate": "0",
//               "Average K/D Ratio": "0.87",
//               "Total Rounds with extended stats": "19",
//               "Wins": "0",
//               "Flash Success Rate": "0.42",
//               "Total Utility Damage": "44",
//               "Triple Kills": "0",
//               "Utility Damage Success Rate": "22",
//               "Total Matches": "1",
//               "Assists": "2",
//               "Sniper Kill Rate per Round": "0",
//               "Headshots": "4",
//               "Total Damage": "1315",
//               "Kills": "13",
//               "Total 1v2 Wins": "0",
//               "Quadro Kills": "0",
//               "Total Sniper Kills": "0",
//               "Matches": "1",
//               "Total Entry Wins": "3",
//               "Total Entry Count": "5",
//               "1v1 Win Rate": "1",
//               "Deaths": "15",
//               "Total Kills with extended stats": "13",
//               "Average Triple Kills": "0",
//               "Total 1v2 Count": "1",
//               "Total Enemies Flashed": "8"
//           }
//       },
//       {
//           "type": "Map",
//           "mode": "5v5",
//           "label": "Mirage",
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/796b5b23-41e4-4387-a4a9-0d28c1c57456_1695819136505.jpeg",
//           "img_regular": "https://distribution.faceit-cdn.net/images/c47710c4-4407-4dbd-ac89-2ef3b20a262e.jpeg",
//           "stats": {
//               "Wins": "46",
//               "Total Enemies Flashed": "545",
//               "Entry Rate": "0.2",
//               "Total 1v1 Wins": "16",
//               "K/R Ratio": "58.06",
//               "Total Matches": "49",
//               "Total Utility Successes": "109",
//               "Total Damage": "86397",
//               "Total 1v2 Wins": "5",
//               "Average Triple Kills": "0.85",
//               "Average K/R Ratio": "0.78",
//               "Flashes per Round": "0.58",
//               "Average Headshots %": "55",
//               "Total Sniper Kills": "17",
//               "1v2 Win Rate": "0.12",
//               "Headshots": "694",
//               "Total Rounds with extended stats": "1073",
//               "Average Quadro Kills": "0.24",
//               "Triple Kills": "63",
//               "ADR": "80.52",
//               "Quadro Kills": "18",
//               "Average Kills": "17.2",
//               "Total Flash Count": "622",
//               "Flash Success Rate": "0.58",
//               "Total Entry Wins": "109",
//               "Utility Usage per Round": "0.33",
//               "Total 1v2 Count": "41",
//               "Total Headshots %": "4073",
//               "K/D Ratio": "94.78",
//               "Total Entry Count": "210",
//               "Total Utility Damage": "3019",
//               "Total Utility Count": "354",
//               "Matches": "74",
//               "Utility Damage per Round": "2.81",
//               "Average Penta Kills": "0.01",
//               "Average MVPs": "2.61",
//               "Average Deaths": "14.49",
//               "Penta Kills": "1",
//               "Assists": "337",
//               "Utility Success Rate": "0.31",
//               "Deaths": "1072",
//               "Win Rate %": "62",
//               "Rounds": "1620",
//               "Entry Success Rate": "0.52",
//               "MVPs": "193",
//               "Average K/D Ratio": "1.28",
//               "Sniper Kill Rate per Round": "0.02",
//               "Kills": "1273",
//               "Sniper Kill Rate": "0.02",
//               "Headshots per Match": "9.38",
//               "Total 1v1 Count": "32",
//               "Total Kills with extended stats": "833",
//               "Utility Damage Success Rate": "8.53",
//               "Enemies Flashed per Round": "0.51",
//               "1v1 Win Rate": "0.5",
//               "Total Flash Successes": "359",
//               "Average Assists": "4.55"
//           }
//       },
//       {
//           "type": "Map",
//           "mode": "5v5",
//           "label": "Anubis",
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/847a46ed-fbcc-4347-a64a-bc2d6a24be89_1695819226252.jpeg",
//           "img_regular": "https://distribution.faceit-cdn.net/images/1c2412c7-ae0c-4fa1-ad86-82a3287cb479.jpeg",
//           "stats": {
//               "Average Quadro Kills": "0.2",
//               "Kills": "1302",
//               "Total 1v1 Count": "32",
//               "Average Penta Kills": "0.06",
//               "K/D Ratio": "101.54",
//               "1v2 Win Rate": "0.39",
//               "Assists": "348",
//               "Sniper Kill Rate per Round": "0",
//               "Headshots": "749",
//               "Rounds": "1565",
//               "Deaths": "981",
//               "Average Assists": "4.9",
//               "Matches": "71",
//               "Entry Rate": "0.17",
//               "Total 1v2 Count": "33",
//               "Sniper Kill Rate": "0",
//               "Average Headshots %": "57",
//               "Total Flash Count": "307",
//               "Average Deaths": "13.82",
//               "K/R Ratio": "59.14",
//               "Total Utility Successes": "149",
//               "Total Entry Count": "134",
//               "Utility Damage Success Rate": "17.57",
//               "Average K/D Ratio": "1.43",
//               "MVPs": "211",
//               "Average MVPs": "2.97",
//               "Average Kills": "18.34",
//               "Penta Kills": "4",
//               "Win Rate %": "54",
//               "Entry Success Rate": "0.57",
//               "Average Triple Kills": "1.3",
//               "Total Entry Wins": "77",
//               "Wins": "38",
//               "Flash Success Rate": "0.43",
//               "Total Kills with extended stats": "600",
//               "Utility Success Rate": "0.45",
//               "Total 1v1 Wins": "12",
//               "Triple Kills": "92",
//               "Flashes per Round": "0.39",
//               "Quadro Kills": "14",
//               "Total Damage": "65655",
//               "Total Utility Damage": "5817",
//               "1v1 Win Rate": "0.38",
//               "Total Matches": "36",
//               "Utility Damage per Round": "7.39",
//               "Total Enemies Flashed": "184",
//               "Total Flash Successes": "131",
//               "Total Rounds with extended stats": "787",
//               "Total Utility Count": "331",
//               "Total 1v2 Wins": "13",
//               "Average K/R Ratio": "0.83",
//               "ADR": "83.42",
//               "Utility Usage per Round": "0.42",
//               "Headshots per Match": "10.55",
//               "Enemies Flashed per Round": "0.23",
//               "Total Sniper Kills": "0",
//               "Total Headshots %": "4067"
//           }
//       },
//       {
//           "type": "Map",
//           "mode": "5v5",
//           "label": "Ancient",
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/a7d193ca-9498-4546-bf7b-da33e3e429a5_1695819186093.jpeg",
//           "img_regular": "https://distribution.faceit-cdn.net/images/6f72ffec-7607-44cf-9c31-09a865fa92f5.jpeg",
//           "stats": {
//               "Utility Success Rate": "0.36",
//               "Average K/D Ratio": "1.35",
//               "Total 1v2 Wins": "8",
//               "Total Utility Count": "446",
//               "Kills": "1338",
//               "Average Assists": "4.91",
//               "Total Matches": "49",
//               "Penta Kills": "1",
//               "Average Deaths": "14.47",
//               "Headshots": "711",
//               "Total Damage": "92229",
//               "Total Entry Wins": "116",
//               "Total 1v1 Wins": "18",
//               "Average Headshots %": "54",
//               "Total Flash Count": "553",
//               "Matches": "75",
//               "Flashes per Round": "0.53",
//               "Assists": "368",
//               "Average Quadro Kills": "0.17",
//               "Sniper Kill Rate per Round": "0",
//               "K/R Ratio": "63.5",
//               "Total Utility Damage": "5421",
//               "Rounds": "1586",
//               "Enemies Flashed per Round": "0.37",
//               "Total 1v2 Count": "35",
//               "Wins": "39",
//               "1v1 Win Rate": "0.56",
//               "Total Flash Successes": "270",
//               "Average Penta Kills": "0.01",
//               "MVPs": "204",
//               "Quadro Kills": "13",
//               "Average Kills": "17.84",
//               "Total Sniper Kills": "3",
//               "Total Utility Successes": "160",
//               "K/D Ratio": "101.01",
//               "Total 1v1 Count": "32",
//               "Win Rate %": "52",
//               "Total Kills with extended stats": "888",
//               "Entry Rate": "0.19",
//               "Total Entry Count": "195",
//               "Total Rounds with extended stats": "1034",
//               "ADR": "89.2",
//               "Utility Usage per Round": "0.43",
//               "Deaths": "1085",
//               "Average Triple Kills": "1.11",
//               "Average MVPs": "2.72",
//               "Average K/R Ratio": "0.85",
//               "Headshots per Match": "9.48",
//               "1v2 Win Rate": "0.23",
//               "Flash Success Rate": "0.49",
//               "Triple Kills": "83",
//               "Entry Success Rate": "0.59",
//               "Total Enemies Flashed": "382",
//               "Sniper Kill Rate": "0",
//               "Utility Damage Success Rate": "12.15",
//               "Total Headshots %": "4040",
//               "Utility Damage per Round": "5.24"
//           }
//       },
//       {
//           "stats": {
//               "Rounds": "570",
//               "Average Triple Kills": "1.25",
//               "Total Utility Damage": "918",
//               "Headshots": "321",
//               "Utility Damage Success Rate": "11.62",
//               "Average Quadro Kills": "0.25",
//               "Total Headshots %": "1693",
//               "Entry Success Rate": "0.6",
//               "Average Headshots %": "60",
//               "Total Sniper Kills": "0",
//               "Average MVPs": "2.68",
//               "Enemies Flashed per Round": "0.21",
//               "MVPs": "75",
//               "Average Kills": "19.14",
//               "Matches": "28",
//               "Total Enemies Flashed": "40",
//               "Penta Kills": "2",
//               "Total 1v1 Count": "6",
//               "Sniper Kill Rate": "0",
//               "Average Deaths": "13.82",
//               "Total Entry Count": "45",
//               "Total Utility Successes": "30",
//               "Total Utility Count": "79",
//               "Total Rounds with extended stats": "189",
//               "K/R Ratio": "26.72",
//               "Flash Success Rate": "0.52",
//               "Average K/D Ratio": "1.52",
//               "Utility Success Rate": "0.38",
//               "Average Penta Kills": "0.07",
//               "K/D Ratio": "42.51",
//               "Total 1v2 Wins": "0",
//               "Triple Kills": "35",
//               "Total Flash Successes": "27",
//               "ADR": "100.35",
//               "Total 1v2 Count": "4",
//               "1v2 Win Rate": "0",
//               "Average K/R Ratio": "0.95",
//               "Win Rate %": "54",
//               "Total Matches": "9",
//               "Sniper Kill Rate per Round": "0",
//               "Quadro Kills": "7",
//               "Total Flash Count": "52",
//               "Total Damage": "18966",
//               "Wins": "15",
//               "Deaths": "387",
//               "Flashes per Round": "0.28",
//               "Headshots per Match": "11.46",
//               "Kills": "536",
//               "Total Kills with extended stats": "164",
//               "Entry Rate": "0.24",
//               "Average Assists": "4.79",
//               "Utility Damage per Round": "4.86",
//               "Assists": "134",
//               "Total 1v1 Wins": "1",
//               "Total Entry Wins": "27",
//               "1v1 Win Rate": "0.17",
//               "Utility Usage per Round": "0.42"
//           },
//           "type": "Map",
//           "mode": "5v5",
//           "label": "Nuke",
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/15ff938d-a70d-4d0b-9bf9-6be215cdb193_1695819151395.jpeg",
//           "img_regular": "https://distribution.faceit-cdn.net/images/faa7775b-f42b-4627-891a-21ee7cc13637.jpeg"
//       },
//       {
//           "img_regular": "https://distribution.faceit-cdn.net/images/4eafa800-b504-4dd2-afd0-90882c729140.jpeg",
//           "stats": {
//               "Total Flash Count": "121",
//               "Total Utility Damage": "670",
//               "Triple Kills": "18",
//               "Enemies Flashed per Round": "0.34",
//               "Rounds": "418",
//               "Total 1v2 Wins": "1",
//               "Average K/D Ratio": "1.07",
//               "Utility Usage per Round": "0.24",
//               "Penta Kills": "2",
//               "Sniper Kill Rate": "0",
//               "Win Rate %": "41",
//               "Total Matches": "10",
//               "K/R Ratio": "12.5",
//               "Average Headshots %": "56",
//               "1v1 Win Rate": "0.1",
//               "Flash Success Rate": "0.5",
//               "Total Utility Successes": "19",
//               "Flashes per Round": "0.48",
//               "Matches": "17",
//               "MVPs": "41",
//               "Utility Damage Success Rate": "10.98",
//               "Utility Success Rate": "0.31",
//               "1v2 Win Rate": "0.08",
//               "Wins": "7",
//               "Average Kills": "18.29",
//               "Total 1v1 Wins": "1",
//               "Total Utility Count": "61",
//               "Kills": "311",
//               "ADR": "79.31",
//               "Entry Success Rate": "0.44",
//               "Total Damage": "20066",
//               "Headshots per Match": "9.88",
//               "Headshots": "168",
//               "Total Rounds with extended stats": "253",
//               "Total Sniper Kills": "1",
//               "Total Kills with extended stats": "178",
//               "Average K/R Ratio": "0.74",
//               "Average Penta Kills": "0.12",
//               "Total Headshots %": "954",
//               "Total Enemies Flashed": "87",
//               "Total 1v2 Count": "12",
//               "Entry Rate": "0.15",
//               "Total Flash Successes": "61",
//               "Total Entry Wins": "17",
//               "Utility Damage per Round": "2.65",
//               "Quadro Kills": "2",
//               "Average MVPs": "2.41",
//               "Average Assists": "6.29",
//               "Total 1v1 Count": "10",
//               "Assists": "107",
//               "Sniper Kill Rate per Round": "0.01",
//               "Average Quadro Kills": "0.12",
//               "Deaths": "290",
//               "K/D Ratio": "18.13",
//               "Average Deaths": "17.06",
//               "Total Entry Count": "39",
//               "Average Triple Kills": "1.06"
//           },
//           "type": "Map",
//           "mode": "5v5",
//           "label": "Dust2",
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/adf58ac6-b0f3-40e9-87ef-0af23fc60918_1695819116078.jpeg"
//       },
//       {
//           "img_regular": "https://distribution.faceit-cdn.net/images/d71cae42-b38c-470d-a548-0c59d6c71fbe.jpeg",
//           "stats": {
//               "K/R Ratio": "30.76",
//               "Total Enemies Flashed": "98",
//               "Utility Usage per Round": "0.32",
//               "Total Utility Successes": "50",
//               "Total Entry Count": "74",
//               "Average MVPs": "2.6",
//               "Total Entry Wins": "43",
//               "Total Rounds with extended stats": "408",
//               "ADR": "76.86",
//               "Wins": "16",
//               "Headshots per Match": "8.78",
//               "Headshots": "351",
//               "Assists": "190",
//               "Flash Success Rate": "0.57",
//               "Matches": "40",
//               "Total 1v1 Wins": "4",
//               "Average Triple Kills": "0.85",
//               "Average Headshots %": "51",
//               "Quadro Kills": "11",
//               "Total Matches": "18",
//               "Win Rate %": "40",
//               "Utility Success Rate": "0.38",
//               "Average Quadro Kills": "0.28",
//               "Kills": "669",
//               "K/D Ratio": "53.37",
//               "Average Penta Kills": "0",
//               "Total 1v1 Count": "8",
//               "Entry Success Rate": "0.58",
//               "Total Kills with extended stats": "282",
//               "Total Sniper Kills": "4",
//               "Sniper Kill Rate per Round": "0.01",
//               "Total 1v2 Wins": "3",
//               "Deaths": "580",
//               "Average Assists": "4.75",
//               "Utility Damage per Round": "4.66",
//               "Total Flash Count": "128",
//               "Entry Rate": "0.18",
//               "Total Flash Successes": "73",
//               "Total Utility Count": "132",
//               "1v2 Win Rate": "0.2",
//               "Sniper Kill Rate": "0.01",
//               "Flashes per Round": "0.31",
//               "Total Headshots %": "2058",
//               "Utility Damage Success Rate": "14.41",
//               "Average K/R Ratio": "0.77",
//               "MVPs": "104",
//               "Total 1v2 Count": "15",
//               "Enemies Flashed per Round": "0.24",
//               "Penta Kills": "0",
//               "Total Damage": "31358",
//               "Total Utility Damage": "1902",
//               "Average Deaths": "14.5",
//               "Average K/D Ratio": "1.33",
//               "Average Kills": "16.72",
//               "Triple Kills": "34",
//               "1v1 Win Rate": "0.5",
//               "Rounds": "874"
//           },
//           "type": "Map",
//           "mode": "5v5",
//           "label": "Inferno",
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/a2cb95be-1a3f-49f3-a5fa-a02503d02086_1695819214782.jpeg"
//       },
//       {
//           "label": "Vertigo",
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/57652f05-ce5a-4c89-8211-d9eb79a399f1_1695819175416.jpeg",
//           "img_regular": "https://distribution.faceit-cdn.net/images/a8d0572f-8a89-474a-babc-c2009cdc42f7.jpeg",
//           "stats": {
//               "Win Rate %": "86",
//               "Wins": "6",
//               "MVPs": "20",
//               "K/D Ratio": "8.63",
//               "Average Kills": "19.14",
//               "Average Penta Kills": "0",
//               "Average MVPs": "2.86",
//               "Average Deaths": "16.29",
//               "Triple Kills": "11",
//               "Average Triple Kills": "1.57",
//               "Quadro Kills": "1",
//               "Assists": "38",
//               "Headshots per Match": "11.57",
//               "Average K/R Ratio": "0.8",
//               "Total Headshots %": "438",
//               "Kills": "134",
//               "Rounds": "172",
//               "Penta Kills": "0",
//               "Deaths": "114",
//               "Headshots": "81",
//               "Average K/D Ratio": "1.23",
//               "Average Quadro Kills": "0.14",
//               "Average Assists": "5.43",
//               "Matches": "7",
//               "K/R Ratio": "5.6",
//               "Average Headshots %": "63"
//           },
//           "type": "Map",
//           "mode": "5v5"
//       },
//       {
//           "img_small": "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/6d7e8e7f-f136-49f3-a4ca-a9afffbe8022_1695819165013.jpeg",
//           "img_regular": "https://distribution.faceit-cdn.net/images/8ba6f730-fa31-4dd7-9b41-4cff81d79fef.jpeg",
//           "stats": {
//               "Matches": "5",
//               "Quadro Kills": "2",
//               "MVPs": "16",
//               "Win Rate %": "40",
//               "Kills": "105",
//               "Average Assists": "3",
//               "Average K/D Ratio": "1.54",
//               "Headshots": "54",
//               "Average Kills": "21",
//               "Penta Kills": "1",
//               "Wins": "2",
//               "Headshots per Match": "10.8",
//               "Average K/R Ratio": "0.96",
//               "Average Quadro Kills": "0.4",
//               "Rounds": "109",
//               "Average Triple Kills": "2",
//               "Triple Kills": "10",
//               "Total Headshots %": "265",
//               "Average Penta Kills": "0.2",
//               "Assists": "15",
//               "K/R Ratio": "4.81",
//               "Deaths": "70",
//               "Average Deaths": "14",
//               "Average MVPs": "3.2",
//               "K/D Ratio": "7.69",
//               "Average Headshots %": "53"
//           },
//           "type": "Map",
//           "mode": "5v5",
//           "label": "Overpass"
//       }
//   ]
// }

export type FaceitMatchStats = {
  matchId: string;
  map: string;
  isWin: boolean;
  elo: number;
  kills: number;
  deaths: number;
  assists: number;
  kd: number;
  kr: number;
  hs: number;
  hsPercent: number;
  date: number;
};
