import { Injectable } from '@nestjs/common';
import { UpdateHl7Dto } from './dto/update-hl7.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as HL7 from "hl7-standard";
// https://www.npmjs.com/package/hl7-standard#get

//var {hl7} = HL7;
@Injectable()
export class Hl7Service {
 create(text: string) {
 
    const rawData = `${text}`;

    const hl7 = new HL7(rawData);

    hl7.transform();

    const fName= hl7.get("PID.5.2");
    const sName= hl7.get("PID.5.1");
    const age =hl7.set("PID.5.4", "60");

    parseInt(age);
  
    
    const pid = [{ fName, sName, age}];
    const pidSegment = hl7.getSegment("PID");


    hl7.deleteSegment(pidSegment);
    const output = hl7.build();

    
    
    console.log(output);
    console.log(pidSegment);
    console.log(pid);


    //return `${output}`;


  }

  //create(text:string)
  //{

  /* const rawData = `MSH|^~\&|587700|2.16.840.1.113883.3.6899.76117^2.16.840.1.113883.3.1139||WA|20220514122007|36620|ADT^A03|263082374|P|2.5.1|
   EVN|A03|20220514122007|000P|ADT_EVENT|36620^SHINE^ALEXANDRA^^^^^^SLUSA^^^^^WA00|20220514121900|
   PID|1|273893970^^^SLUHN|273893970^^^SLUHN||MALCOLM^ROBERT^S^^^^L||19680110|M||1^White or Caucasian|11 STEWARTSVILLE RD^^STEWARTSVILLE^NJ^08886-3134^US^P^^WARREN|WARREN|(908)763-3184^P^PH^^^908^7633184~^NET^Internet^RMALCOLM68@YAHOO.COM~(908)763-3184^P^CP^^^908^7633184||ENG|MARRIED|NONE|1108994193|6195|||1^NOT HISPANIC OR LATINO OR SPANISH^HL7|||||Never Served|||N|
   PD1|||ST. LUKE'S HOSPITAL - WARREN CAMPUS^^101500|18238^VANDENBURG^JAMES^^^^^^ECHO^^^^ID~1427022607^VANDENBURG^JAMES^^^^^^NPI^^^^NPI|||||||||||Level 1 - Fu^Level 1 - Full Code|
   ROL|1|UP|GENERAL|18238^VANDENBURG^JAMES^^^^^^ECHO^^^^ID~1427022607^VANDENBURG^JAMES^^^^^^NPI^^^^NPI|20220511||||GENERAL|EXTERNAL|1738 ROUTE 31N^SUITE 203^CLINTON^NJ^08809^US^^^HUNTERDON|(908)735-4645^^PH^^^908^7354645~(908)735-7361^^FX^^^908^7357361|
   NK1|1|MALCOLM^JUDY|Spouse|^^^^^US|(908)763-3750^^PH^^^908^7633750||Emergency Contact 1|
   PV2||M/S SEMIPRIV|R10.9^Unspecified abdominal pain^I10||||||20220514|3|||||||||||n|N||||||||||N||||||Ambulance||Med Surg|
   ROL|2|UP|Consult MD|38933^KAPOOR^SARINA^^^^^^ECHO^^^^ID~1861788531^KAPOOR^SARINA^^^^^^NPI^^^^NPI|20220511223414||||||2200 ST LUKE'S BLVD^SUITE 230^EASTON^PA^18045^US^^^NORTHAMPTO|(484)526-6545^^PH^^^484^5266545~(866)289-8937^^FX^^^866^2898937|
   ROL|3|UP|CNA||20220514064500|
   ROL|4|UP|RN||20220514064800|
   ROL|5|UP|PCA||20220514075800|
   OBX|1|NM|HT^HEIGHT||76|in||||||||20220511213706|
   GT1|1|696241|MALCOLM^ROBERT^S||11 STEWARTSVILLE RD^^STEWARTSVILLE^NJ^08886-3134^US^^^WARREN|(908)763-3184^P^PH^^^908^7633184||19680110|M|P/F|SLF|351-70-6195|||||^^^^^US|||DISABLED|
   IN1|1|2550100^AETNA MEDICARE HMO MC REP|2550|AETNA MC REP|PO BOX 981106^^EL PASO^TX^79998-1106|||000003-NJ||||20210101||220513007559|250|MALCOLM^ROBERT^S|Self|19680110|11 STEWARTSVILLE RD^^STEWARTSVILLE^NJ^08886-3134^US^^^WARREN|||1*6|||YES|20210323|||||||||2272879|101153262600||||||DISABLED|M|^^^^^US|||BOTH||2272879|
   PV1|1|I|101500003^2 SOUTH 207^2 SOUTH 207^WA00&restr^^^^^WA 2 SOUTH|UR||23112^CHICHILI^EISWARYA^^^^^^ECHO^^^^ID|23112^CHICHILI^EISWARYA^^^^^^ECHO^^^^ID~1376798074^CHICHILI^EISWARYA^^^^^^NPI^^^^NPI||38933^KAPOOR^SARINA^^^^^^ECHO^^^^ID~1861788531^KAPOOR^SARINA^^^^^^NPI^^^^NPI|Hospitalist||||Home/Work|||1376798074^CHICHILI^EISWARYA^^^^^^NPI^^^^NPI||1108994193|MEDICARE ADV||||||||||||||||HOME/SELF CARE|HOME|||||||20220511173300|20220514121900||55072.7|||15100886656|
   IN2||351-70-6195|||Payer Plan|6XF4R96YV09||||||||||||||||||||101153262600|||||||||||||||||||||||||||||||||||101153262600||(908)763-3184^^^^^908^7633184|
   ZDL|20220514162014921000uGRiYSAtCAd8HsBTRVui9f|
   `;
   
   console.log(text);
  /* let hl7 = new HL7(text);
   hl7.transform();
   console.log(hl7.build());
   const output = hl7.build();
   console.log(output);
   
   return `${text}`;
   
 }*/
}


