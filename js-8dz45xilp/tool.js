
//---------------------------------INTERNAL CSS---------------------------------------

var intStyle = `

a:link {
	color: #878787;
	text-decoration: none;
}

a:visited {
	color: #878787;
	text-decoration: none;
}

a:hover {
	color: white;
	text-decoration: none;
}

.two:link {
	color:#474747;
	text-decoration:underline;
}

.two:visited {
	color:#474747;
	text-decoration: none;
}

.two:hover {
	color:#575757;
	text-decoration: underline;
}

.three:link {
	color:#474747;
	text-decoration: none;
}

.three:visited {
	color:#575757;
	text-decoration: none;
}

.three:hover {
	color:#575757;
}

#contents {
    display: block;
	margin-top: 2em;
	margin-bottom: 1em;
	margin-left: auto;
	margin-right: auto;
	min-height: 300px;
	min-height: auto;
	max-width: 760px;
	min-width: 120px;
	padding-left: 2em;
	padding-right: 2em;
}

#articleTitle {
    font-size: 44px;
    color: #474747;
    text-align: left;
}

.paragraphs {
    font-size: 16px;
    font-weight: 500;
    color: #474747;
    letter-spacing: .2px;
    line-height: 2em;   
    text-align: justify;
}

#underTitle {
    height: 40px;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
}

#dateAuthor {
    margin-top: 10px;
    font-size: 14px;
    display: block;
    color: #474747;
    letter-spacing: 0.2px;
    margin-bottom: 2em;
}

#dateAuthor h6 {
    padding-bottom: 2px;
}

.showImage {
    width: 100%;
    height: 428px; 
    min-width: auto;
    min-height: auto;
    object-fit: contain;
    cursor: default;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
}

.itemTitle {
    color: #474747;
}

.affiliateBox {
    width: 100%;
    margin-top: 2em;
    cursor: default;
    display: block;
    display: flex;
    min-height: 60px;
    transition: 0.2s;
    border: 2px solid #474747
}

.affiliateBox h4 {
    color: white;
}

.divCheck {
    width: 140px;
    height: auto;
    display: flex;
    background-color: #474747;
    border: 1px solid #474747;
}

.divCheck h4 {
    width: auto;
    height: 40px;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    color: white;
}

.divRating {
    width: 100%;
    height: 100%;
    display: block;
    cursor: default;
    margin-top: 1em;
    margin-bottom: 1em;
}

.divRating h1 {
    color: #474747;
    text-align: center;
}

.divRating:hover h1 {
    color: #474747;
    text-decoration: underline;
}

#divShare {
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    background-color: pink;
}

#shareButtons {
    margin-top: auto;
    margin-bottom: auto;
}

#aboutAuthor {
    display: flex;
    flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	min-height: auto;
	max-width: 760px;
    width: auto;
	min-width: 120px;
    padding-left: 1em;
    padding-right: 1em;
   
}

#divAuthor {
    width: auto;
    row-gap: 1em;
    column-gap: 1em;
    flex-wrap: wrap;
    cursor: pointer;
    max-width: 100%;
    min-width: 300px;
    display: inline-flex;
    border-radius: 8px;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 1em;
    padding-bottom: 1em;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.05); 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}


#divProfile {
    flex-grow: 1;
    height: auto;
    width: 100px;
    flex-basis: 100px;
    justify-content: center;
}

#divProfile img {
    border-radius: 99px;
}

#descHeader {
    height: auto;
    display: flex;
    width: 100%;
    color: #474747;
}

#descHeader h5 {
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 500;
}

#descAbout {
    font-weight: 500;
}

#descAbout h4 {
    font-size: 14px;
    font-weight: 500;
    color: #575757;
    letter-spacing: .2px;
    line-height: 1.3em;   
    text-align: justify;
}

#descAbout h5 {
    color: #474747;
    font-weight: 900;
    text-decoration: underline;
}

#readMore {
    display: block;
	margin-left: auto;
	margin-right: auto;
	min-height: 300px;
	min-height: auto;
	max-width: 760px;
	min-width: 120px;
	padding-left: 2em;
	padding-right: 2em;
    margin-bottom: 6em;
}

#readNext {
    width: 100%;
    margin-top: 1em;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    padding-top: 1em;
    flex-direction: row;
    justify-content: space-around;
}

.nextArticle {
    height: auto;
    padding: 4px;
    flex-grow: 1;
    flex-wrap: wrap;
    flex-basis: 160px;
    border-radius: 4px;
    margin-bottom: 1em;
    cursor: pointer;
}

.nextArticle:hover h3 {
    text-decoration: underline;
}

.nextThumbnail {
    display: flex;
    flex-grow: 1;
    height: auto;
    flex-basis: 128px;
    flex-direction: row;
}

.nextThumbnail img {
    width: 100%;
    height: auto;
    min-width: 128px;
    min-height: 96px;
    object-fit: contain;
}

.nextArticle h3 {
    color: #474747;
    text-align: center;
    cursor: default;
    word-wrap: break-word;
}
`;





