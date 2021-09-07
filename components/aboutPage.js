import Image from "next/image";
import styles from "./aboutPage.module.css";

export default function AboutPage({ children, home }) {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.headQuote}>
                    Reimagining readiness for life's uncertain moments.
                </h1>
                <h4 className={styles.quote}>
                    The app that makes disaster preparedness easy and
                    accessible.
                    <br />
                    Because sometimes tomorrow doesn't look like today.
                </h4>
                <div>
                    <button className={styles.appStore}>App Store</button>
                    <button className={styles.playMarket}>Play Store</button>
                </div>
                <div className={styles.container}>
                    <Image
                        quality={100}
                        src="/images/profile.jpg"
                        className={styles.profile}
                        height={1047}
                        width={721}
                    />
                </div>
                <hr className={styles.line} />
                <h1 className={styles.headQuote}>
                    The right plan for when things don't go as planned
                </h1>
                <h4 className={styles.quote}>
                    The app that makes disaster preparedness easy and
                    accessible.
                    <br />
                    Because sometimes tomorrow doesn't look like today.
                </h4>
                {/* <div className={styles.boxes}> */}
                    <div className={styles.boxOne}>
                        <div className={styles.img}>
                            <Image
                                priority
                                src="/images/imageBox.jpg"
                                width={360}
                                height={321}
                            />
                        </div>
                        <h2 className={styles.textBox}>
                            Create your family's emergency plan
                        </h2>
                        <h4 className={styles.boxQuote}>
                            Our app is tailored to you, your family and your
                            little dog, too. We tell you what you need to stay
                            safe from hurricanes to wildfires and everything in
                            between.
                        </h4>
                    </div>
                    <div className={styles.boxTwo}>
                        <div className={styles.blueImg}>
                            <Image
                                priority
                                src="/images/Rectangle.jpg"
                                width={360}
                                height={391}
                            />
                        </div>
                        <h2 className={styles.blueText}>
                            Access and share important information, even offline
                        </h2>
                        <h4 className={styles.blueQuote}>
                            View critical information, family plans, and
                            documents at the push of a button, both online and
                            offline - no worries if cell towers go out.
                        </h4>
                    </div>
                    {/* 3RD BOX */}
                    {/* <div className={styles.greenBox}> */}
                        <div className={styles.boxThree}>
                            <div className={styles.img}>
                                <Image
                                    priority
                                    src="/images/greenBox.jpg"
                                    width={360}
                                    height={384}
                                />
                            </div>
                            <h2 className={styles.textBox}>
                                Know exactly what to do when an emergency
                                strikes
                            </h2>
                            <h4 className={styles.boxQuote}>
                                When disasters happen, harbor automatically
                                activates your readiness plan and sends you
                                personalized, on-demand info when it matters the
                                most.
                            </h4>
                        </div>
                        {/* 4TH BOX */}
                        <div className={styles.boxFour}>
                            <div className={styles.blueImg}>
                                <Image
                                    priority
                                    src="/images/yellowBox.jpg"
                                    width={360}
                                    height={346}
                                />
                            </div>
                            <h2 className={styles.blueText}>
                                Get peace-of-mind with automatic risk
                                assessments
                            </h2>
                            <h4 className={styles.blueQuote}>
                                We use data from NOAA, FEMA, and USGS to
                                pinpoint what your household is at risk for. No
                                more guessing.
                            </h4>
                        </div>
                    {/* </div> */}
                {/* </div> */}
                <h1 className={styles.headQuote}>
                We're ready, are you?
                </h1>
            </main>
        </>
    );
}
