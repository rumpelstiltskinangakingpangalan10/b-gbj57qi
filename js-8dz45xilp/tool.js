
//force URL change--------------------------------------

//authName = sessionStorage.getItem("authName");
//authLink = "localhost/bfigureddit/auth/" + authName;
//window.history.replaceState('new', 'title', authLink);

//-----------------------APPEND-----------------------------

var header =

`
<!DOCTYPE html>
<html id="mainHTML" style="scroll-behavior: smooth;">
<head>
	<!-----------------[EDIT] TITLE BASED ON ARTICLE TITLE------------------>
    <title>The 4 Best Robot Vacuums of 2022 | Figureddit</title>
    <meta charset="UTF-8">
    <meta name = "viewport" content="width=device-width , initial-scale=1.0">
    <meta name = "keywords" content="Figureddit, Movies, TV-Shows, Games, Tech, Health, News, and More">
    <meta name = "author" content = "Figureddit">
	<meta name = "description" content = "Whether you're looking for best movies or TV shows to watch or latest news about gaming and technology, even about wellness and staying healthy - you can figureddit! A simple and neat site for light reading for a smarter you.">
	
	<link rel="preload" href="https://figureddit.com/css-c9t67il/style.css" as="style">
	<link rel="preload" href="https://figureddit.com/css-c9t67il/articles.css" as="style">
	<link rel="stylesheet", href="https://figureddit.com/css-c9t67il/articles.css"> 
	<link rel="stylesheet", href="https://figureddit.com/css-c9t67il/style.css"> 
	<link rel="icon" type="image/x-icon" href="https://figureddit.com/icons-k7hs75z/favicon.svg">
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap" rel="stylesheet">

	<link rel="preload" href="https://figureddit.com/js-nqadc8p/articles.js" as="script">
	<link rel="preload" href="https://figureddit.com/js-nqadc8p/functions.js" as="script">

</head> `;


var body = `
		<div id="contents">
			<!-----------------------TITLE--------------------->
			<center><h1 id="articleTitle">The 4 Best Robot Vacuums of 2022</h1></center><br><br>
			<!--INTRO-->
			<p class="paragraphs">Robot vacuum cleaners are one of the most popular home appliances. As technology advances, these devices are becoming more and more intelligent, making them more efficient and easier to use. In this article, we will take a look at the four best robot vacuum cleaners of 2022.
			</p><br><br>
			<!---------------[EDIT]UNDER TITLE------------------>
			<div id="underTitle">
				<div id="dateAuthor">
					<h6 id="publisher">BY <a class="two" href="#" id="authorName">DC Dela Cruz</a></h6>
					<h6 id="publishDate">

					</h6>
				</div>
				
                <!-- Go to www.addthis.com/dashboard to customize your tools -->
                <div class="addthis_inline_share_toolbox"></div>

			</div>
			<!---------------------[EDIT]---ENTRY ARTICLE------------------------>
			<!--SHOW IMAGE (DON'T FORGET ALT+TEXT)-->
			<img class="showImage" src="sample.jpg" alt="">
			<!--[EDIT]ITEM-->
			<h1 class="itemTitle">1. <a class="two" href="google.com">iRobot Roomba i3 EVO</a></h1><br>
			<!--[EDIT]SUPPORTING DETAILS-->
			<p class = "paragraphs">
				Like most of today's great robots, the Roomba i3 EVO works well in most homes, large and small, as it moves back and forth in orderly rows, keeping track of where it has been. , so it won't miss any big transactions. area. But unlike most of its competitors, the Roomba i3 EVO is truly a solid and repairable device, and while durability can never be guaranteed, you can expect it. Expect to own it and use it regularly for years to come. It also cleans carpets better than most robots, and hair strands don't get tangled up in its brush quickly. Together with the app and Wi-Fi connection, you can turn the robot on and off and set an automatic cleaning schedule if needed. That's everything you need to know - it's that simple. The downside is that it doesn't work as fast as some competing models.
			</p><br>
			<p class="paragraphs">
				iRobot released a software update in March 2022 that enables you to designate specific rooms for your bot to clean and customize its cleaning preferences using an app. This new function has not yet been evaluated with the i3 EVO. But you should have more control over it than you would with other smart mapping models, such as the Roborock S4 Max (more on that one shortly).
			</p><br>
			<p class="paragraphs">
				The Roomba i3+ EVO package, on the other hand, includes the i3 EVO robot in addition to a charging dock that automatically suctions debris out of the robot and stores it in a disposable bag that needs to be changed only once per month. It actually functions, adding to the convenience of owning a robot. Owners appear to value it greatly.
			</p><br>
			<!--AFFILIATE LINK-->
			<a class="three" href="google.com"><div class="affiliateBox">
				<div class="divCheck">
					<h4>BEST OVERALL</h4>
				</div>
				<div class="divRating">
					<h1>Get iRobot Roomba i3 EVO</h1>
				</div>
			</div></a><br><br>
			<p class="paragraphs">
				The Roomba i3+ EVO package, on the other hand, includes the i3 EVO robot in addition to a charging dock that automatically suctions debris out of the robot and stores it in a disposable bag that needs to be changed only once per month. It actually functions, adding to the convenience of owning a robot. Owners appear to value it greatly.
			</p><br><br>
		</div>
		<!----------------------------END OF ARTICLE---------------------->
					
		<!------------------------------ABOUT THE AUTHOR------------------->
	
		<div id="aboutAuthor" onclick="goToAuthor()">
		
			<div id="divAuthor">
				<center><div id="divProfile"></div></center>
				<div style="display:block; width: 84%; margin-left: auto; margin-right: auto;">
					<div id="descHeader">
						
					</div><br>
					<div id="descAbout">
						
					</div>
				</div>
			</div>
		</div><br><br><br>
		<!------------------------------READ MORE------------------------->
		<div id="readMore">
			<h3 style="color:#474747; margin-bottom: 6px; font-weight: 700;">Read Next</h3>
			<div style="width:100%; height: 2px; background-color: #474747; margin-top: auto; margin-bottom: auto;"></div>
			<div id="readNext">
			<!--random suggested article here-->
			</div>
		</div> `;

