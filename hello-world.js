function greetings() {
    console.log("HELLO WORLD");
}

if (require.main === module) greetings();

module.exports = { greetings };