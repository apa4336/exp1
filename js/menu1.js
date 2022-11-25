// let menuHtml =`
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
// `;

// let m ='';    //早期寫法，因為有重引號` ，所以在較新的版本較常使用
// m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>';
// m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>';
// m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>';
// m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>';



// 取得 DOM 的節點(取得ul標籤)
let menu = document.getElementById('menu');
// menu.textContent = menuHtml;//寫入節點 >>>>文字內容   (故意做錯的)
/*網頁顯示
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
*/
// menu.innerHTML = menuHtml;//將 HTML 寫入節點(再對標籤操作)   網頁表單呈現不同網頁有顯示
// menu.innerHTML = m;//將 HTML 寫入節點(再對標籤操作)   網頁表單呈現不同網頁有顯示

let menuData = [
    {
        title:'首頁',
        url:'index.html'
    },
    {
        title:'關於',
        url:'About.html'
    },
    {
        title:'產品',
        url:'Products.html'
    },
    {
        title:'商店',
        url:'store.html'
    },
];

/**
 menuHtml = menuHtml +`<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>`;
 */
menuHtml ='';
for(let row of menuData){
    menuHtml += `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>`;
}
menu.innerHTML = menuHtml;

// menuHtml += `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>`;   因為有用重引號，即可在index.html使用${ }做使用，如   ${row.url}  或  首頁   ${row.title}
