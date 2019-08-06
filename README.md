# hilton-code-assessment

test 1 &amp; 2.

#test 1

- test 1 is a compressed file at root (Hilton-Assessment-1.zip)
- uncompress the folder and open index.html in a browser, it's a static site with no builder.

#test 2 install

- npm install

#test 2 run

- npm run dev
- go to http://localhost:3000/index (this has the useState version of the site)
- go to http://localhost:3000/index-reducer (this has the useReducer version of the site)

#test 2 testing

- 'npm test' or 'npm run test'

#justifications
the following are justifications I used for various parts of assessment 1 and 2

- Assessment 1
  -- I made the image 100% width for the hotel even knowing it will stretch at higher tablet settings
  primarily because there would be an image answer for this in a real world scenario.
  -- with flat images, can only guess at fonts so left it default, with font-sizes tried to make best guess based
  on what I could measure

- Assessment 2
  -- uses localstorge for the submit save and reload. I don't have a database for this and no api so that was the best solution I could
  come up with for page refreshes.
  -- after 1st round of PR Changes from Hilton developers, I kept /index to be the local state version moving all of state to index.js, However I also created an index-reducer page where I swapped out all of the local state for reducers. It functions the same as /index, but you'll notice the components names will have -reducer to their name (i.e. adultpop-reducer.js) as a quick way to differentiate them from each other.
