import { useState } from "react";

const Block = () => {
    const [blocks, setBlocks] = useState([]);

    const addBlock = () => {
        setBlocks([...blocks, blocks.length + 1])
    };

    return (
        <div>
            <button onClick={addBlock}>
                Add Block
            </button>
            <div>
                {blocks.map((block, index) => (
                    <div key={index} style={blockStyle}>
                        Block {block}
                    </div>
                ))}
            </div>
        </div>
    )



}

const blockStyle = {
    margin: '10px',
    padding: '10px',
    border: '1px solid blue',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0'
}

export default Block;