//force URL change--------------------------------------

var author = sessionStorage.getItem("author");
var authProfile = sessionStorage.getItem("authProfile");
var authName = sessionStorage.getItem("authName");
var authLink = "https://backend.figureddit.com/auth/" + authName;
window.history.replaceState('new', 'title', authLink);



//-------------------------CHECK ENTRY IF VALID-----------------------

function checkEntry() {

	var preview = document.getElementById("preview");
    var previewChild = preview.children.length;

    if(previewChild > 2) {

        document.getElementById("minus").firstElementChild.style.color = "#474747";

	}

    else {

        document.getElementById("minus").firstElementChild.style.color = "lightgrey";
    }
	
}

checkEntry();



//-------------------CHECK HOW MANY PARAGRAPH IN INTRO/CONCLUSION--------------------------


function checkParagraph(value, id) {

    var parag = value.split(/\n/g);

    if ((parag.length > 1) && (value != "")) {
		document.getElementById(id).style.border = "1px solid salmon";
        document.getElementById("lbl"+ id).innerHTML = "Only 1 paragraph is allowed. Please check line spacing."
        document.getElementById("lbl"+ id).style.color = "salmon";
    }
    else if ((parag.length == 1) && (value != "")) {
		document.getElementById(id).style.border = "1px solid lightgrey";
        document.getElementById("lbl" + id).innerHTML = "&#10004; Good";
        document.getElementById("lbl"+ id).style.color = "mediumseagreen";
    }

    else if ((parag.length == 0) || (value == "")) {
        document.getElementById("lbl"+ id).innerHTML = "This field cannot be empty. Please add 1 paragraph."
		document.getElementById(id).style.border = "1px solid salmon";
    }

}


//-------------------------CHECK HOW MANY PARAGRAPH IN CONTENTS---------------------

function checkDetails(value, id) {

    var parag = value.split("\n\n");

	if ((parag.length > 0) && (value != "")) {
		document.getElementById("lbl"+ id).innerHTML = parag.length + " paragraph(s) detected";
    	document.getElementById("lbl"+ id).style.color = "mediumseagreen";
		document.getElementById(id).style.border = "1px solid lightgrey";
	}

	else if ((parag.length == 0) || (value == "")) {
		document.getElementById("lbl"+ id).innerHTML = "0 paragraph";
    	document.getElementById("lbl"+ id).style.color = "lightgray";
		document.getElementById(id).style.border = "1px solid salmon";
	}
    
}


//----------------------REMOVE PREVIEW ID---------------------------

function removeEntry() {

	var preview = document.getElementById("preview");
    var previewChild = (preview.children.length);

    if(previewChild > 2) {
		
        document.getElementById("entry" + e).remove();
		e-=1;

		checkEntry();

		if(document.getElementById("entry"+e) != null) {
			document.getElementById("entry"+e).scrollIntoView();
		}
    }
}


//-------------------------CHECK MINIMUM ENTRIES BEFORE SENDING------------------

var boolPreview = false;
var boolSubmit = false;

