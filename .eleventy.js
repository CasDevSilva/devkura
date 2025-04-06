module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("notes", function (collectionApi) {
        const mArrFiles = collectionApi.getFilteredByGlob("notes/**/*.md")
        const mSubArr = [];

        mArrFiles.forEach(note =>{
            if (note.template.parsed.name == "index") {
                let mObjInfo = {}
                mObjInfo.parent = note;

                // Validamos hijos
                mObjInfo.children = mArrFiles.filter(child => child.template.parsed.dir == note.template.parsed.dir && child.template.parsed.name != "index");

                mSubArr.push(mObjInfo);
            }
        });

        return mSubArr;
    })

    return {
        dir: {
            input: "notes",
            includes: "../_includes",
            output: "_site"
        },
        pathPrefix: "/",
    };
};