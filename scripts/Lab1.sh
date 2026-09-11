#!/bin/bash

set -eu

RED='\e[31m'
GREEN='\e[32m'
RESET='\e[0m'

echo -e "${GREEN}\nEnter Your Name: ${RESET}"
read NAME

echo -e "${GREEN}\nEnter some sentence: ${RESET}"
read SENTENCE

echo -e "${GREEN}\nEnter the banch name of your choice: ${RESET}"
read BRANCHNAME

START_DIR="$(dirname "$(cd "$(dirname "$0")" && pwd)")/Labs/Lab1"

mkdir -p "$START_DIR"

message() {
  printf "${RED}\n%s\n\n${RESET}" "$1"
}

DEFAULT1="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
echo -e "${GREEN}\nEnter Link 1: (Press enter for default link)"
read LINK1
LINK1="${LINK1:-$DEFAULT1}"

DEFAULT2="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
echo -e "${GREEN}\nEnter Link 2: (Press enter for default link)"
read LINK2
LINK2="${LINK2:-$DEFAULT2}"

DEFAULT3="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
echo -e "${GREEN}\nEnter Link 3: (Press enter for default link)"
read LINK3
LINK3="${LINK3:-$DEFAULT3}"

executeCommand() {
  printf ' %q' "$@"
  printf '\n'
  "$@"

  printf '\n'
}

cd "$START_DIR"

printf "Initialize Git\n\n"

message "Initialize Git"

message "Cleaning up files from previous runs"
rm -rf .git About.md index.html gallery.html css scripts images .gitignore

executeCommand git init

message "Checking if the branch name is Master or Main"

if [ "$(git branch --show-current)" == "master" ]; then
  message "Chaning branch name from Master to Main"
  executeCommand git branch -M main
else
  message "Branch Name already to main"
fi

message "Creating a gitignore file"
echo "Lab1.sh" >Lab1.gitignore

message "Commiting this to the ignore file"
executeCommand git add .
executeCommand git commit -m "added the gitignore file"

message "Create a File and add some data to it"

cat >About.md <<EOF
Hi I am $NAME
$SENTENCE
EOF

message "Add this to the Staging:"
executeCommand git add About.md

message "Get Status of the project"
executeCommand git status

message "commit the About.md file"
executeCommand git commit -m "added the About.md"
executeCommand git status

message "Checking the log"
executeCommand git log --oneline

message "Adding files and folders"

cat >index.html <<EOF
<!DOCTYPE html>
<html>
<head>
    <title>Explore India</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>

<header>
    <h1>Explore India!!</h1>

    <nav>
        <a href="#">Home</a>
        <a href="#">Places</a>
        <a href="./gallery.html">Gallery</a>
        <a href="#">Contact</a>
    </nav>
</header>

<section class="hero">
    <h2>Discover Incredible India</h2>
    <p>Experience culture, heritage and nature.</p>

    <button onclick="showMessage()">
        Explore More
    </button>
</section>

<section class="places">

    <div class="card">
        <h3>Taj Mahal</h3>
        <p>Agra, Uttar Pradesh</p>
    </div>

    <div class="card">
        <h3>Kerala Backwaters</h3>
        <p>God's Own Country</p>
    </div>

    <div class="card">
        <h3>Goa Beaches</h3>
        <p>Sun, Sand and Sea</p>
    </div>

</section>

<footer>
    <p>© 2026 Explore India</p>
</footer>

<script src="./scripts/script.js"></script>

</body>
</html>
EOF

mkdir -p ./css

cat >./css/style.css <<EOF
body{
    font-family: Arial;
    margin:0;
}

header{
    background:#ff9933;
    color:white;
    padding:20px;
    text-align:center;
}

nav a{
    color:white;
    text-decoration:none;
    margin:15px;
}

.hero{
    text-align:center;
    padding:50px;
}

button{
    padding:10px 20px;
}

.places{
    display:flex;
    justify-content:center;
    gap:20px;
    margin:30px;
}

.card{
    border:1px solid gray;
    padding:20px;
    width:200px;
}

/* Gallery Section */
.gallery {
    padding: 40px;
    text-align: center;
}

.gallery h2 {
    margin-bottom: 30px;
    font-size: 32px;
}

/* Gallery Cards */
.gallery-container {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
}

.gallery-card {
    width: 300px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Images */
.gallery-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

/* Image Title */
.gallery-card h3 {
    padding: 15px;
    margin: 0;
    font-size: 20px;
}
EOF

mkdir -p ./scripts

cat >./scripts/script.js <<EOF
function showMessage()
{
    alert("Welcome to Incredible India!");
}
EOF

message "Before Adding the New Changes"
executeCommand git status

message "Adding this to the Staging server"
executeCommand git add .

message "Checking the new status"
executeCommand git status

message "Commiting this with a message"
executeCommand git commit -m "Added the HTML, CSS, and JS code to the remote"
executeCommand git status

message "Checking logs of the new commit"
executeCommand git log --oneline

message "Creating a branch in using git"
executeCommand git branch
executeCommand git switch -c "$BRANCHNAME"
executeCommand git branch

message "Creating Gallery Folders and routes of this branch"

cat >./gallery.html <<EOF
<!DOCTYPE html>
<html>

<head>
    <title>Explore India - Gallery</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>

<header>
    <h1>Explore India!!</h1>

    <nav>
        <a href="./index.html">Home</a>
        <a href="./index.html#places">Places</a>
        <a href="./gallery.html">Gallery</a>
        <a href="#">Contact</a>
    </nav>
</header>

<section class="gallery">
    <h2>Explore India Gallery</h2>

    <div class="gallery-container">

        <div class="gallery-card">
            <img src="./images/tajmahal.jpg" alt="Taj Mahal">
            <h3>Taj Mahal</h3>
        </div>

        <div class="gallery-card">
            <img src="./images/kerala.jpg" alt="Kerala Backwaters">
            <h3>Kerala Backwaters</h3>
        </div>

        <div class="gallery-card">
            <img src="./images/goa.jpeg" alt="Goa Beaches">
            <h3>Goa Beaches</h3>
        </div>

    </div>
</section>

<footer>
    <p>© 2026 Explore India</p>
</footer>

<script src="./scripts/script.js"></script>

</body>
</html>
EOF

if [ -d './images' ] && [ "$(ls -a ./images/*.jp* 2>/dev/null | wc -l)" -eq 3 ]; then
  message "Images are there and the file is present"
  rm -rf ./images
fi

mkdir -p ./images

wget -O ./images/goa.jpeg "$LINK1"
wget -O ./images/kerala.jpg "$LINK2"
wget -O ./images/tajmahal.jpg "$LINK3"

message "Added all the gallery code to the project"
executeCommand git status

message "adding all the data to the staging server and then merging it"
executeCommand git add .
executeCommand git commit -m "Added the Gallery Code and the images to the project"

message "Switching to main and then Mering it to the $BRANCHNAME"
executeCommand git switch main
executeCommand git merge "$BRANCHNAME"

message "Getting git Status"
executeCommand git status

message "Saving this copy to another branch $BRANCHNAME"
executeCommand git branch "tmp-$BRANCHNAME"

message "Reverting to the original Command"
executeCommand git revert --no-edit HEAD~2

message "Can i delete all of the data y/n"
read RESPONSE

if [ "$RESPONSE" == "Y" ] || [ "$RESPONSE" == "y" ]; then
  find . -mindepth 1 ! -name 'Lab1.sh' -exec rm -rf -- {} +
fi

echo -n "Doneeeee"
