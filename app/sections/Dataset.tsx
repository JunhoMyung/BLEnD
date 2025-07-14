// Table: https://github.com/light9639/React-Table-TypeScript.git

import { Section } from "../components/Section"
import React, { useState } from "react"

export const Dataset = () => {
    const [selected, setSelected] = useState('US');

    const handleSelect = (value: string) => {
      setSelected(value);
    };

    const getTable = (value: string) => {
      switch (value) {
        case 'US':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th className="whitespace-nowrap">Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">What street food do people from the US like to eat?</td>
                <td className="text-left whitespace-nowrap">hot dogs: 4<br/> hamburger: 1<br/> tacos: 1, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">What is the most popular indoor sport in the US?</td>
                <td className="text-left whitespace-nowrap">basketball: 5<br/> hockey: 1</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">What is a popular family activity with a child to do on weekends in the US?</td>
                <td className="text-left whitespace-nowrap">go to a park: 2<br/> bowling: 1<br/> swim: 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">What language is taught in schools in the US besides English?</td>
                <td className="text-left whitespace-nowrap">Spanish: 5<br/> French: 3<br/> German: 2, ...</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">On which holiday do all family members tend to reunite in the US?</td>
                <td className="text-left whitespace-nowrap">Thanksgiving: 4<br/> Christmas: 2</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">What is regarded as the most important perk typically offered to employees in the US?</td>
                <td className="text-left whitespace-nowrap">vacation: 3<br/> healthcare: 3<br/> benefits: 1, ...</td>
              </tr>
            </tbody>
          </table>;
        case 'GB':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th className="whitespace-nowrap">Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">What street food do people from the US like to eat?</td>
                <td className="text-left whitespace-nowrap">kebabs: 2<br/> burgers: 2<br/> fish and chips: 2, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">What is the most popular indoor sport in the UK?</td>
                <td className="text-left whitespace-nowrap">swimming: 2<br/> netball: 2<br/>badminton: 1, ...</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">What is a popular family activity with a child to do on weekends in the UK?</td>
                <td className="text-left whitespace-nowrap">go to a park: 2<br/> go to the zoo: 2<br/> walks: 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">What language is taught in schools in the UK besides English?</td>
                <td className="text-left whitespace-nowrap">French: 5<br/> Spanish: 3<br/> German: 2, ...</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">On which holiday do all family members tend to reunite in the UK?</td>
                <td className="text-left whitespace-nowrap">Christmas: 5</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">What is regarded as the most important perk typically offered to employees in the UK?</td>
                <td className="text-left whitespace-nowrap">bonus: 2<br/>free lunches: 1<br/>pension: 1, ...</td>
              </tr>
            </tbody>
          </table>;
        case 'CN':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">中国人喜欢吃什么街头小吃？ <br/>(What street food do people from China like to eat?)</td>
                <td className="text-left whitespace-nowrap">烤肠 (roasted sausage): 3<br/>烧烤 (barbecue): 2<br/>糖葫芦 (candied haw): 1, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">中国最受欢迎的室内运动是什么？<br/>(What is the most popular indoor sport in China?)</td>
                <td className="text-left whitespace-nowrap">乒乓球 (table tennis): 3<br/> 羽毛球 (badminton): 2<br/> 电竞 (e-sports): 1, ...</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">在中国，周末和孩子一起做的一项受欢迎的家庭活动是什么？<br/>(What is a popular family activity with a child to do on weekends in China?)</td>
                <td className="text-left whitespace-nowrap">去公园 (go to a park): 2<br/> 逛街 (shopping): 1<br/> 室外活动 (outdoor activities): 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">在中国的学校里除了英语之外还教授哪种语言？ <br/>(What language is taught in schools in China besides English?)</td>
                <td className="text-left whitespace-nowrap">中文 (chinese): 4</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">在中国，哪个节日家里的所有成员会团聚？<br/>(On which holiday do all family members tend to reunite in China?)</td>
                <td className="text-left whitespace-nowrap">春节 (spring festival): 4<br/> 中秋节 (mid-autumn festival): 4<br/>清明 (qingming): 1</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">在中国，通常认为给员工提供的最重要的福利是什么？<br/>(What is regarded as the most important perk typically offered to employees in China?)</td>
                <td className="text-left whitespace-nowrap">五险一金 (five insurances and one fund): 3<br/>双休 (weekends off): 2<br/>年假 (annual leave): 1, ...</td>
              </tr>
            </tbody>
          </table>;
        case 'ES':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">¿Qué comida callejera les gusta comer a las personas de España? <br/>(What street food do people from Spain like to eat?)</td>
                <td className="text-left whitespace-nowrap">churros (churros): 2<br/>patatas fritas (French fries): 1<br/>pipas (sunflower seeds): 1, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">¿Cuál es el deporte de interior más popular en España?<br/>(What is the most popular indoor sport in Spain?)</td>
                <td className="text-left whitespace-nowrap">baloncesto (basketball): 2<br/> futbol sala (indoor football): 2<br/> fútbol 7 (7-a-side football): 1, ...</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">¿Cuál es una actividad familiar popular para hacer con un niño los fines de semana en España?<br/>(What is a popular family activity with a child to do on weekends in Spain?)</td>
                <td className="text-left whitespace-nowrap">ir al parque (go to the park): 2<br/> pasear (to walk): 2<br/> jugar a videojuegos (play video games): 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">¿Qué idioma se enseña en las escuelas de España además del inglés? <br/>(What language is taught in schools in Spain besides English?)</td>
                <td className="text-left whitespace-nowrap">francés (french): 5<br/>latin (latin): 2<br/>aleman (german): 1, ...</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">¿En qué festivo suelen reunirse todos los miembros de la familia en España?<br/>(On which holiday do all family members tend to reunite in Spain?)</td>
                <td className="text-left whitespace-nowrap">navidad (christmas): 3<br/> nochebuena (christmas eve): 2<br/>nochevieja (new year's eve): 2</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">¿Cuál se considera el beneficio más importante que se ofrece típicamente a los empleados en España?<br/>(What is regarded as the most important perk typically offered to employees in Spain?)</td>
                <td className="text-left whitespace-nowrap">la seguridad social (social security): 2<br/>salario (salary): 1<br/>tiempo libre (free time): 1, ...</td>
              </tr>
            </tbody>
          </table>;
        case 'ID':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">Makanan jalanan apa yang disukai oleh orang-orang dari Indonesia? <br/>(What street food do people from Indonesia like to eat?)</td>
                <td className="text-left whitespace-nowrap">cilok (cilok): 3<br/>bakso (meatball): 2<br/>seblak (seblak): 1, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">Apa olahraga dalam ruangan yang paling populer di Indonesia?<br/>(What is the most popular indoor sport in Indonesia?)</td>
                <td className="text-left whitespace-nowrap">bulutangkis (badminton): 4<br/> futsal (futsal): 2<br/> ping pong (table tennis): 1, ...</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">Apa kegiatan keluarga yang populer untuk dilakukan bersama anak pada akhir pekan di Indonesia?<br/>(What is a popular family activity with a child to do on weekends in Indonesia?)</td>
                <td className="text-left whitespace-nowrap">jalan-jalan ke mall (going to the mall): 3<br/> bersepeda (cycling): 2<br/> nonton tv (watch tv): 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">Bahasa apa yang diajarkan di sekolah-sekolah di Indonesia selain Bahasa Inggris? <br/>(What language is taught in schools in Indonesia besides English?)</td>
                <td className="text-left whitespace-nowrap">bahasa indonesia (indonesian): 2<br/>mandarin (mandarin): 2<br/>bahasa daerah (regional language): 1</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">Pada hari libur apa semua anggota keluarga biasanya berkumpul di Indonesia?<br/>(On which holiday do all family members tend to reunite in Indonesia?)</td>
                <td className="text-left whitespace-nowrap">idul fitri (eid al-fitr): 4<br/> natal (christmas):3<br/>tahun baru (new year): 2, ...</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">Apa yang dianggap sebagai keuntungan paling penting yang biasanya ditawarkan kepada karyawan di Indonesia?<br/>(What is regarded as the most important perk typically offered to employees in Indonesia?)</td>
                <td className="text-left whitespace-nowrap">gaji (salary): 3<br/>thr (religious holiday allowance): 1<br/>bonus tahunan (annual bonus): 1, ...</td>
              </tr>
            </tbody>
          </table>;
        case 'MX':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">¿Qué comida callejera les gusta comer a las personas de México?<br/>(What street food do people from Mexico like to eat?)</td>
                <td className="text-left whitespace-nowrap">tacos (tacos): 5<br/>quesadillas (quesadillas): 3<br/>tamales (tamales): 2, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">¿Cuál es el deporte de interior más popular en México?<br/>(What is the most popular indoor sport in Mexico?)</td>
                <td className="text-left whitespace-nowrap">basquetbal (basketball): 3<br/>natación (swimming): 1<br/> box (boxing): 1, ...</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">¿Cuál es una actividad familiar popular para hacer con un niño los fines de semana en México?<br/>(What is a popular family activity with a child to do on weekends in Mexico?)</td>
                <td className="text-left whitespace-nowrap">ir al parque (go to the park): 5<br/> visitar a la abuelita (visit grandma): 1<br/> ir al cine (go to the movies): 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">¿Qué idioma se enseña en las escuelas de México además del inglés? <br/>(What language is taught in schools in Mexico besides English?)</td>
                <td className="text-left whitespace-nowrap">francés (French): 4<br/>español (Spanish): 2<br/>nahuatl (Nahuatl): 1</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">¿En qué festividad suelen reunirse todos los miembros de la familia en México?<br/>(On which holiday do all family members tend to reunite in Mexico?)</td>
                <td className="text-left whitespace-nowrap">navidad (christmas): 5<br/> año nuevo (new year): 3<br/>16 de septiembre (september 16th): 1, ...</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">¿Cuál se considera el beneficio más importante que se ofrece típicamente a los empleados en México?<br/>(What is regarded as the most important perk typically offered to employees in Mexico?)</td>
                <td className="text-left whitespace-nowrap">IMSS (Mexican Social Security Institute): 2<br/>vacaciones pagadas (paid vacations): 2<br/>Afore (retirement fund administration companies): 1, ...</td>
              </tr>
            </tbody>
          </table>;
        case 'KR':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">대한민국 사람들은 어떤 길거리 음식을 좋아하나요? <br/>(What street food do people from South Korea like to eat?)</td>
                <td className="text-left whitespace-nowrap">떡볶이 (stir-fried rice cakes): 4<br/> 붕어빵 (bungeoppang): 1<br/> 델리만쥬 (delimanjoo): 1, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">대한민국에서 가장 인기 있는 실내 스포츠는 무엇인가요?<br/>(What is the most popular indoor sport in South Korea?)</td>
                <td className="text-left whitespace-nowrap">클라이밍(climbing): 2<br/> 배드민턴(badminton): 1<br/> 농구(basketball): 1, ...</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">대한민국에서 주말에 아이와 함께하는 인기 있는 가족 활동은 무엇인가요?<br/>(What is a popular family activity with a child to do on weekends in South Korea?)</td>
                <td className="text-left whitespace-nowrap">여행 (travel): 2<br/> 스포츠 (sports): 1<br/> 보드 게임 (board game): 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">대한민국의 학교에서 학생들은 영어 외에 어떤 언어를 배우나요?<br/>(What language is taught in schools in South Korea besides English?)</td>
                <td className="text-left whitespace-nowrap">일본어 (Japanese): 4<br/>중국어 (Chinese): 3<br/>불어 (French): 1</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">대한민국에서 모든 가족 구성원들이 함께 모이는 명절은 무엇이 있나요?<br/>(On which holiday do all family members tend to reunite in South Korea?)</td>
                <td className="text-left whitespace-nowrap">추석(Chuseok): 5<br/> 설날(Lunar New Year): 5</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">대한민국에서 일반적으로 직원들에게 제공되는 혜택 중 가장 중요하게 여겨지는 것은 무엇인가요?<br/>(What is regarded as the most important perk typically offered to employees in South Korea?)</td>
                <td className="text-left whitespace-nowrap">보너스 (bonus): 2<br/>직원가 할인 (employee discount): 2<br/>휴가 (vacation): 1, ...</td>
              </tr>
            </tbody>
          </table>;
        case 'GR':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">Τι street food συνηθίζουν να τρώνε οι άνθρωποι στην Ελλάδα; <br/>(What street food do people from Greece like to eat?)</td>
                <td className="text-left whitespace-nowrap">πιτόγυρο (pita gyro): 3<br/> σουβλάκι (souvlaki): 1<br/> πίτσα (pizza): 1</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">Ποιο είναι το πιο δημοφιλές άθλημα εσωτερικού χώρου στην Ελλάδα;<br/>(What is the most popular indoor sport in Greece?)</td>
                <td className="text-left whitespace-nowrap">μπάσκετ (basketball): 4<br/>ποδόσφαιρο (football): 1</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">Ποια είναι μια δημοφιλής οικογενειακή δραστηριότητα με ένα παιδί για τα σαββατοκύριακα στην Ελλάδα;<br/>(What is a popular family activity with a child to do on weekends in Greece?)</td>
                <td className="text-left whitespace-nowrap">βόλτα (stroll): 1<br/> κινηματογράφος (cinima): 1<br/> παιδική χαρά (playground): 1</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">Ποια γλώσσα διδάσκεται στα σχολεία στην Ελλάδα πέρα από τα Αγγλικά;<br/>(What language is taught in schools in Greece besides English?)</td>
                <td className="text-left whitespace-nowrap">γερμανικά (German): 5<br/>γαλλικά (French): 5<br/>ελληνικά (Greek): 1</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">Σε ποια εορτή συνηθίζουν όλα τα μέλη της οικογένειας να επανασυνδέονται στην Ελλάδα;<br/>(On which holiday do all family members tend to reunite in Greece?)</td>
                <td className="text-left whitespace-nowrap">πάσχα (Easter): 4<br/> χριστούγεννα (Christmas): 3 <br/> γενέθλια (birthday): 1</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">Ποιο θεωρείται το σημαντικότερο προνόμιο που συνήθως προσφέρεται στους εργαζομένους στην Ελλάδα;<br/>(What is regarded as the most important perk typically offered to employees in Greece?)</td>
                <td className="text-left whitespace-nowrap">ασφάλιση (insurance): 2<br/>κοντινές διακοπές (short breaks): 1<br/>άδεια (days off): 1 </td>
              </tr>
            </tbody>
          </table>;
        case 'IR':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-right">مردم درایران چه غذاهای خیابانی دوست دارند بخورند؟<br/>(What street food do people from Iran like to eat?)</td>
                <td className="text-left whitespace-nowrap">فالفل (Falafel): 2<br/> سمبوسه (Samosa): 1<br/> پیراشکی (Pirozhki): 1</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-right">محبوب‌ترین ورزش سرپوشیده در ایران چیست؟<br/>(What is the most popular indoor sport in Iran?)</td>
                <td className="text-left whitespace-nowrap">والیبال (volleyball): 2<br/>فوتسال (futsal): 2<br/> بسکتبال (basketball): 1</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-right">درایران یک فعالیت خانوادگی محبوب با فرزند برای انجام دادن در آخر هفته‌ها چیست؟<br/>(What is a popular family activity with a child to do on weekends in Iran?)</td>
                <td className="text-left whitespace-nowrap">پیک نیک در پارک (picnic in the park): 1<br/> سفر (travel): 1<br/> مهمانی (party): 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-right">درایران به جز انگلیسی، چه زبان‌هایی در مدارس تدریس داده می‌شود؟<br/>(What language is taught in schools in Iran besides English?)</td>
                <td className="text-left whitespace-nowrap">عربی (Arabic): 4<br/> فرانسه (French): 1, ... </td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-right">در ایران در کدام تعطیلات همه اعضای خانواده معمولاً دور هم جمع می‌شوند؟<br/>(On which holiday do all family members tend to reunite in Iran?)</td>
                <td className="text-left whitespace-nowrap">نوروز (New Year): 4<br/> چهارشنبه سوری (Chaharshanbe Suri): 1 <br/> سیزده‌به‌در (Nature's Day): 1, ... </td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-right">در ایران مهم‌ ترین مزیتی که معمولاً به کارمندان  ارائه می‌شود، چیست؟<br/>(What is regarded as the most important perk typically offered to employees in Iran?)</td>
                <td className="text-left whitespace-nowrap">بیمه (insurance): 2 <br/>حقوق بازنشستگی (pension): 1<br/> پاداش اضافه کار (overtime bonus): 1</td>
              </tr>
            </tbody>
          </table>;
        case 'DZ':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-right">أي نوع من الأكلات الشعبية يحب الجزائريون تناولها؟<br/>(What street food do people from Algeria like to eat?)</td>
                <td className="text-left whitespace-nowrap">الكسكس (Couscous): 4<br/> الشخشوخة (Chakhchoukha): 2<br/> الرشتة (Rechta): 1</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-right">ما هي أشهر رياضة قاعة في الجزائر؟<br/>(What is the most popular indoor sport in Algeria?)</td>
                <td className="text-left whitespace-nowrap">المالكمة (boxing): 2<br/>كرة‌الید (handball): 1<br/> كرة‌الطائرة (volleyball): 1</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-right">ما هي النشاطات العائلية الشائعة التي يمكن القيام بها مع الأطفال في عطلة نهاية الأسبوع في الجزائر؟<br/>(What is a popular family activity with a child to do on weekends in Algeria?)</td>
                <td className="text-left whitespace-nowrap">التنزه (hiking): 5</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-right">أي لغة تُدرَّس في المدارس الجزائرية بالإضافة إلى اللغة الإنجليزية؟<br/>(What language is taught in schools in Algeria besides English?)</td>
                <td className="text-left whitespace-nowrap">الفرنسیة (French): 5 </td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-right">في أي عيد يجتمع أفراد العائلة في الجزائر؟<br/>(On which holiday do all family members tend to reunite in Algeria?)</td>
                <td className="text-left whitespace-nowrap">عيد الفطر (Eid al-Fitr): 5<br/> عيد الأضحى (Eid al-Adha): 4 <br/> رأس السنة (New Year): 1, ... </td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-right">ما هي أهم ميزة  تُقدم عادةً للموظفين في الجزائر؟<br/>(What is regarded as the most important perk typically offered to employees in Algeria?)</td>
                <td className="text-left whitespace-nowrap">الراتب (salary): 2 <br/>عالوة (allowance): 2<br/> سیارة وظیفة (offical car): 1</td>
              </tr>
            </tbody>
          </table>;
        case 'AZ':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">Τι street food συνηθίζουν να τρώνε οι άνθρωποι στην Ελλάδα; <br/>(What street food do people from Azerbaijan like to eat?)</td>
                <td className="text-left whitespace-nowrap">dönər (doner kebab): 5 </td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">Azərbaycanda ən populyar qapalı idman növü hansıdır?<br/>(What is the most popular indoor sport in Azerbaijan?)</td>
                <td className="text-left whitespace-nowrap">şahmat (chess): 3<br/>basketbol (basketball): 1</td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">Azərbaycanda həftə sonları ailə ilə birlikdə uşaqla nə etmək populyardır?<br/>(What is a popular family activity with a child to do on weekends in Azerbaijan?)</td>
                <td className="text-left whitespace-nowrap">parklara getmək (go to parks): 3<br/> oyun meydançalarına getmək (go to playgrounds): 1<br/> bağ evinə getmək (go to the country house): 1</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">Azərbaycanda məktəblərdə ingilis dilindən başqa hansı dillər tədris edilir?<br/>(What language is taught in schools in Azerbaijan besides English?)</td>
                <td className="text-left whitespace-nowrap">rus dili (Russian): 5<br/>alman dili (German): 2<br/>fransız dili (French): 1</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">Azərbaycanda ailə üzvləri hansı bayramda bir araya gəlirlər?<br/>(On which holiday do all family members tend to reunite in Azerbaijan?)</td>
                <td className="text-left whitespace-nowrap">novruz bayramı (novruz): 5<br/> yeni ı̇ l bayramı (new year): 1</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">Azərbaycanda işçilərə adətən təklif edilən ən önəmli imtiyaz nə hesab olunur?<br/>(What is regarded as the most important perk typically offered to employees in Azerbaijan?)</td>
                <td className="text-left whitespace-nowrap">uzun məzuniyyət (long vacation): 1<br/>rütbə artımı (promotion): 1<br/>maaş (salary): 1 </td>
              </tr>
            </tbody>
          </table>;
        case 'KP':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">북한 사람들은 어떤 거리 음식을 좋아 하나요? <br/>(What street food do people from North Korea like to eat?)</td>
                <td className="text-left whitespace-nowrap">두부밥 (tofu rice): 4 <br/>인조고기밥 (synthetic meat rice): 2 <br/>김밥 (gimbap): 1, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">북한에서 좋아 하는 실내 체육운동은 무엇인가요?<br/>(What is the most popular indoor sport in North Korea?)</td>
                <td className="text-left whitespace-nowrap">탁구 (table tennis): 3<br/>롱구 (basketball): 2 <br/>배구 (volleyball): 1, ... </td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">북한에서 휴식일에 아이와 함께하는 많이 하는 가족 활동은 무엇인가요?<br/>(What is a popular family activity with a child to do on weekends in North Korea?)</td>
                <td className="text-left whitespace-nowrap">사사끼 (card game): 1<br/> 장마당가기 (go to the market): 1<br/> 영화보기 (watching movie): 1, ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">북한의 학교에서 학생들은 영어 외에 어떤 외국어를 배우나요?<br/>(What language is taught in schools in North Korea besides English?)</td>
                <td className="text-left whitespace-nowrap">중국어 (Chinese): 4<br/>러시아어 (Russian): 3<br/>한문 (Chinese characters): 1</td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">북한에서 모든 가족 식구들이 함께 모이는 명절은 무엇이 있나요?<br/>(On which holiday do all family members tend to reunite in North Korea?)</td>
                <td className="text-left whitespace-nowrap">추석 (Chuseok): 3<br/> 설날 (Lunar New Year): 2 <br/> 양력설 (gregorian new year): 1</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">북한에서 일반적으로 로동자들에게 주는 사회급양, 표창 및 휴양소 휴가 중 가장 중요하게 여기는 것은 무엇인가요?<br/>(What is regarded as the most important perk typically offered to employees in North Korea?)</td>
                <td className="text-left whitespace-nowrap">사회급양 (social distribution): 2<br/>휴양소 휴가 (resort vacation): 1<br/>표창 휴가 (commendation): 1 </td>
              </tr>
            </tbody>
          </table>;
        case 'JB':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">Jajanan jalanan naon nu resep didahar ku urang Jawa Barat? <br/>(What street food do people from West Java like to eat?)</td>
                <td className="text-left whitespace-nowrap">cilok (cilok): 2 <br/>baso (meatball): 2<br/>mi hayam (chicken noodle):1 , ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">Naon olahraga jero rohangan nu pang populerna di Jawa Barat?<br/>(What is the most popular indoor sport in West Java?)</td>
                <td className="text-left whitespace-nowrap">bulu tangkis (badminton): 4<br/>futsal (futsal): 2 <br/>pingpong (table tennis):1 , ... </td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">Naon kagiatan kulawarga anu populer dipigawe babarengan jeung budak pikeun dilakukeun dina ahir minggu di Jawa Barat?<br/>(What is a popular family activity with a child to do on weekends in West Java?)</td>
                <td className="text-left whitespace-nowrap">olahraga (sports): 1<br/> lalajo tipi (watching tv): 1<br/> ngojay (swimming): 1 , ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">Basa naon nu diajarkeun di sakola-sakola di Jawa Barat salian ti Basa Inggris?<br/>(What language is taught in schools in West Java besides English?)</td>
                <td className="text-left whitespace-nowrap">basa indonesia (indonesian language): 4<br/>basa sunda (sundanese language): 2<br/>jepang (japanese language):2 </td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">Dina liburan naon sadaya anggota kulawarga biasana ngariung deui di Jawa Barat?<br/>(On which holiday do all family members tend to reunite in West Java?)</td>
                <td className="text-left whitespace-nowrap">idul fitri (eid al-fitr): 4<br/> libur lebaran (eid holiday): 1 <br/> natal (christmas):1 </td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">Naon nu dianggap minangka kauntungan pang pentingna nu biasana ditawarkeun ka karyawan di Jawa Barat?<br/>(What is regarded as the most important perk typically offered to employees in West Java?)</td>
                <td className="text-left whitespace-nowrap">asuransi kasihata (health insurance): 2<br/>gajih (salary): 1<br/>bonus (bonus): 1</td>
              </tr>
            </tbody>
          </table>;
        case 'AS':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">অসমীয় লোকে সাধাৰণতে কি ধৰণৰ ৰাস্তাৰ খাদ্য খোৱা পছন্দ কৰে?<br/>(What street food do people from Assam like to eat?)</td>
                <td className="text-left whitespace-nowrap">ফুচকা (panipuri): 4 <br/>ম’ম(dumpling): 4<br/> চাহ(tea): 1 , ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">অসমত কি সবাতোকৈ জনপ্ৰিয় ইনড'ৰ ক্ৰীড়া কি?<br/>(What is the most popular indoor sport in Assam?)</td>
                <td className="text-left whitespace-nowrap">লুডু(ludo): 4 <br/>কেৰাম (carrom): 3<br/>দবা (chess): 2 </td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">অসমত সপ্তাহান্তত শিশুসহ পৰিয়ালে কি জনপ্ৰিয় কাম কৰে?<br/>(What is a popular family activity with a child to do on weekends in Assam?)</td>
                <td className="text-left whitespace-nowrap">ফুৰিব যায় (go for a walk): 3<br/> গার্ডেনিং (gardening): 1<br/> পিকনিকলৈ যায় (picnic): 1 , ...</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">অসমৰ বিদ্যালয়সমূহত ইংৰাজীৰ উপৰিও আন কোন ভাষা শিক্ষা দিয়া হয়?<br/>(What language is taught in schools in Assam besides English?)</td>
                <td className="text-left whitespace-nowrap">হিন্দী (hindi): 5<br/>সংস্কৃত (sanskrit): 2<br/>অসমীয়া (assamese): 2, ... </td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">অসমত কোন উৎসৱত সকলো পৰিয়ালৰ সদস্যসকল একত্ৰিত হ'বলৈ প্ৰৱণ হয়?<br/>(On which holiday do all family members tend to reunite in Assam?)</td>
                <td className="text-left whitespace-nowrap">বিহু (Bihu): 5<br/> পূজা (Puja): 1 <br/> দুর্গা পূজা (Durga Puja): 2</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">অসমত কৰ্মচাৰীসকলে সাধাৰণতে প্ৰদান কৰা আটাইতকৈ গুৰুত্বপূৰ্ণ সুবিধাটো কি হিচাপে গণ্য কৰা হয়?<br/>(What is regarded as the most important perk typically offered to employees in Assam?)</td>
                <td className="text-left whitespace-nowrap">স্বাস্থ্য বীমা সুবিধা (health insurance benefit): 2<br/> বিনামূলীয়া চিকিৎসা (free treatment): 1</td>
              </tr>
            </tbody>
          </table>;
        case 'NG':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">Wane irin abincin titi ne mutanen Arewacin Najeriya suka fi son ci?<br/>(What street food do people from Northen Nigeria like to eat?)</td>
                <td className="text-left whitespace-nowrap">awara (fried bean cake): 3 <br/>gurasa(flatbread): 2<br/> shinkafa (rice): 1, ...</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">Wanne wasan cikin gida da aka fi so a Arewacin Najeriya?<br/>(What is the most popular indoor sport in Northen Nigeria?)</td>
                <td className="text-left whitespace-nowrap">kwallon kafa (football): 1 <br/>kacici-kacici (riddle): 1  </td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">Menene shahararren aikin gida da yara suka fi so suyi a karshen mako a Arewacin Najeriya?<br/>(What is a popular family activity with a child to do on weekends in Northen Nigeria?)</td>
                <td className="text-left whitespace-nowrap">shara (sweep): 3<br/> wanki (washing): 1</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">Wane yare ake koyarwa a makarantun Arewacin Najeriya banda Turanci?<br/>(What language is taught in schools in Northen Nigeria besides English?)</td>
                <td className="text-left whitespace-nowrap">hausa (hausa): 4<br/>larabci (arabic): 4  </td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">A wane hutun ne dukkan 'yan uwa sukan hadu a Arewacin Najeriya?<br/>(On which holiday do all family members tend to reunite in Northen Nigeria?)</td>
                <td className="text-left whitespace-nowrap">hutun sallah (eid holiday): 4<br/> hutun kistimeti (christmas): 3</td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">Menene ake dauka a matsayin mafi muhimmancin alawus da ake bayarwa ga ma'aikata a Arewacin Najeriya?<br/>(What is regarded as the most important perk typically offered to employees in Northen Nigeria?)</td>
                <td className="text-left whitespace-nowrap">kuɗi (money): 2 </td>
              </tr>
            </tbody>
          </table>;
        case 'ET':
          return <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Question</th>
                <th>Annotations <br/>(Number of Votes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td className="text-left">ኢትዮጵያውያን ምን የጎዳና ምግብ ይወዳሉ?<br/>(What street food do people from Ethiopia like to eat?)</td>
                <td className="text-left whitespace-nowrap">ችፕስ (chips): 4 <br/>ቆሎ (qollo): 2</td>
              </tr>
              <tr>
                <td>Sports</td>
                <td className="text-left">በኢትዮጵያ የትኛው ዓይነት የቤት ውስጥ ስፖርት በጣም ታዋቂ ነው?<br/>(What is the most popular indoor sport in Ethiopia?)</td>
                <td className="text-left whitespace-nowrap">ቦክስ (boxing): 1 </td>
              </tr>
              <tr>
                <td>Family</td>
                <td className="text-left">በኢትዮጵያ በሳምንት መጨረሻ ቤተሰብ ከልጅ ጋር ለመስራት የታወቀ እንቅስቃሴ ምንድን ነው?<br/>(What is a popular family activity with a child to do on weekends in Ethiopia?)</td>
                <td className="text-left whitespace-nowrap">ሩጫ (running): 2<br/> ልብስ ማጠብ (washing clothes): 1 <br/>ቤት ማጽዳት (house cleaning)</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="text-left">በኢትዮጵያ ትምህርት ቤቶች ከእንግሊዝኛ ቋንቋ በተጨማሪ ምን ይማራል?<br/>(What language is taught in schools in Ethiopia besides English?)</td>
                <td className="text-left whitespace-nowrap">አማርኛ (amharic): 4<br/>ኦሮምኛ (oromic): 1  </td>
              </tr>
              <tr>
                <td>Holidays/<br/>Celebrations/<br/>Leisure</td>
                <td className="text-left">በኢትዮጵያ በየትኛው በዓል ሁሉም ቤተሰቦች በአንድ ላይ ለመሆን ይሻሉ?<br/>(On which holiday do all family members tend to reunite in Ethiopia?)</td>
                <td className="text-left whitespace-nowrap">ፋሲካ (easter): 2<br/> ረመዳን (ramadan): 1 <br/>ዘመን መለወጫ (new year) </td>
              </tr>
              <tr>
                <td>Work-life</td>
                <td className="text-left">በኢትዮጵያ ለሠራተኞች ተለይቶ የሚቀርብ እና እጅግ ዋና የሆነ ተጨማሪ አበል ምንድነው?<br/>(What is regarded as the most important perk typically offered to employees in Ethiopia?)</td>
                <td className="text-left whitespace-nowrap">የቤት አበል (housing allowance): 2<br/> ውሎ አበል (allowance): 1 <br/>ቦነስ (bonus): 1</td>
              </tr>
            </tbody>
          </table>;
        default:
          return null;
      }
    };




    return <Section title="Construction of BLEnD">
        <p className="mb-4">
        We introduce BLEnD, a hand-crafted benchmark designed to evaluate large language models' knowledge of everyday life across diverse cultures and languages. BLEnD covers 16 countries/regions and 13 languages, focusing on cultural aspects like food, sports, family, education, holidays, and work life.
        The dataset construction involves:
        (1) collection of culturally relevant question templates,
        (2) question filtering and localization,
        (3) answer annotation by native speakers, and
        (4) answer aggregation.
        </p>
        <img alt="phases figure" className="w-full my-8" src={require('../../public/images/blend_figure1.png')}/>

        <div>
          <div className="text-2xl font-light text-[#4592ec] mb-4">Examples</div>
          <div>
            <div className="overflow-x-auto">
              <div className="flex flex-nowrap gap-3 py-2 px-1 w-max">
                {[
                  ['US', 'United States'],
                  ['GB', 'United Kingdom'],
                  ['CN', 'China'],
                  ['ES', 'Spain'],
                  ['ID', 'Indonesia'],
                  ['MX', 'Mexico'],
                  ['KR', 'South Korea'],
                  ['GR', 'Greece'],
                  ['IR', 'Iran'],
                  ['DZ', 'Algeria'],
                  ['AZ', 'Azerbaijan'],
                  ['KP', 'North Korea'],
                  ['JB', 'West Java'],
                  ['AS', 'Assam'],
                  ['NG', 'Northern Nigeria'],
                  ['ET', 'Ethiopia']
                ].map(([code, name]) => (
                  <a
                    key={code}
                    className={`icon-label-button flex items-center justify-center text-center h-10 border rounded-lg border-[#444]
                      ${selected === code
                        ? 'text-white bg-[#222]'
                        : 'text-[#333] bg-transparent hover:bg-[#222] hover:text-white'}
                    `}
                    onMouseEnter={() => handleSelect(code)}
                  >
                    <span className="whitespace-nowrap">{name} ({code})</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full my-4">
              {getTable(selected)}
            </div>
          </div>
          <div>
            <div className="text-2xl font-light text-[#4592ec] mt-10">Statistics</div>
            <figure className="w-[75%] mx-auto my-8">
              <img
                alt="phases figure"
                className="w-full"
                src={require('../../public/images/stat.jpg')}
              />
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                Statistics of the question samples within BLEND. BLEND is composed of two question types: Short Answer Questions (SAQ) and Multiple-Choice Questions (MCQ). The question samples are generated based on the 500 question templates generated by annotators from all countries/regions.
              </figcaption>
            </figure>
          </div>
        </div>

    </Section>
}