function checkChildren() {

    var preview = document.getElementById("preview");
    var previewChild = preview.children.length;
	
    if(previewChild < 5) {

		boolPreview = false;
		boolSubmit = false;
        document.getElementById("submit").firstElementChild.style.color = "lightgrey";

    }

    else {

		boolPreview = true;
		boolSubmit = true;
        document.getElementById("submit").firstElementChild.style.color = "#474747";

    }

	return boolPreview, boolSubmit;
}

checkChildren();


//--------------------------------ADD NEW ENTRY--------------------------------

var e = 0;
var entry = "";

function add(e) {
	entry = `<div id="entry${e}" class="divChild">
			<h2 class= "divChildHeader">${e}.</h2>
			<input type="url" id="imgLink${e}" class="text" placeholder="Image link" oninput="validateValue(this.id)">
			<input type="text" id="entryTitle${e}" class="text" placeholder="List Title" oninput="validateValue(this.id)">
			<textarea id="details${e}" class="textarea" placeholder="Contents" cols="44" rows="8" oninput="checkDetails(this.value, this.id)"></textarea>
			<div style="display: flex; justify-content: right; width:600px; margin-top: 0.5em; margin-bottom: 0.5em;"><h5 id="lbldetails${e}" style="color: lightgray; font-weight: 500;">0 paragraph</h5></div>
			<div style="display:flex; justify-content: center;">
			<input type="text" id="remark${e}" class="shortText" placeholder="Remark" oninput="validateValue(this.id)">
			<input type="url" id="itemLink${e}" class="textLink" placeholder="CTA link" oninput="validateValue(this.id)"></div>
			</div>`;
	return entry;
}


function addEntry() {

	e += 1;
	add(e);
	var conclusion = document.getElementById("divConclusion");
	conclusion.insertAdjacentHTML("beforebegin", entry);
	document.getElementById("entry"+e).scrollIntoView();

	checkEntry();
	checkChildren();

}
















var append, keywords, entryHeader, entryRemarks, today, date, category, mainTitle, intro, conclusion, header,
part1, end, lastPart, plagiarism, previewed;

