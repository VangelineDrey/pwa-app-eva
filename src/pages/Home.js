import { useEffect, useState } from "react";
import { Button, ButtonGroup, Carousel, CarouselItem, FormControl, InputGroup } from "react-bootstrap";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { getUsers } from "../services/axios";


function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getUsers();
    console.log(users?.data?.data);
    setUsers(users?.data?.data || []);
  };
  return (
    <div className="App">
      <Appbar />
      <Content>
        <InputGroup className="mb-3">
          <FormControl
          placeholder="Search Here"
          aria-label="Search Here"
          aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
          Search
          </Button>
        </InputGroup>
      <Carousel>
        <CarouselItem>
          <img style={{width:"667px", height:"200px"}} 
          src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRheHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          />
          <Carousel.Caption>
          <h3>Information about Tax</h3>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img style={{width:"667px", height:"200px"}}
          src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGF4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"           
          alt="Second slide"
          />
          <Carousel.Caption>
          <h3>Pay your Tax</h3>   
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img style={{width:"667px", height:"200px"}} 
          src="https://media.istockphoto.com/photos/businessman-calculating-the-financial-statement-of-his-business-picture-id1311249907?b=1&k=20&m=1311249907&s=170667a&w=0&h=aflmpMMQPKqlU8R3XbYp1DVUl5cOjZBKWwevQLn46IM="
          />
          <Carousel.Caption>
          <h3>Pay your Tax</h3>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" href="about">Tentang Pajak</Button>
        <Button variant="secondary" href="#info">Informasi</Button>
        <Button variant="secondary">Reformasi Pajak</Button>
      </ButtonGroup>
      <div id="info">
      <br></br>
      <h3>Informasi Terbaru</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet dui diam, eget vulputate dolor aliquam sit amet. Donec sollicitudin imperdiet dolor id blandit. Aliquam sit amet dolor metus. Maecenas neque enim, iaculis et maximus vel, feugiat sit amet tellus. Aliquam eu convallis nisi. Vestibulum eget semper sem. Maecenas dignissim consequat urna sed lacinia. In elementum, tortor malesuada consectetur dignissim, ex libero convallis eros, sit amet malesuada sem quam in metus.</p>      
      <p>In eu semper elit, id maximus ipsum. Vivamus ac arcu nibh. Vivamus et leo ac mauris molestie cursus ut id magna. Nam id congue nibh, ut lobortis libero. Sed vitae vehicula arcu. Aliquam porttitor iaculis nisl, et dignissim augue bibendum quis.</p>      
      </div>
      </Content>
      <Footer />
    </div>
  );
}

export default Home;