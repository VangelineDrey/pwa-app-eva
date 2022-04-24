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
        <div className="bg">
        <InputGroup className="mb-3">
          <FormControl
          placeholder="Cari Wajib Pajak"
          aria-label="Search Here"
          aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
          <div>
          <img style={{width:"30px", height:"30px"}} 
          src="https://cdn-icons-png.flaticon.com/128/1250/1250705.png?ga=GA1.1.1741669948.1650800225" />
          </div>
          </Button>
        </InputGroup>
        </div>
      <Carousel>
        <CarouselItem>
          <img style={{width:"667px", height:"150px"}} 
          src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRheHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          />
          <Carousel.Caption>
          <h3>Information about Tax</h3>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img style={{width:"667px", height:"150px"}}
          src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGF4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"           
          alt="Second slide"
          />
          <Carousel.Caption>
          <h3>Pay your Tax</h3>   
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img style={{width:"667px", height:"150px"}} 
          src="https://media.istockphoto.com/photos/businessman-calculating-the-financial-statement-of-his-business-picture-id1311249907?b=1&k=20&m=1311249907&s=170667a&w=0&h=aflmpMMQPKqlU8R3XbYp1DVUl5cOjZBKWwevQLn46IM="
          />
          <Carousel.Caption>
          <h3>Pay your Tax</h3>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" href="about">Tentang Pajak</Button>
        <Button variant="secondary" href="informasi">Informasi</Button>
        <Button variant="secondary">Reformasi Pajak</Button>
      </ButtonGroup>
      <div id="info">
      <br></br>
          <div className="tenggat">
        TENGGAT PAJAK<br></br>                             
          <div className="isi">
            Tahun<br></br>2022
          </div>
          </div>
          <br></br>
      </div>
      <img style={{width:"350px", height:"120px"}}
      src="https://media.istockphoto.com/photos/business-audits-using-a-calculator-financial-data-investment-fund-at-picture-id1129810557?k=20&m=1129810557&s=612x612&w=0&h=TzJGKMmv6MtDvdKaikm4kUoTVUtWVmBVPA-qg740NZ4=" />
      <div className="d-grid gap-2">
      <Button variant="secondary" size="md" hreaf="loyalty">
        Tax Loyalty
      </Button>
      <Button variant="secondary" size="md" href="bantuan">
        Pusat Bantuan
      </Button>
      </div>
      </Content>
      <Footer />
    </div>
  );
}

export default Home;