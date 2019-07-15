
export class Collegue{

    public matricule:string;
    public nom:string;
    public  prenom:string;
    public email:string;
    public dateDeNaissance:Date;
    public photoUrl:string;

    constructor(public _matricule:string,public _nom:string, public _prenom:string, public _email:string, public _dateDeNaissance:Date, public _photoUrl:string){
        this.matricule = _matricule;
        this.nom = _nom;
        this.prenom = _prenom;
        this.email= _email;
        this.dateDeNaissance = _dateDeNaissance;
        this.photoUrl = _photoUrl;
    }

}