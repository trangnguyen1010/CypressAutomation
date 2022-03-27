const ChatBoxPage = require("../pages/ChatBoxPage");

describe("Do Text box", () => {
  beforeEach(() => {
    ChatBoxPage.open();
  });

  it("Doing a completed answer for online interview", () => {
    //verify the page loading message correctly
    ChatBoxPage.verifyLoadingPage();

    //answer the interview question
    ChatBoxPage.answerQuestion();
  });

  it("Verify the error message popup is displayed once user type less than 50 words", () => {
    //verify that page loading correctly
    ChatBoxPage.verifyLoadingPage();

    //enter the incorrect answer:
    ChatBoxPage.invalidAnswer();
  });
});
