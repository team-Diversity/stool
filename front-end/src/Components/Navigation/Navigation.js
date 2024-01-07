import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'

function Navigation() {

    return (
        <NavigationStyled>
            <div class="nav-title">
                <h1>STOOL</h1>
            </div>

            <div class="nav-buttons">
                <button>Home</button>
                <button>Settings</button>
            </div>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
    background-color: #1D4B55;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-buttons {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 8px;
    }

    .nav-title {
        padding: 8px;
        align-self: center
    }
`;

export default Navigation;