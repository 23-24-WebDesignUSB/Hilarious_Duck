// lil breathing room here too










function scrollDown(){
	scroll({"top": 415 + window.pageYOffset, "behavior": "smooth"}); // scrolls the page 415 pixels down 
}

function getResults(){
	// the value property of each object is calculated by implicit conversion to an int/float of each response that affects the category
	let values = [
		{
			/*this was when i was checking if the sort method was working bc pineapple is the first object by default and is also a common result*/
			"title": "test",
			"desc": "testdesc",
			"value": -99999
		},
		{
			"title": "Pineapple",
			"desc": "Bold and adventurous, your personality stands out as the daring one in your friend group. Like the pineapple, you have a bold and unique style, and give off an energetic vibe that lights up any occasion.",
			"value": (document.getElementById('q1r1').checked * 0.5 + document.getElementById('q1r2').checked * 0.5 + document.getElementById('q3r2').checked * 1.0 + document.getElementById('q4r2').checked * 1.0 + document.getElementById('q4r4').checked * 0.5 + document.getElementById('q5r2').checked * 0.5 + document.getElementById('q6r1').checked * 0.5 + document.getElementById('q6r2').checked * 1.0)
		},
		{
			"title": "Orange",
			"desc": "Cheerful and sociable, you exude positivity with your bright and refreshing nature. Like the orange, you are popular in social settings and thrive on company, spreading joy and lifting spirits wherever you go.",
			"value": (document.getElementById('q1r4').checked * 1.0 + document.getElementById('q2r1').checked * 1.0 + document.getElementById('q2r2').checked * 1.0 + document.getElementById('q3r4').checked * 1.0 + document.getElementById('q4r1').checked * 0.5 + document.getElementById('q5r1').checked * 1.0 + document.getElementById('q5r2').checked * 1.0 + document.getElementById('q6r2').checked * 1.0)
		},
		{
			"title": "Banana",
			"desc": "Friendly and dependable, you are the rock in your friend group. Trusted by all, you get along with almost everyone and are unwavering in your support. Like the banana, you are appreciated by those around you and bring a sense of security wherever you go.",
			"value": (document.getElementById('q3r3').checked * 1.0 + document.getElementById('q4r1').checked * 1.0 + document.getElementById('q5r1').checked * 0.5 + document.getElementById('q6r2').checked * 1.0)
		},
		{
			"title": "Apple",
			"desc": "Flexible and good-natured, you stand out in your friend group as the one who is up for anything. Like the apple, your adaptable and versatile nature allows you to thrive confidently in any circumstances, bringing a positive feeling to any environment.",
			"value": (document.getElementById('q1r3').checked * 1.0 + document.getElementById('q3r1').checked * 0.5 + document.getElementById('q6r1').checked * 1.0 + document.getElementById('q6r3').checked * 0.5)
		},
		{
			"title": "Watermelon",
			"desc": "Refreshing and easygoing, you bring a calm and laid-back vibe to any situation. Like the watermelon, you bring a carefree vibe wherever you go, lightening moods and bringing joy to everyone around you.",
			"value": (document.getElementById('q1r2').checked * 1.0 + document.getElementById('q2r3').checked * 1.0 + document.getElementById('q2r5').checked * 0.5 + document.getElementById('q3r5').checked * 1.0 + document.getElementById('q4r5').checked * 1.0 + document.getElementById('q5r5').checked * 0.5 - document.getElementById('q6r1').checked * 0.5 + document.getElementById('q6r2').checked * 1.0)
		},
		{
			"title": "Peach",
			"desc": "Sweet-natured and romantic, your kind and caring disposition makes you well-liked by near everyone. Like the peach, you are graceful and charming, and emanate a sense of effortlessness in everything you do.",
			"value": (document.getElementById('q1r2').checked * 1.0 + document.getElementById('q4r3').checked * 1.0 + document.getElementById('q5r4').checked * 1.0 + document.getElementById('q6r2').checked * 1.0)
		},
	];
	values.sort((a, b) => b["value"] - a["value"]) // sorts array in descending order of the value property
	return(values[0]); // returns first object in array (highest value)
}

function showResults(){
	// displays results below button
	document.getElementById('results_header').innerHTML = getResults()["title"]
	document.getElementById('results_body').innerHTML = getResults()["desc"]
}






















