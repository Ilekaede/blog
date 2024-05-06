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
import Accordion from "components/accordion";

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
      <Hero title={"About"} subtitle={"自分について"} />
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
            <h2>自己紹介</h2>
            <li>
              <p>
                <strong>所属：</strong>静岡大学　修士１年
              </p>
              <p>
                <strong>専攻：</strong>情報学
              </p>
              <p>
                <strong>専門分野：</strong>画像処理
              </p>
              <p>
                <strong>研究テーマ：</strong>
                <ul>
                  <li>災害地域上空画像を利用した斜面崩壊領域検出</li>
                  <li>ドローン撮影画像を利用した河川検出およびその活用</li>
                </ul>
              </p>
            </li>
            <h3>プログラミング経験・制作物</h3>
            <ul>
              <strong>個人制作</strong>
              <li>
                画像処理アルゴリズム学習プログラミングツール「SajiLab-B3-Programming-Kit」
              </li>
              <li>ポートフォリオサイト</li>
              <br />
              <strong>チーム開発</strong>
              <li>散歩＆アイテムゲットアプリ「PickNic」</li>
            </ul>

            <p></p>
            <h2>FAQ</h2>
            <Accordion heading="趣味はなんですか？">
              <p>動物が好きなので，動物園とか水族館に行くのが好きです！</p>
            </Accordion>
            <Accordion heading="将来の夢はなんですか？">
              <p>
                <ul>
                  <li>
                    湘南の海沿いの家に住んで，でかい犬とランニングをすること🐶
                  </li>
                  <li>自分の名前を日本史の教科書に載せたい！</li>
                  <li>目を瞑って振り返った時に後悔がない人生🏃‍♀️</li>
                </ul>
              </p>
            </Accordion>
            <Accordion heading="ポートフォリオ作成の目的は？">
              <ul>
                <li>
                  Next.jsを使ってみたかったので，参考書を見ながら勉強目的で作成．
                </li>
                <li>
                  Webページを公開して気付いたことを書き込む環境を作りたかった．
                </li>
                <li>GWに予定がなかったのでその活用🌞</li>
              </ul>
            </Accordion>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
