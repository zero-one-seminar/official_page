import metadataParser from 'markdown-yaml-metadata-parser'
import * as fs from "node:fs";


const convertTags2List = (tags) => {
    if (!tags) return []
    else if (typeof tags == "string") return [tags]
    else return tags
}

const convertTags2Yaml = (tags) => {
    if (tags.length == 0) return undefined
    else {
        const tagList = "- " + tags.join("\n- ")
        return `tags: \n${tagList}`
    }
}

const convertMd = (fileName) => {
    fs.readFile(`./source/_posts/${fileName}`, "utf-8", (err, file) => {
        const markdown = metadataParser(file)
        if (markdown.metadata.created_at && markdown.metadata.updated_at) {
            const metadata = {
                title: markdown.metadata.title,
                categories: markdown.metadata.category,
                tags: convertTags2List(markdown.metadata.tags),
                date: markdown.metadata.created_at,
                updated: markdown.metadata.updated_at,
            }
            const data = "---\n" +
                (metadata.title ? "title: " + metadata.title + "\n" : "") +
                (metadata.categories ? "categories: " + metadata.categories + "\n" : "") +
                (convertTags2Yaml(metadata.tags) ? convertTags2Yaml(metadata.tags) + "\n" : "") +
                (metadata.date ? "date: " + metadata.date + "\n" : "") +
                (metadata.updated ? "updated: " + metadata.updated + "\n" : "") +
                "---"
                + markdown.content
            fs.unlink(`./source/_posts/${fileName}`, err => { if (err) console.log(err) })
            fs.writeFile(`./source/_posts/${markdown.metadata.number}.md`, data, err => { if (err) console.log(err) })
        }
    })
}


fs.readdir('./source/_posts', (err, files) => {
    if (err) console.log(err)
    files.forEach(file => { convertMd(file) })
});

