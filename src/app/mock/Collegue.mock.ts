import {Collegue} from '../model/Collegue'

let collegue:Collegue = new Collegue('913ff890-992d-4e49-bac0-a385704afb83', 'leroy', 'Yoann', 'yoannleroy@mail.fr', new Date(1988,11,2), 
'https://vignette.wikia.nocookie.net/jojo/images/6/6a/Star_Platinum_%28Stardust_Crusaders%2C_manga%29.png/revision/latest?cb=20180104204918&path-prefix=fr');

let collegue2:Collegue = new Collegue('3498aeda-e93d-4b5e-96b5-dd11c1232090', 'robert', 'Clément', 'clementrobert@mail.fr', new Date(1975,6,11), 
'https://vignette.wikia.nocookie.net/jojo/images/6/6a/Star_Platinum_%28Stardust_Crusaders%2C_manga%29.png/revision/latest?cb=20180104204918&path-prefix=fr');

let collegue3:Collegue = new Collegue('6386402e-affb-4c54-b59a-e61a943fb979', 'petit', 'Amandine', 'amandinepetit@mail.fr', new Date(1973,21,6), 
'https://vignette.wikia.nocookie.net/jojo/images/6/6a/Star_Platinum_%28Stardust_Crusaders%2C_manga%29.png/revision/latest?cb=20180104204918&path-prefix=fr');


export{
    collegue as unCollegue
}