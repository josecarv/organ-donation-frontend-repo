export interface IDonorDto{
        idCardNumber :string
        firstName :string;
        lastName :string;
        bloodGroupId :number;
        dateOfBirth :Date;
        address: string;
        street:string;
        postcode:string;
        mailAddress: string;
        mailStreet:string;
        mailPostcode:string;
        email:string;
        telephone:number;
        mobile:number
        nationalityId :number;
        genderId: number;
        preferredContact:number;
        organs:[];
}