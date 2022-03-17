(()=>{
    
    window.addEventListener("load", async () => {
        
        try {
            const quoteRequest  = await fetch("https://thatsthespir.it/api");
            const quoteReceived = await quoteRequest.json();
            console.log(quoteReceived);
            const author   = await quoteReceived.author;
            const quote    = await `"${quoteReceived.quote}"`;
            const photoSrc = await quoteReceived.photo;

            if (photoSrc == undefined || photoSrc == null || photoSrc == ""){
                document.querySelector(".crawl img").remove();
            }

            document.getElementById("author").innerHTML = author;
            document.getElementById("quote").innerHTML = quote;
            document.getElementById("photo").src = photoSrc;

        }
        catch (error){
            console.error(error); 
        }
    })

})();