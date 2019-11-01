# Maxwell Health Engineering Blog

## Building & Running

The blog is built using hugo

```bash
brew install hugo

# To run locally simply run and visit `localhost:1313`

hugo serve
```

to include draft posts in the server

```
hugo serve -D
```

## Contributing Content

1. Create a new branch
1. Create a new markdown file under `content/posts/`
1. Write your article and include any front matter including your name and if you have a gravatar associated with an email, that email.
1. If you don't have one, create a new folder and `_index.md` in the `content/author` directory.
1. Open a PR and have [@securingsincity](https://github.com/securingsincity) review.
1. Once approved, it will be merged and the build will make it live on the site.
