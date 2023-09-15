"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[204],{5435:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294),s=a(8958),l=a(9849);const o=[{postalCode:/^[0-9]{2}-[0-9]{3}$/,errorMessage:"Почтовый индекс должен иметь формат XX-XXX.",engName:"Poland",ruName:"Польша (PL)",code:"PL"},{postalCode:/^[0-9]{3,3}0$/,errorMessage:"Почтовый индекс должен иметь формат XXX0.",engName:"Belgium",ruName:"Бельгия (BE)",code:"BE"},{postalCode:/^\d{5}$/,errorMessage:"Почтовый индекс должен иметь формат XXXXX.",engName:"Germany",ruName:"Германия (DE)",code:"DE"},{postalCode:/^\d{4}$/,errorMessage:"Почтовый индекс должен иметь формат XXXX.",engName:"Austria",ruName:"Австрия (AT)",code:"AT"},{postalCode:/^\d{5}(?:-\d{4})?$/,errorMessage:"Почтовый индекс должен иметь формат XXXXX, либо XXXXX-XXXX.",engName:"USA",ruName:"США (US)",code:"US"},{postalCode:/^\d{4}$/,errorMessage:"Почтовый индекс должен иметь формат XXXX.",engName:"France",ruName:"Франция (FR)",code:"FR"}],n=({name:e,addressesState:{countryValue:t,cityValue:a,streetValue:n,postalCodeValue:i},setAddressesState:c})=>{const[m,d]=(0,r.useState)(!1),[p,_]=(0,r.useState)({cityErrorValue:"",streetErrorValue:"",postalCodeErrorValue:"",emptyErrorMessage:"",defaultErrorMessage:"Поле обязательно к заполнению",cityErrorMessage:"Поле должно содержать хотя бы один символ и не содержать специальных символов (!@#$%^&*) или цифр.",streetErrorMessage:"Поле должно содержать хотя бы один символ"}),u=e=>{const t=e.target,a=t.textContent;t&&t.textContent&&("keydown"===e.type&&"Enter"===e.key||"click"===e.type)&&(c((e=>({...e,countryValue:a}))),d(!m))};return(0,r.useEffect)((()=>{(()=>{if(!i)return void _((e=>({...e,postalCodeErrorValue:p.defaultErrorMessage})));const e=o.find((({ruName:e})=>e===t));_((t=>({...t,postalCodeErrorValue:e&&e.postalCode.test(i)?"":`${e?.errorMessage}, где Х - цифра`})))})(),a?/^[^\d!@#$%^&*]*$/.test(a)?_((e=>({...e,cityErrorValue:p.emptyErrorMessage}))):/^[^\d!@#$%^&*]*$/.test(a)||_((e=>({...e,cityErrorValue:p.cityErrorMessage}))):_((e=>({...e,cityErrorValue:p.defaultErrorMessage}))),_(n?e=>({...e,streetErrorValue:p.emptyErrorMessage}):e=>({...e,streetErrorValue:p.defaultErrorMessage})),c((e=>({...e,isPostalCodeError:!!p.postalCodeErrorValue,isCityError:!!p.cityErrorValue,isStreetError:!!p.streetErrorValue})))}),[t,a,n,i,p.postalCodeErrorValue,p.cityErrorValue,p.streetErrorValue]),r.createElement("ul",{className:"auth__list auth__list_active"},r.createElement("li",null,r.createElement(l.Z,{sectionName:"auth",listName:"select",title:t,onClickAccordion:()=>{d(!m)},onKeydownAccordion:e=>{"Enter"===e.key&&d(!m)},isOpen:m},o.filter((({ruName:e})=>t!==e)).map((({ruName:e,engName:t})=>r.createElement("li",{className:"auth__select-list-item",value:t,key:t,tabIndex:m?0:-1,onClick:e=>u(e),onKeyDown:e=>u(e)},e))))),r.createElement("li",null,r.createElement(s.Z,{type:"text",placeholder:"Город*",name:`${e}City`,htmlFor:`${e}City`,onChange:e=>{const t=e.target;c((e=>({...e,cityValue:t.value})))},value:a,errors:p.cityErrorValue})),r.createElement("li",null,r.createElement(s.Z,{type:"text",placeholder:"Почтовый индекс*",name:`${e}Index`,htmlFor:`${e}Index`,onChange:e=>{const t=e.target;c((e=>({...e,postalCodeValue:t.value})))},value:i,errors:p.postalCodeErrorValue})),r.createElement("li",null,r.createElement(s.Z,{type:"text",placeholder:"Улица*",name:`${e}Street`,htmlFor:`${e}Street`,onChange:e=>{const t=e.target;c((e=>({...e,streetValue:t.value})))},value:n,errors:p.streetErrorValue})))}},2206:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var r=a(7294),s=a(4309),l=a(4094),o=a(6768),n=a(2823),i=a(2493),c=a(2861),m=a(9091),d=a(5747),p=a(8712);var _=a(6782),u=a(5435);const E=async(e,t)=>{const a={version:e,actions:[{action:"addBillingAddressId",addressId:t}]};return(await c.Z.post(d.Z.URL_API_ME,a,{headers:await(0,m.my)()})).data},f=({addressesState:e,setAddressesState:t,isOpenPopup:a,setIsOpenPopup:s,address:o,initialState:i,isEdit:_})=>{const{userInfo:f,setUserInfo:y}=(0,l.Z)(),[N,h]=(0,r.useState)(!1),g=()=>{s(!1),document.body.classList.remove("body_type_modal")};return r.createElement(r.Fragment,null,r.createElement("div",{className:"popup "+(a?"popup__opened":"")},r.createElement("div",{className:"popup__container"},r.createElement("div",{className:"popup__container-title"},r.createElement("h2",{className:"popup__title"},(_?"Изменить":"Добавить")+" адрес"),r.createElement("button",{className:"popup__close-button",type:"button",onClick:g})),r.createElement("form",{className:"popup__form",onSubmit:_?t=>{h(!0),t.preventDefault();const a=e.countryValue.match(/\((.*?)\)/),r=a?a[1]:"";f&&(async(e,t,a,r,s,l)=>{const o={version:e,actions:[{action:"changeAddress",addressId:t,address:{streetName:a,postalCode:r,city:s,country:l}}]};return(await c.Z.post(d.Z.URL_API_ME,o,{headers:await(0,m.my)()})).data})(f.version,o,e.streetValue,e.postalCodeValue,e.cityValue,r).then((e=>{y(e),g(),h(!1),n.ZP.info({content:"Адрес успешно обновлен!"})})).catch((e=>{h(!1);const{response:{data:{statusCode:t,message:a}}}=e;console.error("Произошла ошибка:",e),(0,p.Z)(t,a)}))}:t=>{h(!0),t.preventDefault();let a=!1,r=!1;const s=t.target;new FormData(s).forEach(((e,t)=>{"address"===t&&("shipping"===e?a=!0:"billing"===e&&(r=!0))}));const l=e.countryValue.match(/\((.*?)\)/),o=l?l[1]:"";f&&(async(e,t,a,r,s)=>{const l={version:e,actions:[{action:"addAddress",address:{streetName:t,postalCode:a,city:r,country:s}}]};return(await c.Z.post(d.Z.URL_API_ME,l,{headers:await(0,m.my)()})).data})(f.version,e.streetValue,e.postalCodeValue,e.cityValue,o).then((e=>{y(e),a||r?a?(async(e,t)=>{const a={version:e,actions:[{action:"addShippingAddressId",addressId:t}]};return(await c.Z.post(d.Z.URL_API_ME,a,{headers:await(0,m.my)()})).data})(e.version,e.addresses[e.addresses.length-1].id).then((e=>{y(e),r?E(e.version,e.addresses[e.addresses.length-1].id).then((e=>{y(e),g(),h(!1),n.ZP.info({content:"Адрес успешно добавлен!"}),s.reset()})):(g(),h(!1),n.ZP.info({content:"Адрес успешно добавлен!"}),s.reset())})):E(e.version,e.addresses[e.addresses.length-1].id).then((e=>{y(e),g(),h(!1),n.ZP.info({content:"Адрес успешно добавлен!"}),s.reset()})):(g(),h(!1),n.ZP.info({content:"Адрес успешно добавлен!"}),s.reset())})).catch((e=>{h(!1);const{response:{data:{statusCode:t,message:a}}}=e;console.error("Произошла ошибка:",e),(0,p.Z)(t,a)}))},name:_?"edit":"add"},r.createElement(u.Z,{name:_?"edit":"add",addressesState:e,setAddressesState:t}),!_&&r.createElement("div",{className:"profile__container-buttons-edit profile__container-buttons-edit_type_popup"},r.createElement("label",{className:"profile__label profile__label_type_popup"},r.createElement("input",{type:"checkbox",name:"address",value:"shipping",className:"profile__input"}),r.createElement("span",{className:"profile__span profile__span_type_shipping"}),"Добавить в адреса для доставок"),r.createElement("label",{className:"profile__label profile__label_type_popup"},r.createElement("input",{type:"checkbox",name:"address",value:"billing",className:"profile__input"}),r.createElement("span",{className:"profile__span profile__span_type_billing"}),"Добавить в адреса для выставления счетов")),r.createElement("button",{className:"auth__button",type:"submit",disabled:!!(e.isPostalCodeError||e.isCityError||e.isStreetError||N||i?.cityValueInitial===e.cityValue&&i?.countryValueInitial===e.countryValue&&i?.streetValueInitial===e.streetValue&&i?.postalCodeValueInitial===e.postalCodeValue)},_?"Обновить":"Сохранить")))))};var y=a(8948),N=a(8958),h=a(8508);var g=a(6642);const b=[{id:"userData",label:"Личные данные",component:r.createElement((()=>{const{userInfo:e,setUserInfo:t}=(0,l.Z)(),[a,s]=(0,r.useState)(!1),[o,i]=(0,r.useState)(!1),_=()=>{s(!0)};return e?r.createElement(r.Fragment,null,r.createElement("h2",{className:"profile__subtitle"},"Личные данные"),r.createElement(y.J9,{initialValues:{firstName:e.firstName||"",lastName:e.lastName||"",dateOfBirth:e.dateOfBirth||"",email:e.email||""},validationSchema:h.OZ,onSubmit:a=>{i(!0),e&&(async(e,t,a,r,s)=>{const l={version:e,actions:[{action:"changeEmail",email:t},{action:"setFirstName",firstName:a},{action:"setLastName",lastName:r},{action:"setDateOfBirth",dateOfBirth:s}]};return(await c.Z.post(d.Z.URL_API_ME,l,{headers:await(0,m.my)()})).data})(e.version,a.email,a.firstName,a.lastName,a.dateOfBirth).then((e=>{t(e),s(!1),i(!1),n.ZP.info({content:"Данные успешно изменены!"})})).catch((e=>{const{response:{data:{statusCode:t,message:a}}}=e;i(!1),console.error("Произошла ошибка:",e),(0,p.Z)(t,a)}))}},(({values:t,errors:l,touched:n,handleChange:i,isValid:c,resetForm:m})=>r.createElement(y.l0,{className:"profile__container-main"},r.createElement("ul",{className:"profile__list"},r.createElement("li",{className:"profile__item"},r.createElement(N.Z,{type:"text",placeholder:"Фамилия*",name:"lastName",htmlFor:"lastName",isInputPassword:!1,onChange:i,value:t.lastName,disabled:!a,errors:l.lastName,touched:n.lastName,isEdit:a})),r.createElement("li",{className:"profile__item"},r.createElement(N.Z,{type:"text",placeholder:"Имя*",name:"firstName",htmlFor:"firstName",isInputPassword:!1,onChange:i,value:t.firstName,disabled:!a,errors:l.firstName,touched:n.firstName,isEdit:a})),r.createElement("li",{className:"profile__item"},r.createElement(N.Z,{type:"date",placeholder:"Дата рождения*",name:"dateOfBirth",htmlFor:"dateOfBirth",isInputPassword:!1,onChange:i,value:t.dateOfBirth,disabled:!a,errors:l.dateOfBirth,touched:n.dateOfBirth,isEdit:a})),r.createElement("li",{className:"profile__item"},r.createElement(N.Z,{type:"text",placeholder:"Email*",name:"email",htmlFor:"email",isInputPassword:!1,onChange:i,value:t.email,disabled:!a,errors:l.email,touched:n.email,isEdit:a}))),a?r.createElement("div",{className:"profile__list"},r.createElement("button",{className:"profile__button",type:"submit",disabled:!c||o||t.lastName===e.lastName&&t.firstName===e.firstName&&t.dateOfBirth===e.dateOfBirth&&t.email===e.email},"Сохранить"),r.createElement("button",{className:"profile__button",type:"button",onClick:()=>{m(),s(!1)}},"Отменить")):r.createElement("button",{className:"profile__button",type:"button",onClick:_},"Редактировать"))))):r.createElement("p",{className:"profile__name"},"Пользователь не авторизован")}),null)},{id:"addresses",label:"Изменить адреса",component:r.createElement((()=>{const{userInfo:e,setUserInfo:t}=(0,l.Z)(),[a,s]=(0,r.useState)(!1),[o,u]=(0,r.useState)(!1),[E,y]=(0,r.useState)(!1),[N,h]=(0,r.useState)(""),[g,b]=(0,r.useState)(!1),[C,v]=(0,r.useState)({countryValue:"Польша (PL)",cityValue:"",isCityError:!0,streetValue:"",isStreetError:!0,postalCodeValue:"",isPostalCodeError:!0}),[w,V]=(0,r.useState)({countryValueInitial:"Польша (PL)",cityValueInitial:"",streetValueInitial:"",postalCodeValueInitial:""}),P={US:"США (US)",FR:"Франция (FR)",PL:"Польша (PL)",BE:"Бельгия (BE)",AT:"Австрия (AT)",DE:"Германия (DE)"},I=()=>{y(!0),document.body.classList.add("body_type_modal")},Z=(a,r)=>{u(!0),e&&("shippingRadio"===a.target.name?(async(e,t)=>{const a={version:e,actions:[{action:"setDefaultShippingAddress",addressId:t}]};return(await c.Z.post(d.Z.URL_API_ME,a,{headers:await(0,m.my)()})).data})(e.version,r).then((e=>{t(e),u(!1),n.ZP.info({content:"Адрес для доставок по умолчанию успешно изменен!"})})).catch((e=>{const{response:{data:{statusCode:t,message:r}}}=e;u(!1),console.error("Произошла ошибка:",a),(0,p.Z)(t,r)})):"billingRadio"===a.target.name&&(async(e,t)=>{const a={version:e,actions:[{action:"setDefaultBillingAddress",addressId:t}]};return(await c.Z.post(d.Z.URL_API_ME,a,{headers:await(0,m.my)()})).data})(e.version,r).then((e=>{t(e),u(!1),n.ZP.info({content:"Адрес для выставления счетов по умолчанию успешно изменен!"})})).catch((e=>{const{response:{data:{statusCode:t,message:a}}}=e;u(!1),console.error("Произошла ошибка:",e),(0,p.Z)(t,a)})))},S=(e,t,a)=>e.includes(a)?t.includes(a)?"profile__circle_type_general":"profile__circle_type_billing":t.includes(a)?"profile__circle_type_shipping":"";return r.createElement(r.Fragment,null,r.createElement("h2",{className:"profile__subtitle"},"Изменить адреса"),r.createElement("div",{className:"profile__container-addresses"},r.createElement("div",{className:"profile__container-address"},r.createElement("h3",{className:"profile__address-heading "+(a?"":"profile__address-heading_active"),onClick:()=>{s((e=>!e))}},"Адреса"),r.createElement("ul",{className:`profile__addresses ${a?"":"profile__addresses_active"} ${o?"profile__loading":""}`},e&&0!==e.addresses.length?e.addresses.map((a=>r.createElement("li",{className:"profile__address",key:a.id},r.createElement("div",{className:"profile__container-circle-text"},r.createElement("div",{className:`profile__circle ${S(e.billingAddressIds,e.shippingAddressIds,a.id)}`}),r.createElement("p",{className:"profile__address-text"},`${P[a.country]}, г. ${a.city}, ${a.postalCode}, ул. ${a.streetName}`)),r.createElement("div",{className:"profile__container-buttons-edit"},r.createElement("label",{className:"profile__label"},r.createElement("input",{type:"radio",name:"shippingRadio",className:"profile__input",checked:a.id===e.defaultShippingAddressId,onChange:e=>Z(e,a.id)}),r.createElement("span",{className:"profile__span profile__span_type_shipping"})),r.createElement("label",{className:"profile__label"},r.createElement("input",{type:"radio",name:"billingRadio",className:"profile__input",checked:a.id===e.defaultBillingAddressId,onChange:e=>Z(e,a.id)}),r.createElement("span",{className:"profile__span profile__span_type_billing"})),r.createElement("button",{className:"profile__button-edit profile__button-edit_type_edit",type:"button",onClick:()=>{return e=P[a.country],t=a.city,r=a.postalCode,s=a.streetName,l=a.id,v({countryValue:e,cityValue:t,isCityError:!0,streetValue:s,isStreetError:!0,postalCodeValue:r,isPostalCodeError:!0}),V({countryValueInitial:e,cityValueInitial:t,streetValueInitial:s,postalCodeValueInitial:r}),h(l),I(),void b(!0);var e,t,r,s,l}},r.createElement("p",{className:"profile__button-text"},"Редактировать")),r.createElement(i.Z,{title:"Вы уверены, что хотите удалить этот адрес?",onConfirm:()=>{return r=a.id,u(!0),void(e&&(async(e,t)=>{const a={version:e,actions:[{action:"removeAddress",addressId:t}]};return(await c.Z.post(d.Z.URL_API_ME,a,{headers:await(0,m.my)()})).data})(e.version,r).then((e=>{t(e),u(!1),n.ZP.info({content:"Адрес успешно удален!"})})).catch((e=>{const{response:{data:{statusCode:t,message:a}}}=e;u(!1),console.error("Произошла ошибка:",e),(0,p.Z)(t,a)})));var r},okText:"Да",cancelText:"Отмена"},r.createElement("button",{className:"profile__button-edit profile__button-edit_type_delete",type:"button"},r.createElement("p",{className:"profile__button-text"},"Удалить"))))))):r.createElement("li",{className:"profile__address-text"},"Адресов нет")),r.createElement("button",{className:"profile__button profile__button_type_edit "+(o?"profile__loading":""),type:"button",onClick:()=>{v({countryValue:"Польша (PL)",cityValue:"",isCityError:!0,streetValue:"",isStreetError:!0,postalCodeValue:"",isPostalCodeError:!0}),V({countryValueInitial:"Польша (PL)",cityValueInitial:"",streetValueInitial:"",postalCodeValueInitial:""}),I(),b(!1)}},"Добавить адрес")),r.createElement("ul",{className:"profile__container-help"},r.createElement("li",{className:"profile__help"},r.createElement("div",{className:"profile__circle profile__circle_type_billing"}),r.createElement("p",{className:"profile__help-text"},"- Адрес находится в списке адресов для выставления счетов")),r.createElement("li",{className:"profile__help"},r.createElement("div",{className:"profile__circle profile__circle_type_shipping"}),r.createElement("p",{className:"profile__help-text"},"- Адрес находится в списке адресов для доставок")),r.createElement("li",{className:"profile__help"},r.createElement("div",{className:"profile__circle profile__circle_type_general"}),r.createElement("p",{className:"profile__help-text"},"- Адрес находится в списке адресов для доставок и выставления счетов")),r.createElement("li",{className:"profile__help"},r.createElement("div",{className:"profile__cell profile__cell_type_billing"}),r.createElement("p",{className:"profile__help-text"},"- Ячейка выбора адреса для выставления счетов по умолчанию")),r.createElement("li",{className:"profile__help"},r.createElement("div",{className:"profile__cell profile__cell_type_shipping"}),r.createElement("p",{className:"profile__help-text"},"- Ячейка выбора адреса для доставок по умолчанию")),r.createElement("li",{className:"profile__help"},r.createElement("div",{className:"profile__default profile__default_type_billing"}),r.createElement("p",{className:"profile__help-text"},"- Адрес выбран для выставления счетов по умолчанию")),r.createElement("li",{className:"profile__help"},r.createElement("div",{className:"profile__default profile__default_type_shipping"}),r.createElement("p",{className:"profile__help-text"},"- Адрес выбран для доставок по умолчанию")))),r.createElement(_.Z,{pageClassname:"user-profile",isDataFetching:o}),r.createElement(f,{addressesState:C,setAddressesState:v,isOpenPopup:E,setIsOpenPopup:y,address:N,initialState:w,isEdit:g}))}),null)},{id:"password",label:"Изменить пароль",component:r.createElement((()=>{const{userInfo:e,setUserInfo:t}=(0,l.Z)(),[a,s]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("h2",{className:"profile__subtitle"},"Изменить пароль"),r.createElement(y.J9,{initialValues:{password:"",newPassword:"",newPasswordConfirm:""},validationSchema:h.pk,onSubmit:(a,{resetForm:r})=>{s(!0),e&&(async(e,t,a)=>{const r={version:e,currentPassword:t,newPassword:a};return(await c.Z.post(d.Z.URL_API_ME_PASSWORD,r,{headers:await(0,m.my)()})).data})(e.version,a.password,a.newPassword).then((l=>{t(l),s(!1),n.ZP.info({content:"Пароль успешно изменен!"}),r(),(0,g.k0)(e.email,a.newPassword).then((e=>{null!==e&&"object"==typeof e&&(0,g.F_)(e,"1SortUserToken")}))})).catch((e=>{const{response:{data:{statusCode:t,message:a}}}=e;s(!1),console.error("Произошла ошибка:",e),(0,p.Z)(t,a)}))}},(({values:e,errors:t,touched:s,handleChange:l,isValid:o,dirty:n})=>r.createElement(y.l0,{className:"profile__container-main"},r.createElement("ul",{className:"profile__list"},r.createElement("li",{className:"profile__item profile__type_password"},r.createElement(N.Z,{type:"password",placeholder:"Старый пароль*",name:"password",htmlFor:"password",isInputPassword:!0,onChange:l,value:e.password,errors:t.password,touched:s.password})),r.createElement("li",{className:"profile__item profile__type_password"},r.createElement(N.Z,{type:"password",placeholder:"Новый пароль*",name:"newPassword",htmlFor:"newPassword",isInputPassword:!0,onChange:l,value:e.newPassword,errors:t.newPassword,touched:s.newPassword})),r.createElement("li",{className:"profile__item profile__type_password"},r.createElement(N.Z,{type:"password",placeholder:"Подтвердите новый пароль*",name:"newPasswordConfirm",htmlFor:"newPasswordConfirm",isInputPassword:!0,onChange:l,value:e.newPasswordConfirm,errors:t.newPasswordConfirm,touched:s.newPasswordConfirm}))),r.createElement("div",{className:"profile__list"},r.createElement("button",{className:"profile__button",type:"submit",disabled:!o||!n||a||e.password===e.newPassword},"Сохранить"))))))}),null)}],C=()=>{if("loading"===(0,s.HJ)().state)return r.createElement(o.Z,{pageClassname:"catalog"});const{userInfo:e,isContentLoadedPageUserInfo:t}=(0,l.Z)(),[a,n]=(0,r.useState)("userData");return t?r.createElement(o.Z,{pageClassname:"user-profile"}):r.createElement("section",{className:"profile","aria-label":"Профиль"},r.createElement("div",{className:"profile__container"},r.createElement("div",{className:"profile__info"},r.createElement("div",{className:"profile__container-info"},e?r.createElement(r.Fragment,null,r.createElement("p",{className:"profile__name"},`${e.firstName} ${e.lastName}`),r.createElement("p",{className:"profile__email"},e.email)):r.createElement("p",{className:"profile__name"},"Пользователь не авторизован")),r.createElement("ul",{className:"profile__categories"},r.createElement("li",{className:"profile__category"},r.createElement("div",{className:"profile__container-icon-name"},r.createElement("div",{className:"profile__category-icon profile__category-icon_type_home"}),r.createElement("p",{className:"profile__category-name"},"Мой кабинет"))),r.createElement("li",{className:"profile__category"},r.createElement("div",{className:"profile__container-icon-name"},r.createElement("div",{className:"profile__category-icon profile__category-icon_type_user"}),r.createElement("p",{className:"profile__category-name"},"Профиль")),r.createElement("ul",{className:"profile__subcategories"},b.map((e=>r.createElement("li",{key:e.id},r.createElement("button",{className:"profile__subcategory "+(a===e.id?"profile__subcategory_active":""),type:"button",onClick:()=>{return t=e.id,void n(t);var t}},e.label)))))))),b.map((e=>r.createElement("div",{className:"profile__main",key:e.id},a===e.id&&e.component)))))}}}]);