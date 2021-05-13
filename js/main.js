(() => {
    (() => {
        const docTemp = Template('doc-item');
        const ctx = [
            {
                "doc": "xp_compiler",
                "name": "xp-compiler",
                "desc": "Common Interface Compiler"
            },
            {
                "doc": "move_compiler",
                "name": "move-compiler",
                "desc": "Move Human Readable Code Compiler"
            },
            {
                "doc": "solidity_compiler",
                "name": "solidity-compiler",
                "desc": "Solidity Code/Bytecode Compiler"
            },
            {
                "doc": "solidity_compiler_pallet",
                "name": "solidity-compiler-pallet",
                "desc": "Solidity Compiler Pallet"
            },
            {
                "doc": "move_cp_pallet",
                "name": "move-compiler-pallet",
                "desc": "Move Compiler Pallet"
            },
            {
                "doc": "evm_asm",
                "name": "evm-asm",
                "desc": "EVM/Move Disassembler"
            },
			{
				"doc": "serde_xp_protocol",
				"name": "serde_xp_protocol",
				"desc": "Reference XP Protocol"
			}
        ]
        docTemp.bind(ctx)
    })();
})()
