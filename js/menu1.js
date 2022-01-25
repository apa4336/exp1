let menuHtml =`
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
`;
// 取得 DOM 的節點
let menu = document.getElementById('menu');
// menu.textContent = menuHtml;//寫入節點 文字內容
//menu.innerHTML = menuHtml;//將 HTML 寫入節點

let menuData = [
    {
        title:'Home',
        url:'index.html'
    },
    {
        title:'About',
        url:'About.html'
    },
    {
        title:'Products',
        url:'Products.html'
    },
    {
        title:'store',
        url:'store.html'
    },
];