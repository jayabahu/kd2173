import React from 'react';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';
import { MDBDataTable } from 'mdbreact';

const PassRewards = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'pass-rewards',
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Pass Rewards',
    paragraph: '',
  };

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Governor ID',
        field: 'governorId',
        width: 270,
      },
      {
        label: 'Joining Alliance',
        field: 'forPass',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: [
      {
        name: 'TSN Tomsize',
        governorId: 48510097,
        forPass: 'PL',
      },
      {
        name: '云 ᴿᴵCiciw',
        governorId: 69532401,
        forPass: 'PL',
      },
      {
        name: 'Xunnozza',
        governorId: 51423835,
        forPass: 'PL',
      },
      {
        name: 'Sgabo Scotti',
        governorId: 51507877,
        forPass: 'PL',
      },
      {
        name: 'Mahmoud Tigr',
        governorId: 71024027,
        forPass: 'PL',
      },
      {
        name: 'OffLine29',
        governorId: 47487730,
        forPass: 'PL',
      },
      {
        name: '云  akio',
        governorId: 52274734,
        forPass: 'PL',
      },
      {
        name: 'Nanda28',
        governorId: 3115853,
        forPass: 'PL',
      },
      {
        name: '云 S2Heo',
        governorId: 36811156,
        forPass: 'PL',
      },
      {
        name: 'Cricks',
        governorId: 51369682,
        forPass: 'PL',
      },
      {
        name: '云Vash PH',
        governorId: 11460859,
        forPass: 'PL',
      },
      {
        name: '云 Piolo X',
        governorId: 71277216,
        forPass: 'PL',
      },
      {
        name: 'MiniWhaleSK',
        governorId: 10700597,
        forPass: 'PL',
      },
      {
        name: 'La Gioux',
        governorId: 53499090,
        forPass: 'PL',
      },
      {
        name: 'The witcher',
        governorId: 66255754,
        forPass: 'PL',
      },
      {
        name: 'Kong',
        governorId: 8279048,
        forPass: 'PL',
      },
      {
        name: '云 Zy24',
        governorId: 78591064,
        forPass: 'PL',
      },
      {
        name: 'eyevee',
        governorId: 1833730,
        forPass: 'PL',
      },
      {
        name: 'MiniWhaleIGY',
        governorId: 27538122,
        forPass: 'PL',
      },
      {
        name: 'Revo',
        governorId: 83977038,
        forPass: 'PL',
      },
      {
        name: 'QueGee',
        governorId: 56497536,
        forPass: 'PL',
      },
      {
        name: 'Dũng',
        governorId: 56599220,
        forPass: 'PL',
      },
      {
        name: 'mamuy',
        governorId: 20240485,
        forPass: 'PL',
      },
      {
        name: 'Bamz',
        governorId: 70407561,
        forPass: 'PL',
      },
      {
        name: 'Poseiiiidon',
        governorId: 10514333,
        forPass: 'PL',
      },
      {
        name: 'BabaMustafa',
        governorId: 55684043,
        forPass: 'PL',
      },
      {
        name: 'ChewBaCCa',
        governorId: 58790113,
        forPass: 'PL',
      },
      {
        name: 'KIKKO X',
        governorId: 55067791,
        forPass: 'PL',
      },
      {
        name: 'Dev',
        governorId: 69934357,
        forPass: 'PL',
      },
      {
        name: '云 AuNtY MaGe',
        governorId: 75106269,
        forPass: 'PL',
      },
      {
        name: '云 Hawk',
        governorId: 51923993,
        forPass: 'PL',
      },
      {
        name: 'Raj10',
        governorId: 54719431,
        forPass: 'PL',
      },
      {
        name: 'Th3FaLLenMiRaL',
        governorId: 3367572,
        forPass: 'PL',
      },
      {
        name: 'Insight',
        governorId: 47575841,
        forPass: 'PL',
      },
      {
        name: '云Slumber JVG',
        governorId: 74384826,
        forPass: 'PL',
      },
      {
        name: 'MiniWaleHenky',
        governorId: 43767322,
        forPass: 'PL',
      },
      {
        name: '云 Brêêzy',
        governorId: 84007332,
        forPass: 'PL',
      },
      {
        name: 'Sue',
        governorId: 50880253,
        forPass: 'PL',
      },
      {
        name: 'Thiagoknh',
        governorId: 37414686,
        forPass: 'PL',
      },
      {
        name: '云 ᴿᴵ Can',
        governorId: 69934812,
        forPass: 'PL',
      },
      {
        name: 'Happy',
        governorId: 39764541,
        forPass: 'PL',
      },
      {
        name: 'Honney',
        governorId: 69567363,
        forPass: 'PL',
      },
      {
        name: 'Swannii',
        governorId: 1931475,
        forPass: 'PL',
      },
      {
        name: 'clea',
        governorId: 58227274,
        forPass: 'PL',
      },
      {
        name: 'BlcklistedEvil',
        governorId: 71707000,
        forPass: 'PL',
      },
      {
        name: 'Winy',
        governorId: 67113366,
        forPass: 'PL',
      },
      {
        name: 'juli',
        governorId: 66237911,
        forPass: 'PL',
      },
      {
        name: '云 Nilsey',
        governorId: 80222946,
        forPass: 'PL',
      },
      {
        name: 'rubiqs',
        governorId: 60376149,
        forPass: 'PL',
      },
      {
        name: 'Lady Infera',
        governorId: 69853413,
        forPass: 'PL',
      },
      {
        name: 'IronMan',
        governorId: 71017015,
        forPass: 'PL',
      },
      {
        name: 'Ericarenee',
        governorId: 79607276,
        forPass: 'PL',
      },
      {
        name: '云MiniWhaleEng',
        governorId: 51425637,
        forPass: 'PL',
      },
      {
        name: 'DINOzz',
        governorId: 65706710,
        forPass: 'PL',
      },
      {
        name: 'Timmid',
        governorId: 84061549,
        forPass: 'PL',
      },
      {
        name: 'Cheetah',
        governorId: 71292435,
        forPass: 'PL',
      },
      {
        name: 'Piripr',
        governorId: 437270002,
        forPass: 'PL',
      },
      {
        name: 'GIANNI V',
        governorId: 84186301,
        forPass: 'PL',
      },
      {
        name: 'MiniWhaleKim',
        governorId: 51499349,
        forPass: 'PL',
      },
      {
        name: 'Lason',
        governorId: 69504955,
        forPass: 'PL',
      },
      {
        name: '女 Busenur 女',
        governorId: 58756549,
        forPass: 'PL',
      },
      {
        name: 'CL Cocky Alien',
        governorId: 61057480,
        forPass: 'PL',
      },
      {
        name: 'Shikaari',
        governorId: 83679032,
        forPass: 'PL',
      },
      {
        name: 'OXYGINA',
        governorId: 84265994,
        forPass: 'PL',
      },
      {
        name: 'Ewraamir',
        governorId: 84001727,
        forPass: 'PL',
      },
      {
        name: 'Darkside1',
        governorId: 71294149,
        forPass: 'PL',
      },
      {
        name: '云 Báby',
        governorId: 57887119,
        forPass: 'PL',
      },
      {
        name: '云  BINNN',
        governorId: 67137054,
        forPass: 'PL',
      },
      {
        name: '云 ᴿᴵ Loly',
        governorId: 70140985,
        forPass: 'PL',
      },
      {
        name: '云 ShibaNN',
        governorId: 74568265,
        forPass: 'PL',
      },
      {
        name: 'WinnerMert',
        governorId: 70339884,
        forPass: 'PL',
      },
      {
        name: '云NeddyS乄',
        governorId: 85026127,
        forPass: 'PL',
      },
      {
        name: 'CabbageIV',
        governorId: 83997954,
        forPass: 'PL',
      },
      {
        name: '云 Psycho',
        governorId: 84194428,
        forPass: 'VN',
      },
      {
        name: 'ChiefKhan',
        governorId: 83677209,
        forPass: 'VN',
      },
      {
        name: 'Radz senpai',
        governorId: 67336121,
        forPass: 'VN',
      },
      {
        name: 'Dom Semar',
        governorId: 69820316,
        forPass: 'VN',
      },
      {
        name: 'MeTallicA',
        governorId: 84039311,
        forPass: 'VN',
      },
      {
        name: '云 Ryuzo',
        governorId: 47948605,
        forPass: 'VN',
      },
      {
        name: 'PIXEL',
        governorId: 69370440,
        forPass: 'VN',
      },
      {
        name: '云 ᴿᴵ Af',
        governorId: 70344309,
        forPass: 'X',
      },
      {
        name: '云 ᴿᴵ Lego',
        governorId: 70247713,
        forPass: 'X',
      },
      {
        name: '云 DawnB',
        governorId: 74568682,
        forPass: 'X',
      },
      {
        name: 'RI BATAK',
        governorId: 70186256,
        forPass: 'X',
      },
      {
        name: '云 Nɠânメ',
        governorId: 74786363,
        forPass: 'X',
      },
      {
        name: 'Smurfetta (CL2)',
        governorId: 84005653,
        forPass: 'X',
      },
      {
        name: 'SimonLP',
        governorId: 75075936,
        forPass: 'X',
      },
      {
        name: '云 ᴿᴵ huwa',
        governorId: 70110320,
        forPass: 'X',
      },
      {
        name: 'Neo',
        governorId: 62405064,
        forPass: 'VN',
      },
      {
        name: 'Mafel',
        governorId: 48312636,
        forPass: 'VN',
      },
      {
        name: 'UsainBolt',
        governorId: 48400825,
        forPass: 'VN',
      },
      {
        name: 'danteleon',
        governorId: 66130033,
        forPass: 'VN',
      },
      {
        name: 'OD Samuel',
        governorId: 62485435,
        forPass: 'VN',
      },
      {
        name: 'しぇーん',
        governorId: 57509401,
        forPass: 'VN',
      },
      {
        name: 'Am3losS',
        governorId: 62756680,
        forPass: 'VN',
      },
      {
        name: 'DazzleNugget',
        governorId: 71914611,
        forPass: 'VN',
      },
      {
        name: 'Ioris9999',
        governorId: 84240117,
        forPass: 'VN',
      },
      {
        name: 'OD Sir Quequeeg',
        governorId: 62059100,
        forPass: 'VN',
      },
      {
        name: 'OD  P A Y O',
        governorId: 73395355,
        forPass: 'VN',
      },
      {
        name: 'Lvn1x',
        governorId: 59707881,
        forPass: 'VN',
      },
      {
        name: '火ノ鳥',
        governorId: 84039290,
        forPass: 'VN',
      },
      {
        name: 'FrankRoullett',
        governorId: 36666611,
        forPass: 'VN',
      },
      {
        name: 'Celavente',
        governorId: 60617820,
        forPass: 'VN',
      },
      {
        name: 'PabloTheSpanish',
        governorId: 39154483,
        forPass: 'VN',
      },
      {
        name: 'Salomé Isaza',
        governorId: 62432934,
        forPass: 'VN',
      },
      {
        name: 'Gaanjaatown3',
        governorId: 59049554,
        forPass: 'VN',
      },
      {
        name: 'Gowharrrymin',
        governorId: 44960893,
        forPass: 'X',
      },
      {
        name: 'Alanmilk Engine',
        governorId: 51514939,
        forPass: 'X',
      },
      {
        name: 'EnginePanda',
        governorId: 51501235,
        forPass: 'X',
      },
      {
        name: 'TT SABER414',
        governorId: 18178541,
        forPass: 'X',
      },
      {
        name: 'Ninjahamster',
        governorId: 9455573,
        forPass: 'X',
      },
      {
        name: 'ReXiMuS MaXiMuS',
        governorId: 62164533,
        forPass: 'X',
      },
      {
        name: 'ᴳᵒᵂHuyR',
        governorId: 50101257,
        forPass: 'X',
      },
      {
        name: 'ᴱᴺ㐅Kitty',
        governorId: 63186697,
        forPass: 'X',
      },
      {
        name: 'NÓT',
        governorId: 51217024,
        forPass: 'X',
      },
      {
        name: 'SB Stãrk',
        governorId: 4597365,
        forPass: 'X',
      },
      {
        name: 'TTWally',
        governorId: 9673898,
        forPass: 'X',
      },
      {
        name: 'TTGeorgeMottau',
        governorId: 18193508,
        forPass: 'X',
      },
      {
        name: 'jovkoska',
        governorId: 51937432,
        forPass: 'X',
      },
      {
        name: 'Karma',
        governorId: 45012147,
        forPass: 'X',
      },
      {
        name: 'zavierlol',
        governorId: 51792436,
        forPass: 'X',
      },
      {
        name: 'Engine G',
        governorId: 51950837,
        forPass: 'X',
      },
      {
        name: 'Gow tài',
        governorId: 50398733,
        forPass: 'X',
      },
      {
        name: 'Engine Gusabi',
        governorId: 51902110,
        forPass: 'X',
      },
      {
        name: 'GoW Iris',
        governorId: 73865894,
        forPass: 'X',
      },
      {
        name: 'MFonsi',
        governorId: 8518053,
        forPass: 'X',
      },
      {
        name: 'Aivary5',
        governorId: 17700678,
        forPass: 'X',
      },
      {
        name: 'TTSalix',
        governorId: 9579856,
        forPass: 'X',
      },
      {
        name: 'BNQ197',
        governorId: 51922439,
        forPass: 'X',
      },
      {
        name: 'Schnick',
        governorId: 51846215,
        forPass: 'X',
      },
      {
        name: 'Igris IX',
        governorId: 62730992,
        forPass: 'X',
      },
      {
        name: 'Xwind',
        governorId: 17799586,
        forPass: 'X',
      },
      {
        name: 'Engine Troll',
        governorId: 50603610,
        forPass: 'X',
      },
      {
        name: 'Christian',
        governorId: 51984781,
        forPass: 'X',
      },
      {
        name: 'GHoSt Engine',
        governorId: 51910242,
        forPass: 'X',
      },
      {
        name: 'ReasonableTrout',
        governorId: 3245506,
        forPass: 'X',
      },
      {
        name: 'MonsterBondage',
        governorId: 17180708,
        forPass: 'X',
      },
      {
        name: 'Mehmet Senpai',
        governorId: 83312091,
        forPass: 'X',
      },
      {
        name: '罪 Hekâtē',
        governorId: 41581584,
        forPass: 'X',
      },
      {
        name: 'K1162WW1Robin',
        governorId: 9680717,
        forPass: 'X',
      },
      {
        name: 'Carl',
        governorId: 9667897,
        forPass: 'X',
      },
      {
        name: '义 Ingram',
        governorId: 43890489,
        forPass: 'X',
      },
      {
        name: 'Katsudon',
        governorId: 20459968,
        forPass: 'X',
      },
      {
        name: '4rtie',
        governorId: 73976166,
        forPass: 'X',
      },
      {
        name: 'Buff Dude',
        governorId: 55060936,
        forPass: 'X',
      },
      {
        name: 'Engine Mighty',
        governorId: 51817074,
        forPass: 'X',
      },
      {
        name: 'Chris Wright',
        governorId: 63194188,
        forPass: 'X',
      },
      {
        name: 'Taxomat',
        governorId: 14481657,
        forPass: 'X',
      },
      {
        name: 'Loup5432',
        governorId: 51941079,
        forPass: 'X',
      },
      {
        name: 'KF木KING',
        governorId: 50332873,
        forPass: 'X',
      },
      {
        name: 'Yrmy Perkele',
        governorId: 83963496,
        forPass: 'X',
      },
      {
        name: 'Sua vó 30',
        governorId: 62521233,
        forPass: 'X',
      },
      {
        name: 'MOA Mums',
        governorId: 520002388,
        forPass: 'X',
      },
      {
        name: 'MagnificentJoe',
        governorId: 71560453,
        forPass: 'X',
      },
      {
        name: 'Emir Barlas',
        governorId: 62343787,
        forPass: 'X',
      },
      {
        name: 'Pope of dope',
        governorId: 3169017,
        forPass: 'X',
      },
      {
        name: 'Steve (TTRedbeaver)',
        governorId: 9619581,
        forPass: 'X',
      },
      {
        name: 'AngelSlav',
        governorId: 51946601,
        forPass: 'X',
      },
      {
        name: 'Blessëd',
        governorId: 25158479,
        forPass: 'X',
      },
      {
        name: 'EX Aless',
        governorId: 51808863,
        forPass: 'X',
      },
      {
        name: 'Bet Jr',
        governorId: 83458090,
        forPass: 'X',
      },
      {
        name: 'Melnik',
        governorId: 76810696,
        forPass: 'X',
      },
      {
        name: 'BenB1',
        governorId: 63111698,
        forPass: 'X',
      },
      {
        name: 'Captain Tràng',
        governorId: 83294314,
        forPass: 'X',
      },
      {
        name: 'Mr Gondor',
        governorId: 83780573,
        forPass: 'X',
      },
      {
        name: 'Engine Rajiv',
        governorId: 83976599,
        forPass: 'X',
      },
      {
        name: 'Avatar2021',
        governorId: 74533309,
        forPass: 'X',
      },
      {
        name: 'MeanIgro',
        governorId: 54145106,
        forPass: 'X',
      },
      {
        name: 'XeroXz',
        governorId: 84197687,
        forPass: 'X',
      },
      {
        name: 'TTSinistro',
        governorId: 30872438,
        forPass: 'X',
      },
      {
        name: 'TT Tessa',
        governorId: 23683224,
        forPass: 'X',
      },
      {
        name: 'MrTim0880',
        governorId: 51050065,
        forPass: 'X',
      },
      {
        name: 'En X Sanz',
        governorId: 84156168,
        forPass: 'X',
      },
      {
        name: 'Indra',
        governorId: 44451035,
        forPass: 'X',
      },
      {
        name: 'Imperialfoxes',
        governorId: 84195455,
        forPass: 'X',
      },
      {
        name: 'Quartzite13',
        governorId: 9656627,
        forPass: 'X',
      },
      {
        name: 'OolongPanda',
        governorId: 84097812,
        forPass: 'X',
      },
      {
        name: 'Hardin22345',
        governorId: 84146906,
        forPass: 'X',
      },
      {
        name: 'prabusiliwangi4',
        governorId: 84160759,
        forPass: 'X',
      },
      {
        name: 'Bjorn Iron',
        governorId: 39381915,
        forPass: 'X',
      },
      {
        name: 'ßoa',
        governorId: 50765354,
        forPass: 'X',
      },
      {
        name: 'EngineMugiwara',
        governorId: 84071074,
        forPass: 'X',
      },
      {
        name: 'Engine Arsand',
        governorId: 83637076,
        forPass: 'X',
      },
      {
        name: 'LETYOU',
        governorId: 44492366,
        forPass: 'X',
      },
      {
        name: 'Engine Gruff',
        governorId: 65714964,
        forPass: 'X',
      },
      {
        name: 'MILO 99',
        governorId: 52027790,
        forPass: 'X',
      },
      {
        name: 'X Thần Hi',
        governorId: 74173717,
        forPass: 'X',
      },
      {
        name: 'Zin leving',
        governorId: 52991153,
        forPass: 'X',
      },
      {
        name: 'Sir Beda II',
        governorId: 84158871,
        forPass: 'X',
      },
      {
        name: 'Okkiniklas',
        governorId: 84201312,
        forPass: 'X',
      },
      {
        name: 'angeldogu',
        governorId: 62766528,
        forPass: 'X',
      },
      {
        name: 'Jay2312',
        governorId: 63077211,
        forPass: 'X',
      },
      {
        name: 'Angel Didi',
        governorId: 38488074,
        forPass: 'X',
      },
      {
        name: 'Darthfredo',
        governorId: 84156180,
        forPass: 'X',
      },
      {
        name: 'Mr Gorlitz',
        governorId: 83694631,
        forPass: 'X',
      },
      {
        name: 'Leylynx',
        governorId: 84144831,
        forPass: 'X',
      },
      {
        name: 'super Beda',
        governorId: 46851428,
        forPass: 'X',
      },
      {
        name: 'Engine Siberian',
        governorId: 50974306,
        forPass: 'X',
      },
      {
        name: 'engine ODİN',
        governorId: 84161428,
        forPass: 'X',
      },
      {
        name: 'EngFrank',
        governorId: 84159668,
        forPass: 'X',
      },
      {
        name: 'captain cool',
        governorId: 54386679,
        forPass: 'VN',
      },
      {
        name: 'VN Hoàngg',
        governorId: 43125716,
        forPass: 'VN',
      },
      {
        name: 'VN Mr Khang',
        governorId: 78595030,
        forPass: 'VN',
      },
      {
        name: 'JcNoDE',
        governorId: 69360577,
        forPass: 'VN',
      },
      {
        name: 'Hữu lộc',
        governorId: 73858559,
        forPass: 'VN',
      },
      {
        name: 'FWCaligula',
        governorId: 67869520,
        forPass: 'VN',
      },
      {
        name: 'VN RONG V',
        governorId: 57330820,
        forPass: 'VN',
      },
      {
        name: 'Samuel XIII',
        governorId: 77878810,
        forPass: 'VN',
      },
      {
        name: 'shineunra',
        governorId: 73660222,
        forPass: 'VN',
      },
      {
        name: 'CpT RockeT',
        governorId: 70020183,
        forPass: 'VN',
      },
      {
        name: 'VN takuku',
        governorId: 74756187,
        forPass: 'VN',
      },
      {
        name: 'Vn vuahaitac',
        governorId: 74461510,
        forPass: 'VN',
      },
      {
        name: 'Ultranest',
        governorId: 48146997,
        forPass: 'VN',
      },
      {
        name: 'PL Bohemian',
        governorId: 71926610,
        forPass: 'VN',
      },
      {
        name: 'Sanyokas',
        governorId: 84175441,
        forPass: 'VN',
      },
      {
        name: 'Vn Arieth',
        governorId: 84141609,
        forPass: 'VN',
      },
      {
        name: '云布丁',
        governorId: 84416220,
        forPass: 'VN',
      },
      {
        name: 'ROB',
        governorId: 36340818,
        forPass: 'X',
      },
      {
        name: 'VN Bình Minh',
        governorId: 71519787,
        forPass: 'X',
      },
      {
        name: 'Frozen90',
        governorId: 73977386,
        forPass: 'X',
      },
      {
        name: 'VN Brave Long',
        governorId: 74895113,
        forPass: 'X',
      },
      {
        name: 'RWM11',
        governorId: 65884330,
        forPass: 'X',
      },
      {
        name: 'RagnarBloodhawk',
        governorId: 84178622,
        forPass: 'X',
      },
      {
        name: 'Padillasr',
        governorId: 84133949,
        forPass: 'X',
      },
      {
        name: 'Fr ALZHRANI2030',
        governorId: 72418279,
        forPass: '',
      },
      {
        name: 'weirdscience98',
        governorId: 84162927,
        forPass: '',
      },
      {
        name: 'PL Ckriller',
        governorId: 60870288,
        forPass: 'PL',
      },
      {
        name: 'PL S u m m e R',
        governorId: 56604284,
        forPass: 'PL',
      },
      {
        name: 'PL T R O L',
        governorId: 16355728,
        forPass: 'PL',
      },
      {
        name: 'PL Robinson',
        governorId: 63684824,
        forPass: 'PL',
      },
      {
        name: 'PL LeooOoo',
        governorId: 84086363,
        forPass: 'PL',
      },
      {
        name: 'SGOoR',
        governorId: 71378188,
        forPass: 'PL',
      },
      {
        name: 'Nzlr',
        governorId: 71370344,
        forPass: 'PL',
      },
      {
        name: 'RoнanTr๛',
        governorId: 24380010,
        forPass: 'PL',
      },
      {
        name: 'PL ESCOPR',
        governorId: 65289111,
        forPass: 'PL',
      },
      {
        name: 'PL Lord Sai',
        governorId: 42773399,
        forPass: 'PL',
      },
      {
        name: 'PL 1RIGHTEOUS',
        governorId: 38159876,
        forPass: 'PL',
      },
      {
        name: 'DinoTr',
        governorId: 68529257,
        forPass: 'PL',
      },
      {
        name: 'Finitum',
        governorId: 58983814,
        forPass: 'PL',
      },
      {
        name: 'Aioria73',
        governorId: 70954517,
        forPass: 'PL',
      },
      {
        name: 'PL DekuForAll',
        governorId: 70376310,
        forPass: 'PL',
      },
      {
        name: 'PL Redenix',
        governorId: 8166773,
        forPass: 'PL',
      },
      {
        name: '乂Yousif乂',
        governorId: 57662225,
        forPass: 'PL',
      },
      {
        name: 'PL Duncan Vizla',
        governorId: 6326272,
        forPass: 'PL',
      },
      {
        name: 'BlueSideTr๛',
        governorId: 68499287,
        forPass: 'PL',
      },
      {
        name: 'D E M I T R I',
        governorId: 23744617,
        forPass: 'PL',
      },
      {
        name: 'PL DA CHUMPION',
        governorId: 61890139,
        forPass: 'PL',
      },
      {
        name: 'PL Charlies',
        governorId: 74354023,
        forPass: 'PL',
      },
      {
        name: 'PL JRT',
        governorId: 84165870,
        forPass: 'PL',
      },
      {
        name: 'PL Rens QTRッ',
        governorId: 60667194,
        forPass: 'PL',
      },
      {
        name: 'PL KasiroGhost',
        governorId: 71328176,
        forPass: 'PL',
      },
      {
        name: 'PL Cgro',
        governorId: 61928392,
        forPass: 'PL',
      },
      {
        name: 'ColonelTr刀',
        governorId: 68468334,
        forPass: 'PL',
      },
      {
        name: 'Goatzonboatz',
        governorId: 62013074,
        forPass: 'PL',
      },
      {
        name: 'PL PUNT4DEW4',
        governorId: 40602261,
        forPass: 'PL',
      },
      {
        name: 'M0N7',
        governorId: 12444850,
        forPass: 'PL',
      },
      {
        name: 'omarkuw',
        governorId: 69850431,
        forPass: 'PL',
      },
      {
        name: 'Timul',
        governorId: 69374411,
        forPass: 'PL',
      },
      {
        name: 'PL Katyusha',
        governorId: 63023227,
        forPass: 'PL',
      },
      {
        name: 'MoMC',
        governorId: 84187281,
        forPass: 'PL',
      },
      {
        name: 'PL Basheer',
        governorId: 66070056,
        forPass: 'PL',
      },
      {
        name: 'PL Antiquarks',
        governorId: 84427607,
        forPass: 'PL',
      },
      {
        name: 'PL RoVi',
        governorId: 84168223,
        forPass: 'PL',
      },
      {
        name: 'PL百步cg',
        governorId: 20743790,
        forPass: 'PL',
      },
      {
        name: 'PL Enkido',
        governorId: 61036090,
        forPass: 'PL',
      },
      {
        name: 'Aidelina 85',
        governorId: 64390676,
        forPass: 'PL',
      },
      {
        name: 'PL JollyPenguin',
        governorId: 84081290,
        forPass: 'PL',
      },
      {
        name: 'PL Roronowa',
        governorId: 84404327,
        forPass: 'PL',
      },
      {
        name: 'PLPrincessMargo',
        governorId: 45013577,
        forPass: 'PL',
      },
      {
        name: 'PL SirAleks',
        governorId: 39792217,
        forPass: 'PL',
      },
      {
        name: 'PL XZeus',
        governorId: 50777923,
        forPass: 'PL',
      },
      {
        name: 'PL hectorxtr',
        governorId: 84134553,
        forPass: 'PL',
      },
      {
        name: 'PL Bunro',
        governorId: 62044362,
        forPass: 'PL',
      },
      {
        name: 'PL Buker Ti',
        governorId: 84206484,
        forPass: 'PL',
      },
      {
        name: 'PL JDz825',
        governorId: 72529913,
        forPass: 'PL',
      },
      {
        name: 'PL Star',
        governorId: 62174214,
        forPass: 'PL',
      },
      {
        name: 'ᴮᵀ Djmømm',
        governorId: 62038062,
        forPass: 'PL',
      },
      {
        name: 'fleckeri',
        governorId: 66662284,
        forPass: 'PL',
      },
      {
        name: 'PL zDreyKeer',
        governorId: 84151812,
        forPass: 'PL',
      },
      {
        name: 'PL Suichi',
        governorId: 84180571,
        forPass: 'PL',
      },
      {
        name: 'LadyMarie',
        governorId: 69209528,
        forPass: 'PL',
      },
      {
        name: 'PL DR',
        governorId: 70140576,
        forPass: 'PL',
      },
      {
        name: 'A Téng',
        governorId: 73753001,
        forPass: 'PL',
      },
      {
        name: 'Ønyx',
        governorId: 64296414,
        forPass: 'PL',
      },
      {
        name: 'PL Businker',
        governorId: 52910522,
        forPass: 'PL',
      },
      {
        name: 'PLᴮᵀSoaryer',
        governorId: 61993665,
        forPass: 'PL',
      },
      {
        name: 'PL ALZAÏM',
        governorId: 6889224,
        forPass: 'PL',
      },
      {
        name: 'PL Aups',
        governorId: 73220074,
        forPass: 'PL',
      },
      {
        name: 'PL DarthStalker',
        governorId: 70197197,
        forPass: 'PL',
      },
      {
        name: 'PL Angkor WatKh',
        governorId: 75194101,
        forPass: 'PL',
      },
      {
        name: 'Pableo',
        governorId: 62431632,
        forPass: 'PL',
      },
      {
        name: 'Snuggly Pillows',
        governorId: 62055622,
        forPass: 'PL',
      },
      {
        name: 'TPMx1000',
        governorId: 84075405,
        forPass: 'PL',
      },
      {
        name: 'PL Dr3aD L0RD',
        governorId: 84372218,
        forPass: 'PL',
      },
      {
        name: 'ᴾᴸ Wise',
        governorId: 73706803,
        forPass: 'PL',
      },
      {
        name: 'Broccat',
        governorId: 84167699,
        forPass: 'X',
      },
      {
        name: 'VN Cục Bộ',
        governorId: 58123568,
        forPass: 'X',
      },
      {
        name: 'Rock Lee ID',
        governorId: 70577357,
        forPass: 'X',
      },
      {
        name: 'X u s',
        governorId: 53541474,
        forPass: 'X',
      },
      {
        name: 'VN cục cung',
        governorId: 62978393,
        forPass: 'X',
      },
      {
        name: 'Minh Nhạn',
        governorId: 65048942,
        forPass: 'X',
      },
      {
        name: 'wleganw',
        governorId: 65411661,
        forPass: 'X',
      },
      {
        name: 'Hải Phòng ok',
        governorId: 70843308,
        forPass: 'X',
      },
      {
        name: 'Meatpiston',
        governorId: 83214648,
        forPass: 'X',
      },
      {
        name: 'SukaNyabun',
        governorId: 7198156,
        forPass: 'X',
      },
      {
        name: 'Moomin85',
        governorId: 55687555,
        forPass: 'X',
      },
      {
        name: 'EIC Liqi',
        governorId: 84190316,
        forPass: 'X',
      },
      {
        name: 'Eminpaşa',
        governorId: 72588782,
        forPass: 'X',
      },
      {
        name: 'VN MushROOM',
        governorId: 60558262,
        forPass: 'X',
      },
      {
        name: 'deadFLOWERS',
        governorId: 64784073,
        forPass: 'X',
      },
      {
        name: 'PrinceOfPaang',
        governorId: 37714644,
        forPass: 'X',
      },
      {
        name: 'badbee',
        governorId: 72505481,
        forPass: 'X',
      },
      {
        name: '¡Lupus Regem¡',
        governorId: 77703200,
        forPass: 'X',
      },
      {
        name: 'TuiTenRo',
        governorId: 82501241,
        forPass: 'X',
      },
      {
        name: 'Benitez94',
        governorId: 67628860,
        forPass: 'X',
      },
      {
        name: 'Luna Azure',
        governorId: 73833286,
        forPass: 'X',
      },
      {
        name: 'Abdulaziz',
        governorId: 34172864,
        forPass: 'X',
      },
      {
        name: 'Frank16729',
        governorId: 84185630,
        forPass: 'X',
      },
      {
        name: 'Rosie85',
        governorId: 87412080,
        forPass: 'X',
      },
      {
        name: 'KALUNGA71',
        governorId: 84178208,
        forPass: 'X',
      },
      {
        name: 'Deviant',
        governorId: 50621088,
        forPass: 'X',
      },
      {
        name: 'YungRampage',
        governorId: 84163465,
        forPass: 'X',
      },
      {
        name: 'Ivan Costantini',
        governorId: 84224100,
        forPass: 'X',
      },
      {
        name: 'xX JON Xx',
        governorId: 37343659,
        forPass: 'X',
      },
      {
        name: 'Riley1983',
        governorId: 73697533,
        forPass: 'X',
      },
      {
        name: 'Ocsko the Lost',
        governorId: 74106703,
        forPass: 'X',
      },
      {
        name: 'LanceKromance',
        governorId: 77836024,
        forPass: 'X',
      },
      {
        name: 'TheDude73',
        governorId: 84184440,
        forPass: 'X',
      },
      {
        name: 'Master MINHMINH',
        governorId: 50533578,
        forPass: 'VN',
      },
      {
        name: 'FCKDũng ngô',
        governorId: 43345329,
        forPass: 'VN',
      },
      {
        name: 'Master MrKuEm',
        governorId: 50577360,
        forPass: 'VN',
      },
      {
        name: 'VN Dũng Cảm㋳',
        governorId: 66284116,
        forPass: 'VN',
      },
      {
        name: 'Vn Mad Dog',
        governorId: 63456380,
        forPass: 'VN',
      },
      {
        name: 'FCK Pekon',
        governorId: 43279941,
        forPass: 'VN',
      },
      {
        name: 'VN Piu Ci',
        governorId: 66119939,
        forPass: 'VN',
      },
      {
        name: 'VN FCK vũ',
        governorId: 26386942,
        forPass: 'VN',
      },
      {
        name: 'VN FCK Haianh',
        governorId: 43293969,
        forPass: 'VN',
      },
      {
        name: 'VN ACT Storm',
        governorId: 54311045,
        forPass: 'VN',
      },
      {
        name: 'Vn hihihi33',
        governorId: 25914722,
        forPass: 'VN',
      },
      {
        name: 'Vn zinh heu',
        governorId: 43730822,
        forPass: 'VN',
      },
      {
        name: 'Vn Phước Nè',
        governorId: 43854139,
        forPass: 'VN',
      },
      {
        name: 'Master Dũng lv',
        governorId: 50721943,
        forPass: 'VN',
      },
      {
        name: 'VN Master Loki',
        governorId: 48839884,
        forPass: 'VN',
      },
      {
        name: 'VN Homelander',
        governorId: 42270773,
        forPass: 'VN',
      },
      {
        name: 'VN TranManhDat',
        governorId: 46660147,
        forPass: 'VN',
      },
      {
        name: 'Master TheRock',
        governorId: 11880267,
        forPass: 'VN',
      },
      {
        name: 'VN ACT SunDay',
        governorId: 54330909,
        forPass: 'VN',
      },
      {
        name: 'Vn FCK Cá Nóc',
        governorId: 50296201,
        forPass: 'VN',
      },
      {
        name: 'Master Ono',
        governorId: 47532836,
        forPass: 'VN',
      },
      {
        name: 'VN Cục Mỡ',
        governorId: 38998260,
        forPass: 'VN',
      },
      {
        name: 'Vn FCK Ánh',
        governorId: 39031568,
        forPass: 'VN',
      },
      {
        name: 'Master Iris',
        governorId: 59075608,
        forPass: 'VN',
      },
      {
        name: 'Master Beng9x',
        governorId: 50207728,
        forPass: 'VN',
      },
      {
        name: 'VN FCK BỤT',
        governorId: 43311517,
        forPass: 'VN',
      },
      {
        name: 'Master Pirate00',
        governorId: 49335609,
        forPass: 'VN',
      },
      {
        name: 'VN MaxPig',
        governorId: 44285477,
        forPass: 'VN',
      },
      {
        name: 'VNK ChuBom',
        governorId: 57181795,
        forPass: 'VN',
      },
      {
        name: 'VN PhONG Ka',
        governorId: 60181729,
        forPass: 'VN',
      },
      {
        name: 'VN Cục VÀNG',
        governorId: 38827553,
        forPass: 'VN',
      },
      {
        name: 'VNK Đa Tình',
        governorId: 12487293,
        forPass: 'VN',
      },
      {
        name: 'Vn73 Bin k Ngáo',
        governorId: 51850108,
        forPass: 'VN',
      },
      {
        name: 'VN FCK TuNa',
        governorId: 48603104,
        forPass: 'VN',
      },
      {
        name: 'MASTER TEAM',
        governorId: 51575396,
        forPass: 'VN',
      },
      {
        name: 'VN Goldbee',
        governorId: 39178607,
        forPass: 'VN',
      },
      {
        name: 'điêuhuynh',
        governorId: 51065735,
        forPass: 'VN',
      },
      {
        name: 'メBRÀĐ亗',
        governorId: 70266128,
        forPass: 'VN',
      },
      {
        name: 'VN Hide on bush',
        governorId: 50945371,
        forPass: 'VN',
      },
      {
        name: 'VN FCK Kirito',
        governorId: 48608584,
        forPass: 'VN',
      },
      {
        name: 'VN Vyicy',
        governorId: 62732184,
        forPass: 'VN',
      },
      {
        name: 'Vn Bắc Cái',
        governorId: 54993729,
        forPass: 'VN',
      },
      {
        name: 'VN FCK Karaoke',
        governorId: 44119292,
        forPass: 'VN',
      },
      {
        name: 'VN ACT Farm Gem',
        governorId: 54145444,
        forPass: 'VN',
      },
      {
        name: 'VN Trọngᵀ',
        governorId: 75654671,
        forPass: 'VN',
      },
      {
        name: 'VN ᴿᴵ EKKY',
        governorId: 69571143,
        forPass: 'VN',
      },
      {
        name: 'VN FCK Nấm',
        governorId: 43439220,
        forPass: 'VN',
      },
      {
        name: 'VN TrânChenlie',
        governorId: 14602661,
        forPass: 'VN',
      },
      {
        name: 'VN FCK Cá',
        governorId: 44143418,
        forPass: 'VN',
      },
      {
        name: 'VN CụcXương',
        governorId: 58250279,
        forPass: 'VN',
      },
      {
        name: 'vnDangTuan',
        governorId: 42129761,
        forPass: 'VN',
      },
      {
        name: 'VN Rainer LXV',
        governorId: 50788229,
        forPass: 'VN',
      },
      {
        name: 'VN Cục Bơ',
        governorId: 32298610,
        forPass: 'VN',
      },
      {
        name: 'Vn abo malak 18',
        governorId: 68387403,
        forPass: 'VN',
      },
      {
        name: 'VN HiepHihe',
        governorId: 48380546,
        forPass: 'VN',
      },
      {
        name: 'Master Shanks',
        governorId: 50819524,
        forPass: 'VN',
      },
      {
        name: 'VN Drango',
        governorId: 45662482,
        forPass: 'VN',
      },
      {
        name: 'VN Thuốc Lào',
        governorId: 83280590,
        forPass: 'VN',
      },
      {
        name: 'VN VỠNỢ',
        governorId: 73952485,
        forPass: 'VN',
      },
      {
        name: 'VN DEAD GUN73',
        governorId: 67246446,
        forPass: 'VN',
      },
      {
        name: 'VNK SơnSmile',
        governorId: 50926569,
        forPass: 'VN',
      },
      {
        name: 'VNK Manful',
        governorId: 57016889,
        forPass: 'VN',
      },
      {
        name: 'VNK ThangHQ',
        governorId: 65982962,
        forPass: 'VN',
      },
      {
        name: 'VNK EmGaiMua',
        governorId: 57186055,
        forPass: 'VN',
      },
      {
        name: 'VN Sup Ngao',
        governorId: 84351696,
        forPass: 'VN',
      },
      {
        name: 'Vn Thầy Ngáo',
        governorId: 84185799,
        forPass: 'VN',
      },
      {
        name: 'VN FCK Min',
        governorId: 59794663,
        forPass: 'VN',
      },
      {
        name: 'VN Bé Khoai To',
        governorId: 48749131,
        forPass: 'VN',
      },
      {
        name: 'VN 彡Anubis彡',
        governorId: 71109156,
        forPass: 'VN',
      },
      {
        name: 'VN JOYCE',
        governorId: 80089799,
        forPass: 'VN',
      },
      {
        name: 'VN Hoài Bảo',
        governorId: 51872674,
        forPass: 'VN',
      },
      {
        name: 'VNzzXuanHong',
        governorId: 47282345,
        forPass: 'VN',
      },
      {
        name: 'VN TOP TIGERS',
        governorId: 16623119,
        forPass: 'VN',
      },
      {
        name: 'Vn Nhung Nhí',
        governorId: 83698425,
        forPass: 'VN',
      },
      {
        name: 'Gia Tuệ',
        governorId: 54962813,
        forPass: 'VN',
      },
      {
        name: 'VN FCK BeanBaby',
        governorId: 43312248,
        forPass: 'VN',
      },
      {
        name: 'Vn Ớt Ngáo',
        governorId: 83466419,
        forPass: 'VN',
      },
      {
        name: 'VN Lộc Nhé',
        governorId: 83372754,
        forPass: 'VN',
      },
      {
        name: 'VN traimienbien',
        governorId: 62166231,
        forPass: 'VN',
      },
      {
        name: 'VN Dwou Shelby',
        governorId: 75807474,
        forPass: 'VN',
      },
      {
        name: '云 Box UsUk',
        governorId: 52090045,
        forPass: 'VN',
      },
      {
        name: 'Cục Chè Lè',
        governorId: 57632150,
        forPass: 'VN',
      },
      {
        name: 'Vn MrTi Ngáo',
        governorId: 84243822,
        forPass: 'VN',
      },
      {
        name: 'Vn Kids Ngáo',
        governorId: 84141923,
        forPass: 'VN',
      },
      {
        name: 'VNK FireEagle',
        governorId: 55804134,
        forPass: 'VN',
      },
      {
        name: 'Vn cục shine',
        governorId: 58207759,
        forPass: 'VN',
      },
      {
        name: 'VN Hạnh Ngáo',
        governorId: 84187650,
        forPass: 'VN',
      },
      {
        name: 'Vn FCK forget',
        governorId: 4504919,
        forPass: 'VN',
      },
      {
        name: 'VN Tú Tuấn',
        governorId: 67043780,
        forPass: 'VN',
      },
      {
        name: 'FacistFox',
        governorId: 84467409,
        forPass: 'VN',
      },
      {
        name: 'VN That Tinh',
        governorId: 50795529,
        forPass: 'VN',
      },
      {
        name: 'VN NgoanSugus',
        governorId: 39614501,
        forPass: 'VN',
      },
      {
        name: 'VN ᴿᴵPROLAG',
        governorId: 70303216,
        forPass: 'VN',
      },
      {
        name: 'VN Mikuᵛᶰシ',
        governorId: 73322108,
        forPass: 'VN',
      },
      {
        name: 'Hoikyghe',
        governorId: 65228588,
        forPass: 'VN',
      },
      {
        name: 'Línhbinh Nhì',
        governorId: 31597145,
        forPass: 'VN',
      },
      {
        name: 'VN beta huk',
        governorId: 83352531,
        forPass: 'VN',
      },
      {
        name: 'VN Cục Cơm',
        governorId: 58328237,
        forPass: 'VN',
      },
    ],
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <MDBDataTable
            striped
            bordered
            small
            data={data}
            dark={true}
            paging={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PassRewards;
