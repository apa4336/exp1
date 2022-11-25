// let menuHtml = ` //第一種方式，重音節能使程式不用換行
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
// `;

// let m = '';   //另一種方式
// m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>';
// m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>';
// m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>';
// m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>';


// 取得 DOM 的節點
// let menu = document.getElementById('menu');
// menu.textContent = menuHtml;//寫入節點 >>>>文字內容   (故意做錯的)
/*網頁顯示
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
*/
// menu.innerHTML = m;  //將 HTML 寫入節點

// let menuData = ['Home', 'About', 'Products', 'Store'];
// let menuDataUrl = ['index.html', 'about.html"', 'products.htmls', 'store.html']

let menuData = [
    {
        title: '首頁',
        url: 'index.html'
    },
    {
        title: '關於我們',
        url: 'about.html'
    },
    {
        title: '商品展示',
        url: 'products.html'
    },
    {
        title: '購物車',
        url: 'store.html'
    }
];
// let x = 'title';
// console.log(menuData[0]['url']); // index.html
// console.log(menuData[0].title);  //  Home   11/25
// console.log(menuData[0]['title']); //  Home 11/25


/**
 menuHtml = menuHtml + `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>`;
 row =   {
        title: 'Store',
        url: 'store.html'
    }
 */
menuHtml = '';
for(let row of menuData){

    menuHtml += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="' + row.url + '">' + row.title + '</a></li>\n';

    // menuHtml += `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>\n`;

    // console.log(menuHtml);
    // console.log(title);
    // console.log(url);
}
let menu = document.getElementById('menu');
menu.innerHTML = menuHtml;  //將 HTML 寫入節點

// console.log(menuHtml);