var footer = `
		<div id="footer">
			<div id="upperFooter">
				<div class="footerNewsletter">
					<form method="POST" autocomplete="off">
						<label for="txtNewsLetter" id="lblNewsLetter"><h1>Get More Updates <br> From Our Newsletter</h1></label><br>
						<input name="name" type="text" value="Newsletter" style="display: none;">
						<input name="txtNewsLetter" type="email" placeholder="Email" id="txtNewsLetter" size="12" required>
						<textarea name="comment" value="I subscribe to your newsletter." rows="20" cols="30" style="display: none;"></textarea>
						<button type="submit" id="btnNewsLetter">Subscribe</button>
					</form>
				</div>
				<div class="footerBlock">
					<ul>
						<li class="listTitle"><h3>Read More</h3></li><br>
						<li><a class="one" name="Shows" href="#top">Shows</a></li>
						<li><a class="one" name="Movies" href="#top">Movies</a></li>
						<li><a class="one" name="Games" href="#top">Games</a></li>
						<li><a class="one" name="Tech" href="#top">Tech</a></li>
						<li><a class="one" name="Health" href="#top">Health</a></li>
						<li><a class="one" name="More" href="#top">More</a></li>
					</ul>
				</div>
				<div class="footerBlock">
					<ul>
						<li class="listTitle"><h3>Support</h3></li><br>
						<li><a class="one" href="#">Privacy Policy</a></li>
						<li><a class="one" href="#">Terms Of Use</a></li>
						<li><a class="one" href="https://figureddit.com/contact-us">Contact Us</a></li>
					</ul>
				</div>

				<div class="footerBlock">
					<ul>
						<li class="listTitle"><h3>Links</h3></li><br>
						<li><a class="one" href="#">Shopee</a></li>
						<li><a class="one" href="#">Youtube</a></li>
						<li><a class="one" href="#">Facebook</a></li>
						<li><a class="one" href="#">Portfolio</a></li>
					</ul>
				</div>
			</div>
			<div class="footerBar"><h5>&#169; Figureddit 2022. All Rights Reserved.</h5></div>
		</div>
	
	<script type="text/javascript" defer src="https://figureddit.com/js-nqadc8p/articles.js"></script>
	<script type="text/javascript" defer src="https://figureddit.com/js-nqadc8p/functions.js"></script>

	<!-- Go to www.addthis.com/dashboard to customize your tools -->
	<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-634941e1013d2b83"></script>
`;


var e = 0;
var entry = "";

function add(e) {
	entry = `<div id="entry${e}" class="divChild">
			<h2 class= "divChildHeader">${e}</h2>
			<input type="text" id="imgLink${e}" class="text" placeholder="Image link">
			<input type="text" id="entryTitle${e}" class="text" placeholder="Entry Title">
			<textarea id="Contents${e}" class="textarea" placeholder="Contents" cols="44" rows="8" oninput="checkContents(this.value, this.id)"></textarea>
			<div style="display: flex; justify-content: right; width:600px; margin-top: 0.5em; margin-bottom: 0.5em;"><h5 id="lblContents${e}" style="color: lightgray; font-weight: 500;">0 paragraph</h5></div>
			<div style="display:flex; justify-content: center;">
			<input type="text" id="remark${e}" class="shortText" placeholder="Remark">
			<input type="text" id="itemLink${e}" class="textLink" placeholder="CTA link"></div>
			</div>`;
	return entry;
}

















