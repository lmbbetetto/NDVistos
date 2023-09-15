import styled from "styled-components";

export const Container = styled.div`

    .main_mobile {
      display: none;
    }
    
    .sidenav {
      top: 75px;
      position: fixed;
      width: 100%;
      height: 100vh;
      background: var(--white);
      transform: translateX(-110%);
      transition: all 0.5s ease-in-out;
      z-index: 1;
    }

    .activeSidenav {
      top: 75px;
      position: fixed;
      width: 100%;
      height: 100vh;
      background: var(--white);
      transform: translateX(-80%);
      transition: all 0.5s ease-in-out;
      z-index: 1;

    .hamburguer {
      background: transparent;
    }

    .hamburguer-container {
      position: fixed;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }

  @media (max-width: 720px) {
    .containerDesk {
      display: none;
    }

    .main_mobile {
      position: fixed;
      width: 100%;
      max-height: 75px;
      height: 100%;
      display: flex;
      z-index: 1;

      background-color: var(--light-blue);
      box-shadow: 5px 5px 30px rgba(0,0,0,0.5);
    }

    .mobile_mobile {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;

    }

    .logo__casa {
      max-width: 120px;
      margin-top: 6rem;
    }

      .sidenav {
        position: fixed;
        width: 100%;
        height: 100vh;
        transform: translateX(-110%);
        transition: all 0.5s ease-in-out;
        z-index: 1;
      }

      .activeSidenav {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: var(--light-blue);
        transform: translateX(-50%);
        transition: all 0.5s ease-in-out;
        z-index: 1;

      .hamburguer {
        background: transparent;
      }

      .mobile_1 {
        padding-left: 4.5rem;
      }
    }
  }
`;