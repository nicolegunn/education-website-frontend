import StarIcon from './defaultAssestStyles/ComponentIcon'
import styles from "./StageFourCss/PersistentStyleSheet.module.css";

export default function ClassDigitalTechnologies() {
  return (
    <>
      <div className={styles.flex_box_container}>
        <div>
          <p  className={styles.header}>Whakarei ake i nga Matauranga Matua</p>
          <p className={styles.paragraph}>Ka whakarei ake te kaupapa i nga kaha o nga akonga i roto i nga 'Matauranga Matua' e 5 kua tautuhia ki te marautanga o Aotearoa.</p>
        </div>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>WHAKAARO</p>
            <p style={{fontSize: '1.3em'}}>Ina koa, i aro te kaupapa ki te whakaoti rapanga, te whakaaro hoahoa, me te whakaaro rorohiko.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>WAERE TATAHI</p>
            <p style={{fontSize: '1.2em'}}>Te wetewete i te reo, i nga tohu me nga tuhinga, kia marama ai, kia mohio ai ki nga tikanga e whakaputa ai te matauranga.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>TE WHAKAMAHI ANA</p>
            <p style={{fontSize: '1.2em'}}>Ko nga kaupapa me nga wero kua hangaia hei whakahihiri i nga akonga ki te tuhura me te whakamatau i te hihiko-whaiaro</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>TE WHAKAMAHI KI NGA HOA</p>
            <p style={{fontSize: '1.2em'}}>I hoahoatia te hotaka me nga waahi karekau e hono ana ki te taunekeneke a nga akonga i roto i nga momo ahuatanga rereke, tae atu ki nga mea penei i te kaha ki te whakarongo pai, te mohio ki nga tirohanga rereke, me te tiri whakaaro.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>TE WHAKAMAHI me te mahi tahi</p>
            <p style={{fontSize: '1.2em'}}>Ka akiaki te kaupapa i nga tauira ki te whai waahi ki nga hapori, penei i te whanau, te whanau, te kura, me te whai waahi me te hono ki etahi atu tangata.</p>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </>
  )
}