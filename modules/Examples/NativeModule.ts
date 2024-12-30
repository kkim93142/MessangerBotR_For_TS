try {
    console.log(org.jsoup.Jsoup.connect("https://google.com").get().html());
} catch(e) {
    console.error("Error occured! Error: " + e);
}

//android, org, jave ... etc