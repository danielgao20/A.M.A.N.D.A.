import React, { Component } from "react";
import AboutUs from "./AboutUs";
import Message from "./Message";
import Navbar from "./Navbar";
import axios from "axios";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{
                username: "A.M.A.N.D.A.",
                content: <p>Hello, I'm A.M.A.N.D.A, how may I help you today?</p>
            }],
            image: null,
        };

    
        this.submitMessage = this.submitMessage.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    // Automatic scroll to bottom of chat
    scrollToBot() {
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
    }

    // Get Response from API and call submitReport()
    useMessageData() {
        fetch("/api/post/")
            .then((response) => response.json())
            .then((data) => this.submitReport(data.name, data.confidence));  
    }
    
    // Use data from classifier to send a response to User
    submitReport(name, confidence) {
        var response;
        var percent = parseInt(confidence * 100)

        switch(name) {
            case "cellulitis":
                response = "I\'ve detected a cellulitis infection with " + percent + "% accuracy. Here are some treatment plans:\n\n(1) Cellulitis treatment usually includes a prescription oral antibiotic. Within 3 days of starting an antibiotic, let your doctor know whether the infection is responding to treatment. You’ll need to take the antibiotic for as long as your doctor directs (usually 5 to 10 days).\n\n(2) In the meantime, try these steps to ease any pain and swelling:\n- Place a cool, damp cloth on the affected area as often as needed for your comfort.\n- Ask your doctor to suggest an over-the-counter pain medication to treat pain.\n- Elevate the affected part of your body.\n- Ask your doctor whether it might help to wear compression wraps or stockings.";
                break;
            case "first_degree_burn":
                response = "I\'ve detected a first-degree burn with " + percent + "% accuracy. Here are some treatment plans:\n\n(1) Cool the burn. Immediately immerse the burn in cool tap water or apply cold, wet compresses.\n(2) Apply petroleum jelly two to three times daily.\n(3) Cover the burn with a nonstick, sterile bandage.\n(4) Consider taking over-the-counter pain medication.\n(5) Protect the area from the sun.";
                break;
            case "second_degree_burn":
                response = "I\'ve detected a second-degree burn with " + percent + "% accuracy. Here are some treatment plans:\n\n(1) Rinse the burn with cool water until the pain stops (15-30 minutes). Do not use ice or ice water, which can cause tissue damage.\n(2) Clean the burn. Do not touch the burn with your hands or anything dirty, because open blisters can easily be infected.\n(3) Bandaging the burn. No need to do this if the burned skin or blister is not broken open.\n(4) If the burn is on a leg or an arm, keep the limb raised as much as possible for the first 24 to 48 hours to decrease swelling.";
                break;
            case "third_degree_burn":
                response = "I\'ve detected a third-degree burn with " + percent + "% accuracy. Here are some treatment plans:\n\n(1) Surgery: Third degree burns typically require multiple surgeries to remove burned tissue from the burn site.\n(2) Skin graft: As third degree burns do not heal by themselves, a skin graft is often necessary. A doctor may use a combination of natural skin grafts, artificial skin products, or laboratory-grown skin.\n(3) Intravenous fluids: Some people may receive extra fluids to maintain their blood pressure and prevent shock.\n(4) Medication: A person will likely receive several different medications, such as antibiotics and pain medication, to prevent infection and ease pain.\n(5) Tetanus shot: As tetanus bacteria are more likely to trigger infections through burn wounds, a person may receive a tetanus shot to prevent this.";
                break;
            default:
                response = "I did not detect any infections or burns.";
        }
        
        // Send message on behalf of AMANDA
        this.setState({
            messages: this.state.messages.concat([{
                username: "A.M.A.N.D.A.",
                content: <p>{response}</p>,
            }])
        });
    }

    // Send POST request to API with custom user message
    submitMessage = async (e) => {
        e.preventDefault();

        await this.setState({
                messages: this.state.messages.concat([{
                    username: "User",
                    content: <p>{document.getElementById("userinput").value}</p>
                }])
            });

        let formData = new FormData();
        formData.append('message', document.getElementById("userinput").value);
        document.getElementById("userinput").value="" // Clear user input field
        
        //Post to api and receive a response back
        await axios.post("/api/text/", formData, {
            headers: {
                'content-type': 'multipart/form-data'
              }
        })
              .then(res => {
                var data = res.data;
                var obj = eval( '(' + data + ')' );
                var response = obj.response;
                this.setState({
                    messages: this.state.messages.concat([{
                        username: "A.M.A.N.D.A.",
                        content: <p>{response}</p>,
                    }])
                });
                
              })
              .catch(err => console.log(err));
    }

    // Send POST request to API with uploaded image data
    handleImageUpload = async (e) => {
        e.preventDefault();
        await this.setState({ image: e.target.files[0] });

        // Create formData object to post to API
        let formData = new FormData();
        formData.append('name', this.state.image.name);
        formData.append('image', this.state.image);

        // Post image data to API
        await axios.post("/api/post/", formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.data);
              
            })
            .catch(err => console.log(err));

        // Send "Uploaded (image name)" message
        this.setState({
            messages: this.state.messages.concat([{
                username: "User",
                content: <p>Uploaded {this.state.image.name}</p>,
            }])
        });

        // Send message on message area
        await this.useMessageData();

        // Clear image state
        this.setState({ image: null });
    }

    render() {
        const username = "User";
        const { messages } = this.state;

        return (
            <>
                <Navbar />
                <div className="briefInfo">
                    <h2>A.M.A.N.D.A.</h2>
                    <h4>AI Medical Assistant and Neural Detection Application</h4>
                    <p>Hello, I’m AMANDA, a digital medical assistance AI system. I have the ability to detect skin infections, cellulitis, as well as the three degrees of burns.<br />To receive my diagnosis and treatment plans, please upload an image of your skin condition. Also, feel free to chat with me at any time!</p>
                </div>
                <div className="chatroom">
                    <ul className="messages" id="messages">
                        {messages.map((message) => <Message message={message} user={username} />)}
                    </ul>
                    <form className="input" onSubmit={this.submitMessage}>
                        <input id="userinput" placeholder="Enter your message " type="text" />
                        <button>
                            <ion-icon name="send" size="20px" />
                        </button>
                        <input type="file" accept="image/png, image/jpeg" hidden id="image-upload" onChange={this.handleImageUpload} />
                        <button type="button" onClick={() => document.getElementById("image-upload").click()} id="image-upload-button">
                            <ion-icon name="cloud-upload" />
                        </button>
                    </form>
                </div>
            </>
        )
    }
}
