// import {BasePage} from "./BasePage.js"

// export class NewRegistration extends BasePage
// {

//     constructor(page)
//     {
//         super(page);
//         this.page = page;
//         this.name=page.getByPlaceholder("Name");
//         this.email=page.getByPlaceholder("Email");
//         this.password=page.getByPlaceholder("Password");

//         // this.intrests=page.getByLabel("Interests");
        
//         this.java=page.getByLabel("Java");
//         this.selelium=page.getByLabel("Selenium");
        
//         this.genderMale=page.locator("#gender1")
//         this.genderFemale=page.locator("#gender2")

//         this.State=page.locator("#state")
//         this.hobbies=page.locator("#hobbies")

//         this.signUpButton=page.getByRole("button",{name:"Sign Up"})        

// }

//     async userDetails(name,email,password){

//         await this.type(this.name,name);
//         await this.type(this.email,email);
//         await this.type(this.password,password);    
//     }

//     async selectGender(gender){
//         if(gender.toLowerCase()==="male")
//         {
//             await this.click(this.genderMale);
//         }
//         else if(gender.toLowerCase()==="female")
//         {
//             await this.click(this.genderFemale);
//         }
//     }

//     async selectInterest(interest){
//          if(interest.toLowerCase()==="java")
//         {
//             await this.click(this.java);
//         }
//         else if(interest.toLowerCase()==="selenium")
//         {
//             await this.click(this.selelium);
//         }


//     }

//    async selectState(state){
//         await this.handleDropdown(this.State,state);
//    }

//     async selectHobbies(hobby){
//         await this.handleDropdown(this.hobbies,hobby);
//     }

//     async signUp(){
//         await this.click(this.signUpButton)
//     }


// }
