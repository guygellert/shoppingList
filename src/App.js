
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const productList = [
    { id: 1, title: 'Apple', price: 6.5, url: "data:image/jpeg;base64,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"},
    { id: 2, title: 'Orange', price: 2.8, url: "data:image/jpeg;base64,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" },
    { id: 3, title: 'Tomato', price: 14, url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQTExYTERMYERYWFhYWFhYWFhEWGRYZFhYYGRYWFhYaHysiGhwoHRYWIzQjKCwuMTExGSE3PDcwOyswMS4BCwsLDw4PHBERGjAfIR8wMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMC4wMDAwMP/AABEIAN0A5QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEAQAAIBAgMFBgMCDAYDAAAAAAABAgMRBAUhBhIxQVETImFxgaEykbFCYgcUIzNSU3KSosHR8BUWQ4LS8XOy4f/EABoBAAEFAQAAAAAAAAAAAAAAAAABAgMEBQb/xAAvEQACAgECBAUCBgMBAAAAAAAAAQIDEQQhBRIxQRMyUWFxkdEUIoGxweFSofBC/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAbdHPbdZ48PRUYNKpUuk/wBGK+KXul6nnezeYVvxulCnUlHtK0N+32lvXd/S5BO7lko4yRysSlyns4ABOSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEVesoRlJ/Zi5PySuAHmP4Q8f2uKlGOqpxUFws3q5e7t6FD8GuGc8whJppQjOVmvuNJ/OSM/EVnUc5y4zlKXzdzovwUYZxxdW/Khfx1nFa/L3KEPzWKXuVIPmnk9QA5nOttKdGThGHauLSk1OMUm+KT1u0PyzbTD1Woyl2UpSUYqTVm3ayT8blznjnGS1lN4R0YAA8UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo5nmtKhFyqSS8E1vP0EbSWWDeC8IcjPbKdZuODoTqv8ASS3kvOXwx9WIslxtZ72IrRpJ/Zu6jS6bsd2K+bI/GT8iz+31E37L+DosVm9GnfeqRuleyalLT7q1IKW0eGlb8pu/tKUbed0ZENncND87OpVf3pqEfRQtp53IMXluFa7m9TfWNabfyldewjlZ7f7Hxqtl0OpwuYUqjap1ITa4qMotrzS4Fo8wxGTuLcqTjPxTUKnzvZv5DqOeYiHw15rcae5Uu/SWl2vAj/E8vnWBlinX54/Y9HxtTdpzl0jJ/JNnmGZZrUnCcpS3u41d3b17qs/Ns1sVtlUqU50pxUXKMo70U7cNdHfkcxjoNxahFtOSvKzXBaefG4y21S8pDZLKyig2rJXt104cifZ7OKlBYh0bKVRQhvt3cY3d2r837FOu5brstdPG3mUqEn2ip7smpXvxXo+RDGW5HUsMs09+UmnfXle+vORq4zD067w9PBRnCpTW7UlOyjKSd9+6bfG/sJh8Bpup2unZqzd7aOXrY08DJUIfk4qUkuOquw5nn2NDSS08Yyna9+yWf1f9ex6dQxMd1Xkr2V/O2pJUxEIq8pRiuraS9zy/EZ/Utvb6gra3aXtxM7tnU1bdTW91ZfxMnerXZEOeZ4qi5fp9snqss9w6du2h6ST+gsM7w8nZVoP/AHI8wo5a5cWo36yb+hqYTZGVXSNeCfS0l7oFfY+kR0qtRFZlDH/fJ6Jh8VCpfs5xnbR7rUrPxsTnn9HYPEQd6dWFN8pRlUi146I2sJmWJwqUcfFVKfBYinvPd/8ALG11+0TwnJ+aOBkW31R0wEdKopJSi1JNJpp3TT4NPoSEo4AAAAAAAAAAAABs5JK7dkuLHGLQl+Ntzb/IRk4xiv8AWlB2cp9YXVlHna700EbAsdrKsmqd4Qaa7X7Ur/q0+X3n6X4lTDbKYaD3pRdV8b1XvL93SPzRtTkoq70SOcznNHJOK7sPeRHPlW8t2S00Stlt9SXMtooUvydCHaSWlo2UI+vAwcZj8RW/OVezX6NPT3epXrYpLRaIhjXuVZ2uXVnQUaKFayo7+r3f2GTy5PjOcn4ybK9XJujl82a9BLmOxOKUYtxs3wS8SPkj1Y+3UumLk+iMbDZJaV5zlp9lS+rfCxYxOYUKcbya7q5u9l0cuJm5lmW5F66W70/N8If1OWxeJliZKEe7BPTwXV9WNUlHYx6K9VxOxtvlguvp8e7+f17GjmO2EnJxwsEr6J7ibf7KG4fLMyrd9z7Pn35OP8KRdyrD06K7qTlzk+JoLMfEPERrx4RTFYjHPu/6MZYHGUtKk4z/ANjfve5qYDLq9WLaq0qT6ShPX1uSPMPEdHH+JEnHOW8iz4RTJeTDKuJynH0+E6VZdFzXqyChnUoyUK9OWHlorq+6/O/BGmswfUZXrxmmppST4p6j8xfTYilwelrDj+qyn/K/0R1qMajU6lqn6LSSsvTV6/U08unR+FxS6dfQ5zclRd6WsL3cG+HVxfLyLOGqqS7SDulpbhyu0+nEbzuJk306nQNNScq8++Phr/y/39+h1v8AhsJa05ehGoVKT5mVgsxb4u0kbeGzNSVqmviWoyjL2NGubnBTj+aL+qNvJs8vaNT5m7ZNcmmvNNM4jEUd3vQ1RtZDm17Qk/8A4WITa2ZR1OmWOev9UNrUZYFupTvPDN3qUkm3RvxqUvuc3DlxRu0K0ZxU4SUoySakndNPg0+hIYmEpfi+IVKNuyrKc4w/V1I6y3VyhJXduTXiS9PgzzcAAHAAAAAAAAAUc5quNKe4nKTW7FL9Kfdj6Xd/Qly/CRpU4UoaRhFRXoWSnmlbdg1e1/oNe246K5mooy88zFcE+6vdnG5pmuujJto8z13U+BymIxFzL1Oo/NhHXcO0CjBNouTxjk+Jaw2JsYsJl/B0m7PhHXXrbjb5lSE22aOo8OqtysajFdzXjinbefdjezf8vcys0zPnvOK1V1ZN+CX8+LIMzx6iraO3BK38XXyMGpOVR6t+9vUncmc9XoL+KWc8066V0T2lL3x7+vZbRzuLiq8qr6RXyXmSYaG4tOJPhsLYsKgivO1dDqaqaqYKuCwl2Kc6shFUl1+pddEbKkMU0Tpx9Ct2j6/Ueqz6j3SGypC5Qv5RyxUuofj8hiiR1KYqYjhF9iSeYshw+YunK8fhlxXVeXXxIZwInEmiRWaaucXGUcp7NHQ1MV3Y1YO63tVzV463S/vgyTDZ1uy3Z6f9mBg8S6ctdYvRp8P++rDFLVrpZp9YO7v5rn5Ey8u3Y57T6L8FqPBbzXb5X6SXZ/K2T77ejPRsozJSVr3TLVdOElKHA84yjM5U5LXTmeh5Pio1oLXkTVz5thdXpnS+ZdGdVs7mqqxcbNOPXn5F+GEgpuqorfkknLnZcvA5zAVOymrcDqac00muZdr3W/Y53U1qM8x6MeAASFYAAAAAAAADl9p8fZOx0eInaLfged7W4zlcr6ifLA0uGU+Jb8HNZlibtmZcfXlrqRGE3l5O7rglHBJDil42+ZZzjMErUqN0lo5N3k+TbceC8imhVBXHReBJ0RnOMp7qOdu2ezfrjt6Zz1wVFh3LjqXcPhkl4j6cC1QpXGSsb2HzmRxjoSJFyODYksK+g11yK3ixZTcRNwsukMlAY4scpkEoDJwJ5ojk/ARD02QOBHKJYkiKZImSJlWpEgnEvbpDKmSxkPTKU0PhPuJt23Gv3HaLXza+TJJ0xctwu/N0/wBKnKPqlZe9ixXJZKPEq+fTTa6xTkvZx3T+qIKiSk7O9pHQbKZruSUW9GYOPXfla/Pjo+fFBg6jTBPG6HW1q2vddT2CElOKaN/JK+9C3NHD7JZhvwSZ1mTVLVLdUaVUs4Zx2sqceaD7bm6AAWTKAAAAAAAAKmaztTZ5ZtFWvUkemZ9K1M8szn4pGdrntg6PgUerMSsRMkk+o2LMtdDr49BYolESF5oaxGSwRtZPhb2MaPI6fIpLTQfp0nPcoaybjXsdFl2z6lG75+w3H5Ao8NTfy+vFQRVxuITfE3HVDl6HIx1Vzse+xy1bJ7GXicFY6vF1kkzncdiFcoXVxibGlusl1MirhyCVEt4iuirLELgZ0sZNaDlgr1IWIbE9WZDEYi1HOBYUrjp4Uu5dFNq5rYrLk43RZhS5LJXs1KhLDOQr0bFNVnGSlF2aas+jXA2cbSMbEU7Cw2eGW4NTWH3I8TWc5OUuLd2/EbR4jWEXYmEcUlhHXbI4ndnY9CwFTvxfijy3Z6feiz0nK53imWtNLbBzPFIfmydeAiFNE5cAAAAAAAAzNoV+S/voeaZvTu2en53C9JnnOaQ1Zn61ZOh4LLCfyczWpFeNOzNatTIOwRlYaOshbsV4x0FjEn7MOzI22HMNpxNjLcRumdTpFinGwVyalkrXYmsM6qnnb3bFarmr6mRFjJsvS1EmjOjpK0+hcxGaN8zNxFe42oiGcWyrOyTLtVUY9COrUId/UldMb2ZCmW00hjFF3BrgApaw1WzNqOO7lvA5+nEsKpoWarHFbFa6lTZFjXdmRi0alYo14eoOW5Zr2M5xEVJsudiSwo6j+cWcy9kdO1jv8kl3UcTlsNUdts/G7S8UW9P1Oe4i8ps7SPAcAGocmAAAAAAAAQY2G9CS8DzrN6VpM9LscHtJht2cl4lXVRzHJr8JsxNxOWqxI2i1WjqQSRkyR1cWRbothwhC0PyOgiaBEh8JCIjkTJjZDbg2SMZgZIjaJJMjYxkkRkkMHtjGRtEiEG2Vx40QeOGyYIRsdEMbkdQjnEkbGyHoUiVMkp09QRNSjqTRIZy2L2AjwO32Xp3nH5/I5DL6ep3uylDRy6K3zL+mWWc/xOeIM6AAA0TmwAAAAAAAAOb2uwl0prno/NHSFXMsN2lOUedtPMZZHmi0T6e3wrVI8uxMLMqzibGZUGpMzKkTGnHc7SmfMslaQg+oiNldllDriqQy4XGBglUgciLeBscmN5RzYjGXFuIx+AZG5CyZG2MHpAKmNbEuNHYH7wxsbcRjkhcDhJCjCSKGyHwRZoQIKaL2EgWIIqWywjUyujdo9EyehuUorm9X68PY5LZfA781potX5I7s09NDCycrxO3mnyAAAWjLAAAAAAAAAAAAOU2qy2z30tJfU5HEU7HqOMw6qQcHz9nyZwecYBwk4tcChqat8o6DherzHw5dV+xz9REMkXa1MqzRnyR0MJZIWIhWIQMlALjWxFIQdgeJJjUxGxGGAkxojYkpCD0FxLjZSE3gwOwO3wsN3hUxyQjHCJCJj4ak0YkUmT0IGvl+Huylg6Vzs9k8pu1OS7sfd8kW6a3J4MnW6iNcHJm9s/geypptd6Wr8FyRqABqpJLCOQnNzk5PuAAAo0AAAAAAAAAAAADMzvLFWjdfEuHj4GmII0msMfCcoSUo9UeZ5hhHFtNWaMyrTPSc6yaNVb0bKftLz8TicxwMoNqSs0Zt1Li/Y6jQ66Nsff0MKpEiZerUSpVplGUDZhJMgbEbFkhtiLGCZAI2KgYmBRkmJJisYwwPQjEuDQWHYBsVChFD0h6RHJiRiWsNSGUqZ0OzeRzrTtFWivib4JfzfgWIQb2RR1F8YRcm8It7N5PKrJJaRXxS6L+p6Bh6EYRUIqySshmAwUKUFCCsl82+rLJq1VKCON1eqd889l0+4AAEpVAAAAAAAAAAAAEAAABGyKcx8kQVYgAyribGZmbp1FafHk+aJsVTZh5hSlyEaT2Y6LcXlPDM3H4BL4WpL++Rl4igTY9VF1Metja8PvLpJX9+JVs0yflNrTcWlHa1Z919iWrQK84Ebz9L85SlHxjaS+Tsx9PNsPPRVYxfSV4v3Kk9NJdjdp4jTPpJf98iWCSLKpJ6xtJdU0xk6LKzqaZeVqZVkhrLMqRH2QeGL4iIWhUiTshKlSMNZSUfNoVVsa7EkJGJLCBnVs8pLSL3/L/kSYPNne6j6cSzXp5P2MzU8SqrWE+Z+i/l9F+/sdbkORuo1Ko9yP8AE/JfzO7y+UKcVCmlGK5L6vqzzjAZrUl1Oly3ETZoV1xh0OZ1Wpt1DzPZdl2/t+52NOtcljMycG5czRpIkyU2iwmKMihyFEFAAAAAAAAAAAAEFAAEsI4jgACCdBMrVsvT5GgAAc/isiT5GPi9mL8jtxHBALk8xxeyn3TLxOx1+MfY9enh4vkMeCh0EF52eJz2J3XeKcH1i3F/NDf8u4iPw1qq85Sl/wC1z2meXwfIjllVPoDimSw1FkPLJr4Z41LKMX+vl+7T/wCIz/BcW/8AWf7tP+h7K8op9AWU0+g3w4+hJ+Ov/wA39Txr/KtefxVqj8m19B9P8H93eScn1bb+p7RTyumuRIsDDoKopdCOeosn5pN/LPJMLsKl9k2cFsbb7J6NHDR6D1TXQXBG7JM5LA7MKPI2sLlSjyNRIcLgbkgp4exKojwAQQUAAAAAAAAAAD//2Q==" },
    { id: 4, title: 'Grapes', price: 6.99, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/640px-Table_grapes_on_white.jpg" },
    { id: 5, title: 'Chooclate', price: 2.99, url: "data:image/jpeg;base64,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" },


  ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList items={productList}></ProductList>} />
          <Route path="/:itemId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

      {/* <ProductDetails />
      <ProductList items={productList}></ProductList> */}
    </div>
  );
}

export default App;
