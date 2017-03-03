// Generated by Rug to TypeScript transpiler.

import { EditProject } from '@atomist/rug/operations/ProjectEditor'
import { PathExpressionEngine } from '@atomist/rug/tree/PathExpression'
import { Editor, Tags, Parameter } from '@atomist/rug/operations/Decorators'
import { Pattern } from '@atomist/rug/operations/RugOperation'
import { Pom, Project } from '@atomist/rug/model/Core'

/**
    PomParameterizer
    updates a Maven pom to a new group, artifact, version and description
 */
@Editor("PomParameterizer", "updates a Maven pom to a new group, artifact, version and description")
@Tags("java", "apache", "maven")
class PomParameterizer implements EditProject {

    @Parameter({
        displayName: "Artifact ID",
        description: "Artifact identifier used by Maven",
        pattern: "^[a-z][-a-z0-9_]*$", // todo: replace with Pattern.artifact_id after a fix in rug
        validInput: "A valid Maven artifact ID, which starts with a lower-case letter and contains only alphanumeric, -, and _ characters"
    })
    artifact_id: string

    @Parameter({
        displayName: "Group ID",
        description: "Group identifier used by Maven",
        pattern: Pattern.group_id,
        validInput: "A valid Maven group ID, which starts with a letter, -, or _ and contains only alphanumeric, -, and _ characters and may having leading period separated identifiers starting with letters or underscores and containing only alphanumeric and _ characters."
    })
    group_id: string

    @Parameter({
        description: "Name of the project",
        pattern: Pattern.project_name,
        validInput: "Any valid Maven project name as per: https://maven.apache.org/guides/introduction/introduction-to-the-pom.html",
        minLength: 1
    })
    name: string

    @Parameter({
        displayName: "Version",
        description: "Current version of the project",
        pattern: Pattern.semantic_version,
        validInput: "A valid semantic version, http://semver.org"
    })
    version: string = "0.1.0"

    @Parameter({
        description: "Description of your new project",
        pattern: "^.*$"
    })
    description: string

    edit(project: Project) {
        let eng: PathExpressionEngine = project.context().pathExpressionEngine()
        eng.with<Pom>(project, '//Pom()', p => {
            if (p.path() == "pom.xml") {
                p.setArtifactId(this.artifact_id)
                p.setGroupId(this.group_id)
                p.setVersion(this.version)
                p.setProjectName(this.name)
                p.setDescription(this.description)
            }
        })
    }
}
export let editor_pomParameterizer = new PomParameterizer();