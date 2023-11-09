// SPDX-License-Identifier: MIT
 pragma solidity 0.8.19;

 contract studentDetails {
     struct studentDetail{
         string name;
         uint age;
         string gender;
     }
  
     mapping(uint => studentDetail) public Details;
     address owner;

     uint public _ID;
     constructor() {
         owner = msg.sender;
     }
     modifier onlyOwner() {
         require (
             msg.sender == owner,
             "only admin can call this"
             );
             _;
     }

   
     function createStudentDetail(string memory _name, uint _age, string memory _gender) public {
    _ID++;
    studentDetail storage student = Details[_ID];
    student.name = _name;
    student.age = _age;
    student.gender = _gender;
}
    //    function getStudentDetails(uint ID) external view returns (string memory name, uint age, string memory gender) {
    //     studentDetail storage student = Details[ID];
    //     return(student.name, student.age, student.gender);
    //  }
    //  function updateDetailsName(uint ID, string memory _name) onlyOwner public {
    //     studentDetail storage student = Details[ID];
    //      student.name = _name;
          
    //  }
    //  function updateDetailsAge(uint ID, uint _age) onlyOwner public {
    //    studentDetail storage student = Details[ID];
    //    student.age = _age;    
    //  }
     
    //  function deleteDetails(uint ID) onlyOwner public {
    //     delete Details[ID];
    //  }
    //  function updateStudentDetails(uint ID, string memory _name, uint _age, string memory _gender) public {
    //     studentDetail storage student = Details[ID];
    //     student.name = _name;
    //     student.age = _age;
    //     student.gender = _gender;
    //  }
   
    
 } 