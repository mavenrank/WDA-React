const paginate = (followers) => {
    console.log("Inside Utils paginate()")
    const itemsPerPage = 10;
    const pages = Math.ceil(followers.length / itemsPerPage);
    console.log(`Number of Pages : ${pages}`);

    const newFollowers = Array.from({ length: pages }, (_, index) => {
        const start = index * itemsPerPage;
        console.log(`Start Index : ${start}`);
        return followers.slice(start, start + itemsPerPage);
    });

    console.log(`newFollowers => ${newFollowers}`);
    return newFollowers;
};

export default paginate;
