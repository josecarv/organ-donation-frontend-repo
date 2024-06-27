export interface IDonorDto{

        idCardNumber :string;
        titleType:string;
        firstName :string;
        lastName :string;
        bloodGroupId :number;
        dateOfBirth :Date;
        address: string;
        street:string;
        postcode:string;
        localityId:number;
        mailAddress: string;
        mailStreet:string;
        mailPostcode:string;
        mailLocalityId:0;
        

        
        email:string;
        telephone:number;
        mobile:number
        nationalityId :number;
        genderId: number;
        checkboxAddress:string;
        preferredContact:number;
        organs:[];
       
}