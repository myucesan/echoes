import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { ContactCard, Card, Button, Grid } from "tabler-react";

export class RoleCall extends Component {
  render() {
    return (
      <div>
        <h1>Role Call </h1>
        <Grid.Row cards deck>
          <Grid.Col md={4}>
            <ContactCard
              rounded
              name={"Death Lurks"}
              details={[
                { title: "Position", content: "Leadership" },
                { title: "Profession", content: "PvP | Ratting" },
                { title: "Manufacturing skills", content: "None" },
                { title: "Timezone", content: "EU" },
                { title: "Accounts", content: "1" },
                { title: "Characters", content: "1" }

              ]}
              description={`
Character Name(s): Death Lurks`}
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <ContactCard
              rounded
              name={"Zell"}
              details={[
                { title: "Position", content: "Member" },
                { title: "Profession", content: "Ratting | Miner" },
                { title: "Manufacturing skills", content: "Rare Ore [5/4], Strip Mining [5/5/3]" },
                { title: "Timezone", content: "AU (UTC +8)" },
                { title: "Accounts", content: "2" },
                { title: "Characters", content: "2" }
              ]}
              description={`Character Name(s): Zell / Inskaral Pus`}
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <ContactCard
              rounded
              name={"WhiteWolf"}
              details={[
                { title: "Position", content: "Leadership" },
                { title: "Profession", content: "Miner | Ratting" },
                { title: "Manufacturing skills", content: "Frigate [5/5/4], Cruiser [5/5/4]" },
                { title: "Timezone", content: "BST (UTC + 6)" },
                { title: "Accounts", content: "3" },
                { title: "Characters", content: "3" }
              ]}
              description={`Character Name(s): WhiteWoIf, Artemis', Divine Miner`}
            />
          </Grid.Col>
        </Grid.Row>
      </div>
    );
  }
}
