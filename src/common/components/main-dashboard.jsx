import { Container } from '@material-ui/core';
import * as React from 'react';
import DashboardRoutes from '../../routes/dashboard-routes';
import HeaderBar from './header-bar';

export default function MainDashboard() {
    return (
        <>
            <HeaderBar />
            <Container fixed>
                <DashboardRoutes />
            </Container>
        </>
    );
}
