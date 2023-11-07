import Card from "./Card";
import lenovo from "../assets/images/lenovo-ideapad3.jpg"
import galaxy from "../assets/images/galaxy-s22.jpg"
import aspiradora from "../assets/images/aspiradora-samsung.jpg"
import smartTv from "../assets/images/smart-tv.jpg"
import smartWatch from "../assets/images/smart-watch.jpg"
import auriculares from "../assets/images/auriculares.jpg"

function Main() {
  return (
    <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card
        producto="Lenovo IdeaPad 3 i5"
        imagen={lenovo}
        descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et numquam architecto, dolore dolorem iste cum."
        precio="599.990"
        envioGratis={true}
      />
			<Card
        producto="Samsung Galaxy S22"
        imagen={galaxy}
        descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et numquam architecto, dolore dolorem iste cum."
        precio="399.999"
        envioGratis={true}
      />
			<Card
        producto="Aspiradora Samsung"
        imagen={aspiradora}
        descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et numquam architecto, dolore dolorem iste cum."
        precio="120.000"
        envioGratis={false}
      />
			<Card
        producto="Smart TV Xiaomi 43''"
        imagen={smartTv}
        descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et numquam architecto, dolore dolorem iste cum."
        precio="144.499"
        envioGratis={false}
      />
			<Card
        producto="Smart Watch Samsung"
        imagen={smartWatch}
        descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et numquam architecto, dolore dolorem iste cum."
        precio="39.990"
        envioGratis={true}
      />
			<Card
        producto="Auriculares Gamer Noblex"
        imagen={auriculares}
        descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et numquam architecto, dolore dolorem iste cum."
        precio="27.499"
        envioGratis={false}
      />
			<Card
        producto="Lenovo IdeaPad 1 i3"
        imagen={lenovo}
        descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et numquam architecto, dolore dolorem iste cum."
        precio="399.990"
        envioGratis={true}
      />
			<Card
        producto="Samsung Galaxy S20"
        imagen={galaxy}
        descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et numquam architecto, dolore dolorem iste cum."
        precio="390.000"
        envioGratis={true}
      />
    </main>
  );
}

export default Main;
