import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { RoleCall } from "./RoleCall";
import "./style.css";
import * as admin from "firebase-admin";


const config = { 
  apiKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDn3K/i6gGD6KVO\nHMasnPEmG0rrnNezhz0s0P9s3C4OuyIANM0IFQxBROUTZ905tgBJJ0GTYHKgZBq/\n1NFeHM58/0Yvn8hwr3l1qs5fWwHhDwrZPeIFS15urmesWxkRLLyEkIM6nQMJdmUQ\nk3EbQJaYOjAmYKi0XpsVtbxgIp0eStsebeGwFK1LjR7lk9WSuRXmUp/wmxrVmFOo\niY3zXl6ab6/4rg+59eTeLTE0fEVdzPxxwUqp9/aRrMMzlXpFkv7fKAXztKibH/hZ\nQadN4cDeJnTfMpFdImTH99OZ7Igtdg2c9JowBgJ+u2ANZFdRNWfzdVtBu2gJKbRr\nixn2Vu7NAgMBAAECggEALhOTaXje2behKBt8WN+sZYn9csKds/nfbJlQ9TFxPrCu\nAlP73cwO/iaCjn9wvW//cQop1C+Rv/F8xlv0ymrXlwwExuCOLOSWMs3Bir4TasX6\nPi83zB0M9FpY1G3bFqhpA0ATsBF1QctjLK7cRpHoi3Je0LWbORLm52LQ/1rJlfPh\n7yt4t4UzXSJIwQgDec9IwugYNNS7xdOtyvUESB/4BzGXAazhddxxqyfipJ6v1PsD\nl471oLVYrT4XwL/RLgjtETaphSeAUpIkE3g93wpEFkUyJXqaLhkAclKlPKYxXme1\nNxZd3sYxekcHBjknGpcJuUTZudgt6HuRWQLn4Ek9SQKBgQD1mCGQUtZ2rSL83/QR\nCS14OozRDrWw9FiGaCNUYhit2owxX2AIFdXMW0Dhznx5ngA4+DjID46cx/SKoe4K\nJzhGJoM7B4rn/I5951ikrCzS/f7VFXq8gp85R6UBW/GqKjOqpAl2nkmNB9I/r+15\nKDGFgeSsj4P7I86FYMj4BGGoWQKBgQDxr5uebqU9Xn51tnPjvEdBJQLiHNySMuml\nOnyKPo7fg4vNq9uVLVp9Sa18wqhrU44bfWADqy8RHdQ2Npqv8N4NxE9pF2CUWMxx\n0YwMaPxLToFRZRKMKkoJqUuj/V7pvGB5KJpzRK6NSeM3+jIv1SsDpugASntSzILP\nObFc7OErlQKBgQCP/4UedBOfPeDX2A/otTLd3aaXJULO4FXPaNveLC5AMXYltMA/\nvV3AFnkybLl7LXL/9DqGwuhhcLQnXM6PUXOjXg1v3PpLD0AU/kJxOyqFA7wZACEY\nypXFJgbPhzNpDJmCoe+Shzik4kMaaHKaqUBwATstGnDOHa6HcbokAZ2o8QKBgQCe\n9jKzvPCf8aPZhnyo4DA5j79au0L0QdpdG5/ISactKddtGkkd0CvBVhFuipW9qcJB\nIHBjWVdmuajXU4jgidtzUJgudfrG97TYc8vaab7vRR5XS9QsLrBttFUU8lRYBdeq\nOOOFRzpLobp6Geyie2GEUGYtss90QSEUbUzT4tWjFQKBgG3vxEsZh5ZAD+XtoQsV\nwwaJ7jX3GPGLtfDYgJmXQmzo1c401Re6e6/cLPnAED8QqQJFEjWKEpKLMb7KtKJ8\nMl0Jfe7zySMWyQMfyi/nRSpPTf04zqh+jsswTlYCKRhVvBs3f8tt+R9UTyyZVY6g\n6u2MAWCFMOCwlVmepzgQbuZ+\n-----END PRIVATE KEY-----\n",
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: "https://echoes-ab7bf.firebaseio.com/",
  projectId: "echoes-ab7bf",
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,m
  easurementId:process.env.REACT_APP_MID};


interface AppProps {}
interface AppState {
  name: string;
}

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <RoleCall />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
