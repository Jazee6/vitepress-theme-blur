import {createContentLoader} from 'vitepress'

export interface Post {
    title: string
    url: string
    date: {
        time: number
        string: string
    }
    excerpt: string | undefined
    img: string | undefined
}

declare const data: Post[]
export {data}

export default createContentLoader('posts/*.md', {
    excerpt: true,
    transform(raw): Post[] {
        return raw
            .map(({url, frontmatter, excerpt}) => ({
                title: frontmatter.title,
                url,
                excerpt,
                date: formatDate(frontmatter.date),
                img: frontmatter.img,
                hide: frontmatter.hide
            }))
            .sort((a, b) => b.date.time - a.date.time)
            .filter((post) => !post.hide)
    }
})

function formatDate(raw: string): Post['date'] {
    const date = new Date(raw)
    return {
        time: +date,
        string: date.toLocaleDateString()
    }
}