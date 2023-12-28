
export function prepare(newMacro) {

    const macroExtensions = {
        "CDE": newMacro().typeAlphanumeric("woah this shit worked gr8"),
    };

    return { macroExtensions };
}
