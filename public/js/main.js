document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e){
	var siteName = document.getElementById("siteName").value;
	console.log(siteName);
	e.preventDefault();
}