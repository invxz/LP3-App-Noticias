import { ITecno } from './../model/ITecno';
import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
    public AlertController: AlertController,
    public ToastController: ToastController
    ) {}

  listaTecno: ITecno[] = [
    {
      nome: 'Inteligência Artificial',
      imagem: 'https://medicinasa.com.br/wp-content/uploads/2020/11/intelig%C3%AAncia-artificial3-850x560.jpg',
      favorito: false,
      texto: "A inteligência artificial é um campo da ciência da computação que busca criar sistemas capazes de realizar tarefas que normalmente requerem inteligência humana. Utilizando algoritmos e dados, a IA pode aprender, tomar decisões, reconhecer padrões e solucionar problemas complexos. Ela está presente em diversos aspectos da nossa vida, desde assistentes virtuais até carros autônomos, revolucionando a maneira como interagimos com a tecnologia",
      exemplos: 'Chat GPT, GPS, Criador de imagem'
    },
    {
      nome: 'Saúde Pessoal',
      imagem: 'https://assets.website-files.com/6021856999d046ce6eb121dc/60e605d24251d8fb6998927b_inteligencia-artificial-na-saude-p-3200.jpeg',
      favorito: false,
      texto: 'A internet desempenha um papel crucial na saúde pessoal, oferecendo acesso a informações médicas, dicas de bem-estar e recursos de apoio. Plataformas online permitem pesquisar sintomas, aprender sobre condições de saúde e até mesmo se conectar com profissionais de saúde por meio de telemedicina. Aplicativos de rastreamento de exercícios e dieta ajudam a manter um estilo de vida saudável, enquanto comunidades virtuais proporcionam suporte emocional e compartilhamento de experiências. ',
      exemplos:'Flo, Sleep Cycle, Headspace'
    },
    {
      nome: 'Aplicativos De Transporte',
      imagem: 'https://blogger.googleusercontent.com/img/a/AVvXsEhBfVfTb3-rHv2kqguX9AmgdrwLo-K0xGeycCg796MzPJF9bS22zq-I0W5DuyH9ZR4oQ7LfAzH54G0R-XBR0G1LgU7POVPTsm_C7_V5eziyKyhSAZMLqDUgHT_HGOny7bu-NlDkilceSwm1qw2QxcNh7aKrgGp4ngn4RiTGOzx-ewnCATrV-nMWsvnJig=w400-h266',
      favorito: false,
      texto: 'Aplicativos de transporte revolucionaram a forma como nos deslocamos. Com apenas alguns toques, é possível solicitar carros, táxis ou até mesmo bicicletas compartilhadas de maneira conveniente. Essas plataformas oferecem opções de mobilidade flexíveis, estimulam o compartilhamento de veículos e frequentemente apresentam preços mais acessíveis que alternativas tradicionais. ',
      exemplos:'Uber, 99 Táxi, Lyft'
    },
    {
      nome: 'Aprendizado Online',
      imagem: 'https://jorgehuberman.com.br/wp-content/uploads/2020/09/estudoonline-1536x1024.jpg',
      favorito: false,
      texto: 'O aprendizado online revolucionou a educação, proporcionando acesso flexível a uma variedade de cursos e recursos. Plataformas digitais oferecem a oportunidade de adquirir novas habilidades, aprimorar conhecimentos e até obter diplomas acadêmicos, tudo no conforto do lar. Combinando vídeos, interações e avaliações, o aprendizado online adapta-se a diferentes estilos de aprendizagem.',
      exemplos: 'Alura, DankiCode, Duolingo'
    },
    {
      nome: 'Aplicativo De Entrega',
      imagem: 'https://th.bing.com/th/id/OIP.czwG4OvALzcmajDQmuuTHAHaEh?pid=ImgDet&w=650&h=397&rs=1',
      favorito: false,
      texto: 'Aplicativos de entrega transformaram a maneira como recebemos produtos e alimentos. Com apenas alguns toques, é possível solicitar uma ampla variedade de itens e tê-los entregues na porta de casa. Essa conveniência revolucionou o varejo e a indústria alimentícia, permitindo que os consumidores tenham acesso a uma gama diversificada de produtos sem sair de casa.',
      exemplos:'Ifood, Rappi, Uber Eats'
    },
  ];

  exibirTecno(tecno: ITecno){
    const navigationExtras: NavigationExtras = {state:{paramTecno:tecno}};
    this.router.navigate(['tecno-detalhe'],navigationExtras);
  }
  
  
  //ADICIONAR
  async apresentarToast(tecno: ITecno) {
    const toast = await this.ToastController.create({
      message: 'Assunto adicionado aos favoritos...',
      duration: 3000,
      color: 'success'
    });
    toast.present();
    

    
  }  
  
  async exibirAlertaFavorito(tecno: ITecno) {
    const alert = await this.AlertController.create({
      
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o assunto?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            tecno.favorito=false;
          },
        },
        {
          text: 'Sim, favoritar',
          handler: () => {
            tecno.favorito=true;
            this.apresentarToast(tecno);
          }
        }
      ]
    });
    
    
    
    await alert.present();
  }
  
  
  
  //REMOVER
  
  
  async apresentarToastRemove(tecno: ITecno) {
    const toast = await this.ToastController.create({
  
      message: 'Assunto removido dos favoritos...',
      duration: 3000,
      color: 'warning'
    });
    toast.present();
  }
  
    
  
    async exibirAlertaFavoritoRemove(tecno: ITecno) {
  const alert = await this.AlertController.create({
    
    header: 'Meus favoritos',
    message: 'Deseja realmente remover dos favoritos?',
    buttons: [
      {
        text: 'Não',
        handler: () => {
          tecno.favorito=true;
        },
      },
      
      {
        text: 'Sim, remover.',
        handler: () => {
          tecno.favorito=false;
          this.apresentarToastRemove(tecno);
        }
      }
    ]
  });
  
  
  await alert.present();
}


};  


