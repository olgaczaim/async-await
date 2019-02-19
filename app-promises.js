const users = [{
    id: 1,
    name: 'Andrew',
    schoolId: 101
}, {
    id: 2,
    name: 'Jessica',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);

    if (user) {
        resolve(user);
    } else {
        reject(`Unable to find user with id of ${id}.`);
    }
});
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
});
};

// Andrew has a 83% in the class
const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
    return getGrades(user.schoolId);
}).then((grades) => {
        let average = 0;

    if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average}% in the class.`;
});
};

getStatus(123).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});


:template
    [[0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,4,4,3,3,2,3,3,4,4,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,4,3,3,2,2,2,3,3,4,0,0,0,0,4,2,4,4,4,2,4,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,4,4,4,4,4,4,4,4,4,0,0,4,0,4,4,4,4,4,4,4,0,0,0,4,4,0,4,4,0,4,4,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,4,4,2,4,2,4,2,4,4,0,0,0,4,0,0,4,4,4,0,0,0,0,4,0,4,4,4,4,4,4,0,4,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,4,2,2,2,2,2,4,0,0,0,0,0,4,4,4,4,4,4,4,0,0,4,0,4,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,4,0,4,0,4,0,4,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0]]

000044444440000004000400000400004000000000000
000443323344000044444440000040040000000000000
000433222334000042444240000444444000000000000
000444444444004044444440004404404400000000000
000442424244000400444000040444444040000000000
000042222240000044444440040400004040000000000
000004444400000040404040000040040000000000000