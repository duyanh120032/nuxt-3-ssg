import{a as j,k as G,O as Q,l as Y,r as d,G as F,P as M,q as N,Q as J,b as i,e,u as h,B as a,t as _,h as f,R as K,A as T,x as n,z as u,C as W,y as $,F as V,v as L,D as X,S as ee,o as r}from"./entry.8ffd76b9.js";import{a as se}from"./fetch.198f65c7.js";import{u as z}from"./cart.c17f3a6a.js";import"./asyncData.bbff6192.js";const te={class:"checkout-main-area pt-120 pb-120"},oe={class:"container"},le={key:0},ae={class:"text-success"},ne={class:"ml-2"},ie={key:1,class:"customer-zone mb-20"},re={class:"cart-page-title"},de=e("p",null,"If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.",-1),ue=["onSubmit"],ce={class:"row"},pe={class:"col-lg-6 col-md-6"},_e={class:"sin-checkout-login"},me=e("label",null,[a("Email address "),e("span",null,"*")],-1),he={class:"col-lg-6 col-md-6"},ve={class:"sin-checkout-login"},be=e("label",null,[a("Passwords "),e("span",null,"*")],-1),ge={key:0,class:"text-danger"},ye={class:"button-remember-wrap"},fe={class:"button",type:"submit"},ke=e("div",{class:"checkout-login-toggle-btn"},[e("input",{type:"checkbox"}),e("label",null,"Remember me")],-1),we=e("div",{class:"lost-password"},[e("a",{href:"#"},"Lost your password?")],-1),Ce=e("div",{class:"checkout-login-social"},[e("span",null,"Login with:"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Facebook")]),e("li",null,[e("a",{href:"#"},"Twitter")]),e("li",null,[e("a",{href:"#"},"Google")])])],-1),qe={class:"customer-zone mb-20"},xe={class:"cart-page-title"},Pe=["onSubmit"],Ne=e("input",{type:"submit",value:"Apply Coupon"},null,-1),Ve={class:"checkout-wrap pt-30"},Le={class:"row"},Se={class:"col-lg-7"},Ue={class:"billing-info-wrap mr-50"},De=e("h3",null,"Billing Details",-1),Oe={class:"row"},Ae={class:"col-lg-6 col-md-6"},Ee={class:"billing-info mb-20"},Fe=e("label",null,[a("First Name "),e("abbr",{class:"required",title:"required"},"*")],-1),Me={class:"col-lg-6 col-md-6"},Te={class:"billing-info mb-20"},$e=e("label",null,[a("Last Name "),e("abbr",{class:"required",title:"required"},"*")],-1),ze={class:"col-lg-12"},Ie={class:"billing-select mb-20"},Be=e("label",null,[a("Province/City "),e("abbr",{class:"required",title:"required"},"*")],-1),Re=["value"],Ze={class:"col-lg-12"},He={class:"billing-info mb-20"},je=e("label",null,[a("Street Address "),e("abbr",{class:"required",title:"required"},"*")],-1),Ge=e("input",{placeholder:"Apartment, suite, unit etc.",type:"text"},null,-1),Qe={class:"col-lg-12 col-md-12"},Ye={class:"billing-info mb-20"},Je=e("label",null,[a("Districts / County "),e("abbr",{class:"required",title:"required"},"*")],-1),Ke=["value"],We={class:"col-lg-12 col-md-12"},Xe={class:"billing-info mb-20"},es=e("label",null,[a("Postcode / ZIP "),e("abbr",{class:"required",title:"required"},"*")],-1),ss={class:"col-lg-12 col-md-12"},ts={class:"billing-info mb-20"},os=e("label",null,[a("Phone "),e("abbr",{class:"required",title:"required"},"*")],-1),ls={class:"col-lg-12 col-md-12"},as={class:"billing-info mb-20"},ns=e("label",null,[a("Email Address "),e("abbr",{class:"required",title:"required"},"*")],-1),is={class:"additional-info-wrap"},rs=e("label",null,"Order notes",-1),ds={class:"col-lg-5"},us={class:"your-order-area"},cs=e("h3",null,"Your order",-1),ps={class:"your-order-wrap gray-bg-4"},_s={class:"your-order-info-wrap"},ms=e("div",{class:"your-order-info"},[e("ul",null,[e("li",null,[a("Product "),e("span",null,"Total")])])],-1),hs={class:"your-order-middle"},vs={key:0,class:"your-order-info order-subtotal"},bs={class:"your-order-info order-shipping"},gs={class:"your-order-info order-total"},ys={class:"payment-method"},fs={class:"pay-top sin-payment"},ks=e("label",{for:"payment-method-3"},"Cash on delivery ",-1),ws=e("div",{class:"payment-box payment_method_bacs"},[e("p",null,"Make your payment directly into our bank account. Please use your Order ID as the payment reference.")],-1),Cs={class:"Place-order"},qs=["disabled"],Us=j({__name:"Checkout",setup(xs){const m=G(),c=Q(),k=Y(),w=d(!1),C=d(!1),S=d(!1),g=d(!1),v=d(0),y=d(""),{getItems:U,getTotal:D,$reset:Ps}=z(),q=d([]),O=d([]),b=d(""),x=d(""),p=F({email:"",password:"",error:""}),o=F({FirstName:"",LastName:"",Email:"",Phone:"",Address:"",Address2:"",City:b.value,District:x.value,CashMethod:"",Zip:"",note:""}),I=async()=>{if(y.value.length>0){const{data:l,error:t}=await k.from("Coupons").select("*").eq("code",y.value).single();t?m.error("Coupon not found"):(v.value=l.discount,m.success("Coupon applied"))}},B=async()=>{g.value=!0;const l=await k.auth.signIn({email:p.email,password:p.password});if(l.error){p.error=l.error.message,g.value=!1;return}p.error="",g.value=!1};M(()=>{c.value&&(w.value=!0,o.Email=c.value.email,o.FirstName=c.value.user_metadata.firstname===void 0?"":c.value.user_metadata.firstname,o.LastName=c.value.user_metadata.lastname===void 0?"":c.value.user_metadata.lastname)});const P=N(()=>D>100?0:5),A=N(()=>{let l=D;return v.value>0&&(l=l-l*v.value/100),l+P.value}),E=N(()=>o.FirstName.length>0&&o.LastName.length>0&&o.Email.length>0&&o.Phone.length>0),R=async()=>{if(!E.value){m.error("Please fill all required fields");return}if(o.Phone.length<10){m.error("Phone number is not valid");return}if(w.value){const{data:l,error:t}=await k.from("Orders").insert({user_email:c.value.email,items:U.map(s=>({id:s.id,quantity:s.quantity,size:s.size,color:s.color})),total:A.value,shipping_cost:P.value,shipping_data:o});t?m.error(t.message):(m.success("Order placed"),z().$reset(),ee("/trackorder?code="+l[0].id))}},Z=async()=>{const l=await se("/api/province","$Urwo0uOrjt");q.value=l.data},H=async()=>{await fetch("https://districts.open-api.vn/api/").then(l=>l.json()).then(l=>{O.value=[...l]})};return M(()=>{b.value&&H()}),J(async()=>{await Z(),b.value=q.value[0].code}),(l,t)=>(r(),i("div",te,[e("div",oe,[h(c)?(r(),i("div",le,[e("p",ae,[a("Hello "),e("span",ne,_(h(c).email),1)])])):f("",!0),w.value?f("",!0):(r(),i("div",ie,[e("p",re,[a("Returning customer? "),e("a",{class:"checkout-click1",href:"#",onClick:t[0]||(t[0]=s=>S.value=!0)},"Click here to login")]),e("div",{class:"checkout-login-info",style:K(`${S.value?"display:block ;":""}`)},[de,e("form",{action:"#",onSubmit:T(B,["prevent"])},[e("div",ce,[e("div",pe,[e("div",_e,[me,n(e("input",{type:"Email",name:"user-name","onUpdate:modelValue":t[1]||(t[1]=s=>p.email=s)},null,512),[[u,p.email]])])]),e("div",he,[e("div",ve,[be,n(e("input",{type:"password",name:"user-password","onUpdate:modelValue":t[2]||(t[2]=s=>p.password=s)},null,512),[[u,p.password]])])])]),e("div",null,[p.error?(r(),i("span",ge," Some thing went wrong")):f("",!0)]),e("div",ye,[e("button",fe,_(`${g.value?"logging......":"Login"}`),1),ke]),we],40,ue),Ce],4)])),e("div",qe,[e("p",xe,[a("Have a coupon? "),e("a",{class:"checkout-click3",href:"#",onClick:t[3]||(t[3]=s=>C.value=!C.value)},"Click here to enter your code")]),e("div",{class:W(["checkout-login-info3",{"d-block":C.value}])},[e("form",{action:"#",onSubmit:T(I,["prevent"])},[n(e("input",{type:"text",placeholder:"Coupon code","onUpdate:modelValue":t[4]||(t[4]=s=>y.value=s)},null,512),[[u,y.value]]),Ne],40,Pe)],2)]),e("div",Ve,[e("div",Le,[e("div",Se,[e("div",Ue,[De,e("div",Oe,[e("div",Ae,[e("div",Ee,[Fe,n(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=s=>o.FirstName=s)},null,512),[[u,o.FirstName]])])]),e("div",Me,[e("div",Te,[$e,n(e("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=s=>o.LastName=s)},null,512),[[u,o.LastName]])])]),e("div",ze,[e("div",Ie,[Be,n(e("select",{"onUpdate:modelValue":t[7]||(t[7]=s=>b.value=s)},[(r(!0),i(V,null,L(q.value,s=>(r(),i("option",{key:s.code,value:s.code},_(s.name),9,Re))),128))],512),[[$,b.value]])])]),e("div",Ze,[e("div",He,[je,n(e("input",{class:"billing-address",placeholder:"House number and street name",type:"text","onUpdate:modelValue":t[8]||(t[8]=s=>o.Address=s)},null,512),[[u,o.Address]]),Ge])]),e("div",Qe,[e("div",Ye,[Je,n(e("select",{"onUpdate:modelValue":t[9]||(t[9]=s=>x.value=s)},[(r(!0),i(V,null,L(O.value,s=>(r(),i("option",{key:s.code,value:s.code},_(s.name),9,Ke))),128))],512),[[$,x.value]])])]),e("div",We,[e("div",Xe,[es,n(e("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=s=>o.Zip=s)},null,512),[[u,o.Zip]])])]),e("div",ss,[e("div",ts,[os,n(e("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=s=>o.Phone=s)},null,512),[[u,o.Phone]])])]),e("div",ls,[e("div",as,[ns,n(e("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=s=>o.Email=s),readonly:""},null,512),[[u,o.Email]])])])]),e("div",is,[rs,n(e("textarea",{placeholder:"Notes about your order, e.g. special notes for delivery. ",name:"message","onUpdate:modelValue":t[13]||(t[13]=s=>o.note=s)},null,512),[[u,o.note]])])])]),e("div",ds,[e("div",us,[cs,e("div",ps,[e("div",_s,[ms,e("div",hs,[e("ul",null,[(r(!0),i(V,null,L(h(U),s=>(r(),i("li",{key:s.id},[a(_(s.title),1),e("span",null,_(s.price),1)]))),128))])]),v.value>0?(r(),i("div",vs,[e("ul",null,[e("li",null,[a("Coupon "),e("span",null,"-"+_(v.value)+" % ",1)])])])):f("",!0),e("div",bs,[e("ul",null,[e("li",null,[a("Shipping "),e("p",null,"$"+_(h(P)),1)])])]),e("div",gs,[e("ul",null,[e("li",null,[a("Total "),e("span",null,"$"+_(h(A)),1)])])])]),e("div",ys,[e("div",fs,[n(e("input",{id:"payment-method-3",class:"input-radio",type:"radio",value:"COD",name:"payment_method","onUpdate:modelValue":t[14]||(t[14]=s=>o.CashMethod=s)},null,512),[[X,o.CashMethod]]),ks,ws])])]),e("div",Cs,[e("button",{class:"btn",disabled:!h(E),onClick:R},"Place Order ",8,qs)])])])])])])]))}});export{Us as default};
