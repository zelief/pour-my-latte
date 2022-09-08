/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		drink:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Drink:{
		art:"Boolean",
		cups:"String",
		id:"ID",
		name:"String",
		score:"Int"
	},
	Mutation:{

	},
	Query:{
		drink:"Drink",
		drinks:"Drink"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}