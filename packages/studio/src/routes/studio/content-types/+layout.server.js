const CONTENT_SCHEMAS = {
    articles: {
        uid: 1,
        name: {
            singular: 'article',
            plural: 'articles',
            display: 'Articles'
        },
        attributes: {
            uid: {
                type: 'uid'
            },

            title: {
                type: 'text'
            },

            createdAt: {
                type: 'datetime'
            },

            updatedAt: {
                type: 'datetime'
            }
        }
    },

    pages: {
        uid: 2,
        name: {
            singular: 'page',
            plural: 'pages',
            display: 'Pages'
        },
        attributes: {
            uid: {
                type: 'uid'
            },

            field_1: {
                type: 'text'
            },

            createdAt: {
                type: 'datetime'
            },

            updatedAt: {
                type: 'datetime'
            }
        }
    },
};

const ACCESS = {
    contentTypes: {
        articles: {
            global: {
                create: true,
                read: true,
                update: true,
                delete: true
            },

            fields: {
                field_1: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true
                }
            }
        }
    }
};

export function load({ params }) {
    console.log('load content-types');

    return {
        access: ACCESS,
        schema: Object.entries(CONTENT_SCHEMAS).reduce((acc, [name, contentType]) => {
            contentType.isOpen = params.content_type_id == contentType.id;
            acc[name] = contentType;

            return acc;
        }, {})
    }
}
