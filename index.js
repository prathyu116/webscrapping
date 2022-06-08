const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www.google.com/search?q=react+jobs&ei=4duYYpLRJYq94-EPqfK90AE&uact=5&oq=react+jobs&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggIABCABBDJAzIFCAAQkgMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBHOgUIABCRAjoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CAguEIAEELEDOgUILhCABDoLCAAQgAQQsQMQgwE6BAgAEEM6DgguEIAEELEDEMcBEKMCOgsILhDHARCvARCRAjoHCAAQyQMQQzoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOggILhCABBDUAjoLCC4QgAQQsQMQ1AI6DQgAELEDEIMBEMkDEEM6CAgAELEDEIMBOgoIABCxAxCDARANOgQIABANOgcIABDJAxANSgQIQRgASgQIRhgAUJseWIgzYOczaANwAngAgAGmAYgB5AqSAQQwLjExmAEAoAEBsAEAyAEIwAEB&sclient=gws-wiz&ibp=htl;jobs&sa=X&ved=2ahUKEwi546uOj4_4AhXh6zgGHQlPDQYQutcGKAF6BAgHEAY#htivrt=jobs&htidocid=DNXJc0LPw_4AAAAAAAAAAA%3D%3D&fpstate=tldetail"
  );
  await page.screenshot({ path: "jobs.png" });
// await browser.waitForTarget(()=>false)
const res = await page.evaluate(()=>{
    var arr=[]
    let title = document.querySelectorAll(".BjJfJf");
    let company = document.querySelectorAll(".vNEEBe");
    let location = document.querySelectorAll(".Qk80Jf");
    const titleList = [...title];
    const companyList = [...company];
    const locationList = [...location];
     titleList.forEach((h) => {
         arr.push({ title: h.innerText });
     });
     companyList.forEach((h) => {
         arr.push({ company: h.innerText });
     });
     locationList.forEach((h) => {
         arr.push({ location: h.innerText });
     });

     return arr
})
console.log(res)
  await browser.close();
})();
