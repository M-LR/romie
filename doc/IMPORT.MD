-   **Pour importer une librairie avec le langage JavaScript**, il existe la directive _"require"_.
-   Depuis l'arrivée de la <u>norme ES6 du langage</u>, une nouvelle directive est apparue : il s'agit de la directive _"import"_.
-   Cette directive apporte de nouveaux avantages mais nécessite que le module que vous importiez la prenne en charge.

> La directive "require" indique à JavaScript d'importer la totalité du module demandée. Si le module en question est lourd, cela peut allonger le délai d'affichage d'une page.

> `La directive "import" permet de n'importer qu'une partie spécifique d'un module. On gagne ainsi en légèreté et en rapidité de traitement. De plus, la directive import peut être utilisée de manière asynchrone. On peut continuer à exécuter du code ou à effectuer d'autres imports en parallèle de votre import initial. Ce n'est pas le cas de "require", qui fonctionne de manière synchrone et doit attendre la fin de l'import précédent avant de s'exécuter. Pour qu'un module puisse être utilisé avec la directive "import", celui-ci doit utiliser dans son code la directive "export".`

Dans NodeJS, il peut y avoir une confusion entre les deux directives. Par exemple, pour la plateforme Express JS, on trouve sur internet des morceaux de code avec les deux directives.

```sh
// Import avec require
const express = require("express");
//Import avec import
import express from "express";
```

Pourtant, la plateforme Express ne gère pas la directive "import". Si vous essayez cette directive sans avoir installé d'autres modules, vous obtiendrez le message d'erreur "express has no default export". La raison pour laquelle la directive "import" va fonctionner dans certains codes est la présence d'une autre librairie, Babel. Babel est un transcompilateur qui peut convertir plusieurs types de code différents dans du JavaScript. Il gère entre autres le langage TypeScript. Babel détecte si un module supporte la directive "import" et, si ce n'est pas le cas, convertit les instructions en directives "require". Si vous souhaitez ne plus vous poser la question sur la directive à utiliser dans votre code, installez Babel sur votre serveur Node.js.
