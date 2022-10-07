function Make_Album(artist_name, album_title, tracks = 2) {

    let obj =
    {
        artist_name: artist_name,
        album_title: album_title,
        tracks: tracks
    }
    return obj
}

document.write("<strong>OPEN CONSOLE</strong>")

console.log(Make_Album("Atif Aslam", "Album 1"))
console.log(Make_Album("Ali Zafar", "Album 2", 5))
console.log(Make_Album("Junaid Jamshed", "Album 3"))