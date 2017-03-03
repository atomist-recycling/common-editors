// Generated by Rug to TypeScript transpiler.

import { EditProject } from '@atomist/rug/operations/ProjectEditor'
import { PathExpressionEngine } from '@atomist/rug/tree/PathExpression'
import { Editor, Tags, Parameter } from '@atomist/rug/operations/Decorators'
import { Pattern } from '@atomist/rug/operations/RugOperation'
import { Project } from '@atomist/rug/model/Core'

/**
    AddApacheSoftwareLicense20
    add the Apache Software License version 2.0 file
 */

@Editor("AddApacheSoftwareLicense20", "add the Apache Software License version 2.0 file")
@Tags("apache", "license", "documentation")
class AddApacheSoftwareLicense20 implements EditProject {

    edit(project: Project) {

        let eng: PathExpressionEngine = project.context().pathExpressionEngine();

        let license = "ApacheSoftwareLicenseV20";

        let licenseFilename = "LICENSE";

        let p = project
        p.copyEditorBackingFileOrFail(license, licenseFilename)

    }

}
export let editor_addApacheSoftwareLicense20 = new AddApacheSoftwareLicense20();