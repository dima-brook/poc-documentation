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
                "doc": "xp_compiler",
                "name": "xp-compiler",
                "desc": "Common Interface Compiler"
            }),
            docElem({
                "doc": "move_compiler",
                "name": "move-compiler",
                "desc": "Move Human Readable Code Compiler"
            }),
            docElem({
                "doc": "solidity_compiler",
                "name": "solidity-compiler",
                "desc": "Solidity Code/Bytecode Compiler"
            }),
            docElem({
                "doc": "solidity_compiler_pallet",
                "name": "solidity-compiler-pallet",
                "desc": "Solidity Compiler Pallet"
            }),
            docElem({
                "doc": "move_cp_pallet",
                "name": "move-compiler-pallet",
                "desc": "Move Compiler Pallet"
            }),
            docElem({
                "doc": "evm_asm",
                "name": "evm-asm",
                "desc": "EVM/Move Disassembler"
            }),
			docElem({
				"doc": "serde_xp_protocol",
				"name": "serde_xp_protocol",
				"desc": "Reference XP Protocol"
			}),
			docElem({
				"doc": "xmessage",
				"name": "xcmp_pallet-poc",
				"desc": "Work in progress XCMP communication pallet supporting XP Protocol."
			})
        ]
        docTemp.bind(ctx)
    })();
})()
