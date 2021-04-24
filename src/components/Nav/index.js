import React from 'react';

function Nav() {
    const categories = [
        {
            name: 'About',
            description: '',
        },
        {
            name: 'Portfolio',
            description: '',
        },
        {
            name: 'Contact',
            description: '',
        },
        {
            name: 'Resume',
            description: ''
        }
    ]

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return(
        <nav>
            <ul className="flex-row">
                {categories.map((category) => (
                    <li
                    className="mx-1"
                    key={category.name}
                    >
                    <span onClick={() => categorySelected(category.name)}>
                        {category.name}
                    </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;