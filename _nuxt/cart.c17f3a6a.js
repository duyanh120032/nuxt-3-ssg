import{k as n,H as h}from"./entry.8ffd76b9.js";const e=n(),l={items:[],wishlist:[],total:0},r=h("cart",{state:()=>l,actions:{addToCart(t){const i=this.items.findIndex(s=>s.id===t.id);i===-1?(this.items.push({...t}),e.success(`${t.title} added to cart`)):(this.items[i].quantity++,e.success(`${t.title} quantity increased`))},calculateTotal(){const{items:t}=this.state;let i=0;t.forEach(s=>{i+=s.price*s.quantity}),this.state.total=i},decQuantity(t){console.log("\u{1F680} ~ file: cart.ts ~ line 49 ~ decQuantity ~ id",t);const i=this.items.findIndex(s=>s.id===t);i!==-1&&(this.items[i].quantity>1?this.items[i].quantity--:this.items.splice(i,1))},incQuantity(t){const i=this.items.findIndex(s=>s.id===t);i!==-1&&this.items[i].quantity++},removeCartItem(t){const i=this.items.findIndex(s=>s.id===t);i!==-1&&(this.items.splice(i,1),e.success(`${this.items[i].title} removed from cart`))},removeWishlistItem(t){const i=this.wishlist.findIndex(s=>s.id===t);i!==-1&&(this.wishlist.splice(i,1),e.success(`${this.wishlist[i].title} removed from wishlist`))},addToWishlist(t){const i=this.wishlist.findIndex(s=>s.id===t.id);i===-1?(this.wishlist.push({...t}),e.success(`${t.title} added to wishlist`)):(this.wishlist[i].quantity++,e.success(`${t.title} quantity increased`))},incWishlistQuantity(t){const i=this.wishlist.findIndex(s=>s.id===t);i!==-1&&this.wishlist[i].quantity++},decWishlistQuantity(t){const i=this.wishlist.findIndex(s=>s.id===t);i!==-1&&(this.wishlist[i].quantity>1?this.wishlist[i].quantity--:this.wishlist.splice(i,1))}},getters:{getTotal:t=>t.items.reduce((i,s)=>i+s.price*s.quantity,0),getItems:t=>t.items,getWishlist:t=>t.wishlist,getCount:t=>t.items.length,getCountWishlist:t=>t.wishlist.length}});export{r as u};
