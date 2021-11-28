(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{248:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},289:function(e,t){},312:function(e,t){},314:function(e,t){},391:function(e,t){},393:function(e,t){},426:function(e,t){},431:function(e,t){},433:function(e,t){},440:function(e,t){},453:function(e,t){},476:function(e,t){},485:function(e,t){},487:function(e,t){},556:function(e,t,n){},557:function(e,t,n){},558:function(e,t,n){},559:function(e,t,n){},561:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(32),o=n.n(s),r=(n(258),n(259),n(4)),c=n(5),l=n(9),p=n(8),u=n.p+"static/media/logo.326fdbba.png",d=n.p+"static/media/CenterPic.8cb4515a.png",b=(n(260),n(569)),m=n(565),y=n(570),j=(n(261),n(27)),h=(n(262),n(0)),O=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(i.a.Component);function x(){document.getElementById("mint").scrollIntoView()}function f(){document.getElementById("team").scrollIntoView()}function g(){document.getElementById("roadmap").scrollIntoView()}function v(){document.getElementById("whitelist").scrollIntoView()}function w(){window.open("https://opensea.io/collection/dickpixnft")}var T=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"header-control",children:[Object(h.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(b.a.Brand,{href:"#home",children:Object(h.jsx)("img",{src:u,width:100,height:100,alt:"logo"})}),Object(h.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsx)(y.a,{className:"me-auto"}),Object(h.jsxs)(y.a,{children:[Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:x,children:"MINT"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:f,children:"ARTIST"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:g,children:"ROADMAP"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:v,children:"WHITELIST"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:w,children:"OPENSEA"}),Object(h.jsx)("text",{style:{width:20}}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/dickpixnft",children:[" ",Object(h.jsx)(j.d,{size:32})]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10,paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/thedickpixnft",children:[" ",Object(h.jsx)(j.g,{size:32})]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10},target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/SgJyg5Wx/",children:[" ",Object(h.jsx)(j.a,{size:32}),"   "]})]})]})]})]})}),Object(h.jsxs)("div",{className:"header-content",children:[Object(h.jsx)("h1",{children:Object(h.jsx)("img",{className:"thePicture",src:d})}),Object(h.jsx)("div",{className:"header-content-buttons-container"})]}),Object(h.jsx)("div",{})]})})}}]),n}(i.a.Component),k=n(566),C=n(567),S=(n(268),n.p+"static/media/dicklogo.9f1ffd25.png"),I=(n.p,n.p,n.p,n(269),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(h.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(h.jsxs)("div",{className:"teammember-description",children:[Object(h.jsxs)("p",{className:"teammember-name",children:["@",this.props.name]}),Object(h.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(i.a.Component)),N=(i.a.Component,n(270),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"join-community-control",id:"whitelist",children:Object(h.jsxs)(m.a,{style:{textAlign:"center"},children:[Object(h.jsxs)("div",{style:{backgroundColor:"#FF9859",border:"10px solid black",padding:10,borderRadius:20,margin:10},children:[Object(h.jsxs)("h1",{children:[Object(h.jsx)("span",{children:"JOIN"})," OUR WHITELIST"]}),Object(h.jsx)("p",{style:{fontWeight:900},children:"Our whitelist only has a certain amount of spots that will give users the ability to mint earlier than everyone else! Don't miss out, it's free to join the whitelist! "})]}),Object(h.jsx)("a",{href:"https://forms.gle/2kSmjoTAefDWWyMA6",children:Object(h.jsx)(O,{text:"JOIN WHITELIST"})})]})})}}]),n}(i.a.Component)),M=(n(271),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"footer-control",id:"socials",children:Object(h.jsxs)(m.a,{className:"footer",children:[Object(h.jsx)("p",{style:{fontSize:15},children:"\xa92021 \xa0 Unsolicited Lab LLC"}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{style:{fontSize:15},children:Object(h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai/",style:{textDecoration:"none",color:"white",textAlign:"right"},children:"Website by Metaverse Solutions, LLC"})})})]})})}}]),n}(i.a.Component)),A=(n(272),n.p+"static/media/Roadmap.7d8c759b.mp4"),E=n(251),D=(n(273),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(h.jsxs)("div",{className:"collapse-header",children:[Object(h.jsx)("h4",{children:this.props.tag}),Object(h.jsx)("p",{children:this.props.title})]}),Object(h.jsx)(j.e,{})]}),Object(h.jsx)(E.a,{in:this.state.open,children:Object(h.jsx)("div",{id:"example",className:"collapse-content",children:this.props.content})})]})}}]),n}(i.a.Component)),_=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={roadmaps:[{tag:"Stop 1",title:"The Balls Dropped",content:"Welcome to the Dick Pix community! Our public mint is live and we rock out with our....well, you know the rest. "},{tag:"Stop 2",title:"Send a Pix",content:'Stop being rookie with your dick pix game. One lucky holder will receive the "better dick pix package" of a new iPhone, Macbook Pro, and a ring light! *US based residents only, ETH equivalent outside of US*'},{tag:"Stop 3",title:"Unsolicited Dicks",content:"Our airdrop giveaways (aka unsolicited dick pix) start! 5 unsuspecting holders will receive our Dicks."},{tag:"Stop 4",title:"Dix-elated",content:'Draw me like one of your French girls! Jen is going to "dickselate" 5 lucky holders and turn their likeness (not their actual Dicks) into Dick Pix characters to forever live on the "cock-chain".'},{tag:"Stop 5",title:"Banana Hammock",content:"Member exclusive merch design initiates. Holders get to design and have input on our new merch concepts."},{tag:"Stop 6",title:"Wrap it up",content:"Our dick philanthropy begins! Proceeds of every mint sale go to sexual health and wellness organizations for STD/STI testing, family planning, and safe sex education and wellness practices."},{tag:"Stop 7",title:"BAG OF DICKS",content:"THE DICK GAME BEGINS! It's like go fish, but with dicks. Collect all the dicks in it's matching series for more exclusive, rare airdrops, giveaways, and more!"},{tag:"Stop 8",title:"Just the Tip",content:"Special limited collection series dropped to our holders, planned by our holders for the game to continue on and GROW- this is just the beginning."}]},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(h.jsxs)(m.a,{children:[Object(h.jsxs)("header",{style:{fontWeight:900},children:[Object(h.jsx)("span",{children:"WYD? U UP?"})," ",Object(h.jsx)("br",{})," I'M COMING THROUGH. BUT I HAVE A FEW STOPS TO MAKE..."]}),Object(h.jsx)("p",{className:"roadmap-description",children:"The Dick Pix Roadmap dick-tates some of the holder perks members will be able to enjoy. We are constantly brainstorming, developing and evolving ideas for our community to create an interactive and fun space. Follow this fuck boys drive to see where he ends up..."}),Object(h.jsxs)(k.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(h.jsx)(C.a,{xs:12,md:6,children:Object(h.jsx)("video",{autoplay:"autoplay",loop:"true",src:A,alt:"roadmap",type:"video/mp4"})}),Object(h.jsx)(C.a,{style:{color:"black",alignContent:"center",justifyContent:"center",textAlign:"center"},children:this.state.roadmaps.map((function(e,t){return Object(h.jsx)(D,{style:{textAlign:"center",color:"black"},tag:e.tag,title:e.title,content:e.content},t)}))})]})]})})}}]),n}(i.a.Component),B=(n(274),n.p+"static/media/item1.1c214071.png"),U=n.p+"static/media/item2.81e34ae6.png",W=n.p+"static/media/item3.eec91da6.png",F=(n(275),n.p+"static/media/fire.76eb30ed.png"),L=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"top-item",children:[Object(h.jsx)("img",{src:this.props.image,alt:"top item"}),Object(h.jsxs)("div",{className:"top-item-description",children:[Object(h.jsx)("p",{children:this.props.name}),Object(h.jsx)("h6",{children:this.props.price})]}),Object(h.jsxs)("div",{className:"top-item-bid",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(j.f,{})," HighestBid ",Object(h.jsx)("b",{children:this.props.highestBid})]}),Object(h.jsxs)("p",{children:["New Bid \xa0",Object(h.jsx)("img",{src:F,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(i.a.Component),P=(i.a.Component,n(21)),R=n.p+"static/media/about.54c3cb49.gif",z=(n(276),n(78)),H=n(24),K=n.n(H),G=n(91),J=n(89),V=n.n(J),q=n(247),Q=n.n(q),Y=n(248),X=n(92),Z=n(249),$=n(3),ee={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object($.a)(Object($.a)({},ee),{},{loading:!0});case"CONNECTION_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object($.a)(Object($.a)({},ee),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object($.a)(Object($.a)({},e),{},{account:t.payload.account});default:return e}},ne={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object($.a)(Object($.a)({},ne),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},ie=Object(X.b)({blockchain:te,data:ae}),se=[Z.a],oe=Object(X.c)(X.a.apply(void 0,se)),re=Object(X.d)(ie,oe),ce=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},le=function(e){return function(){var e=Object(G.a)(K.a.mark((function e(t){var n,a,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,re.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,re.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,re.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(ce("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},pe=function(e){return{type:"CONNECTION_FAILED",payload:e}},ue=function(e){return function(){var t=Object(G.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(le());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var de=function(){var e=Object(z.b)(),t=Object(z.c)((function(e){return e.blockchain})),n=(Object(z.c)((function(e){return e.data})),Object(a.useState)("")),i=Object(P.a)(n,2),s=(i[0],i[1]),o=Object(a.useState)(!1),r=Object(P.a)(o,2),c=r[0],l=r[1],p=Object(a.useState)(0),u=Object(P.a)(p,2),d=u[0],b=u[1],y=function(){""!==t.account&&null!==t.smartContract&&e(le(t.account))};return Object(a.useEffect)((function(){y()}),[t.account]),Object(h.jsx)("div",{className:"mint-control",id:"mint",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(k.a,{children:[Object(h.jsx)(C.a,{md:6,xs:12,className:"mint-image",children:Object(h.jsx)("img",{src:R,alt:"mint gif"})}),Object(h.jsxs)(C.a,{md:6,xs:12,className:"mint-description",children:[Object(h.jsxs)("header",{children:["MINT YOUR ",Object(h.jsx)("text",{style:{color:"white"},children:"DICK PIX"}),Object(h.jsx)("br",{})," BAG OF DICKS ",Object(h.jsx)("text",{style:{color:"white"},children:"COLLECTION GAME:"})]}),Object(h.jsxs)("p",{style:{textAlign:"center"},children:['777 images are original to the collection. Images #778-#3000 are individually rendered in B&W, Gold, and 3D versions, to create a card trading game called BAG OF DICKS. The more complete series you collect, the bigger your \u201cbag of dicks" becomes. Think of it as a game of "Go Fish" but with dicks and airdrops.',Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Show us your dicks on",Object(h.jsx)("text",{style:{fontWeight:"bold"},children:Object(h.jsx)("a",{style:{textDecoration:"none",color:"white",fontWeight:900,fontSize:20},href:"https://instagram.com/dickpixnft",children:" Instagram "})}),"and",Object(h.jsx)("text",{style:{fontWeight:"bold"},children:Object(h.jsx)("a",{style:{textDecoration:"none",color:"white",fontWeight:900,fontSize:20},href:"https://twitter.com/thedickpixnft",children:" Twitter!"})})]}),Object(h.jsxs)("div",{className:"number-control",children:[Object(h.jsx)(j.b,{color:"white",size:40,onClick:function(){d<=0||b(d-1)}}),Object(h.jsx)("span",{id:"inputBox",children:d}),Object(h.jsx)(j.c,{color:"white",size:40,onClick:function(){d>=25||b(d+1)}})]}),Object(h.jsx)("p",{style:{marginTop:0,marginBottom:0},children:"0.077 ETH + Gas"}),""===t.account||null===t.smartContract?Object(h.jsxs)("div",{className:"flex-column",children:[Object(h.jsx)("button",{className:"ybutton",onClick:function(t){console.log("--------"),t.preventDefault(),e((console.log("--:"),function(){var e=Object(G.a)(K.a.mark((function e(t){var n,a,i,s,o;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){e.next=21;break}return V.a.setProvider(a),i=new Q.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return s=e.sent,e.next=12,a.request({method:"net_version"});case 12:1==e.sent?(o=new V.a(Y,"0x7181d2038B849A18145eb153b8bEFC552e52c37A"),t({type:"CONNECTION_SUCCESS",payload:{account:s[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(e){t(ue(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(pe("Change network to Ethereum Mainnet.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(pe("Something went wrong."));case 19:e.next=22;break;case 21:t(pe("Please install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}())),y()},children:"CONNECT"}),""!==t.errorMsg?Object(h.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:t.errorMsg}):null]}):Object(h.jsx)("button",{className:"ybutton",onClick:function(n){var a;n.preventDefault(),a=1,(a=document.getElementById("inputBox").textContent)<=0||(s("Minting your Official BooCrew NFT..."),l(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:285e3*a,to:"0x7181d2038B849A18145eb153b8bEFC552e52c37A",from:t.account,value:t.web3.utils.toWei((.077*a).toString(),"ether")}).once("error",(function(e){console.log(e),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){s("Your BooCrew NFT has been successfully minted!"),l(!1),e(le(t.account))}))),y()},children:c?"BUSY":"MINT"})]})]})})})},be=(n(556),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"about-control",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(k.a,{children:[Object(h.jsxs)(C.a,{md:6,xs:12,className:"about-description",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("span",{children:"3000"})," DICKS.",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"777"})," ORIGINAL DICKS.",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"2223"})," SPECIAL DICKS.",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"1"})," GAME."]}),Object(h.jsx)("p",{children:'In the depths of the Ethereum "cock-chain" lies a Fuck Boy\'s phone with an outgoing message folder as long as a CVS receipt. You never asked to receive that unsolicited pic, but he doesn\u2019t care- he\u2019s going to send it anyway. Will it entice you to show up at his house at 2AM, laugh because you thought it was his thumb, or send it around to show all your closest friends? We hope it\u2019s the latter.'}),Object(h.jsx)("p",{children:"Dick Pix offers 777 unique, hilariously hand-drawn digital collectibles that represent community through ownership, and championing safer sex practices. This project blends nostalgic characters inspired by your favorite films, likenesses of people you know and love, and big comedic vibes to create a limited series of collectibles. The Dick Pix community enjoys sarcastic undertones, reading between the lines, and casual innuendos that bring laughter to the forefront of our philanthropic efforts. Portions of our sales are redistributed to charities and organizations that aid in STD/STI testing, family planning, and all-inclusive sexual wellness safety and education.                            "})]}),Object(h.jsx)(C.a,{md:6,xs:12,className:"image-control",children:Object(h.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:R,alt:"about gif"})})]})})})}}]),n}(i.a.Component)),me=n(250),ye=n.n(me),je=(n.p,n(557),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"meet-control",children:[Object(h.jsx)(m.a,{children:Object(h.jsxs)("header",{style:{textAlign:"center"},children:["JUST THE TIP. ",Object(h.jsx)("br",{})," ",Object(h.jsx)("span",{children:"CHECK OUT OUR DICKS!"})]})}),Object(h.jsxs)(ye.a,{breakpoints:[{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}}],dots:!1,arrows:!0,showSides:!0,sidesOpacity:.5,sideSize:.1,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix124.png",alt:"boy1"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix366.png",alt:"boy2"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix373.png",alt:"boy3"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix455.png",alt:"boy4"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix519.png",alt:"boy5"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix448.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix438.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix529.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix664.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix55.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix24.png",alt:"boy6"})})]})]})}}]),n}(i.a.Component)),he=(n(558),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"about-control",id:"team",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(k.a,{children:[Object(h.jsxs)(C.a,{md:6,xs:12,className:"about-description",style:{textAlign:"center"},children:[Object(h.jsxs)("header",{style:{textAlign:"center'",marginBottom:0},children:[Object(h.jsx)("span",{children:"OUR"})," FOUNDER",Object(h.jsx)("br",{})]}),Object(h.jsx)("a",{href:"https://instagram.com/jenfassino",style:{textDecoration:"none",color:"white",fontWeight:"bold",fontStyle:"italic",fontSize:30,marginTop:0,paddingTop:0},children:"@jenfassino"}),'Dick Pix was conceived and developed by Jen Fassino, a comedy podcaster at Jen AF and hairstylist with an extensive resume in the hair industry. Now, she\'s apparently dubbed in her NFT community as the "Queen of Dicks."']}),Object(h.jsx)(C.a,{md:6,xs:12,className:"image-control",children:Object(h.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:S,alt:"about gif"})})]})})})}}]),n}(i.a.Component));n(559);var Oe=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(T,{}),Object(h.jsx)(be,{}),Object(h.jsx)(je,{}),Object(h.jsx)(de,{}),Object(h.jsx)(_,{}),Object(h.jsx)(he,{}),Object(h.jsx)(N,{}),Object(h.jsx)(M,{})]})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,571)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};n(560);o.a.render(Object(h.jsx)(z.a,{store:re,children:Object(h.jsx)(Oe,{})}),document.getElementById("root")),xe()}},[[561,1,2]]]);
//# sourceMappingURL=main.b48ce6cb.chunk.js.map