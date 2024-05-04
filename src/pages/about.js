import Head from "next/head";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import Image from "next/image";
import eyecatch from "../../images/about.jpg";
import Meta from "components/meta";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title={"About"} subtitle={"About development activities"} />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              佐治研究室が得意としているのは画像処理です．取得されたデータから色情報，地形情報，更には赤外線までも扱い，諸問題の解決を目指します．
            </p>
            <h2>いまやっていること</h2>
            <p>
              佐治研究室で現在解決を目指している研究課題は大きく分けて2つです．
            </p>
            <h3>交通問題への取り組み</h3>
            <p>
              自動車が広く普及した現代では，交通事故，あおり運転，スピード違反等の問題が後を絶たない状況です．
              そのため，自動車の速度計測，あおり運転検知，事故発生時の現場検証を中心に，それらの自動化を目指して研究に取り組んでいます．
            </p>
            <h3>災害発生時の対応</h3>
            <p>
              2つめは災害に関するものです．災害大国と呼ばれるほど，日本は毎年自然災害がその猛威を奮っています．そのような中で，災害現場の状況を安全に，広域に把握するための手段としてリモートセンシングが活用されています．小さいものではドローンに始まり，大きなものでは人工衛星まで，そのデータ取得方法は様々です．これらで撮影されたデータを解析し，災害領域の特定，流失家屋の検知等を目標として研究を行っています．
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
