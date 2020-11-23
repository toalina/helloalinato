# Code for [helloalinato.com](https://helloalinato.com)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Deployed via Github Pages and `gh-pages` npm package.

Use `yarn`! We love `yarn`.

[Updated 08-14-2020]
## Github > Settings > Github Pages
Make sure `Source` branch is set to `gh-pages` and not `master`

## To run app locally:
- `yarn start`
- http://localhost:3000

## Work flow!
_`develop` is our safe and stable branch with all the code._

### To make update to website:
- Create `feature` branch off `develop`
  - i.e. `shop` branch
- Do development work on `feature` branch
- When finished adding new changes, on `feature` branch:
  - `git add .`
  - `git commit -m "added cool new feature"`
  - `git push origin `feature`
- Create Pull Request to merge `feature` into `develop`

_Now we don't do anything with `develop`! It's the safe branch with most current code._

### Now you're ready to deploy:
- On `feature` branch: `yarn run deploy`
  - This will create a `/build` folder with static files and a `gh-pages` branch. It will also push that up to Github automatically -- Nothing for me to do except run `yarn run deploy`!
- On Github repo > Settings:
  - Scroll down to "Github Pages" section
  - Make sure `Source` is `gh-pages` at /root folder
  - Update custom domain to `helloalinato.com` and hit Save
    - It resets to `github.io` each time for some reason...

## What's up with `master` branch?
A while ago, Github Pages only allow you to develop and deploy from `master` branch only. When deployment happens, it only cares about static files. So whenever something is pushed to `master` branch, it automatically strips everything that is not static files (i.e. package.json, README.md...)

Then, when you pull from `master`, or branch off `master`, all your work is gone. Why? I do not know.

Whatever you do, DO NOT:
- DO NOT pull from `master`
- DO NOT create `feature` branch off `master`
- Basically, NOTHING happens on `master` and it only has static files. So if you pull from `master` into `develop` or `feature`, all your hard work will be gone!


