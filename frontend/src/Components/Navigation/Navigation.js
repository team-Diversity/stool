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
    width: 100%; // Ensure full width

    .nav-buttons {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px;
    }

    .nav-title {
    padding: 8px;
    }

    .nav-buttons {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px;

        button {
            background-color: #EFEFEF; 
            color: #333; 
            border: none; 
            border-radius: 5px;
            padding: 10px 20px; 
            font-size: 1em; 
            cursor: pointer; 
            transition: background-color 0.3s;

            &:hover {
                background-color: #CCCCCC; 
            }

            &:focus {
                outline: none; 
            }
        }
    }

    .nav-title {
        padding: 8px;
    
        h1 {
          font-size: 2em; 
          font-weight: bold; 
          color: #FFFFFF; 
          margin: 0; /* Remove default margins */
          text-transform: uppercase; 
          letter-spacing: 2px; 
        }
    }
`;


export default Navigation;