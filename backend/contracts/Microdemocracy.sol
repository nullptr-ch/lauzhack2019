pragma solidity >= 0.5.8;
pragma experimental ABIEncoderV2;

contract Microdemocracy {

    event PollCreated(address owner, uint256 pollUid, string name, string description, uint256 closingMoment, string[] alternatives);
    event OpinionGiven(address person, uint256 pollUid, uint8[] ranking);
    event PollClosed(uint256 pollUid);

    uint8 constant MAX_ALTERNATIVES_PER_POLL = 10;
    uint16 constant MAX_ALTERNATIVE_STRING_LENGTH = 300;

    struct Opinion {
        bool voted;
        uint8[] ranking;
    }

    struct Poll {
        string name;
        string description;
        uint256 closingMoment;
        bool active;
        address owner;
        string[] alternatives;
        uint8 alternativesCount;
        mapping(address => Opinion) opinions;
    }

    uint256 currentPollUid = 0;
    Poll[] public polls;

    function createPoll(
        string memory pollName,
        string memory pollDescription,
        uint256 closingMoment,
        string[] memory alternativeNames
    ) public returns(uint256) {
        require(alternativeNames.length < MAX_ALTERNATIVES_PER_POLL, "Too many alternative provided.");

        polls.push(Poll({
            name: pollName,
            description: pollDescription,
            closingMoment: closingMoment,
            active: true,
            owner: msg.sender,
            alternatives: alternativeNames,
            alternativesCount: uint8(alternativeNames.length)
        }));

        Poll storage poll = polls[currentPollUid];
        emit PollCreated(msg.sender, currentPollUid, poll.name, poll.description, poll.closingMoment, poll.alternatives);
        currentPollUid += 1;

        return currentPollUid - 1;
    }

    function giveOpinion(uint128 pollUid, uint8[] memory ranking) public {
        require(pollUid < polls.length, "You cannot vote for a non-existant poll.");

        Poll storage poll = polls[pollUid];

        require(poll.active, "You cannot vote for an already closed poll.");
        require(block.timestamp <= poll.closingMoment, "You cannot vote for this poll as it is already closed.");
        require(poll.opinions[msg.sender].voted, "You cannot vote more than one time.");
        require(ranking.length <= poll.alternativesCount, "The provided ranking is not valid.");

        for (uint8 i = 0; i < ranking.length; i++) {
            require(ranking[i] < poll.alternativesCount, "You provided at least one invalid entry in the ranking");
        }

        for (uint8 i = 0; i < ranking.length; i++) {
            for (uint8 j = i + 1; j < ranking.length; j++) {
                require(ranking[i] != ranking[j], "You cannot have twice the same alternative in you ranking.");
            }
        }

        poll.opinions[msg.sender] = Opinion({
            voted: true,
            ranking: ranking
        });

        emit OpinionGiven(msg.sender, pollUid, ranking);
    }
}