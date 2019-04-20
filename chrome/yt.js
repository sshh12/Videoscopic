let currentlyPaused = false;
let delayPassed = false;

let fakeImageData = [{'name': 'Hillary Clinton', 'url': 'https://en.wikipedia.org/wiki/Hillary_Clinton', 'summary': "Hillary Diane Rodham Clinton (born October 26, 1947) is an American politician, diplomat, lawyer, writer, and public speaker. She served as the First Lady of the United States from 1993 to 2001, U.S. Senator from New York from 2001 to 2009, 67th United States Secretary of State from 2009 to 2013, and as the Democratic Party's nominee for President of the United States in the 2016 election, the first woman nominated by a major party.\nBorn in Chicago, Illinois, and raised in the Chicago suburb of Park Ridge, Clinton graduated from Wellesley College in 1969 and earned a Juris Doctor from Yale Law School in 1973. After serving as a congressional legal counsel, she moved to Arkansas and married future president Bill Clinton in 1975; the two had met at Yale. In 1977, she co-founded Arkansas Advocates for Children and Families. She was appointed the first female chair of the Legal Services Corporation in 1978, and became the first female partner at Little Rock's Rose Law Firm the following year. As First Lady of Arkansas, she led a task force whose recommendations helped reform Arkansas's public schools.\nAs First Lady of the United States, Clinton advocated for gender equality and healthcare reform. Her marital relationship came under public scrutiny during the Lewinsky scandal, which led her to issue a statement that reaffirmed her commitment to the marriage. In 2000, Clinton was elected as the first female Senator from New York. She was reelected to the Senate in 2006. Running for president in 2008, she won far more delegates than any previous female candidate, but lost the Democratic nomination to Barack Obama. During her tenure as U.S. Secretary of State in the Obama Administration from 2009 to 2013, Clinton responded to the Arab Spring by advocating military intervention in Libya. She helped to organize a diplomatic isolation and a regime of international sanctions against Iran in an effort to force curtailment of that country's nuclear program; this would eventually lead to the multinational Joint Comprehensive Plan of Action agreement in 2015. Upon leaving her Cabinet position after Obama's first term, she wrote her fifth book and undertook speaking engagements.\nClinton made a second presidential run in 2016. She received the most votes and primary delegates in the 2016 Democratic primaries and formally accepted her party's nomination for President of the United States on July 28, 2016, with vice presidential running mate Senator from Virginia Tim Kaine.  She lost the presidential election to Republican opponent Donald Trump in the Electoral College, despite winning a plurality of the popular vote. She received more than 65 million votes, the 3rd-highest count in a U.S. presidential election, behind Obama's victories in 2008 and 2012. Following her loss, she wrote her third memoir, What Happened, and launched Onward Together, a political action organization dedicated to fundraising for progressive political groups.", 'short_summary': 'Hillary Diane Rodham Clinton (born October 26, 1947) is an American politician, diplomat, lawyer, writer, and public speaker.', 'image_url': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Hillary_Clinton_April_2015_%281%29.jpg'}, {'name': 'Donald Trump', 'url': 'https://en.wikipedia.org/wiki/Donald_Trump', 'summary': "Donald John Trump (born June 14, 1946) is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality.\nTrump was born and raised in the New York City borough of Queens and received an economics degree from the Wharton School. He was appointed president of his family's real estate business in 1971, renamed it The Trump Organization, and expanded it from Queens and Brooklyn into Manhattan. The company built or renovated skyscrapers, hotels, casinos, and golf courses. Trump later started various side ventures, including licensing his name for real estate and consumer products. He managed the company until his 2017 inauguration. He co-authored several books, including The Art of the Deal. He owned the Miss Universe and Miss USA beauty pageants from 1996 to 2015, and he produced and hosted The Apprentice, a reality television show, from 2003 to 2015. Forbes estimates his net worth to be $3.1 billion.\nTrump entered the 2016 presidential race as a Republican and defeated sixteen opponents in the primaries. His campaign received extensive free media coverage. Commentators described his political positions as populist, protectionist, and nationalist. Trump has made many false or misleading statements during his campaign and presidency. The statements have been documented by fact-checkers, and the media have widely described the phenomenon as unprecedented in American politics. Trump was elected president in a surprise victory over Democratic nominee Hillary Clinton. He became the oldest and wealthiest person ever to assume the presidency, the first without prior military or government service, and the fifth to have won the election despite having lost the popular vote. His election and policies have sparked numerous protests. Many of his comments and actions have been perceived as racially charged or racist.\nDuring his presidency, Trump ordered a travel ban on citizens from several Muslim-majority countries, citing security concerns; after legal challenges, the Supreme Court upheld the policy's third revision. He enacted a tax cut package for individuals and businesses, which also rescinded the individual health insurance mandate and allowed oil drilling in the Arctic Refuge. Furthermore, Trump partially repealed the Dodd-Frank Act that had imposed stricter constraints on banks in the aftermath of the 2008 financial crisis. He has pursued his America First agenda in foreign policy, withdrawing the U.S. from the Trans-Pacific Partnership trade negotiations, the Paris Agreement on climate change, and the Iran nuclear deal. Moreover, he recognized Jerusalem as the capital of Israel, imposed import tariffs on various goods, triggering a trade war with China, and negotiated with North Korea seeking denuclearization. In addition, the U.S. President successfully nominated two justices to the Supreme Court: Neil Gorsuch and Brett Kavanaugh.", 'short_summary': 'Donald John Trump (born June 14, 1946) is the 45th and current president of the United States.', 'image_url': 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Abdel_Fattah_el-Sisi%2C_King_Salman_of_Saudi_Arabia%2C_Melania_Trump%2C_and_Donald_Trump%2C_May_2017.jpg'}];

let fakeTextData = [ { "url": "https://en.wikipedia.org/wiki/Brett_Kavanaugh", "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Associate_Justice_Brett_Kavanaugh_Official_Portrait.jpg", "name": "Brett Kavanaugh", "short_summary": "Brett Michael Kavanaugh (; born February 12, 1965) is an Associate Justice of the Supreme Court of the United States.", "summary": "Brett Michael Kavanaugh (; born February 12, 1965) is an Associate Justice of the Supreme Court of the United States. He previously served as a United States Circuit Judge of the United States Court of Appeals for the District of Columbia Circuit and as a staff lawyer for various offices of the federal government.Kavanaugh graduated from Yale University, where he joined Delta Kappa Epsilon fraternity. After graduating from Yale Law School, he began his career as a law clerk and then a postgraduate fellow working under Judge Ken Starr. After Starr left the D.C. Circuit to take the position as head of the Office of Independent Counsel, Kavanaugh followed and assisted him with various investigations concerning President Bill Clinton, including the drafting of the Starr Report, which urged Clinton's impeachment. After the 2000 U.S. presidential election (in which he worked for the George W. Bush campaign in the Florida recount), he joined the administration as White House Staff Secretary and was a central figure in its efforts to identify and confirm judicial nominees. Kavanaugh was nominated to the U.S. Court of Appeals for the D.C. Circuit by President Bush in 2003. His confirmation hearings were contentious; they stalled for three years over charges of partisanship. He was ultimately confirmed to the D.C. Circuit in May 2006 after a series of negotiations between Democratic and Republican U.S. Senators. A Washington Post analysis found he had the most or second-most conservative voting record on the D.C. Court in every policy area between 2003 and 2018.President Trump nominated Kavanaugh to the U.S. Supreme Court on July 9, 2018, to fill the position vacated by retiring Associate Justice Anthony Kennedy. When Kavanaugh's name was on the short list of Supreme Court nominees and before his nomination, Palo Alto University Professor of Psychology Christine Blasey Ford contacted a Washington Post tip line with accusations that Kavanaugh had sexually assaulted her in the early 1980s while the two were in high school. Two other women also accused Kavanaugh of sexual misconduct. Kavanaugh denied all three accusations. The Republican-controlled Senate Judiciary Committee held a supplemental hearing over Ford's allegations, after which it voted to advance the confirmation to a full Senate vote. After delaying the vote for an additional FBI investigation, the Senate confirmed Kavanaugh's nomination by a vote of 50\u201348 on October 6, 2018." }, { "url": "https://en.wikipedia.org/wiki/Chuck_Grassley", "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/13/ChuckGrassleySig.png", "name": "Chuck Grassley", "short_summary": "Charles Ernest Grassley (born September 17, 1933) is an American politician serving as the President pro tempore of the United States Senate, and the senior United States Senator from Iowa.", "summary": "Charles Ernest Grassley (born September 17, 1933) is an American politician serving as the President pro tempore of the United States Senate, and the senior United States Senator from Iowa. He is currently in his seventh term in the Senate, first being elected in 1980. \nA member of the Republican Party, Grassley previously served eight terms in the Iowa House of Representatives (1959\u20131975) and three terms in the United States House of Representatives (1975\u20131981). He has served three stints as Senate Finance Committee Chairman during periods of Republican Senate majority. When Orrin Hatch's term ended on January 3, 2019, Grassley became the most senior Republican in the Senate and - as the Republicans are the majority party - was appointed President pro tempore for the 116th United States Congress, making him third in the presidential line of succession (after the Vice President and Speaker of the House)." }, { "url": "https://en.wikipedia.org/wiki/Democratic_Party_(United_States)", "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Barack_Obama_Speaks_to_College_Democrats.jpg", "name": "Democrats", "short_summary": "The Democratic Party is one of the two major contemporary political parties in the United States, along with the Republican Party.", "summary": "The Democratic Party is one of the two major contemporary political parties in the United States, along with the Republican Party. Tracing its heritage back to Thomas Jefferson and James Madison's Democratic-Republican Party, the modern-day Democratic Party was founded around 1828 by supporters of Andrew Jackson, making it the world's oldest active political party.The Democrats' dominant worldview was once social conservatism and economic liberalism, while populism was its leading characteristic in the rural South. Since Franklin D. Roosevelt and his New Deal coalition in the 1930s, the Democratic Party has also promoted a social liberal platform, supporting social justice. Well into the 20th century, the party had conservative pro-business and Southern conservative-populist anti-business wings; following the New Deal, however, the conservative wing of the Party withered outside the South. The New Deal Coalition of 1932\u20131964 attracted strong support from voters of recent European extraction\u2014many of whom were Catholics based in the cities. After the racial turmoil of the 1960s, most Southern whites and many Northern Catholics moved into the Republican Party at the presidential level. The once-powerful labor union element became smaller and less supportive after the 1970s. White Evangelicals and Southerners became heavily Republican at the state and local level since the 1990s. People living in metropolitan areas, women, sexual and gender minorities, millennials, college graduates, and racial and ethnic minorities tend to support the Democratic Party much more than they support the rival Republican Party.\nThe Democratic Party's philosophy of modern liberalism advocates social and economic equality, along with the welfare state. It seeks to provide government intervention and regulation in the economy. Policies such as the introduction of social programs, support for labor unions, affordable college tuition, universal health care, equal opportunity, consumer protection and environmental protection form the core of the party's economic policy. On social issues, the Party supports reproductive rights, LGBT rights, immigration reform, campaign finance reform, and gun control.\nFifteen Democrats have served as President of the United States. The first was President Andrew Jackson, who was the seventh president and served from 1829 to 1837. The most recent was President Barack Obama, who was the 44th president and held office from 2009 to 2017. Following the 2018 midterm elections, the Democrats held a majority in the House of Representatives, \"trifectas\" (the executive branch and both chambers of the legislative branch) in 14 states, and the mayoralty of numerous major American cities. Twenty-three state governors were Democrats, and the Party was the minority party in the Senate and in most state legislatures (full control of 18/50, split control of one other). As of March 2019, four of the nine Justices of the Supreme Court had been appointed by Democratic presidents." }, { "url": "https://en.wikipedia.org/wiki/United_States_Senate_Committee_on_the_Judiciary", "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Lindsey_Graham%2C_Official_Portrait_2006.jpg", "name": "Senate Judiciary Committee", "short_summary": "The United States Senate Committee on the Judiciary, informally the Senate Judiciary Committee, is a standing committee of 22 U.", "summary": "The United States Senate Committee on the Judiciary, informally the Senate Judiciary Committee, is a standing committee of 22 U.S. Senators whose role is to oversee the Department of Justice (DOJ), consider executive nominations, and review pending legislation.The Judiciary Committee's oversight of the DOJ includes all of the agencies under the DOJ's jurisdiction, such as the FBI. It also has oversight of the Department of Homeland Security (DHS). The Committee considers presidential nominations for positions in the DOJ, the Office of National Drug Control Policy, the State Justice Institute, and certain positions in the Department of Commerce and DHS. It is also in charge of holding hearings and investigating judicial nominations to the Supreme Court, the U.S. court of appeals, the U.S. district courts, and the Court of International Trade. The Standing Rules of the Senate confer jurisdiction to the Senate Judiciary Committee in certain areas, such as considering proposed constitutional amendments and legislation related to federal criminal law, human rights law, immigration, intellectual property, antitrust law, and internet privacy." }, { "url": "https://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States", "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/94/Supreme_Court.jpg", "name": "Supreme Court", "short_summary": "The Supreme Court of the United States (SCOTUS) is the highest court in the federal judiciary of the United States.", "summary": "The Supreme Court of the United States (SCOTUS) is the highest court in the federal judiciary of the United States. Established pursuant to Article III of the U.S. Constitution in 1789, it has original jurisdiction over a narrow range of cases, including suits between two or more states and those involving ambassadors. It also has ultimate (and largely discretionary) appellate jurisdiction over all federal court and state court cases that involve a point of federal constitutional or statutory law. The Court has the power of judicial review, the ability to invalidate a statute for violating a provision of the Constitution or an executive act for being unlawful. However, it may act only within the context of a case in an area of law over which it has jurisdiction. The court may decide cases having political overtones, but it has ruled that it does not have power to decide nonjusticiable political questions. Each year it agrees to hear about one hundred to one hundred fifty of the more than seven thousand cases that it is asked to review.According to federal statute, the court normally consists of the Chief Justice of the United States and eight associate justices, all of whom are nominated by the President and confirmed by the Senate. Once appointed, justices have lifetime tenure unless they resign, retire, or are removed from office.Each justice has a single vote in deciding the cases argued before it; the chief justice's vote carries no more weight than any other. When the chief justice is in the majority, he decides who writes the opinion of the court; otherwise, the senior justice in the majority assigns the task of writing the opinion.In modern discourse, justices are often categorized as having conservative, moderate, or liberal philosophies of law and of judicial interpretation. While a far greater number of cases in recent history have been decided unanimously, decisions in cases of the highest profile have often come down to just one single vote, exemplifying the justices' alignment according to these categories.The Court meets in the Supreme Court Building in Washington, D.C. Its law enforcement arm is the Supreme Court of the United States Police." }, { "url": "https://en.wikipedia.org/wiki/CNN", "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg", "name": "CNN", "short_summary": "Cable News Network (CNN) is an American news-based pay television channel owned by WarnerMedia News & Sports, a division of AT&T's WarnerMedia.", "summary": "Cable News Network (CNN) is an American news-based pay television channel owned by WarnerMedia News & Sports, a division of AT&T's WarnerMedia. CNN was founded in 1980 by American media proprietor Ted Turner as a 24-hour cable news channel. Upon its launch, CNN was the first television channel to provide 24-hour news coverage, and was the first all-news television channel in the United States.While the news channel has numerous affiliates, CNN primarily broadcasts from the Time Warner Center in New York City, and studios in Washington, D.C. and Los Angeles. Its headquarters at the CNN Center in Atlanta is only used for weekend programming. CNN is sometimes referred to as CNN/U.S. (or CNN Domestic) to distinguish the American channel from its international sister network, CNN International.\nAs of August 2010, CNN is available in over 100 million U.S. households. Broadcast coverage of the U.S. channel extends to over 890,000 American hotel rooms, as well as carriage on subscription providers throughout Canada. As of July 2015, CNN is available to about 96,374,000 pay-television households (82.8% of households with at least one television set) in the United States. Globally, CNN programming airs through CNN International, which can be seen by viewers in over 212 countries and territories.\n\n" }, { "url": "https://en.wikipedia.org/wiki/Kamala_Harris", "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Kamala_Harris.jpg", "name": "kamala harris", "short_summary": "Kamala Devi Harris ( KAH-m\u0259-l\u0259; born October 20, 1964) is an American attorney and politician who has served as the junior United States Senator from California since 2017.", "summary": "Kamala Devi Harris ( KAH-m\u0259-l\u0259; born October 20, 1964) is an American attorney and politician who has served as the junior United States Senator from California since 2017. A member of the Democratic Party, she previously served as the 32nd Attorney General of California from 2011 to 2017, and as the 27th District Attorney of San Francisco from 2004 to 2011. On January 21, 2019, she officially announced her campaign to run for the Democratic nomination for President of the United States in the 2020 United States presidential election. \nHarris was born in Oakland, California, and is a graduate of Howard University and University of California, Hastings College of the Law. In the 1990s, she worked in the San Francisco District Attorney's Office and the City Attorney of San Francisco's office. In 2004, she was elected District attorney of San Francisco.\nHarris was narrowly elected as California's Attorney General in 2010 and was reelected in 2014 by a wide margin. On November 8, 2016, she defeated Loretta Sanchez in the 2016 Senate election to succeed outgoing Senator Barbara Boxer, becoming California's third female U.S. Senator, and the first of Jamaican or Indian ancestry.Since becoming a Senator, Harris has supported Medicare-for-all, legalization of recreational marijuana, sanctuary cities, passing a DREAM Act, and lowering taxes for the working and middle classes while raising taxes on corporations and the wealthiest top 1% of Americans.\nHarris launched her presidential campaign on January 27, 2019, where she vowed to fight for the \"largest middle class tax cut in a generation.\"" } ];

setTimeout(function () {
    delayPassed = true;
},3000);


let description = $('#description').textContent;
let commentText = '';

for(let elem of document.getElementsByTagName('yt-formatted-string')) {
  if(elem.text) commentText += elem.text.simpleText + '\n';
}

function showWindow(onScreenData, contentData) {
  let parentElem = document.getElementsByClassName('ytp-player-content ytp-iv-player-content')[0];
  let screenHTML = '';
  for(let person of onScreenData) {
    screenHTML += `
    <li class='ht-list-item'>
      <div>
        <a target="_blank" href='${person.url}'><img class='ht-img' src='${person.image_url}' /></a>
      </div>
      <div class='ht-img-desc'>
        <h4><b>${person.name}</b></h4>
        <p>${person.short_summary}</p>
      </div>
    </li>
    `
  }
  let contentHTML = '';
  for(let person of contentData) {
    contentHTML += `
    <li class='ht-list-item'>
      <div>
        <a target="_blank" href='${person.url}'><img class='ht-img' src='${person.image_url}' /></a>
      </div>
      <div class='ht-img-desc'>
        <h4><b>${person.name}</b></h4>
        <p>${person.short_summary}</p>
      </div>
    </li>
    `
  }
  let newHTML = `
  <div class="annotation annotation-type-custom iv-branding">
  <style>
  .ht-box {
  	background-color: #1F1F1FAA;
  	width: ${parentElem.clientWidth}px;
  	height: ${parentElem.clientHeight - 10}px;
  	color: #E3E3E3;
    font-family: 'Roboto', sans-serif;
    overflow: scroll !important;
  }
  .ht-box * {
    font-weight: normal !important;
  }
  .ht-header {
  	margin-left: 10px !important;
  	margin-top: 10px !important;
  }
  .ht-info {
  	margin-left: 10px !important;
  	margin-top: 10px !important;
    overflow-y: scroll;
    display: flex;
  }
  .ht-left {
    width: ${parentElem.clientWidth / 2 - 1}px;
    float: left;
  }
  .ht-right {
    width: ${parentElem.clientWidth / 2 - 1}px;
    float: left;
  }
  .ht-img {
    height: 100px;
    width: 120px;
  }
  .ht-list {
    list-style-type: none;
    padding-left: 0px !important;
  }
  .ht-list-item {
    display: flex;
  }
  .ht-img-desc {
    float: left;
    padding-left: 10px;
  }
  </style>
  <div class="branding-img-container ht-box">
     <h1 class="ht-header">Hacked Together</h1>
     <div class="ht-info">
        <div class="ht-left">
          <h2>On Screen</h2>
          <ul class='ht-list'>${screenHTML}</ul>
        </div>
        <div class="ht-right">
          <h2>Related</h2>
          <ul class='ht-list'>${contentHTML}</ul>
        </div>
     </div>
  </div>
  </div>
  `;
  parentElem.innerHTML = newHTML;
}


function closeWindow() {
  document.getElementsByClassName('ytp-player-content ytp-iv-player-content')[0].innerHTML = '';
}


function onPaused() {
    currentlyPaused = true;
    if(!delayPassed){
        return
    }

    console.log("SIR");


    $("#container > h1 > yt-formatted-string").text("paused");

    showWindow(fakeImageData, fakeTextData)

    // chrome.runtime.sendMessage("screenshot", function(response) {
    //     console.log(response);
    //
    // });

}


function onPlayed() {
    // alert("unpaused");
    $("#container > h1 > yt-formatted-string").text("unpaused");
    currentlyPaused = false;

    closeWindow();
}

console.log("hi");

setInterval(function () {
    // if pasued
    if($("#movie_player").hasClass("paused-mode") && !currentlyPaused){
        onPaused();

    // was just unpaused
    } else if (!$("#movie_player").hasClass("paused-mode") && currentlyPaused) {
        onPlayed();
    }

}, 100);
