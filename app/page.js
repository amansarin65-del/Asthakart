'use client';
import { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, Sparkles, ArrowRight, X } from 'lucide-react';

const categories = [
  ['🕉️','Hindu','Puja samagri, diyas & idols'],['☪️','Islamic','Prayer, tasbeeh & attar'],['✝️','Christian','Rosaries, candles & gifts'],['☬','Sikh','Devotional & spiritual items'],['☸️','Buddhist','Meditation & prayer items'],['✡️','Jewish','Faith & ceremonial items']
];

// Demo catalogue. Shopify will become the source of truth for products, prices and stock.
// Product images below are real product-photo URLs for the demo catalogue.
const products = [
  ['Sandalwood Incense Sticks','Hindu','₹199','https://www.zwende.com/cdn/shop/files/3_288fb52b-4e94-4097-83c2-3592c6c57ede.jpg?v=1726561127&width=1080'],
  ['Brass Diya Set','Hindu','₹499','https://cdn2.zohoecommerce.com/product-images/IMG_2270.jpg/1323737000005117511/800x800?storefront_domain=www.ayraarts.com'],
  ['Prayer Beads','Islamic','₹349','https://img.drz.lazcdn.com/g/kf/S301d36d142a7433981820c18cd14581fb.jpg_720x720q80.jpg'],
  ['Wooden Meditation Mala','Buddhist','₹299','https://www.hugebazaar.com/cdn/shop/products/ML557-3_grande.jpg?v=1665480812']
];

export default function Home(){
  const [cart,setCart]=useState([]);
  const [search,setSearch]=useState('');
  const [selectedCategory,setSelectedCategory]=useState('All');
  const [cartOpen,setCartOpen]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);

  const filtered=products.filter(p=>(selectedCategory==='All'||p[1]===selectedCategory) && (p[0].toLowerCase().includes(search.toLowerCase())||p[1].toLowerCase().includes(search.toLowerCase())));
  const addToCart=(product)=>{setCart(prev=>[...prev,product]);setCartOpen(true)};
  const removeFromCart=(index)=>setCart(prev=>prev.filter((_,i)=>i!==index));
  const chooseCategory=(name)=>{setSelectedCategory(name);document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});setMenuOpen(false)};

  return <main>
    <header>
      <button className="logo" onClick={()=>{setSelectedCategory('All');window.scrollTo({top:0,behavior:'smooth'})}}>Aastha<span>Kart</span></button>
      <nav><button onClick={()=>chooseCategory('All')}>Shop</button><button onClick={()=>document.getElementById('traditions')?.scrollIntoView({behavior:'smooth'})}>Categories</button><button onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>About</button><button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Contact</button></nav>
      <div className="actions">
        <div className="search"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search spiritual products"/></div>
        <Heart size={20}/>
        <button className="bag" aria-label="Open cart" onClick={()=>setCartOpen(true)}><ShoppingBag size={21}/><b>{cart.length}</b></button>
        <button className="mobile" aria-label="Open menu" onClick={()=>setMenuOpen(!menuOpen)}><Menu/></button>
      </div>
    </header>

    {menuOpen && <div className="mobileMenu">{categories.map(c=><button key={c[1]} onClick={()=>chooseCategory(c[1])}>{c[0]} {c[1]}</button>)}</div>}

    <section className="hero"><div><p className="eyebrow"><Sparkles size={15}/> ONE MARKETPLACE. MANY TRADITIONS.</p><h1>Faith, <em>together.</em></h1><p className="sub">Discover meaningful worship, spiritual and devotional products from traditions around the world.</p><button onClick={()=>document.getElementById('shop')?.scrollIntoView({behavior:'smooth'})}>Explore collection <ArrowRight size={18}/></button></div><div className="heroArt"><div className="orb">✦</div><span>Spiritual living<br/>for every home</span></div></section>

    <section className="section" id="traditions"><div className="sectionHead"><div><p className="eyebrow">SHOP BY TRADITION</p><h2>Find what speaks to you.</h2></div></div><div className="cats">{categories.map(c=><button className="catCard" key={c[1]} onClick={()=>chooseCategory(c[1])}><div className="catIcon">{c[0]}</div><h3>{c[1]}</h3><p>{c[2]}</p><ArrowRight size={17}/></button>)}</div></section>

    <section className="section products" id="shop"><div className="sectionHead"><div><p className="eyebrow">CURATED FOR YOU</p><h2>{selectedCategory==='All'?'Featured products':`${selectedCategory} products`}</h2></div><button onClick={()=>setSelectedCategory('All')}>View all <ArrowRight size={16}/></button></div><div className="grid">{filtered.map((p)=><article className="product" key={p[0]}><div className="photo"><img src={p[3]} alt={p[0]}/><button aria-label={`Wishlist ${p[0]}`}><Heart size={18}/></button></div><p className="tag">{p[1]}</p><h3>{p[0]}</h3><div className="price">{p[2]} <button onClick={()=>addToCart(p)}>Add to cart</button></div></article>)}{filtered.length===0&&<p className="empty">No products found in this category yet.</p>}</div></section>

    <section className="trust" id="about"><div><p className="eyebrow">WHY AASTHAKART</p><h2>Thoughtful products.<br/><em>Respectful commerce.</em></h2></div><p>We bring worship and spiritual essentials together in one welcoming marketplace, with respect for every tradition.</p></section>
    <footer id="contact"><div className="logo">Aastha<span>Kart</span></div><p>Faith, together.</p><small>© 2026 AasthaKart. Built with respect.</small></footer>

    {cartOpen && <div className="cartOverlay" onClick={()=>setCartOpen(false)}><aside className="cartDrawer" onClick={e=>e.stopPropagation()}><div className="cartHead"><h2>Your cart</h2><button onClick={()=>setCartOpen(false)}><X/></button></div>{cart.length===0?<div className="emptyCart"><ShoppingBag size={42}/><p>Your cart is empty.</p><button onClick={()=>setCartOpen(false)}>Continue shopping</button></div>:<><div className="cartItems">{cart.map((p,i)=><div className="cartItem" key={`${p[0]}-${i}`}><img src={p[3]} alt=""/><div><strong>{p[0]}</strong><small>{p[2]}</small><button onClick={()=>removeFromCart(i)}>Remove</button></div></div>)}</div><button className="checkout">Proceed to checkout</button></>}</aside></div>}
  </main>
}
