import NavbarLandingComponent from "../components/NavbarLandingComponent";
import HeadingComponent from "../components/HeadingComponent";
import CardLandingComponent from "../components/CardLandingComponent";
import FooterLandingComponent from "../components/FooterLandingComponent";

function Landing() {
    return (
        <>
            <HeadingComponent />
            <NavbarLandingComponent />

            <div style={{ background: "#C9B18F" }}>
                <div class="container py-5">
                    <center class="mb-5">
                        <div class="mb-5" style={{ background: "#4F371B96", width: "1000px", height: "400px" }}></div>
                    </center>
                    <div style={{ background: "linear-gradient(to bottom right, #7E511D, #C9B18F)", width: "400px", height: "250px", position: "absolute", top: "45%", borderTopLeftRadius: "100px", borderBottomRightRadius: "100px" }}></div>
                </div>
            </div>
            <div style={{ background: "#B79A79" }}>
                <div class="container pb-5 ps-5 pe-5">
                    <div class="row row-cols-lg-5 mb-5">
                        <div class="col"><h1 class="text-center py-1" style={{ background: "#F5EADD" }}>Coffee</h1></div>
                    </div>
                    <div class="row row-cols-lg-3 mb-5">
                        <div class="col">
                            {/* Card Component */}
                            <CardLandingComponent image="https://i.pinimg.com/564x/8f/1e/38/8f1e38e7195170084f5f8e87b60f8363.jpg" title="Coffee Latte" />
                        </div>
                        <div class="col"><CardLandingComponent image="https://i.pinimg.com/564x/98/ea/96/98ea9687fb600c53d34d063237ec9c76.jpg" title="Vanilla Latte" /></div>
                        <div class="col"><CardLandingComponent image="https://i.pinimg.com/564x/56/21/73/5621734e22cc7988f33c89c45a72a46e.jpg" title="Choco Latte" /></div>
                    </div>


                    <div class="row row-cols-lg-5 mb-5">
                        <div class="col"><h1 class="text-center py-1" style={{ background: "#F5EADD" }}>Non Coffee</h1></div>
                    </div>
                    <div class="row row-cols-lg-3 mb-3">
                        <div class="col"><CardLandingComponent image="https://i.pinimg.com/564x/dd/04/d9/dd04d9bf6de94b0ef21c61183aeee850.jpg" title="Ice Macha" /></div>
                        <div class="col"><CardLandingComponent image="https://i.pinimg.com/564x/c9/8d/50/c98d50635e5d4e2ab73a9423eb35da3c.jpg" title="Strawberry Ice Cream" /></div>
                        <div class="col"><CardLandingComponent image="https://i.pinimg.com/564x/ad/25/b6/ad25b6063444d2d62fda0bdaf560b084.jpg" title="Choco Chips Ice Cream" /></div>
                    </div>
                </div>
            </div>
            <div style={{ background: "#C9B18F" }}>
                <div class="container py-5">
                    <div class="row g-0">
                        <div class="col-6 col-md-4">
                            <center>
                                <div style={{ background: "#F5EADD", width: "400px", height: "500px" }}><img class="mt-3" src="https://i.pinimg.com/564x/07/52/c9/0752c9b1feae93d4386c99fe1cab7271.jpg" style={{ width: "250px" }} /><h3 class="mt-3">LateLane</h3></div>
                            </center>
                        </div>
                        <div class="col-sm-6 col-md-8">
                            <center>
                                <div style={{ background: "#F5EADD", width: "600px", height: "500px" }}>
                                    <p class="p-5 text-start" style={{fontSize:"20px"}}>
                                        Setiap tegukan adalah pelajaran, setiap riak adalah pengalaman. Kami belajar
                                        memahami kompleksitas rasa, persis seperti menggali kebenaran hidup.
                                        Rasa kopi membawa kami pada perjalanan yang indah, seperti aliran sungai yang
                                        tenang namun mengalir dengan penuh makna. Kami merayakan setiap rasa,
                                        setiap momen yang berharga.
                                        Dan kini, dalam setiap cangkir kopi yang
                                        kami nikmati,kami melihat cerita kami. Dalam setiap bubuk dan air yang
                                        menyatu,terpapar kegigihan dan dedikasi kami. Cerita tentang perjalanan kami,
                                        melalui kehidupan yang manis dan pahit, melalui cangkir demi cangkir, dalam
                                        mencari kepuasan dan kebenaran.
                                    </p>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLandingComponent />
        </>
    )
}

export default Landing