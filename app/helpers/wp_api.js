// Aqui es de donde axederemos a la api
//aqui usaremos un ejemplo

const NAME='css-tricks',
DOMAIN = `http://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
API_WP=`${SITE}/wp/v2`,
POSTS =`${API_WP}/posts?_embed`,
POST = `${API_WP}/posts`,
SEARCH = `${API_WP}/search?_embed&search=`

//EXPORTAMOS TODOS LOS ACCESOS A MI SPA PARA UTILIZARLO COMO VARIABLES
export default{
    NAME,DOMAIN,SITE,API_WP,POST,POSTS,SEARCH
}