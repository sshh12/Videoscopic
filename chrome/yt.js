let currentlyPaused = false;
let delayPassed = false;
let textJson = null;


let imageData = [{'name': 'Hillary Clinton', 'url': 'https://en.wikipedia.org/wiki/Hillary_Clinton', 'summary': "Hillary Diane Rodham Clinton (born October 26, 1947) is an American politician, diplomat, lawyer, writer, and public speaker. She served as the First Lady of the United States from 1993 to 2001, U.S. Senator from New York from 2001 to 2009, 67th United States Secretary of State from 2009 to 2013, and as the Democratic Party's nominee for President of the United States in the 2016 election, the first woman nominated by a major party.\nBorn in Chicago, Illinois, and raised in the Chicago suburb of Park Ridge, Clinton graduated from Wellesley College in 1969 and earned a Juris Doctor from Yale Law School in 1973. After serving as a congressional legal counsel, she moved to Arkansas and married future president Bill Clinton in 1975; the two had met at Yale. In 1977, she co-founded Arkansas Advocates for Children and Families. She was appointed the first female chair of the Legal Services Corporation in 1978, and became the first female partner at Little Rock's Rose Law Firm the following year. As First Lady of Arkansas, she led a task force whose recommendations helped reform Arkansas's public schools.\nAs First Lady of the United States, Clinton advocated for gender equality and healthcare reform. Her marital relationship came under public scrutiny during the Lewinsky scandal, which led her to issue a statement that reaffirmed her commitment to the marriage. In 2000, Clinton was elected as the first female Senator from New York. She was reelected to the Senate in 2006. Running for president in 2008, she won far more delegates than any previous female candidate, but lost the Democratic nomination to Barack Obama. During her tenure as U.S. Secretary of State in the Obama Administration from 2009 to 2013, Clinton responded to the Arab Spring by advocating military intervention in Libya. She helped to organize a diplomatic isolation and a regime of international sanctions against Iran in an effort to force curtailment of that country's nuclear program; this would eventually lead to the multinational Joint Comprehensive Plan of Action agreement in 2015. Upon leaving her Cabinet position after Obama's first term, she wrote her fifth book and undertook speaking engagements.\nClinton made a second presidential run in 2016. She received the most votes and primary delegates in the 2016 Democratic primaries and formally accepted her party's nomination for President of the United States on July 28, 2016, with vice presidential running mate Senator from Virginia Tim Kaine.  She lost the presidential election to Republican opponent Donald Trump in the Electoral College, despite winning a plurality of the popular vote. She received more than 65 million votes, the 3rd-highest count in a U.S. presidential election, behind Obama's victories in 2008 and 2012. Following her loss, she wrote her third memoir, What Happened, and launched Onward Together, a political action organization dedicated to fundraising for progressive political groups.", 'short_summary': 'Hillary Diane Rodham Clinton (born October 26, 1947) is an American politician, diplomat, lawyer, writer, and public speaker.', 'image_url': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Hillary_Clinton_April_2015_%281%29.jpg'}, {'name': 'Donald Trump', 'url': 'https://en.wikipedia.org/wiki/Donald_Trump', 'summary': "Donald John Trump (born June 14, 1946) is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality.\nTrump was born and raised in the New York City borough of Queens and received an economics degree from the Wharton School. He was appointed president of his family's real estate business in 1971, renamed it The Trump Organization, and expanded it from Queens and Brooklyn into Manhattan. The company built or renovated skyscrapers, hotels, casinos, and golf courses. Trump later started various side ventures, including licensing his name for real estate and consumer products. He managed the company until his 2017 inauguration. He co-authored several books, including The Art of the Deal. He owned the Miss Universe and Miss USA beauty pageants from 1996 to 2015, and he produced and hosted The Apprentice, a reality television show, from 2003 to 2015. Forbes estimates his net worth to be $3.1 billion.\nTrump entered the 2016 presidential race as a Republican and defeated sixteen opponents in the primaries. His campaign received extensive free media coverage. Commentators described his political positions as populist, protectionist, and nationalist. Trump has made many false or misleading statements during his campaign and presidency. The statements have been documented by fact-checkers, and the media have widely described the phenomenon as unprecedented in American politics. Trump was elected president in a surprise victory over Democratic nominee Hillary Clinton. He became the oldest and wealthiest person ever to assume the presidency, the first without prior military or government service, and the fifth to have won the election despite having lost the popular vote. His election and policies have sparked numerous protests. Many of his comments and actions have been perceived as racially charged or racist.\nDuring his presidency, Trump ordered a travel ban on citizens from several Muslim-majority countries, citing security concerns; after legal challenges, the Supreme Court upheld the policy's third revision. He enacted a tax cut package for individuals and businesses, which also rescinded the individual health insurance mandate and allowed oil drilling in the Arctic Refuge. Furthermore, Trump partially repealed the Dodd-Frank Act that had imposed stricter constraints on banks in the aftermath of the 2008 financial crisis. He has pursued his America First agenda in foreign policy, withdrawing the U.S. from the Trans-Pacific Partnership trade negotiations, the Paris Agreement on climate change, and the Iran nuclear deal. Moreover, he recognized Jerusalem as the capital of Israel, imposed import tariffs on various goods, triggering a trade war with China, and negotiated with North Korea seeking denuclearization. In addition, the U.S. President successfully nominated two justices to the Supreme Court: Neil Gorsuch and Brett Kavanaugh.", 'short_summary': 'Donald John Trump (born June 14, 1946) is the 45th and current president of the United States.', 'image_url': 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Abdel_Fattah_el-Sisi%2C_King_Salman_of_Saudi_Arabia%2C_Melania_Trump%2C_and_Donald_Trump%2C_May_2017.jpg'}];

setTimeout(function () {
    delayPassed = true;
},3000);


// let commentText = '';
//
// for(let elem of document.getElementsByTagName('yt-formatted-string')) {
//   if(elem.text) commentText += elem.text.simpleText + '\n';
// }

function showWindow() {
  let parentElem = document.getElementsByClassName('ytp-player-content ytp-iv-player-content')[0];
  let facesHTML = '';
  for(let person of imageData) {

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
    display: flex;
  }
  .ht-left {
    width: ${parentElem.clientWidth / 2 - 1}px;
    float: left;
  }
  .ht-right {
    float: left;
  }
  </style>
  <div class="branding-img-container ht-box">
     <h1 class="ht-header">Hacked Together</h1>
     <div class="ht-info">
        <div class="ht-left">
          <h2>Faces</h2>
        </div>
        <div class="ht-right">
          <h2>Content</h2>
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

    chrome.runtime.sendMessage({type: "screenshot"}, function(response) {

        // response is picture data

        // ADD DISPLAY HERE
        showWindow()
    });

}


function onPlayed() {
    // alert("unpaused");
    $("#container > h1 > yt-formatted-string").text("unpaused");
    currentlyPaused = false;

    closeWindow();
}

setInterval(function () {
    // if pasued
    if($("#movie_player").hasClass("paused-mode") && !currentlyPaused){
        onPaused();

    // was just unpaused
    } else if (!$("#movie_player").hasClass("paused-mode") && currentlyPaused) {
        onPlayed();
    }

}, 100);


function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}


function gatherData() {
    $("#more").click();

    let desc = $("#description").text() + "\n";

    $(".tfyt-tag").each(function () {
        desc += $(this).text() + "\n";
    })


    chrome.runtime.sendMessage({type: "nlp", text: desc}, function(response) {
        textJson = response;

    });

    let channelName = $("#owner-name > a").text();
    chrome.runtime.sendMessage({type: "bias", name: channelName}, function(response) {
        textJson = response;

    });

}

setTimeout(gatherData, 3500);