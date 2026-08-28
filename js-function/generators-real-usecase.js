// large dataset process

// for example get 1M user
const users = await prisma.user.findMany(); 
// but problem is 1M user can come into memory at once

// solution is use generator

function* usersGenerator(users) {
    for (const user of users) {
        yield user;
    }
}

const generator = usersGenerator(users);

console.log(generator.next().value);
console.log(generator.next().value);

// here, Instead of processing everythings at once, we can process them one by one

// real use case

// 1M users email processing
// CSV export
// Report generation
// Data migration
// Bulk processing
// Analytics calculation


// Database Pagination

async function* orderPages() {
    let page = 1;

    while (true) {
        const orders = await getOrders(page);

        if (orders.length === 0) {
            break;
        }

        yield orders;

        page++;
    }
}

// then 

for await (const orders of orderPages()) {
    console.log("Processing:", orders.length);

    await processOrders(orders);
}


// API Pagination / Infinite Data

async function* fetchUsers() {
    let page = 1;

    while (true) {
        const response = await fetch(
            `https://example.com/api/users?page=${page}`
        );

        const users = await response.json();

        if (users.length === 0) {
            return;
        }

        yield* users;

        page++;
    }
}

// then 

for await (const user of fetchUsers()) {
    console.log(user);
}

// Batch Processing

// Let's say we need to send notifications to 50000 users
// if run sendNotificationToAllUsers(); then server load problem happen

// to solve this need to use generator function with batching

async function* batches(items, size) {
    for (let i = 0; i < items.length; i += size) {
        yield items.slice(i, i + size);
    }
}

// then use 

const users = getUsers();

for await (const batch of batches(users, 100)) {
    await sendNotifications(batch);
}



// Queue / Job Processing

function* jobGenerator(jobs) {
    for (const job of jobs) {
        yield job;
    }
}

const jobs = jobGenerator(queue);

let job;

while (!(job = jobs.next()).done) {
    await processJob(job.value);
}