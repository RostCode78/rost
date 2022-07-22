import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container-navbar">
            <Link href="/" as="/">
                <div className="titulo">
                    <div className="circulo">
                        <img src="/assets/icon.png" alt="D12" />
                    </div>
                    <p>rostcode.com</p>
                    <div className="circulo-none"></div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar;