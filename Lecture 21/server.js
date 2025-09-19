const client = require('./client')

// async function server()
// {
//     const res1 = await client.set("flower:1","tulip")
//     console.log(res1);
//     const res2 = await client.get("flower:1")
//     console.log(res2)

//     const res3 = await client.set("flower:2", "Rose")
//     console.log(res3)
//     const res4 = await client.get("flower:2")
//     console.log(res4)
// }

async function server()
{
    const user =
    {
        name : "Saumya",
        age : "20",
        description : "I am ..",
    };
    await client.mset(user);
    const name = await client.get("name");
    console.log(name);

    const age = await client.get("age");
    console.log(age);

    const all = await client.mget("name","age","description");
    console.log(all);

    await client.del(["name","description"]);

    const exists = await client.exists("name");
    console.log(exists);

    await client.incrby("age",1);
    const newAge = await client.get("age");
    console.log(newAge);

    await client.set("key_with_ttl","hey","EX",1000)
    const ttl = await client.ttl("key_with_ttl");
    console.log(ttl)
}
server();