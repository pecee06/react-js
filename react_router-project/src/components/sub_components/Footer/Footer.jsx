import "./style.css"
import Logo from "../Logo/Logo"
import Links from "../Links/Links"

export default function Footer(){
    return (
        <>
            <hr />
            <footer>
                <div className="left">
                    <Logo/>
                    <p>Virtual office for remote teams</p>
                    <p>&copy; 2024 RoboMEET, Inc.</p>
                    <span className="util-underline util-pointer">Terms & Privacy</span>
                </div>
                <div className="right">
                    <Links heading="use cases" links={["Virtual Office Hours","Icebreakers","Slack & RoboMEET","Calander Meetings"]}/>

                    <Links heading="tools" links={["Revitalize","US Remote Trends","PH Leaderboard"]}/>

                    <Links heading="social" links={["Newsletter","Blog","Twitter","Instagram","Facebook","LinkedIn"]}/>

                    <Links heading="contact" links={["Email","DM on Twitter","Press kit"]}/>
                </div>
            </footer>
        </>
    )
}