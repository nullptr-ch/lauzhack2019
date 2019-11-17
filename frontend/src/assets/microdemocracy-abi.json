[
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "person",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pollUid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint8[]",
                "name": "ranking",
                "type": "uint8[]"
            }
        ],
        "name": "OpinionGiven",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pollUid",
                "type": "uint256"
            }
        ],
        "name": "PollClosed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pollUid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "closingMoment",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "alternatives",
                "type": "string[]"
            }
        ],
        "name": "PollCreated",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "polls",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "closingMoment",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "active",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "alternativesCount",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "pollName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "pollDescription",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "closingMoment",
                "type": "uint256"
            },
            {
                "internalType": "string[]",
                "name": "alternativeNames",
                "type": "string[]"
            }
        ],
        "name": "createPoll",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint128",
                "name": "pollUid",
                "type": "uint128"
            },
            {
                "internalType": "uint8[]",
                "name": "ranking",
                "type": "uint8[]"
            }
        ],
        "name": "giveOpinion",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
