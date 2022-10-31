import React, { Component } from 'react';

class Linker extends Component {
    render() { 
        return (
        <div className='linkers'>
            <ul>
                <li>
                    <a href="https://training.zuri.team/" id='btn_zuri'>Zuri Team</a>
                    </li>
                <li>
                    <a href="http://books.zuri.team" id='books' title='Handpicked books and customized guides to help you grow and advance your tech careers.'>Zuri Books</a>
                    </li>
                <li>
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=<Austyno>" id='book_python' title='The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified.'>Python Books</a>
                </li>
                <li>
                    <a href="https://background.zuri.team" id='pitch' title='With the right digital skill set and access to the global freelance marketplace, you can now offer your services online and get paid in dollars from home. Ready?'>Background Check For Codes</a>
                    </li>
                <li>
                    <a href="https://books.zuri.team/design-rules" id='book_design' title='The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified.'>Design Books</a>
                    </li>
            </ul>
        </div>
        );
    }
}
 
export default Linker;