//--------------------FETCH AUTHOR'S REAL NAME--------------

    var authName = sessionStorage.getItem("authName");
    var auth = "";

    fetch("https://figureddit.com/store-z7g2sh9/author.json") //fetch all and post all author's details
    .then(function(response){
    return response.json();
    })
    .then(function(data){
                
        var max = Object.keys(data).length;
                
        for (var i = max; i >= 1; i-- ) {

            var prevID = data[i];

            if(prevID[1] == authName) {
                auth = prevID[4];
                return auth;
            }

        }              

    }
    );

//-----------------------FETCH DATE AND FORMAT---------------

//------------------DATE FORMAT------------------------------
var postDate = "";
function formatDate(yyyy, mm, dd) {
    var today = new Date();
    var published = null;

    if (today.getFullYear() > yyyy) {

        published = today.getFullYear() - yyyy;

        if (published > 1) {

            postDate = "PUBLISHED " + published + " YEARS AGO";

        }
        else {

            postDate = "PUBLISHED " + published + " YEAR AGO";

        }
        
    }
    else if (today.getFullYear() == yyyy) {

        if ((today.getMonth() + 1) > mm) {

            published = (today.getMonth() + 1) - mm;

            if (published > 1) {

                postDate = "PUBLISHED " + published + " MONTHS AGO"

            }
            else {

                postDate = "PUBLISHED " + published + " MONTH AGO";

            } 
        }

        else if ((today.getMonth() + 1) == mm) {

            if (today.getDate() > dd) {

                published = today.getDate() - dd;
    
                if (published > 1) {

                    postDate = "PUBLISHED " + published + " DAYS AGO";

                }
                else {

                    postDate = "PUBLISHED " + published + " DAY AGO";

                } 
            }

            else if (today.getDate() == dd) {

                postDate = "PUBLISHED " + published + " TODAY";

            }
            else {
                postDate = "Error: Failed getting time & date";
            }
        }
        else {
            postDate = "Error: Failed getting time & date";
        }
    }

    else {
        postDate = "Error: Failed getting time & date";
    }
    return postDate;
}

//----------------------------------CHECK PREVIEW IF VALID-----------------------

function checkPreview() {

	var preview = document.getElementById("preview");
    var previewChild = (preview.children.length);

    if(previewChild > 2) {

        document.getElementById("minus").firstChild.style.color = "#474747";

	}

    else {

        document.getElementById("minus").firstChild.style.color = "lightgrey";
   
    }
	
}

checkPreview();

//----------------------REMOVE PREVIEW ID-------------------

function removeEntry() {

	var preview = document.getElementById("preview");
    var previewChild = (preview.children.length);

    if(previewChild > 2) {
		
        document.getElementById("entry" + e).remove();
		e-=1;

		if(document.getElementById("entry"+e) != null) {
			document.getElementById("entry"+e).scrollIntoView();
		}
		checkPreview();
    }

}

removeEntry();


//-------------------------CHECK MINIMUM ENTRIES BEFORE SENDING------------------

function checkSubmit() {

    var preview = document.getElementById("preview");
    var previewChild = (preview.children.length - 2);
	
    if(previewChild < 2) {
		
        document.getElementById("submit").firstChild.style.color = "lightgrey";
    }

    else{
		
        document.getElementById("submit").firstChild.style.color = "#474747";
    }

}

checkSubmit();


//--------------------------------ADD NEW ENTRY--------------------------------


function addEntry() {

	e += 1;
	add(e);
	var preview = document.getElementById("preview");
	var conclusion = document.getElementById("divConclusion");
	conclusion.insertAdjacentHTML("beforebegin", entry);
	document.getElementById("entry"+e).scrollIntoView();

	checkPreview();
	checkSubmit();

}


//-------------------------CHECK HOW MANY PARAGRAPH IN INTRO---------------------

function checkParagraph(value, id) {

    var parag = value.split("\n\n");

    if ((parag.length > 1) && (value != "")) {
        document.getElementById("lbl"+ id).innerHTML = "Only 1 paragraph is allowed. Please check line spacing."
        document.getElementById("lbl"+ id).style.color = "red";
    }
    else if ((parag.length == 1) && (value != "")) {
        document.getElementById("lbl"+ id).innerHTML = "&#10004; Good";
        document.getElementById("lbl"+ id).style.color = "green";
    }

    else if ((parag.length == 0) || (value == "")) {
        document.getElementById("lbl"+ id).innerHTML = "This field cannot be empty. Please add 1 paragraph."
    }
    
}



//-------------------------CHECK HOW MANY PARAGRAPH IN CONTENTS---------------------

function checkContents(value, id) {

    var parag = value.split("\n\n");

	if ((parag.length > 0) && (value != "")) {
		document.getElementById("lblContents1").innerHTML = parag.length + " paragraph(s) detected";
    	document.getElementById("lblContents1").style.color = "green";
	}

	else if ((parag.length == 0) || (value == "")) {
		document.getElementById("lblContents1").innerHTML = "0 paragraph";
    	document.getElementById("lbl"+ id).style.color = "lightgray";
	}
    

}