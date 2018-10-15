export const getGoogleArticle = (title, img, alt) => {
    return {
        "@context": "http://schema.org/",
            "@type": "Article",
            "name": title,
            "headline": "aricle headline",
            "author": "Elaine Smith",
            "publisher": {
                "@type": "Organization",
                "email": "test@gmail.com",
                "name": "IoH",
                "url": img,
                "logo": {
                    "@type": "ImageObject",
                    "thumbnail": img,
                    "url": img
                }
            },
            "mainEntityOfPage":{
                "@type": "CreativeWork",
                "name": "my creative vid",
                "about": "solving resident evil armor key puzzle"
            },
            "image": img,
            "thumbnailUrl": img,
            "description": "A classic apple pie.",
            "about": "How people solve problems",
            "articleSection":"People are a mystery. We break mysteries down by analyzing their simpeles examples. So, we're analyzing video game puzzles",
            "timeRequired": "P30M",
            "dateModified": "20181009T050200Z",
            "datePublished": "20181009T050200Z"
    }
  }