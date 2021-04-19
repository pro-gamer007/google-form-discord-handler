// eslint-disable-next-line no-unused-vars
function OnSubmit() {
	// eslint-disable-next-line no-undef
	const form = FormApp.getActiveForm();
	const formResponses = form.getResponses();
	const latestresponse = formResponses[formResponses.length - 1];
	const response = latestresponse.getItemResponses();
	const answers = {};
	answers.name = response[0].getResponse();
	answers.tag = response[1].getResponse();
	answers.appLink = response[2].getResponse();
	answers.downloadLink = response[3].getResponse();

	const options = {
		'method': 'post',
		'contentType': 'application/json',
		'payload': JSON.stringify(answers),
	};
	// eslint-disable-next-line no-undef
	Logger.log(answers);
	// eslint-disable-next-line no-undef
	UrlFetchApp.fetch('link', options);
}