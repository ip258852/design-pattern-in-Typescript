namespace tree{
    export abstract class Organization {
        subOrganizations : Array<Organization>;
        title : string;
        head  : string;
        abstract add(item : tree.Organization) : void ;
        abstract remove(item : tree.Organization) : void ;
        abstract printNow() : void ; 
    }
}