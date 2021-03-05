import React from 'react';
import { PanelMenu } from "primereact/panelmenu";
import { useHistory } from "react-router-dom";
const AdminMenu = () => {

    const panelMenuItems = [
        {
          label: "Registrar",
          items: [
            {
              label: "Animal",
              /* icon: "pi pi-plus", */
              items:[
                  {
                    label: "Do canil",
                    icon: "pi pi-plus",
                    command: () => {
                        history.push("/registrar/animal/canil/");
                      },
                  },
                  {
                    label: "De voluntário",
                    icon: "pi pi-plus",
                    command: () => {
                        history.push("/registrar/animal/voluntario/");
                      },
                  }
              ]
            },
            {
              label: "Usuário",
              icon: "pi pi-plus",
              command: () => {
                history.push("/registrar/animal/");
              },
            },
          ],
        },
        {
          label: "Animais",
          items: [
            {
              label: "Meus animais cadastrados",
              command: () => {
                history.push("/registrar/animal/");
              },
            },
            {
              label: "Animais do canil",
              command: () => {
                history.push("/registrar/animal/");
              },
            },
            {
              label: "Animais de voluntários",
              command: () => {
                history.push("/registrar/animal/");
              },
            },
            {
              label: "Todos os animais",
              command: () => {
                history.push("/registrar/animal/");
              },
            },
          ],
        },
        {
          label:'Adoção',
          items:[
            {
              label:'Pedidos de adoção'
            },
            {
              label:'Registrar adoção'
            },
          ]
        },
      ];
    

    const history = useHistory();

    return(
        <>
        <PanelMenu model = {panelMenuItems} />
        </>
    )
}

export default AdminMenu;