function switchPreview() {

	previewed = true;
	append = "";
	entryHeader = "";
	entryRemarks = "";
	today = new Date();
	date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
	category = document.getElementById("selCategory").value;
	mainTitle = document.getElementById("mainTitle").value;
	intro = document.getElementById("intro").value;
	conclusion = document.getElementById("conclusion").value;
	keywords = document.getElementById("keywords").value;
	plagiarism = document.getElementById("plagiarism").value;
	urlTitle = ("https://figureddit.com/articles/" + category + "/" + (mainTitle.replace(" ", "-"))).toLowerCase();


	document.getElementById("preview").style.display = "none";
	document.getElementById("toolBar").style.display = "none";

	

	header = `
			<!DOCTYPE html>
			<html id="mainHTML" style="scroll-behavior: smooth;">
			<head>
				<!-----------------[EDIT] TITLE BASED ON ARTICLE TITLE------------------>
				<title>${mainTitle} - Figureddit</title>
				<meta charset="UTF-8">
				<meta name = "viewport" content="width=device-width , initial-scale=1.0">
				<meta name = "keywords" content="figureddit, ${keywords}">
				<meta name = "author" content = "${author} - Figureddit">
				<meta name = "description" content = "${intro}">

				<meta property="og:site_name" content="Figureddit" />
				<meta property=“og:title” content=“${mainTitle}" />
				<meta property="og:description" content="${intro}" />
				<meta property="og:url" content="${urlTitle}" />
				<meta property="og:type" content="article" />
				<meta property="article:publisher" content="https://figureddit.com" />
				<meta property="article:section" content="tips and reviews" />
				<meta property="article:tag" content="tips and reviews" />
				<meta property="og:image" content="${imgLink}" />
				<meta property="og:image:secure_url" content="${imgLink}" />
				<meta property="og:image:width" content="760" />
				<meta property="og:image:height" content="428" />
				<meta property="twitter:card" content="summary" />
				<meta name="twitter:title" content="${mainTitle}">
				<meta property="twitter:image" content="${imgLink}" />
				<meta property="twitter:site" content="@figureddit" />

				<link rel="canonical" href="https://figureddit.com">
				<link rel="canonical" href="http://figureddit.com">
				<link rel="canonical" href="https://www.figureddit.com">
				<link rel="canonical" href="http://www.figureddit.com">
				<link rel="canonical" href="https://figuredit.com">
				<link rel="canonical" href="http://figuredit.com">
				<link rel="canonical" href="https://www.figuredit.com">
				<link rel="canonical" href="http://www.figuredit.com">
				
				<link rel="preload" href="https://figureddit.com/css-c9t67il/style.css" as="style">
				<link rel="preload" href="https://figureddit.com/css-c9t67il/articles.css" as="style">
				<link rel="stylesheet", href="https://figureddit.com/css-c9t67il/articles.css"> 
				<link rel="stylesheet", href="https://figureddit.com/css-c9t67il/style.css"> 
				<link rel="icon" type="image/x-icon" href="https://figureddit.com/icons-k7hs75z/favicon.svg">
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap" rel="stylesheet">

				<link rel="preload" href="https://figureddit.com/js-nqadc8p/articles.js" as="script">
				<link rel="preload" href="https://figureddit.com/js-nqadc8p/functions.js" as="script">

			</head> 

			<body style="min-width: 360px;">

				<div id="menu">
					<div style="min-width: auto; width: 760px; max-height: 760px; height: auto; justify-content: space-between; display: flex;">
						<button type="button" id="Shows" class="btnMenu" data-clicked="false" onmouseover="hoverCategory(this.id);" onmouseout="outCategory(this.id);" onclick="filterCategory(this.id);"><h6>SHOWS</h6></button>
						<button type="button" id="Movies" class="btnMenu" data-clicked="false" onmouseover="hoverCategory(this.id);" onmouseout="outCategory(this.id);" onclick="filterCategory(this.id);"><h6>MOVIES</h6></button>
						<button type="button" id="Games" class="btnMenu" data-clicked="false" onmouseover="hoverCategory(this.id);" onmouseout="outCategory(this.id);" onclick="filterCategory(this.id);"><h6>GAMES</h6></button>
						<button type="button" id="Tech" class="btnMenu" data-clicked="false" onmouseover="hoverCategory(this.id);" onmouseout="outCategory(this.id);" onclick="filterCategory(this.id);"><h6>TECH</h6></button>
						<button type="button" id="Health" class="btnMenu" data-clicked="false" onmouseover="hoverCategory(this.id);" onmouseout="outCategory(this.id);" onclick="filterCategory(this.id);"><h6>HEALTH</h6></button>
					</div>
				</div>

				<div id="header">
					<div class="logo" id="Home" onclick="filterCategory(this.id);"><img src="https://figureddit.com/icons-k7hs75z/logo.svg"><h1>figureddit.</h1></div>
					<div id="divSearch">
						<div style="height: 63px; width:auto;">
							<input type="text" id="inputSearch" placeholder="Search.." oninput="useSearch(this.value)" onkeypress="enterSearch(event, this.value)" onfocus="useSearch(this.value)">
							<img src = "https://figureddit.com/icons-k7hs75z/search.svg" id="btnSearch">
						</div>
						<div id="searchList"></div>
					</div>
				</div>

				<div id="contents">`;


	part1 = `
			<!-----------------------TITLE--------------------->
			<center><h1 id="articleTitle">${mainTitle}</h1></center><br><br>
			<!--INTRO-->
			<p class="paragraphs">${intro}</p><br><br>
			<!---------------[EDIT]UNDER TITLE------------------>
			<div id="underTitle">
				<div id="dateAuthor">
					<h6 id="publisher">BY <a class="two" href="${authProfile}" id="authorName">${author.toUpperCase()}</a></h6>
					<h6 id="publishDate">PUBLISHED TODAY</h6>
				</div>
				
                <!-- Go to www.addthis.com/dashboard to customize your tools -->
                <div class="addthis_inline_share_toolbox"></div>

			</div>
			<!---------------------[EDIT]ENTRY ARTICLE------------------------>
			
			`;

	end = `<p class="paragraphs">${conclusion}</p><br><br>`;

	lastPart = 
				`
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
				</div>
				<div id="footer">
					<div id="upperFooter">
						<div class="footerNewsletter">
							<form action="https://formsubmit.io/send/6015127b-0795-4aea-bd23-92b2fe3ce1ad" method="POST" autocomplete="off">
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
								<li><a class="one" name="Shows" onclick="filterCategory(this.name)" href="#top">Shows</a></li>
								<li><a class="one" name="Movies" onclick="filterCategory(this.name)" href="#top">Movies</a></li>
								<li><a class="one" name="Games" onclick="filterCategory(this.name)" href="#top">Games</a></li>
								<li><a class="one" name="Tech" onclick="filterCategory(this.name)" href="#top">Tech</a></li>
								<li><a class="one" name="Health" onclick="filterCategory(this.name)" href="#top">Health</a></li>
								<li><a class="one" name="More" onclick="filterCategory(this.name)" href="#top">More</a></li>
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
			
			
			<script type="text/javascript" defer src="https://figureddit.com/js-nqadc8p/functions.js"></script>
			<script type="text/javascript" defer src="https://figureddit.com/js-nqadc8p/articles.js"></script>

			<!-- Go to www.addthis.com/dashboard to customize your tools -->
			<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-634941e1013d2b83"></script>

		</body>
		</html>
		`;


	
	for(var i=1; i <= e; i++) {

		var imgLink = document.getElementById("imgLink" + i).value;
		var entryTitle = document.getElementById("entryTitle" + i).value;
		var itemLink = document.getElementById("itemLink" + i).value;
		var remark = document.getElementById("remark" + i).value;
		var entryParag = "";

		//check paragraph count

		var getParag = document.getElementById("details" + i).value;
		var parag = getParag.split("\n\n");

		entryHeader =`
			<!--SHOW IMAGE (DON'T FORGET ALT+TEXT)-->
			<img class="showImage" src="${imgLink}" alt="${entryTitle}-${mainTitle}-${keywords}-Figureddit">
			<!--[EDIT]ITEM-->
			<h1 class="itemTitle">${i}. <a class="two" href="${itemLink}">${entryTitle}</a></h1><br>
			<!--[EDIT]SUPPORTING DETAILS-->
			`;

			for(var z=0; z < parag.length; z++) {
				entryParag += `<p class = "paragraphs">${parag[z]}</p><br>`;			
			}
		
		entryRemarks = 

			`<!--AFFILIATE LINK-->
			<a class="three" href="${itemLink}"><div class="affiliateBox">
				<div class="divCheck">
					<div style="margin-top: auto; margin-bottom: auto; margin-left: auto; margin-right: auto; width: auto; height: auto;"><h4>${remark.toUpperCase().replace(" ", "\n")}</h4></div>
				</div>
				<div class="divRating">
					<h1>Get ${entryTitle}</h1>
				</div>
			</div></a><br><br>
			`;
		
		append += entryHeader + entryParag + entryRemarks;
	}

	document.getElementById("intStyle").innerHTML = intStyle;
	document.getElementById("contents").innerHTML = part1 + append + end;
	document.getElementById("contents").style.display = "block";

	return append, keywords, entryHeader, entryRemarks, today, date, category, mainTitle, intro, conclusion, header,
	part1, end, lastPart, plagiarism;

}


