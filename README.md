# PopManga

## Install

`npm install`

## Run

`npm start`

## Git pre-commit hook

`echo -e '#!'"$SHELL""\n\nnpm run build\ngit add ./docs" > ./.git/hooks/pre-commit && chmod +x ./.git/hooks/pre-commit`
