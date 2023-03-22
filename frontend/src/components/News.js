import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  // const [page,setPage] = useState(1);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // eslint-disable-next-line
  const updateNews = async () => {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    setLoading(true);
    // let data = await fetch(url);
    const data = [
      {
        "status": "ok",
        "totalResults": 19,
        "articles": [
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Search For Amritpal Singh Enters Day 4, 3 Aides Flown To Assam: 10 Facts - NDTV",
            "description": "With the hunt for Khalistani leader Amritpal Singh entering the fourth day, his uncle and two other aides were flown to Assam this morning. On Sunday, his other four arrested associates were also taken to Dibrugarh Central Jail.",
            "url": "https://www.ndtv.com/india-news/khalistani-leader-amritpal-singhs-uncle-flown-to-assam-as-search-enters-day-4-10-points-3878992",
            "urlToImage": "https://c.ndtvimg.com/2023-03/5tknnlj_amritpal-singh_625x300_19_March_23.jpg",
            "publishedAt": "2023-03-21T06:31:00Z",
            "content": "<li>Amritpal Singh's uncle Harjit Singh and six aides have been charged under the stringent National Security Act (NSA), which allows the police to detain suspects in any prison across the country.\r\n… [+2220 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Share Market LIVE: Nifty jumps above 17000, Sensex surges 200 pts; Bank Nifty slips below 39500, RIL shares rise - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-asia-us-markets-in-green-fomc-meet-tuesday-21-march/3016953/",
            "urlToImage": null,
            "publishedAt": "2023-03-21T06:14:56Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Ahead Of Questioning, KCR's Daughter Waves \"Proof\" Against Agency's Charge - NDTV",
            "description": "K Kavitha, Bharat Rashtra Samithi leader and daughter of Telangana Chief Minister K Chandrasekhar Rao, is being quizzed by the Enforcement Directorate for a second consecutive day.",
            "url": "https://www.ndtv.com/india-news/delhi-liquor-policy-ahead-of-questioning-kcrs-daughter-waves-proof-against-agency-charge-3879402",
            "urlToImage": "https://c.ndtvimg.com/2023-03/n45kl7rk_k-kavitha_625x300_21_March_23.jpg",
            "publishedAt": "2023-03-21T06:13:10Z",
            "content": "K Kavitha has alleged a political conspiracy behind the ED summons.\r\nNew Delhi: K Kavitha, Bharat Rashtra Samithi leader and daughter of Telangana Chief Minister K Chandrasekhar Rao, is being quizzed… [+1355 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Trump Family Failed To Disclose 17 Gifts They Received From India - NDTV",
            "description": "Former US President Donald Trump has failed to disclose gifts worth $250,000 given to the First Family by foreign leaders which included $47,000 worth of gifts by Indian leaders, including Prime Minister Narendra Modi.",
            "url": "https://www.ndtv.com/world-news/indian-jewellery-saudi-swords-among-gifts-that-trump-did-not-disclose-3879284",
            "urlToImage": "https://c.ndtvimg.com/2020-02/76a2lc1g_narendra-modi-donald-trump-twitter_625x300_26_February_20.jpg",
            "publishedAt": "2023-03-21T06:01:00Z",
            "content": "Washington: Former US President Donald Trump has failed to disclose gifts worth $250,000 given to the First Family by foreign leaders which included $47,000 worth of gifts by Indian leaders, includin… [+2114 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Staggering iPhone 12 discount! Amazon lowers price to 32800 with exchange offer - HT Tech",
            "description": "Grab the iPhone 12 with a huge price cut on Amazon, after which it can be yours for just Rs. 32800. Check offer details here.",
            "url": "https://tech.hindustantimes.com/mobile/news/staggering-iphone-12-discount-amazon-lowers-price-to-32800-with-exchange-offer-71679377858977.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/03/21/1600x900/thai-nguyen-Xx7FM76bA8k-unsplash_1675064741098_1679378022240_1679378022240.jpg",
            "publishedAt": "2023-03-21T05:54:27Z",
            "content": "Powered by the Apple A14 Bionic chipset, the iPhone 12 gives top smartphones in the market a run for their money. It was also the first regular iPhone model to come equipped with an OLED display, giv… [+1699 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tech Explorist"
            },
            "author": "Pranjal Mehar",
            "title": "Intense heatwaves happen at the bottom of the ocean - Tech Explorist",
            "description": "First assessment of bottom marine heat waves opens a window on the deep.",
            "url": "https://www.techexplorist.com/intense-heatwaves-happen-bottom-ocean/57808/",
            "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/03/western-Atlantic-Ocean-Basin.jpg",
            "publishedAt": "2023-03-21T05:49:11Z",
            "content": "Marine heat waves (MHW) can drastically impact the overall health of marine ecosystems around the globe. There has been a considerable effort to characterize the timing, intensity, duration, and phys… [+3264 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Information Desk",
            "title": "Garena Free Fire MAX Redeem Codes for March 21, 2023: How to redeem the codes - India Today",
            "description": "Here is all you need to know about the new active codes for the list of New Garena Free Fire MAX Redeem codes and steps to redeem them.",
            "url": "https://www.indiatoday.in/information/story/garena-free-fire-max-redeem-codes-for-march-21-2023-how-to-redeem-the-codes-2349427-2023-03-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/mobile-phone-5922635_960_720_1-sixteen_nine.jpg?VersionId=.eDSYPhtsaC1QHAZYaODvPaf2VN5pu1n",
            "publishedAt": "2023-03-21T05:42:14Z",
            "content": "By India Today Information Desk: Garena Free Fire MAX is an action-adventure battle royal game where players enter the battlefield with only one winner at the end. It is the upgraded version of Garen… [+1453 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "HP Pavilion Aero 13 with Ryzen 7000 series launched in India - Times of India",
            "description": "HP has announced the launch of the newest addition to its Pavilion series – the Pavilion Aero 13. It is the lightest laptop in the Pavillion series, f",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/hp-pavilion-aero-13-with-ryzen-7000-series-launched-in-india/articleshow/98852816.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-98852739,width-1070,height-580,imgsize-281652,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-03-21T05:31:00Z",
            "content": ""
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Apple iPhone 15 Pro design leaks, may come with THESE changes | Mint - Mint",
            "description": "At present, iPhone models have separate buttons for volume up and down. But the leaked images suggest that high-end iPhone 15 series phones may have a unified volume button.",
            "url": "https://www.livemint.com/technology/gadgets/apple-iphone-15-pro-design-leaks-may-come-with-these-changes-11679375934426.html",
            "urlToImage": "https://images.livemint.com/img/2023/03/21/600x338/iphone_1676475936989_1679376124063_1679376124063.jpg",
            "publishedAt": "2023-03-21T05:22:41Z",
            "content": "Apple iPhone 15 series launch is months away but the rumour mill keeps churning out alleged features and specifications. In a latest, leaked CAD images were shared in a video on the Chinese version o… [+1803 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Alok KN Mishra",
            "title": "People of Delhi request with folded hands…': Arvind Kejriwal's plea to PM Modi - Hindustan Times",
            "description": "The Delhi Budget 2023-24 was scheduled to be presented by finance minister Kailash Gehlot in the Assembly on Tuesday.  | Latest News Delhi",
            "url": "https://www.hindustantimes.com/cities/delhi-news/pls-don-t-stop-delhi-budget-kejriwal-writes-to-pmmodi-101679375942485.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/21/1600x900/Delhi-chief-minister-Arvind-Kejriwal---File-Photo-_1679378869051.jpg",
            "publishedAt": "2023-03-21T05:19:02Z",
            "content": "Delhi chief minister Arvind Kejriwal wrote to Prime Minister Narendra Modi requesting him not to stop the city governments budget on Tuesday morning, hours after the Aam Aadmi Party (AAP) leader said… [+2396 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Japan PM Kishida To Meet Ukraine's Zelensky Today In Surprise Kyiv Visit - NDTV",
            "description": "Japanese Prime Minister Fumio Kishida will meet Ukrainian President Volodymyr Zelensky during a surprise visit to Kyiv on Tuesday to offer \"solidarity and unwavering support,\" Japan's foreign ministry said.",
            "url": "https://www.ndtv.com/world-news/japan-pm-kishida-to-meet-ukraines-zelensky-today-in-surprise-kyiv-visit-3879079",
            "urlToImage": "https://c.ndtvimg.com/2023-01/c53821no_fumio-kishida-afp_625x300_14_January_23.jpg",
            "publishedAt": "2023-03-21T04:18:14Z",
            "content": "Japanese PM Fumio Kishida made a surprise Ukraine trip. (File)\r\nTokyo, Japan: Japanese Prime Minister Fumio Kishida will meet Ukrainian President Volodymyr Zelensky during a surprise visit to Kyiv on… [+3072 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "The Porn Star, The President And 'Hush Money': Why Donald Trump Faces Arrest - NDTV",
            "description": "In July 2006, real estate tycoon and reality television star Donald Trump met an adult film actress, Stormy Daniels, at a celebrity golf tournament in Lake Tahoe.",
            "url": "https://www.ndtv.com/world-news/the-porn-star-the-president-and-hush-money-why-donald-trump-faces-arrest-3878969",
            "urlToImage": "https://c.ndtvimg.com/2023-03/u3b743uo_donald-trump_625x300_21_March_23.jpg",
            "publishedAt": "2023-03-21T03:10:33Z",
            "content": "In July 2006, real estate tycoon and reality television star Donald Trump met an adult film actress, Stormy Daniels, at a celebrity golf tournament in Lake Tahoe.\r\nExactly what happened next is in di… [+3609 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "‘I wouldn’t have applied for Team India head coach role if Virat Kohli hadn’t approached me’: Virender Sehwag - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/sports/cricket/i-wouldnt-have-applied-for-team-india-head-coach-role-if-virat-kohli-hadnt-approached-me-virender-sehwag-8509168/",
            "urlToImage": null,
            "publishedAt": "2023-03-21T03:09:51Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Covid-19: IISc researchers identify new recombination changes in virus - Times of India",
            "description": "Bengaluru: Researchers from IISc have identified several new mutations to coronavirus SARS-CoV2 that accumulated through recombination at a high rate .",
            "url": "https://timesofindia.indiatimes.com/city/bengaluru/covid-19-iisc-researchers-identify-new-recombination-changes-in-virus/articleshow/98846358.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-98846357,width-1070,height-580,imgsize-717151,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-03-21T02:42:00Z",
            "content": ""
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Anupam Kher pens note for Satish Kaushik: ‘Ja, tujhe maaf kiya’ - Hindustan Times",
            "description": "Anupam Kher has shared an emotional note for his late friend Satish Kaushik after attending his prayer meet on Monday. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/anupam-kher-pens-heartbreaking-note-for-satish-kaushik-ja-tujhe-maaf-kiya-101679363489797.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/21/1600x900/satish_kaushik__1679365039263_1679365039588_1679365039588.jpg",
            "publishedAt": "2023-03-21T02:32:37Z",
            "content": "Anupam Kher attended the prayer meet of his late friend and actor Satish Kaushik on Monday. He not just stood by his family but also told the media to not get into rumours about the reasons for his d… [+2154 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bar & Bench - Indian Legal News"
            },
            "author": "Neha Joshi",
            "title": "Mumbai Court rejects Javed Akhtar plea against order summoning him over RSS Taliban remark - Bar & Bench - Indian Legal News",
            "description": "A Mumbai court on Monday rejected a plea filed by lyricist Javed Akhtar challenging a Magistrate order summoning him in a criminal defamation complaint for his",
            "url": "https://www.barandbench.com/news/litigation/mumbai-court-rejects-javed-akhtar-plea-order-summoning-him-rss-taliban-comment",
            "urlToImage": "https://gumlet.assettype.com/barandbench%2F2023-01%2F8bfcfd8e-733e-4e57-a753-87ee6eb0d392%2FSUPREME_COURT_OF_INDIA__WEB_PAGE_1600x900___Copy_Recovered.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
            "publishedAt": "2023-03-21T02:29:11Z",
            "content": "The Magistrate had issued summons to the lyricist in a criminal complaint filed by a lawyer, Santosh Dubey in October 2021, under Sections 499 (defamation) and 500 (punishment for defamation) of the … [+670 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "‘An Indian had threatened Pakistan team but we still came’: Afridi - Hindustan Times",
            "description": "Amid the talk, former Pakistan captain Shahid Afridi feels that Pakistan are ready to welcome the Indian team for the tournament and urged the BCCI to keep aside political tensions and send their side. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/an-indian-had-threatened-pakistan-team-but-we-still-came-shahid-afridi-on-asia-cup-row-101679325611632.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/20/1600x900/image_-_2023-03-20T211710070_1679327348093_1679327348520_1679327348520.jpg",
            "publishedAt": "2023-03-21T02:10:38Z",
            "content": "The members of the Asian Cricket Council (ACC) including the BCCI and the PCB are slated to meet in Dubai to reach to a conclusion over the much-debated Asia Cup 2023 tournament with ICC set to hold … [+2687 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBC"
            },
            "author": "The Associated Press",
            "title": "Japan Prime Minister Fumio Kishida announces new Indo-Pacific plan during India visit - CNBC",
            "description": "Kishida said he hopes to promote a vision of free and open Indo-Pacific, a Tokyo-led initiative that is geared toward curbing Beijing's growing assertiveness.",
            "url": "https://www.cnbc.com/2023/03/21/japan-pm-kishida-announces-new-indo-pacific-plan-during-india-visit.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107212016-1679362555003-gettyimages-1248906236-20230321_dli-rkr-mn_primeministerjapan-0016.jpeg?v=1679364456&w=1920&h=1080",
            "publishedAt": "2023-03-21T02:07:00Z",
            "content": "Japan's Prime Minister Fumio Kishida on Monday invited his Indian counterpart Narendra Modi for the Group of Seven summit in May and announced action plans for a new Indo-Pacific initiative aimed at … [+3692 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Reuters",
            "title": "Pension reforms | Macron, resign: Protesters set rubbish on fire as no-confidence vote fails - India Today",
            "description": "After President Emmanuel Macron's government narrowly survived a no-confidence motion in parliament, protesters set piles of rubbish on fire. The pension reform legislation is set to raise the retirement age by two years to 64.",
            "url": "https://www.indiatoday.in/world/story/pension-reforms-france-protesters-set-rubbish-fire-macron-survives-no-confidence-vote-2349322-2023-03-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/france_protest_0-sixteen_nine.png?VersionId=uSnMzC45aZ_dCY6Gbv36BNR4XVGvgQNh",
            "publishedAt": "2023-03-21T01:30:38Z",
            "content": "By Reuters: Protesters set piles of rubbish on fire in central Paris on Monday after President Emmanuel Macron's government narrowly survived a no-confidence motion in parliament on Monday over a dee… [+3052 chars]"
          }
        ]
      }
    ]
    props.setProgress(50);
    // let parseData = await data.json();
    let parseData = data[0];
    
    props.setProgress(70);
    setArticles(parseData.articles);
    setLoading(false);
    setTotalResults(parseData.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line 
  }, []);

  const fetchMoreData = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${props.category}&apiKey=${props.apiKey}&page=${
    //   page + 1
    // }&pageSize=${props.pageSize}`;
    // setPage(page + 1);
    // let data = await fetch(url);
    // let parseData = await data.json();
    const data = [
      {
        "status": "ok",
        "totalResults": 19,
        "articles": [
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Search For Amritpal Singh Enters Day 4, 3 Aides Flown To Assam: 10 Facts - NDTV",
            "description": "With the hunt for Khalistani leader Amritpal Singh entering the fourth day, his uncle and two other aides were flown to Assam this morning. On Sunday, his other four arrested associates were also taken to Dibrugarh Central Jail.",
            "url": "https://www.ndtv.com/india-news/khalistani-leader-amritpal-singhs-uncle-flown-to-assam-as-search-enters-day-4-10-points-3878992",
            "urlToImage": "https://c.ndtvimg.com/2023-03/5tknnlj_amritpal-singh_625x300_19_March_23.jpg",
            "publishedAt": "2023-03-21T06:31:00Z",
            "content": "<li>Amritpal Singh's uncle Harjit Singh and six aides have been charged under the stringent National Security Act (NSA), which allows the police to detain suspects in any prison across the country.\r\n… [+2220 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Share Market LIVE: Nifty jumps above 17000, Sensex surges 200 pts; Bank Nifty slips below 39500, RIL shares rise - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-asia-us-markets-in-green-fomc-meet-tuesday-21-march/3016953/",
            "urlToImage": null,
            "publishedAt": "2023-03-21T06:14:56Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Ahead Of Questioning, KCR's Daughter Waves \"Proof\" Against Agency's Charge - NDTV",
            "description": "K Kavitha, Bharat Rashtra Samithi leader and daughter of Telangana Chief Minister K Chandrasekhar Rao, is being quizzed by the Enforcement Directorate for a second consecutive day.",
            "url": "https://www.ndtv.com/india-news/delhi-liquor-policy-ahead-of-questioning-kcrs-daughter-waves-proof-against-agency-charge-3879402",
            "urlToImage": "https://c.ndtvimg.com/2023-03/n45kl7rk_k-kavitha_625x300_21_March_23.jpg",
            "publishedAt": "2023-03-21T06:13:10Z",
            "content": "K Kavitha has alleged a political conspiracy behind the ED summons.\r\nNew Delhi: K Kavitha, Bharat Rashtra Samithi leader and daughter of Telangana Chief Minister K Chandrasekhar Rao, is being quizzed… [+1355 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Trump Family Failed To Disclose 17 Gifts They Received From India - NDTV",
            "description": "Former US President Donald Trump has failed to disclose gifts worth $250,000 given to the First Family by foreign leaders which included $47,000 worth of gifts by Indian leaders, including Prime Minister Narendra Modi.",
            "url": "https://www.ndtv.com/world-news/indian-jewellery-saudi-swords-among-gifts-that-trump-did-not-disclose-3879284",
            "urlToImage": "https://c.ndtvimg.com/2020-02/76a2lc1g_narendra-modi-donald-trump-twitter_625x300_26_February_20.jpg",
            "publishedAt": "2023-03-21T06:01:00Z",
            "content": "Washington: Former US President Donald Trump has failed to disclose gifts worth $250,000 given to the First Family by foreign leaders which included $47,000 worth of gifts by Indian leaders, includin… [+2114 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Staggering iPhone 12 discount! Amazon lowers price to 32800 with exchange offer - HT Tech",
            "description": "Grab the iPhone 12 with a huge price cut on Amazon, after which it can be yours for just Rs. 32800. Check offer details here.",
            "url": "https://tech.hindustantimes.com/mobile/news/staggering-iphone-12-discount-amazon-lowers-price-to-32800-with-exchange-offer-71679377858977.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/03/21/1600x900/thai-nguyen-Xx7FM76bA8k-unsplash_1675064741098_1679378022240_1679378022240.jpg",
            "publishedAt": "2023-03-21T05:54:27Z",
            "content": "Powered by the Apple A14 Bionic chipset, the iPhone 12 gives top smartphones in the market a run for their money. It was also the first regular iPhone model to come equipped with an OLED display, giv… [+1699 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tech Explorist"
            },
            "author": "Pranjal Mehar",
            "title": "Intense heatwaves happen at the bottom of the ocean - Tech Explorist",
            "description": "First assessment of bottom marine heat waves opens a window on the deep.",
            "url": "https://www.techexplorist.com/intense-heatwaves-happen-bottom-ocean/57808/",
            "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/03/western-Atlantic-Ocean-Basin.jpg",
            "publishedAt": "2023-03-21T05:49:11Z",
            "content": "Marine heat waves (MHW) can drastically impact the overall health of marine ecosystems around the globe. There has been a considerable effort to characterize the timing, intensity, duration, and phys… [+3264 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Information Desk",
            "title": "Garena Free Fire MAX Redeem Codes for March 21, 2023: How to redeem the codes - India Today",
            "description": "Here is all you need to know about the new active codes for the list of New Garena Free Fire MAX Redeem codes and steps to redeem them.",
            "url": "https://www.indiatoday.in/information/story/garena-free-fire-max-redeem-codes-for-march-21-2023-how-to-redeem-the-codes-2349427-2023-03-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/mobile-phone-5922635_960_720_1-sixteen_nine.jpg?VersionId=.eDSYPhtsaC1QHAZYaODvPaf2VN5pu1n",
            "publishedAt": "2023-03-21T05:42:14Z",
            "content": "By India Today Information Desk: Garena Free Fire MAX is an action-adventure battle royal game where players enter the battlefield with only one winner at the end. It is the upgraded version of Garen… [+1453 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "HP Pavilion Aero 13 with Ryzen 7000 series launched in India - Times of India",
            "description": "HP has announced the launch of the newest addition to its Pavilion series – the Pavilion Aero 13. It is the lightest laptop in the Pavillion series, f",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/hp-pavilion-aero-13-with-ryzen-7000-series-launched-in-india/articleshow/98852816.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-98852739,width-1070,height-580,imgsize-281652,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-03-21T05:31:00Z",
            "content": ""
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Apple iPhone 15 Pro design leaks, may come with THESE changes | Mint - Mint",
            "description": "At present, iPhone models have separate buttons for volume up and down. But the leaked images suggest that high-end iPhone 15 series phones may have a unified volume button.",
            "url": "https://www.livemint.com/technology/gadgets/apple-iphone-15-pro-design-leaks-may-come-with-these-changes-11679375934426.html",
            "urlToImage": "https://images.livemint.com/img/2023/03/21/600x338/iphone_1676475936989_1679376124063_1679376124063.jpg",
            "publishedAt": "2023-03-21T05:22:41Z",
            "content": "Apple iPhone 15 series launch is months away but the rumour mill keeps churning out alleged features and specifications. In a latest, leaked CAD images were shared in a video on the Chinese version o… [+1803 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Alok KN Mishra",
            "title": "People of Delhi request with folded hands…': Arvind Kejriwal's plea to PM Modi - Hindustan Times",
            "description": "The Delhi Budget 2023-24 was scheduled to be presented by finance minister Kailash Gehlot in the Assembly on Tuesday.  | Latest News Delhi",
            "url": "https://www.hindustantimes.com/cities/delhi-news/pls-don-t-stop-delhi-budget-kejriwal-writes-to-pmmodi-101679375942485.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/21/1600x900/Delhi-chief-minister-Arvind-Kejriwal---File-Photo-_1679378869051.jpg",
            "publishedAt": "2023-03-21T05:19:02Z",
            "content": "Delhi chief minister Arvind Kejriwal wrote to Prime Minister Narendra Modi requesting him not to stop the city governments budget on Tuesday morning, hours after the Aam Aadmi Party (AAP) leader said… [+2396 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Japan PM Kishida To Meet Ukraine's Zelensky Today In Surprise Kyiv Visit - NDTV",
            "description": "Japanese Prime Minister Fumio Kishida will meet Ukrainian President Volodymyr Zelensky during a surprise visit to Kyiv on Tuesday to offer \"solidarity and unwavering support,\" Japan's foreign ministry said.",
            "url": "https://www.ndtv.com/world-news/japan-pm-kishida-to-meet-ukraines-zelensky-today-in-surprise-kyiv-visit-3879079",
            "urlToImage": "https://c.ndtvimg.com/2023-01/c53821no_fumio-kishida-afp_625x300_14_January_23.jpg",
            "publishedAt": "2023-03-21T04:18:14Z",
            "content": "Japanese PM Fumio Kishida made a surprise Ukraine trip. (File)\r\nTokyo, Japan: Japanese Prime Minister Fumio Kishida will meet Ukrainian President Volodymyr Zelensky during a surprise visit to Kyiv on… [+3072 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "The Porn Star, The President And 'Hush Money': Why Donald Trump Faces Arrest - NDTV",
            "description": "In July 2006, real estate tycoon and reality television star Donald Trump met an adult film actress, Stormy Daniels, at a celebrity golf tournament in Lake Tahoe.",
            "url": "https://www.ndtv.com/world-news/the-porn-star-the-president-and-hush-money-why-donald-trump-faces-arrest-3878969",
            "urlToImage": "https://c.ndtvimg.com/2023-03/u3b743uo_donald-trump_625x300_21_March_23.jpg",
            "publishedAt": "2023-03-21T03:10:33Z",
            "content": "In July 2006, real estate tycoon and reality television star Donald Trump met an adult film actress, Stormy Daniels, at a celebrity golf tournament in Lake Tahoe.\r\nExactly what happened next is in di… [+3609 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "‘I wouldn’t have applied for Team India head coach role if Virat Kohli hadn’t approached me’: Virender Sehwag - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/sports/cricket/i-wouldnt-have-applied-for-team-india-head-coach-role-if-virat-kohli-hadnt-approached-me-virender-sehwag-8509168/",
            "urlToImage": null,
            "publishedAt": "2023-03-21T03:09:51Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Covid-19: IISc researchers identify new recombination changes in virus - Times of India",
            "description": "Bengaluru: Researchers from IISc have identified several new mutations to coronavirus SARS-CoV2 that accumulated through recombination at a high rate .",
            "url": "https://timesofindia.indiatimes.com/city/bengaluru/covid-19-iisc-researchers-identify-new-recombination-changes-in-virus/articleshow/98846358.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-98846357,width-1070,height-580,imgsize-717151,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-03-21T02:42:00Z",
            "content": ""
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Anupam Kher pens note for Satish Kaushik: ‘Ja, tujhe maaf kiya’ - Hindustan Times",
            "description": "Anupam Kher has shared an emotional note for his late friend Satish Kaushik after attending his prayer meet on Monday. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/anupam-kher-pens-heartbreaking-note-for-satish-kaushik-ja-tujhe-maaf-kiya-101679363489797.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/21/1600x900/satish_kaushik__1679365039263_1679365039588_1679365039588.jpg",
            "publishedAt": "2023-03-21T02:32:37Z",
            "content": "Anupam Kher attended the prayer meet of his late friend and actor Satish Kaushik on Monday. He not just stood by his family but also told the media to not get into rumours about the reasons for his d… [+2154 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bar & Bench - Indian Legal News"
            },
            "author": "Neha Joshi",
            "title": "Mumbai Court rejects Javed Akhtar plea against order summoning him over RSS Taliban remark - Bar & Bench - Indian Legal News",
            "description": "A Mumbai court on Monday rejected a plea filed by lyricist Javed Akhtar challenging a Magistrate order summoning him in a criminal defamation complaint for his",
            "url": "https://www.barandbench.com/news/litigation/mumbai-court-rejects-javed-akhtar-plea-order-summoning-him-rss-taliban-comment",
            "urlToImage": "https://gumlet.assettype.com/barandbench%2F2023-01%2F8bfcfd8e-733e-4e57-a753-87ee6eb0d392%2FSUPREME_COURT_OF_INDIA__WEB_PAGE_1600x900___Copy_Recovered.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
            "publishedAt": "2023-03-21T02:29:11Z",
            "content": "The Magistrate had issued summons to the lyricist in a criminal complaint filed by a lawyer, Santosh Dubey in October 2021, under Sections 499 (defamation) and 500 (punishment for defamation) of the … [+670 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "‘An Indian had threatened Pakistan team but we still came’: Afridi - Hindustan Times",
            "description": "Amid the talk, former Pakistan captain Shahid Afridi feels that Pakistan are ready to welcome the Indian team for the tournament and urged the BCCI to keep aside political tensions and send their side. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/an-indian-had-threatened-pakistan-team-but-we-still-came-shahid-afridi-on-asia-cup-row-101679325611632.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/20/1600x900/image_-_2023-03-20T211710070_1679327348093_1679327348520_1679327348520.jpg",
            "publishedAt": "2023-03-21T02:10:38Z",
            "content": "The members of the Asian Cricket Council (ACC) including the BCCI and the PCB are slated to meet in Dubai to reach to a conclusion over the much-debated Asia Cup 2023 tournament with ICC set to hold … [+2687 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBC"
            },
            "author": "The Associated Press",
            "title": "Japan Prime Minister Fumio Kishida announces new Indo-Pacific plan during India visit - CNBC",
            "description": "Kishida said he hopes to promote a vision of free and open Indo-Pacific, a Tokyo-led initiative that is geared toward curbing Beijing's growing assertiveness.",
            "url": "https://www.cnbc.com/2023/03/21/japan-pm-kishida-announces-new-indo-pacific-plan-during-india-visit.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107212016-1679362555003-gettyimages-1248906236-20230321_dli-rkr-mn_primeministerjapan-0016.jpeg?v=1679364456&w=1920&h=1080",
            "publishedAt": "2023-03-21T02:07:00Z",
            "content": "Japan's Prime Minister Fumio Kishida on Monday invited his Indian counterpart Narendra Modi for the Group of Seven summit in May and announced action plans for a new Indo-Pacific initiative aimed at … [+3692 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Reuters",
            "title": "Pension reforms | Macron, resign: Protesters set rubbish on fire as no-confidence vote fails - India Today",
            "description": "After President Emmanuel Macron's government narrowly survived a no-confidence motion in parliament, protesters set piles of rubbish on fire. The pension reform legislation is set to raise the retirement age by two years to 64.",
            "url": "https://www.indiatoday.in/world/story/pension-reforms-france-protesters-set-rubbish-fire-macron-survives-no-confidence-vote-2349322-2023-03-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/france_protest_0-sixteen_nine.png?VersionId=uSnMzC45aZ_dCY6Gbv36BNR4XVGvgQNh",
            "publishedAt": "2023-03-21T01:30:38Z",
            "content": "By Reuters: Protesters set piles of rubbish on fire in central Paris on Monday after President Emmanuel Macron's government narrowly survived a no-confidence motion in parliament on Monday over a dee… [+3052 chars]"
          }
        ]
      }
    ]
    let parseData = data[0]
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "40px 0", marginTop: "90px" }}
      >
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 8,
};
News.propsTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
