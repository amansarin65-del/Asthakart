'use client';
import { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, Sparkles, ArrowRight } from 'lucide-react';

const categories = [
  ['🕉️','Hindu','Puja samagri, diyas & idols'],['☪️','Islamic','Prayer, tasbeeh & attar'],['✝️','Christian','Rosaries, candles & gifts'],['☬','Sikh','Devotional & spiritual items'],['☸️','Buddhist','Meditation & prayer items'],['✡️','Jewish','Faith & ceremonial items']
];
const products = [
  ['Sandalwood Incense Sticks','Hindu','₹199','https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80'],
  ['Brass Diya Set','Hindu','₹499','https://images.unsplash.com/photo-1604608672516-f1b9d4e4b7d8?auto=format&fit=crop&w=800&q=80'],
  ['Prayer Beads','Islamic','₹349','https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&w=800&q=80'],
  ['Meditation Incense','Buddhist','₹299','https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80']
];
export default function Home(){const [cart,setCart]=useState(0); const [search,setSearch]=useState(''); const filtered=products.filter(p=>p[0].toLowerCase().includes(search.toLowerCase())||p[1].toLowerCase().includes(search.toLowerCase())); return <main>
<header><div className="logo">Aastha<span>Kart</span></div><nav><a>Shop</a><a>Categories</a><a>About</a><a>Contact</a></nav><div className="actions"><div className="search"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search spiritual products"/></div><Heart size={20}/><div className="bag"><ShoppingBag size={21}/><b>{cart}</b></div><Menu className="mobile"/></div></header>
<section className="hero"><div><p className="eyebrow"><Sparkles size={15}/> ONE MARKETPLACE. MANY TRADITIONS.</p><h1>Faith, <em>together.</em></h1><p className="sub">Discover meaningful worship, spiritual and devotional products from traditions around the world.</p><button onClick={()=>document.getElementById('shop').scrollIntoView({behavior:'smooth'})}>Explore collection <ArrowRight size={18}/></button></div><div className="heroArt"><div className="orb">✦</div><span>Spiritual living<br/>for every home</span></div></section>
<section className="section"><div className="sectionHead"><div><p className="eyebrow">SHOP BY TRADITION</p><h2>Find what speaks to you.</h2></div></div><div className="cats">{categories.map(c=><article key={c[1]}><div className="catIcon">{c[0]}</div><h3>{c[1]}</h3><p>{c[2]}</p><ArrowRight size={17}/></article>)}</div></section>
<section className="section products" id="shop"><div className="sectionHead"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Featured products</h2></div><a>View all <ArrowRight size={16}/></a></div><div className="grid">{filtered.map((p,i)=><article className="product" key={p[0]}><div className="photo"><img src={p[3]} alt={p[0]}/><button><Heart size={18}/></button></div><p className="tag">{p[1]}</p><h3>{p[0]}</h3><div className="price">{p[2]} <button onClick={()=>setCart(cart+1)}>Add to cart</button></div></article>)}</div></section>
<section className="trust"><div><p className="eyebrow">WHY AASTHAKART</p><h2>Thoughtful products.<br/><em>Respectful commerce.</em></h2></div><p>We bring worship and spiritual essentials together in one welcoming marketplace, with respect for every tradition.</p></section>
<footer><div className="logo">Aastha<span>Kart</span></div><p>Faith, together.</p><small>© 2026 AasthaKart. Built with respect.</small></footer>
</main>}
