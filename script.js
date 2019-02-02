function searchF() {
    const c = document.getElementById("search");
    c.style.display = "block";
}

blured = () => {
    document.getElementById("search").focus();
    console.log('sdsda');
    document.getElementById("search").style.display = "none";
}

function openF() {
    const c = document.getElementById("navig");
    console.log(c.style.marginLeft);
	if (c.style.marginLeft != "0px" || c.style.marginLeft === null){
		c.style.marginLeft = 0;
	}else {
		c.style.marginLeft = "-150px";
	}
}
const products=[];
onPageLoad = () => {
        document.getElementById('search-input').addEventListener('input', e => {
          filterProducts(e.target.value);
        });
        renderProducts();
};
      renderProducts = () => {
          products.push(`<div class="section-block">
            <img src="icon-spring-framework.svg" alt="logo">
            <h1>spring boot</h1>
            <p>Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".</p>
        </div>
        <div class="section-block">
            <img src="icon-spring-framework.svg" alt="">
            <h1>spring cloud</h1>
            <p>The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications.</p>
        </div>
        <div class="section-block">
            <img src="icon-spring-framework.svg" alt="">
            <h1>spring data</h1>
            <p>Spring Cloud Data Flow is a toolkit for building data integration and real-time data processing pipelines.</p>
        </div>
        <div id="nores"><h1>No Results</h1></div>`);
        document.getElementById('section').innerHTML = products.join(' ');
      };
      filterProducts = searchText => {
        const filterArray = products.filter(item => item.includes(searchText))
        const s=[...document.getElementsByTagName("h1")];
        s.forEach( item => item.innerHTML = filterArray.join('') )
      };
