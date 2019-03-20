function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  // console.log(xhr);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
callback(xhr.responseText);
// console.log(xhr);
 }
}
xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.left);
  profile1(data.carier);
  education(data.education);
  skills(data.skills);
})
var p=document.querySelector('.p');
var v=document.querySelector('.v');
var c=document.querySelector('.c');
function profile(pro)
{
  var image=document.createElement('img');
  image.src=pro.img;
  v.appendChild(image);
  p.appendChild(v);
  var na=document.createElement('h2');
  na.textContent=pro.name;
  v.appendChild(na);
  p.appendChild(v);
  var hr=document.createElement('hr');
  hr.textContent=pro.line;
  v.appendChild(hr);
  p.appendChild(v);
    var des=document.createElement('h3');
    des.textContent=pro.designation;
    v.appendChild(des);
    p.appendChild(v);
    var roll=document.createElement('h4');
    roll.textContent=pro.rollno;
    v.appendChild(roll);
    p.appendChild(v);
    var mail=document.createElement('h5');
    mail.textContent=pro.email;
    v.appendChild(mail);
    p.appendChild(v);

}
function profile1(pror)
{
  var career=document.createElement('h3');
  career.textContent="career objectives";
  c.appendChild(career);
  p.appendChild(c);
  var hr=document.createElement('hr');
  hr.textContent=pror.line;
  c.appendChild(hr);
  p.appendChild(c);
  var inf=document.createElement('h4');
  inf.textContent=pror.info;
  c.appendChild(inf);
p.appendChild(c);
var hr=document.createElement('hr');
hr.textContent=pror.line;
c.appendChild(hr);
p.appendChild(c);
}
function education (edu){
  var h2=document.createElement('h2');
  h2.textContent="Education Qualifications"
  c.appendChild(h2);
  p.appendChild(c);
  var hr=document.createElement('hr');
  hr.textContent=edu.line;
  c.appendChild(hr);
  p.appendChild(c);

var table=document.createElement('table');
table.border="1";
let row='';
row +="<th>"+"sno"+"</th>"+"<th>"+"INSTITUTE"+"</th>"+"<th>"+"Board"+"</th>"+"<th>"+"YOP"+"</th>"+"<th>"+"Percentage"+"</th>"
for (i in edu)
{
  row +="<tr>"+"<td>"+edu[i].sno +"</td>"+
  "<td>"+edu[i].institute +"</td>"+
  "<td>"+edu[i].board +"</td>"+
  "<td>"+edu[i].yop +"</td>"+
  "<td>"+edu[i].percentage +"</td>"
  "</tr>";
}

  table.innerHTML=row;
  c.appendChild(table);
  p.appendChild(c);
}
function skills(skil){
  var sk=document.createElement('h2')
  sk.textContent="Technical skills";
  c.appendChild(sk);
  p.appendChild(c);
  var hr=document.createElement('hr');
  hr.textContent=skil.line;
  c.appendChild(hr);
  p.appendChild(c);
  var skills=document.createElement('h3');
  let row='';
  for (i in skil)
  {
    row += "<ul>"+"<li>"+skil[i].program+"</li>"+"</ul>";
  }
skills.innerHTML=row;
c.appendChild(skills);
p.appendChild(c);

}
