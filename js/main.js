(() => {
    (() => {
		const docElem = ({doc, name, desc}) => ({
			"href": `docs/${doc}`,
			"name": name,
			"desc": desc
		});

        const docTemp = Template('doc-item');
        const ctx = [
			docElem({
				"doc": "elrond_mint_contract",
				"name": "Elrond Mint Contract",
				"desc": "XP-Elrond Migration minter smart contract"
			}),
            docElem({
				"doc": "freezer",
				"name": "freezer",
				"desc": "XP-Elrond Migration freezer smart contract"
			})
        ]
        docTemp.bind(ctx)
    })();
})()
