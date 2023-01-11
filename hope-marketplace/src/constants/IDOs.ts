export enum IDOIds {
	HOPERS = "hopers",
}

export interface IDOInterface {
	id: IDOIds;
	name: string;
	symbol: string;
	description: string;
	contract: string;
}

export const IDOs: IDOInterface[] = [
	{
		id: IDOIds.HOPERS,
		name: "HOPERS TOKEN",
		symbol: "$HOPERS",
		description:
			"Introducing $HOPERS, the utility token of the all-in-one platform hopers.io. With $HOPERS, you can actively participate in the growth of our ecosystem and gain access to a variety of benefits, including staking, liquidity provision, early IDO opportunities, yield farming and more. The platform powers the ecosystem through the Hopers Token, which grants you access to all the features that the Hopers platform has to offer. By holding and participating with Hopers tokens, you are also eligible for rewards generated by the ecosystem and liquidity pools.",
		contract: "juno1rtzpsz2ane0vfy99enny0gkaac3kjmg4vc640y7nn0jf0q4jnfzq44lxuf",
		// juno19778adwcy8r5ermj678dyhsn7aj4fpar375jmhuwezc9uxed7tnqxwvcv3
	},
];

export const getIDOById = (id: IDOIds): IDOInterface => {
	return IDOs.filter((ido: IDOInterface) => ido.id === id)[0] || {};
};
