async function makeTwoRequests() {

    try {
        let data1 = await fakeRequestCallback('/page');
        console.log(data1);
    } catch (e) {
        console.log("It's okay", e);

    }
}