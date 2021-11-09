
Given(/^que eu acesso a pagina da sulAmerica$/, () => {
	return true;
});

(/^desejo simular a contratação do seguro de vida$/, () => {
	return true;
});

When(/^informo meus dados: "([^"]*)", "([^"]*)" e "([^"]*)"$/, (args1,args2,args3) => {
	console.log(args1,args2,args3);
	return true;
});

When(/^clicar em próximo$/, () => {
	return true;
});

Then(/^deve seguir para à página formas de contato$/, () => {
	return true;
});

Given(/^estou na página de forma de contato$/, () => {
	return true;
});

Then(/^selecionar E-mail$/, () => {
	return true;
});

When(/^informar meu "([^"]*)" e marcar o checkbox de autorização$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^clicar em encontar meu seguro$/, () => {
	return true;
});

Then(/^$/, () => {
	return true;
});
