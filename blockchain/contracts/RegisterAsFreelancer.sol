// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Name: RegisterAsFreelancer
//Description: Register As Freelancer

contract owned {
    address public owner;
    address public newOwner;
    address[] public permissionedList;

    event OwnershipTransferred(address _from, address _to);
    event PermissionAdded(address _address);
    event PermissionRevoked(address _address);

    constructor() {
        owner = msg.sender;
    }

    modifier isOwner {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    modifier authorized {
        require(HasPermission(msg.sender), "Not authorized");
        _;
    }

    function TransferOwnership(address _newOwner) public isOwner returns (bool) {
        newOwner = _newOwner;
        return true;
    }

    function AcceptOwnership() public returns (bool) {
        require(msg.sender == newOwner, "Only nominated newOwner can accept");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
        newOwner = address(0);
        return true;
    }

    function AddPermission(address addr) public isOwner returns (bool) {
        permissionedList.push(addr);
        emit PermissionAdded(addr);
        return true;
    }

    function RemovePermission(address addr) public isOwner returns (bool) {
        for (uint x = 0; x < permissionedList.length; x++) {
            if (addr == permissionedList[x]) {
                permissionedList[x] = permissionedList[permissionedList.length - 1];
                permissionedList.pop();
                emit PermissionRevoked(addr);
                return true;
            }
        }
        return false;
    }

    function HasPermission(address sender) public view returns (bool) {
        if (sender == owner) return true;
        for (uint x = 0; x < permissionedList.length; x++) {
            if (sender == permissionedList[x]) return true;
        }
        return false;
    }

    function GetPermissionListLength() public view returns (uint) {
        return permissionedList.length;
    }

    function GetPermission(uint index) public view returns (address) {
        return permissionedList[index];
    }
}

interface IMembers {
    struct Data {
        address payable A_WalletAddress;
        string A_Role;
        uint256 A_RegisterationDate;
        string A_Rank;
    }

    function AcceptOwnership() external returns (bool);
    function AddPermission(address addr) external returns (bool);
    function Delete(address recordId) external returns (bool);
    function Exists(address recordId) external returns (bool);
    function GetById(address recordId) external returns (uint256, Data memory);
    function GetByIndex(uint256 recordIndex) external returns (address, Data memory);
    function GetLength() external returns (uint256);
    function GetPermission(uint256 index) external returns (address);
    function GetPermissionListLength() external returns (uint256);
    function HasPermission(address sender) external returns (bool);
    function IdList(uint256) external returns (address);
    function Insert(Data calldata) external returns (bool);
    function Name() external returns (string memory);
    function RemovePermission(address addr) external returns (bool);
    function Table(address) external returns (Data memory, uint256);
    function TransferOwnership(address _newOwner) external returns (bool);
    function Update(address recordId, Data calldata) external returns (bool);
    function newOwner() external returns (address);
    function owner() external returns (address);
    function permissionedList(uint256) external returns (address);
}

contract RegisterAsFreelancer is owned {
    address MembersAddress = 0x5a3b8A679F9A52E53deDB83639956139Cab24223; // Replace during deployment

    function invoke(IMembers.Data memory Members_Data) public returns (bool) {
        IMembers Members = IMembers(MembersAddress);

        // Ensure this address has not already registered
        Condition0(msg.sender);

        // Populate data
        Members_Data.A_WalletAddress = payable(msg.sender);
        Members_Data.A_Role = "Freelancer";
        Members_Data.A_RegisterationDate = block.timestamp * 1000;
        Members_Data.A_Rank = "Newbie";

        // Register freelancer
        require(Members.Insert(Members_Data), "Insert failed");

        return true;
    }

    // Check if wallet is already registered
    function Condition0(address _msgSenderBase) private {
        IMembers Members = IMembers(MembersAddress);
        for (uint x = 0; x < Members.GetLength(); x++) {
            (address recordId, IMembers.Data memory record) = Members.GetByIndex(x);
            if (_msgSenderBase == record.A_WalletAddress) {
                revert("Address already registered");
            }
        }
    }
}
