module.exports = function(eleventyConfig) {

    const mObjOrder = {
        "inicio": 0,
        "javascript": 1,
        "node": 2,
        "eleventy(11ty)": 3,
        "sql": 4,
        "sql_lite": 5,
        "computer_Science": 6,
        "python": 7,
        "git": 8,
        "recursos": 9,
        "otros": 10
    }

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

        let mArrOrder = [];
        Object.keys(mObjOrder).forEach(mRowOrder => {
            let mObjResponse = mSubArr.find(mRowTemp => mRowTemp.parent.template.fileSlugStr == (mRowOrder == "inicio" ? "":mRowOrder))

            mObjResponse.children.sort((a, b) => {
                const nameA = a.data.title?.toLowerCase() || "";
                const nameB = b.data.title?.toLowerCase() || "";
                return nameA.localeCompare(nameB);
            });

            mArrOrder[mObjOrder[mRowOrder]] = mObjResponse
        })

        return mArrOrder;
    })

    eleventyConfig.addPassthroughCopy("styles")

    return {
        dir: {
            input: "notes",
            includes: "../_includes",
            output: "_site"
        },
        pathPrefix: "/",
    };
};