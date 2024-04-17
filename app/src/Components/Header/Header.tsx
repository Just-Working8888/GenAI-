// Header.tsx
import React, { useState } from 'react';
import classes from './Header.module.scss'
import Protected from 'routes/Protected/Protected';
import { Drawer } from 'antd';
import './Header.scss'
import Button from 'Components/Button/Button';

const HeaderComponent: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (

        <>
     
            <header className={classes.header}>
                <h1>
                    OneAI
                </h1>
                <Protected fallback={
                    <button onClick={() => setOpen(true)}>
                        Sign in
                    </button>
                }>
                    <button onClick={() => setOpen(true)}>
                        Sign in
                    </button>
                </Protected>
                <Drawer
                    className='form'
                    width={'100%'}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <form className={classes.form}>
                        <input placeholder='Email' className={classes.form_input} type="text" />
                        <input placeholder='Password' className={classes.form_input} type="text" />
                        <Button>
                            Sign in
                        </Button>
                    </form>

                </Drawer>
            </header >
            <div style={{height:'100px'}}></div>
            </>

    );
};

export default HeaderComponent;
