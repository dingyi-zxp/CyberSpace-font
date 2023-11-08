function emailVerify(email: string) {
    let reg: RegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    console.log(email, reg.test(email))
    return reg.test(email)

}

function nameVerify(fullName: string): boolean {
    return fullName.length != 0
}

function passwordVerify(password: string): boolean {
    return password.length >= 6
}

export {
    emailVerify,
    nameVerify,
    passwordVerify
}

