export const getMessageListApi = async () => {
    let data;
    await fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
        .then((res) => res.json())
        .then((body) => {
            data = body.results

        })
        .catch(() => {
            alert("error")
        });
    return data
}

