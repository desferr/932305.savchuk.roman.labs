function buttonClicked(news_content) {
    const news = document.createElement("div");
    news.innerHTML = `
        <div id="news">
            <div id="news_content">
                <p><b>${news_content}</b></p>
                <div>   
                    ${news_content}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!
                    <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(news);
    news.querySelector('#news').addEventListener('click', function(event) 
    {
        if (event.target === this) {
            news.remove();
        }
    });
}