import { Col, Row, Container, Card } from "react-bootstrap";
import EvaluationsTab from "../components/dashboard/EvalsTab";
import ProfileTab from "../components/dashboard/ProfileTab";
import GroupsTab from "../components/dashboard/GroupsTab";
import styles from "../styles/dashboard-page/dashboard-container.module.scss";
import Navbar from "../components/navbar";
import { Fade } from "react-awesome-reveal";
/**
 *
 * ? Dasboard page setup:
 * -  Custom components for each tab to avoid a clutter of state management
 * - all components will share the same style file for uniform look
 * - the page will contain two modals:
 *  *Create group modal
 *  *Edit an evaluation
 * ! We might displayed data using a stacking method for view all
 */

// ? SSR Setup
// export const getStaticProps = async() => {

//     return({
//         props: "needed information",
//         revalidate: 1
//     })
// }

export default function Dashboard(props) {
  return (
    <>
      <Navbar />
      <Container className={styles["main-container"]}>
        {/* It will be responsible for the main shadow drop */}
        {/* The title */}
        <div className={styles["title"]}>لوحة المعلومات</div>
        <Row className={styles["cards-holder"]}>
          <Fade
            triggerOnce
            direction="up"
            damping="0.02"
            className={
              styles["tab-containers"] +
              " col col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6"
            }
          >
            <ProfileTab />
            <GroupsTab />
            <EvaluationsTab />
          </Fade>
        </Row>
      </Container>
    </>
  );
}
