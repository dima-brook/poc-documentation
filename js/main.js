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
				"doc": "freezer",
				"name": "freezer",
				"desc": "XP-Elrond Migration freezer smart contract"
			})
        ]
        docTemp.bind(ctx)
    })();
})()
