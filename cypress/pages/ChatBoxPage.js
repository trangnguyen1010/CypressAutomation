import {
  checkMessage,
  checkSingleMess,
  enterValue,
  selectOption,
} from "../support/commands";

class ChatBoxPage {
  open() {
    // clear cookies again after visiting to remove
    // any 3rd party cookies picked up such as cloudflare

    cy.clearCookies();
    cy.clearLocalStorage("ASSESSMENT_CACHE");
    cy.visit("/");
  }

  verifyLoadingPage() {
    cy.fixture("locator").then(function (locatorEl) {
      this.locatorEl = locatorEl;
      cy.fixture("testdata").then(function (inputdata) {
        this.inputdata = inputdata;
        //verify the page is loading
        cy.get(locatorEl.locatorMess).should("exist");

        //verify the introduction message is display properly

        cy.fixture("messages").then(function (message) {
          this.message = message;
          checkMessage(locatorEl.locatorMess, message.welcomeMessage);

          //verify the youtube video is displayed
          cy.get(locatorEl.locatorVideo).should("be.visible");

          //verify the introduction message is display properly
          checkMessage(locatorEl.locatorMess, message.welcomeMessageCon);

          //verify the input field is shown properly
          cy.get(locatorEl.editorBox).should("be.visible");
          cy.get(locatorEl.locatorInput)
            .contains(message.placehoder)
            .should("be.visible");

          //enter the test name
          enterValue(locatorEl.locatorInput, inputdata.name);

          //verify the name is displayed properly
          cy.get(locatorEl.locatorMess)
            .contains(inputdata.name)
            .should("be.visible");

          //enter the email
          enterValue(locatorEl.locatorInput, inputdata.email);

          //verify the email is displayed properly
          cy.get(locatorEl.locatorMess).contains(inputdata.email);

          //select the country to input mobile number
          cy.get(locatorEl.locatorDropdownInput)
            .should("be.visible")
            .type(inputdata.selectedCountry);
          //select the country from the dropdown list
          cy.get(locatorEl.locatorDropdownList)
            .contains(inputdata.selectedCountry)
            .should("be.visible")
            .then((option) => {
              cy.wrap(option).contains(inputdata.selectedCountry);
              option[0].click();
            });

          //enter tthe phone number
          enterValue(locatorEl.locatorInput, inputdata.phoneNum);

          //verify the phone number is displayed properly
          cy.get(locatorEl.locatorMess).contains(inputdata.phoneNum);

          //enter the address
          cy.get(locatorEl.locatorInput).type(inputdata.address);
          cy.get(locatorEl.locatorAddress)
            .contains(inputdata.addressDetail)
            .click();

          cy.get(locatorEl.optionList).contains("Accept").click();

          //verify the message is displayed once user click on Accep btn
          checkMessage(locatorEl.locatorMess, message.arrayMessBeginTest);
        });
      });
    });
  }

  answerQuestion() {
    cy.fixture("locator").then(function (locator) {
      this.locator = locator;
      cy.fixture("answer").then(function (answerdata) {
        this.answerdata = answerdata;
        enterValue(locator.locatorInput, answerdata.firstAnswer);

        //verify the second question is shown
        checkSingleMess(answerdata.secondQuestion);

        //enter the answer for the second question
        enterValue(locator.locatorInput, answerdata.secondAnswer);

        //verifying the second answer is displayed properly
        checkSingleMess(answerdata.secondAnswer);
        checkSingleMess(answerdata.thirdQuestion);

        //enter the answer for the third question
        enterValue(locator.locatorInput, answerdata.thirdAnswer);
        //validate the answer is displayed on screen
        checkSingleMess(answerdata.thirdAnswer);
        checkMessage(locator.locatorMess, answerdata.fourthQuestion);

        //enter the answer for the fourth question
        enterValue(locator.locatorInput, answerdata.fourthAnswer);

        //check the answer is displayed
        checkSingleMess(answerdata.fourthAnswer);
        checkSingleMess(answerdata.fifthQuestion);

        //enter the answer for the fifthQuestion
        enterValue(locator.locatorInput, answerdata.fifthAnswer);

        //verify that the identification message is displayed once user finished the answer for the fifth question
        cy.fixture("messages").then(function (message) {
          this.message = message;
          checkMessage(locator.locatorMess, message.identificationMess);

          //select identify
          selectOption(locator.optionList, locator.locatorId, message.option);

          //verify the identify on screen
          checkSingleMess(message.option);

          //check select language option

          checkSingleMess(message.languageCheck);

          //select the identity option
          selectOption(locator.optionList, locator.locatorId, message.option);

          //verify the selected language
          checkSingleMess(message.option);
          //select age
          selectOption(locator.optionList, locator.locatorId, message.ageGroup);
          //verify the age group
          checkSingleMess(message.ageGroup);
          //verify the submit message before submitting
          checkSingleMess(message.submitMess);

          //click on Submit btn
          selectOption(locator.optionList, locator.locatorId, message.submit);
          checkSingleMess(message.submit);

          //verify the sucessful message is display once user click on Submit butotn
          checkMessage(locator.locatorMess, message.successfulMess);
          cy.get("button").contains(message.submitRating).click();

          //the last message
          checkSingleMess(message.finalMessage);
        });
      });
    });
  }

  invalidAnswer() {
    cy.fixture("locator").then(function (locator) {
      this.locator = locator;

      //enter the incorrect answer for the first question
      cy.fixture("answer").then(function (answer) {
        this.answer = answer;
        enterValue(locator.locatorInput, answer.incorrectAnswer);
      });

      //verify the popup error message is display once user input less than 50 words for the answer
      cy.get(locator.errPopMess).should("be.visible");
      cy.fixture("messages").then(function (message) {
        this.message = message;
        cy.get(locator.errPopMess)
          .contains(message.headerErrMess)
          .should("exist");
      });
    });
  }
}

module.exports = new ChatBoxPage();
