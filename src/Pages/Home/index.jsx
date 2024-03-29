import { LinkButton } from "../../Components/LinkButton";
import { SectionTitle } from "../../Components/SectionTitle";
import styles from "./styles.module.scss";

import { CiFaceSmile, CiCalendarDate } from "react-icons/ci";
import { PiCoffeeThin } from "react-icons/pi";

import mulherTomandoCafe from "../../assets/mulherTomandoCafé.webp";
import { CardMenu } from "../../Components/CardMenu";
import cafeEvento1 from "../../assets/cafeEvento1.webp";
import cafeEvento2 from "../../assets/cafeEvento2.webp";
import { useEffect, useState } from "react";
import { Slider } from "../../Components/Slider";
import { data } from "../../../SliderImgs";
import arrayItens from "../../../arrayItens";

export function Home({menuRef, eventosRef, galeriaRef}) {
  const [selectedCategory, setSelectedCategory] = useState("cafe");
  const [itemsMenu, setItemsMenu] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterItems(category);
  };

  const filterItems = (category) => {
    const filteredItems = arrayItens.filter((item) => item.categoria === category);
    setItemsMenu(filteredItems);
  };

  useEffect(() => {
    filterItems("cafe"); 
  }, []);


  return (
    <>
      <main className={`${styles.main} mt80`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Café fresco</h1>
            <h1>E</h1>
            <h1>Doces caseiros</h1>
            <p>
              Onde cada xícara conta uma história: Experimente os ricos sabores
              do nosso café artesanal e guloseimas caseiras
            </p>

            <LinkButton
              href="#"
              children="Visite-nos hoje"
              borderRadius="1rem"
              color="#f9ebd4"
            />
          </div>
        </div>
      </main>
      <section className={styles.aboutsCoffee}>
        <div className={styles.container}>
          <div>
            <CiFaceSmile size={50} color="#b77820" />
            <h2>5k+</h2>
            <span>Clientes Satisfeitos</span>
          </div>
          <div>
            <PiCoffeeThin size={50} color="#b77820" />
            <h2>70k+</h2>
            <span>Copos de Café Preparados</span>
          </div>
          <div>
            <CiCalendarDate size={50} color="#b77820" />
            <h2>12+</h2>
            <span>Anos de trabalho</span>
          </div>
        </div>
      </section>

      <SectionTitle title="Sobre nós" />

      <section className={styles.sobre}>
        <div className={styles.content}>
          <h2>Café preparado com amor</h2>
          <p>
            Na Coffe House somos apaixonados por servir aos nossos clientes
            deliciosos cafés, doces e guloseimas em um ambiente caloroso e
            acolhedor. nosso café foi fundado com a visão de criar um espaço
            comunitário com bebidas e lanches de qualidade.
          </p>
          <p className={styles.horarioFuncionamento}>
            Horario de funcionamento:
          </p>
          <span>Segunda à sexta: 08:00am - 18:00pm</span>
          <span>Sábado: 08:00am - 14:00pm</span>
          <span>Domingo: Fechado</span>
        </div>
        <div className={styles.foto}>
          <img src={mulherTomandoCafe} alt="" />
        </div>
      </section>

      <SectionTitle title="Menu" id="menu" ref={menuRef}/>

      <div className={styles.containerMenu}>
        <div className={styles.button}>
          <button
            className={selectedCategory === "cafe" ? styles.selected : ""}
            onClick={() => handleCategoryClick("cafe")}
          >
            Cafés
          </button>
          <button
            className={selectedCategory === "sanduiche" ? styles.selected : ""}
            onClick={() => handleCategoryClick("sanduiche")}
          >
            Sanduiches
          </button>
          <button
            className={selectedCategory === "pastel" ? styles.selected : ""}
            onClick={() => handleCategoryClick("pastel")}
          >
            Pastéis
          </button>
        </div>
        
        <CardMenu menuItems={itemsMenu} />

      </div>

      <SectionTitle title="Eventos futuros" id="eventos" ref={eventosRef}/>

      <section className={styles.eventos}>
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={cafeEvento1} alt="Evento de café" />
            <span>8 dezembro</span>
          </div>
          <h3>Degustação de cafés</h3>
          <p>
            Você é apaixonado por café ou simplesmente curioso para explorar
            mais sobre essa bebida incrível? Junte-se a nós para uma experiência
            sensorial única em nossa Degustação de Café!
          </p>
          <button>Saiba mais</button>
        </div>
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={cafeEvento2} alt="Evento de café" />
            <span>22 dezembro</span>
          </div>
          <h3>Show Ao Vivo!</h3>
          <p>
            Desfrute de uma noite de música ao vivo em nossa cafeteria! Venha
            curtir talentosos artistas locais apresentando uma variedade de
            estilos musicais, enquanto desfruta de um ambiente acolhedor e
            deliciosas opções de bebidas.
          </p>
          <button>Saiba mais</button>
        </div>
      </section>

      <SectionTitle title="Galeria" id="galeria" ref={galeriaRef}/>

      <div className={styles.slider}>
        <Slider data={data} />
      </div>
    </>
  );
}
