// let menuHtml =`
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
// `;

let m ='';    //早期寫法
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>';



// 取得 DOM 的節點
let menu = document.getElementById('menu');
// menu.textContent = menuHtml;//寫入節點 >>>>文字內容   (故意做錯的)
/*網頁顯示
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li> <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
*/
// menu.innerHTML = menuHtml;//將 HTML 寫入節點   網頁表單呈現不同網頁有顯示
menu.innerHTML = m;//將 HTML 寫入節點   網頁表單呈現不同網頁有顯示

// let menuData = [
//     {
//         title:'首頁',
//         url:'index.html'
//     },
//     {
//         title:'About',
//         url:'About.html'
//     },
//     {
//         title:'Products',
//         url:'Products.html'
//     },
//     {
//         title:'store',
//         url:'store.html'
//     },
// ];
