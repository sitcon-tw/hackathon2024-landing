import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AddIcon from '@material-ui/icons/Add';
import GroupIcon from '@material-ui/icons/Group';
import LandscapeIcon from '@material-ui/icons/Landscape';
import InfoIcon from '@material-ui/icons/Info';
import EventIcon from '@material-ui/icons/Event';
import CreateIcon from '@material-ui/icons/Create';
import ComputerIcon from '@material-ui/icons/Computer';
import calculateSpacing from "./calculateSpacing";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "創新想法，實踐技術",
    text:
      "SITCON Hackathon 提供了一個實踐技術的舞台，鼓勵學生發揮所長，將所學知識轉化為創意發想與實踐目標的能力。",
    icon: <EmojiObjectsIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "挑戰問題，團隊合作",
    text:
      "SITCON Hackathon 提供學生互相交流和合作的機會。參與活動的學生來自不同的背景和學科，並擁有不同的專業知識和技能。學生們將透過組隊協作，共同發掘並解決問題。",
    icon: <GroupIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "拓展眼界，跨領域交流",
    text:
      "SITCON Hackathon 鼓勵科技文化和跨領域學術交流，扮演學習與分享的平台。我們鼓勵參與者分享技術與交流知識，也能更深入了解不同企業資源與社群文化，傳遞更加開放和包容的 SITCON 社群理念。",
    icon: <LandscapeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "活動資訊",
    text:
      "SITCON Hackathon 將由主題延伸三項有關社會的子議題，並期望參賽團隊利用外界資源與社群協力，完成專案、實踐社會參與。參賽團隊將在黑客松現場展開為期兩天的密集開發，並於次日的下午進行成果報告。最終由提供資源的單位，評選出具備最佳技術與最佳創意的團隊授予獎項。",
    icon: <InfoIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C00",
    headline: "活動時程",
    text: "",
    icon: <EventIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
    data: {items: [
      "4 月 官網上線、報名開始",
      "5 月中旬 正取團隊公告",
      "5 月下旬 參賽者工作坊與社群課程開跑",
      "07/06、07/07 SITCON Hackathon",
    ]}
  },
  {
    color: "#64DD17",
    headline: "預約報名表單 Pre-register",
    text:
      "若你有興趣參與今年 SITCON Hackathon 2024，可以先填寫預約報名表單，讓我們了解你對活動的期待與想法。若比賽開始正式報名，我們也會在第一時間提供報名資訊！\n\n",
    icon: <CreateIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
    data: {link: ['SITCON Hackathon 2024 預約報名表單問題大綱', 'https://docs.google.com/document/d/1UtwG5HYfz9yTs_8UAGFRNRmM7qEeeNFlByC6ERZG0ag/edit#heading=h.vqmr6lk79jk3']}
  },
  {
    color: "#304FFE",
    headline: "關於 SITCON About SITCON",
    text:
      "學生計算機年會（Students’ Information Technology Conference）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#C51162",
    headline: "行為準則 Code of Conduct",
    text:
      "SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀年會的行為準則（Code of Conduct），共同創造一個友善的環境。",
    icon: <FormatListNumberedIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#00B8D4",
    headline: "參與討論 Join the community",
    text:
      "SITCON 是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱 SITCON 的郵件論壇並貢獻你的想法，如果想成為明年年會的籌備團隊，也可以填寫跳坑表單，我們會在明年年會開始籌備時通知你！\n\n若你想進一步了解 SITCON 年會籌備與討論的內容，歡迎到 GitLab 上查看 SITCON 2024 的籌備歷程。",
    icon: <AddIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center">
          SITCON Hackathon 2024
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" style={{"white-space": "pre-line"}}>
          SITCON 作為台灣學生於資訊領域的入門磚，我們希望透過舉辦 SITCON Hackathon 鼓勵參與者關懷社會議題，並使用外界資源完成專案，同時提供學生、企業與社群等團隊相互砥礪成長的機會。
        </Typography>
        <Typography variant="body1" align="center" className="lg-mg-bottom" color="textSecondary" style={{"white-space": "pre-line"}}>
          時間：2024/7/6（六）～ 2024/7/7（日） <br/>
          地點：待定 　 　　　　　　　　　　　　
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                  data={element.data}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
