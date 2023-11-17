import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Capturing Life's Beauty Through My Lens":
        "Capturing Life's Beauty Through My Lens",
      Register: "Register",
      "Embark on a Visual Journey": "Embark on a Visual Journey",
      "About Me": "About Me",
      Intro:
        "I am a computer science master's graduate currently working in the finance industry in Shanghai, China. My passion for photography is a creative outlet that I've been exploring, even though my professional background is in a different field. Photography is a hobby that has gradually turned into a significant part of my life. It's a journey of continuous learning and self-expression, and I'm excited to share it with you through this website.",
      "My Journey in Photography": "My Journey in Photography",
      Journey:
        "My journey into the world of photography began as a hobby. Although I am relatively new to this art, I've been captivated by the process of capturing moments and the beauty that exists in our everyday lives. My initial experiences with a camera were filled with trial and error, but this process of learning has been incredibly rewarding. I'm constantly seeking to improve my skills, explore new techniques, and document the world through my lens.",
      "My Photography Gear": "My Photography Gear",
      Gear: "For my photographic endeavors, I primarily use a Canon EOS 5D Mark III and EOS 80D camera, paired with EF 17-40mm 1:4 L USM and EF-S 18-135mm f/3.5-5.6 IS STM lens. This versatile setup allows me to adapt to various shooting conditions, from wide-angle landscapes to close-up portraits. While I may not have an extensive array of equipment, I believe in the power of creativity and vision over the sheer number of gadgets. It's not about the gear, but how you use it to tell your visual story.",
      "Explore My Photographic Portfolio": "Explore My Photographic Portfolio",
      Landscape: "Landscape",
      Urban: "Urban",
      Wildlife: "Wildlife",
      Night: "Night",
      language: "Language",
      English: "English",
      Chinese: "Chinese",
      "Contact Me": "Contact Me",
      Email: "Email: ",
      "Record Number": "Record Number",
      "ICP Filing Subject Information": "ICP Filing Subject Information: ",
      "ICP Filing Service Information": "ICP Filing Service Information: ",
    },
  },
  zh: {
    translation: {
      "Capturing Life's Beauty Through My Lens": "通过镜头捕捉生活的美",
      Register: "加入",
      "Embark on a Visual Journey": "开始异常视觉之旅",
      "About Me": "关于我",
      Intro:
        "我是一位计算机科学硕士毕业生，目前在中国上海的金融行业工作。尽管我的专业背景与之不同，但我对摄影的热情成为我探索创造性的出口。摄影是一个逐渐成为我生活重要组成部分的爱好。这是一段持续学习和自我表达的旅程，我很高兴通过这个网站与您分享。",
      "My Journey in Photography": "摄影之旅",
      Journey:
        "我的摄影之旅始于一种爱好。尽管我对这门艺术接触较晚，但我深深着迷于捕捉瞬间和我们日常生活中存在的美丽。最初使用相机的过程充满了尝试和错误，但这个学习过程是非常有益的。希望能够不断努力提高自己的技能，探索新的技术，并通过我的镜头记录世界。",
      "My Photography Gear": "摄影器材",
      Gear: "在我的摄影探索中，我主要使用佳能 EOS 5D Mark III 和 EOS 80D 相机，配备 EF 17-40mm 1:4 L USM 和 EF-S 18-135mm f/3.5-5.6 IS STM 镜头。这个配置使我能够适应各种拍摄条件，从广角风景到特写肖像。虽然我的设备可能不是很多，但我相信创意和视觉的力量胜过于琳琅满目的设备。关键不在于器材，而在于你如何用它来诉说你的视觉故事。",
      "Explore My Photographic Portfolio": "探索我的摄影集",
      Landscape: "风景",
      Urban: "城市",
      Wildlife: "野外",
      Night: "夜景",
      language: "语言",
      English: "英语",
      Chinese: "中文",
      "Contact Me": "联系我",
      Email: "邮箱: ",
      "Record Number": "备案号",
      "ICP Filing Subject Information": "ICP备案主体信息: ",
      "ICP Filing Service Information": "ICP备案服务信息: ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
