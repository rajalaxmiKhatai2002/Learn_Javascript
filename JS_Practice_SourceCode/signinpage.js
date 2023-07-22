// TESTCASE-1 JADI  CLIENT SIDE ASUTHIBA sabu jaka DATA JADI DATABASE SIDE THIBA DATA SAHITA MATCH KARU NAHI ("YOU ARE NOT A VALID USER")
// TESTCASE-2 JADI  CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA DATA SAHITA MATCH KARIBA ("YOU ARE LOGGED IN")//statusCode 200
// TESTCASE-3 JADI FIRSTNAME  JOTAKI CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA FIRSTNAME DATA SAHITA MATCH KARU NAHI ("YOUR FIRSTNAME IS INVALID")
// TESTCASE-4 JADI LASTNAME  JOTAKI CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA LASTNAME DATA SAHITA MATCH KARU NAHI ("YOUR LASTNAME IS INVALID")
// TESTCASE-5 JADI EMAIL  JOTAKI CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA EMAIL DATA SAHITA MATCH KARU NAHI ("YOUR EMAIL IS INVALID")
// This Below Mentioned data Coming From  Client Side
const fName = "ChepiChepa17";
const lName = 'Swain';
const email = "st.sameer.builder.24@gmail.com"
const mobileNo = "9583636596";
const password2 = "SameerSweety@17";

// This Below Mentioned Data Has At  DATABASE Side
const dbfName = 'ChepiChepa';
const dblName = 'Swain';
const dbemail = "st.sameer.builder.24@gmail.com"
const dbMobileNo = 9583636596;
const dbPassword = "SameerSweety@17";

if(fName===dbfName && lName === dblName && email === dbemail && mobileNo === dbMobileNo && password2 === dbPassword){
console.log("YOU ARE LOGGED IN")

}
else if(fName != dbfName  ){
    console.log("YOUR FIRSTNAME IS INVALID")
}
else if(lName != dblName){
    console.log("YOUR LASTNAME IS INVALID")
}
else if(email != dbemail){
    console.log("YOUR EMAIL IS INVALID")
}
else if( mobileNo != dbMobileNo){
    console.log("YOUR MOBILE NO IS INVALID")
}
else if(password2 != dbPassword){
    console.log("YOUR PASSWORD IS INVALID")
}
else{
    console.log("YOU ARE NOT A VAILD USER")
}