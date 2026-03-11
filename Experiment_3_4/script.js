document.getElementById("jobSearchForm").addEventListener("submit",function(e){
e.preventDefault()

const name=document.getElementById("fullName").value
const role=document.getElementById("desiredRole").value
const location=document.getElementById("preferredLocation").value
const experience=document.getElementById("experienceLevel").value

document.querySelector(".profile-content").innerHTML=`
<h3>${name}</h3>
<p><strong>Role:</strong> ${role}</p>
<p><strong>Location:</strong> ${location}</p>
<p><strong>Experience:</strong> ${experience}</p>
`
})

document.getElementById("jobPostForm").addEventListener("submit",function(e){
e.preventDefault()

const title=document.getElementById("jobTitle").value
const company=document.getElementById("companyName").value
const location=document.getElementById("jobLocation").value
const description=document.getElementById("jobDescription").value

const jobCard=document.createElement("div")
jobCard.classList.add("job-card")

jobCard.innerHTML=`
<h3>${title}</h3>n
<p class="company">${company}</p>
<p class="location">${location}</p>
<p>${description}</p>
<button class="btn-success">Apply</button>
`

document.getElementById("jobGrid").appendChild(jobCard)
document.getElementById("jobPostForm").reset()
})