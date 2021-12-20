import Link from "next/link"
import Image from "next/image"

import style from "./style.module.css"

export default function MainFooter() {
    return (
        <footer className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.footer__logo}>
            <Link href="/">
              <a><Image src="/icons/mainLogo.png" alt="Main Logo" width={364} height={120} ></Image></a>
            </Link>           
          </div>
          <h2>© Copyright Amorous</h2>
        </div>
      </footer>
    )
}