function switchDraft() {

	if(document.getElementById("contents") != null) {
		document.getElementById("contents").style.display = "none";
	}
	document.getElementById("preview").style.display = "block";
	document.getElementById("toolBar").style.display = "block";

}


function validateValue(id) {

	document.getElementById(id).style.border = "1px solid lightgrey";
}



function previewDraft(id, name) {

	var button = document.getElementById(id);

	if(name == "preview") {

		checkChildren();

		if(boolPreview == true) {

			var inputChecker = [];
			var initBool = true;

			inputChecker[1] = document.getElementsByTagName("input");
			inputChecker[2] = document.getElementsByTagName("textarea");
			inputChecker[3] = document.getElementsByTagName("select");

			for(var i=1; i < 3; i++) {

				for(var z=0; z < inputChecker[i].length; z++) {

					initBool &&= (inputChecker[i][z].value!="");
					initBool &&= (inputChecker[3][0].value!="Category");

					if(inputChecker[i][z].value =="")  {
						inputChecker[i][z].style.border = "1px solid salmon";
					}
					else if(inputChecker[3][0].value =="Category")  {
						inputChecker[3][0].style.border = "1px solid salmon";
					}
					else {
						inputChecker[i][z].style.border = "1px solid lightgrey";
					}
					
				}
			}

			

			if(initBool == true) {
			
				previewed = true;
				button.setAttribute("name", "edit");
				button.firstElementChild.innerHTML = "Edit";
				button.firstElementChild.style.color = "#474747";
				button.style.backgroundColor = "white";	

				switchPreview();

			}
			else {
				alert("Please complete all required fields");
			}
		}

		else {
			alert("Please add at least 3 listings");
		}		
	}

	else {
		
		button.setAttribute("name", "preview");
		button.firstElementChild.innerHTML = "Preview";
		button.firstElementChild.style.color = "white";
		button.style.backgroundColor = "#474747";
		button.style.border = "1px solid white";

		switchDraft();
	}

}



function submitContent() {
	
	//check if at least 3 entries already
	checkChildren();

	if (boolSubmit == true) {

		if (previewed == true) {

			var inputChecker = [];
			var initBool = true;

			inputChecker[1] = document.getElementsByTagName("input");
			inputChecker[2] = document.getElementsByTagName("textarea");
			inputChecker[3] = document.getElementsByTagName("select");

			for(var i=1; i < 3; i++) {

				for(var z=0; z < inputChecker[i].length; z++) {

					initBool &&= (inputChecker[i][z].value!="");
					initBool &&= (inputChecker[3][0].value!="Category");

					console.log(initBool);

					if(inputChecker[i][z].value =="")  {
						inputChecker[i][z].style.border = "1px solid salmon";
					}
					else if(inputChecker[3][0].value =="Category")  {
						inputChecker[3][0].style.border = "1px solid salmon";
					}
					else {
						inputChecker[i][z].style.border = "1px solid lightgrey";
					}
					
				}
			}

			if(initBool == true) {
			
				if(confirm("Are you sure you want to submit the content?")) {

					var submitMsg = "From: " + "\n" + author + "\nDate Submitted: " + date + "\nCategory: " + category + 
					"\nPlagiarism Check: " + plagiarism + "\nCode: \n" + header + 
					"\n" + part1 + "\n" + append + "\n" + end + "\n" + lastPart;

					console.log(submitMsg);
					
					var appendForm = 
								`<form id="contactform" style="display: none;"action="https://formsubmit.io/send/6015127b-0795-4aea-bd23-92b2fe3ce1ad" method="POST">
									<input name="name" type="text" id="frmName">
									<input name="email" type="email" id="frmEmail">
									<textarea name="comment" id="frmComment" rows="3"></textarea>
									<input name="_formsubmit_id" type="text" style="display:none">
									<input value="Submit" type="submit" id="frmSubmit">
								</form>`;

					document.getElementById("preview").innerHTML = appendForm;
					document.getElementById("frmName").value = "papa dc";
					document.getElementById("frmEmail").value = "figureddit@gmail.com";
					document.getElementById("frmComment").value = submitMsg;
					document.getElementById("frmSubmit").click();
					document.forms['contactForm'].submit();
					
					alert('Submitted successfully');
					window.location.reload(); 

					}
				}

			else {

				alert("Please complete all required fields");	

			}

		}

		else {
			alert("Please preview your work before submitting");
		}
	}

	else {
		
		alert("Please add at least 3 listings before preview");
	}
}



function logout() {

	sessionStorage.setItem("authName", "");
    sessionStorage.setItem("author", "");
    sessionStorage.setItem("authProfile", "");
	window.location("https://backend.figureddit.com/auth");

}