'use strict'

const Article = use("App/Models/Article")
const Helpers = use('Helpers')

class ArticleController {
    async index({response, view}) {
        const articles =  await Article.all()
        return response.send(view.render('articles.index', {articles: articles.toJSON()}))
    }

    async viewAdd({view, response}) {
        return response.send(view.render('articles.add'))
    }

    async add({request, response, session}) {
        const title = request.input('title')
        const content = request.input('content')
        const author = request.input('author')
        const date = request.input('date')

        const contentImage = request.file('image', {
            type: ['image'],
            size: '2mb',
            extnames: ['png', 'jpg', 'jpeg']
        })

        const articles = new Article();
        articles.title = title
        articles.content = content
        articles.image = `${new Date().getTime()}.${contentImage.subtype}`
        articles.author = author
        articles.date = date

        await contentImage.move(Helpers.publicPath('uploads/articles'), {
            name: articles.image
        })

        if (!contentImage.moved()) {
            session.flash({error: "Error File Tidak Sesuai Format ( PNG, JPG, JPEG )"})
            return response.redirect('/article')
        }

        articles.save()
        session.flash({notification: "Data Saved"})
        return response.redirect('/article')
    }

    async updateView({params, view}) {
        const articles = await Article.find(params.id)
        return view.render('articles.update', {articles: articles})
    }

    async update({request, response, session}) {
        const id = request.input('id')
        const title = request.input('title')
        const content = request.input('content')
        const author = request.input('author')
        const date = request.input('date')

        const contentImage = request.file('image', {
            type: ['image'],
            size: '2mb',
            extnames: ['png', 'jpg', 'jpeg']
        })

        const articles = await Article.find(id);
        articles.title = title ? title : articles.title
        articles.content = content ? content : articles.content
        articles.image = contentImage ? `${new Date().getTime()}.${contentImage.subtype}` : articles.image
        articles.author = author ? author : articles.author
        articles.date = date ? date : articles.date

        if (contentImage == null) {
            session.flash({notification: "Update Succeed"})
            articles.save()
            return response.redirect('/article')
        } else {
            await contentImage.move(Helpers.publicPath('uploads/articles'), {
                name: articles.image
            })
    
            if (!contentImage.moved()) {
                session.flash({error: "Error File Tidak Sesuai Format ( PNG, JPG, JPEG )"})
                return response.redirect('/article')
            }
    
            articles.save()
            session.flash({notification: "Update Succeed"})
            return response.redirect('/article')
        }
    }

    async delete({params, response, session}) {
        const articles = await Article.find(params.id)

        session.flash({notification: "Delete Succeed"})
        await articles.delete()

        return response.redirect('/article')
    }
}

module.exports = ArticleController
