export const combination = [
  { "Docile and Courageous": "Common" },
  { "Docile and Quirky": "Nav" },
  { "Docile and Hasty": "Lil Baby" },
  { "Docile and Sassy": "Tory Lanez" },
  { "Docile and Rude": "Vince Staples" },
  { "Docile and Tough": "Nipsey Hussle" },
  { "Docile and Active": "Nas" },
  { "Docile and Passive": "Gunna" },
  { "Docile and Timid": "Jaden Smith" },
  { "Courageous and Quirky": "Young Thug" },
  { "Courageous and Hasty": " Playboi Carti" },
  { "Courageous and Sassy": "Logic" },
  { "Courageous and Rude": "Travis Scott" },
  { "Courageous and Tough": "Tupac" },
  { "Courageous and Active": "J Cole" },
  { "Courageous and Passive": "Earl Sweatshirt" },
  { "Courageous and Timid": "Frank Ocean" },
  { "Quirky and Hasty": "Chance the Rapper" },
  { "Quirky and Sassy": "Tyler the Creator" },
  { "Quirky and Rude": "Trippie Redd" },
  { "Quirky and Tough": "MF Doom" },
  { "Quirky and Active": "Amine" },
  { "Quirky and Passive": "Mac Miller" },
  { "Quirky and Timid": "Asap Rocky" },
  { "Hast and Sassy": "Lil Dicky" },
  { "Hasty and Rude": "Lil Pump" },
  { "Hasty and Tough": "Pop Smoke" },
  { "Hasty and Active": "Quavo" },
  { "Hasty and Passive": "2 Chainz" },
  { "Hasty and Timid": "Lil Xan" },
  { "Sassy and Rude": "Kodak Black" },
  { "Sassy and Tough": "Big L" },
  { "Sassy and Active": "Meg the Stallion" },
  { "Sassy and Passive": "Nicki Minaj" },
  { "Sassy and Timid": "Lil Uzi Vert" },
  { "Rude and Tough": "DaBaby" },
  { "Rude and Active": "Kanye West" },
  { "Rude and Passive": "Future" },
  { "Rude and Timid": "Drake" },
  { "Tough and Active": "Biggie" },
  { "Tough and Passive": "50 Cent" },
  { "Tough and Timid": "Lil Wayne" },
  {
    "Active and Passive":
      "Kendrick Lamar(cause he’s an enigma and his talent doesn’t make sense)",
  },
  { "Active and Timid": "Ab-Soul" },
  { "Passive and Timid": "" },
];

export const findCombination = comb => {
  combination.map(com => {
    if (com[comb]) {
      console.log(com[comb]);
    }
  });
};
