// 14. You should be able to reduce duplicate characters to a maximum allowed

 // 15. You should be able to reverse a string
 const sentence = 'me gusta mucho programar'

 const reverseString = (str) =>{
    const separate = str.split('')
    const reverse = separate.reverse()
    const join = reverse.join('')
    console.log(join)
 }

 console.log(reverseString(sentence))