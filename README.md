# PDFoundry

This is a simple Fork of PDFoundry, only change is to use an unchanged PDF.js build so download and printing works

THIS IS NOT TESTED IN DEPTH!

According to the orignial Author:

    "*You will cause multiple features to break if you use a version of PDF.js
    not built for PDFoundry.* This is not supported behavior and was
    deliberately not included. It may be one day but I see no clear solution
    for dealing with conflicts that will arise due to the multiple user nature
    of foundry and the single source nature of files."
    
So use on your own risk!

PDFoundry (pronounced *Pee-Dee-Foundry*/*pi di ˈfaʊndri*) is a *fully featured* PDF viewer for FoundryVTT!  PDFoundry supports a full suite of features for viewing PDFs right in Foundry VTT. Fillable forms, bookmarks, page links in journals and LOTS more. You can even use a form fillable PDF character sheet for an actor!


[Please consider supporting me on Ko-Fi](https://ko-fi.com/djsmods)

#### Thanks to
Spanish localization: [José E. Lozano (lozalojo)](https://github.com/lozalojo)

French localization: [Baktov](https://github.com/Baktov)

## Community Resources
[Tutorials and resources created by users of PDFoundry can be found here](https://github.com/Djphoenix719/PDFoundry/wiki/Community-Resources)

## Setup
PDFoundry is easily installable - find it in the modules list inside Foundry VTT. Alternatively, you can use the manifest link below.

### Manifest
> https://raw.githubusercontent.com/Djphoenix719/PDFoundry/master/module.json

## System Developers
I highly recommend you do not bundle PDFoundry - if you do however, the module version will disable itself and display a warning to the user. Instead, you can see the [documentation](https://djphoenix719.github.io/PDFoundry/index.html) for an example of checking for the presence of PDFoundry, and enabling additional support if it is found.

### Building PDFoundry
If you wish to build PDFoundry yourself - most commonly because you want to contribute - you can do the following.

1. Clone the repository anywhere
2. Copy `foundryconfig.example.json` and rename it `foundryconfig.json`. Edit the dataPath to your data folder.
2. Open a terminal, navigate to the repository directory
3. Run `npm install`
4. Run `gulp build` to perform a one off build, or `gulp watch` to perform incremental builds as you change things

### API Examples

See the [documentation](https://djphoenix719.github.io/PDFoundry/index.html) for details and examples.

## Roadmap
See the [development board](https://github.com/Djphoenix719/PDFoundry/projects/1#column-9772243) for a list of planned features, roughly in the order I plan to get to them.
