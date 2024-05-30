export const projects: Project[] = [
  {
    title: "PokeGenerator",
    about: "AI run Pokémon Card maker",
    description:
      "Enter a topic and generate a pokemon card within 20s. Next.js project with Firebase, OpenAI, and Node.js",
    slug: "poke-generator",
    date: new Date(11, 16, 2023),
    imageurl: "palmblade.png",
    liveurl: "https://github.com/AyanCh0w/ResNetModel",
  },
  {
    title: "Resnet",
    about: "CNN Model",
    description:
      "Advanced CNN Model for image classification designed off the ResNet paper",
    slug: "poke-generator",
    date: new Date(11, 18, 2021),
    imageurl: "palmblade.png",
    liveurl: "https://github.com/AyanCh0w/ResNetModel",
  },
  {
    title: "Smoke Pred Competition",
    about: "AI Algorithm using Bio-Signals",
    description: `
      https://www.kaggle.com/competitions/playground-series-s3e24/overview
      
      Just placed in the top 71st percentile! (539 of 1910) On a @Kaggle #competition: Prediction of Smoker Status using Bio-Signals. I used common models such as XGB and LGB, fine tuned with #optuna, and trained on the data that was processed using #pandas. EDA done with #plotly.`,
    slug: "smoke-pred-competition",
    date: new Date(11, 13, 2023),
    imageurl: "smokerpred.png",
    liveurl: "https://github.com/AyanCh0w/Smoke-Pred",
  },
  {
    title: "PyGame Pong",
    about: "Physics Based Pong Game",
    description:
      "First full game made with PyGame. PyGame was a fun way for me to learn python at first. You can save your high score and there is physics with collisions.",
    slug: "pong",
    date: new Date(5, 20, 2020),
    imageurl: "palmblade.png",
    liveurl: "https://github.com/Bluboss101/Pong",
  },
  {
    title: "Georgetown Summer Artificial Intelligence Academy",
    about: "Deep dive into AI Ethics and Policy",
    description: `During this 5-day academy I got to work and connect with many like minded people, we learned the
      challenges and ethical dilemmas in AI, discussing topics from Cognitive Thinking, AI Regulation,
      Social interactions with Robots, to AGI and ASI.`,
    slug: "gsaic",
    date: new Date(5, 20, 2021),
    imageurl: "gtown.png",
    liveurl:
      "https://summer.georgetown.edu/programs/SHS31/artificial-intelligence-academy",
  },
  {
    title: "Georgetown Summer Entrepreneurship Class",
    about: "Georgetown's enterpreneurship class",
    description:
      "I had such an exciting time working with my buddies to make Bit by Bit, an AI asset management company.",
    slug: "gsec",
    date: new Date(5, 20, 2021),
    imageurl: "gtown.png",
    liveurl: "https://bluboss101.github.io/Portfolio/Georgetown.html",
  },
  {
    title: "First Lego League (FLL)",
    about: "Physics Based Pong Game",
    description: `This was a fun group project my friends and I did. We had to complete Cargo Connect challenges with a robot designed with legos and programmed with Scratch. We placed 10th out of ~150 participants. This was an amazing introduction to robotics and mechanical engineering
      We scored 10th (out of 23) teams in the highest competing area in all of my state.`,
    slug: "fll",
    date: new Date(5, 20, 2021),
    imageurl: "cargoconnect.png",
    liveurl: "https://bluboss101.github.io/Portfolio/FLLView.html",
  },
  {
    title: "Chat CXT",
    about: "Chatbot with Google WebScraping",
    description: `This application combines GPT (Generative Pre-trained Transformer) with Google webscraping to provide up-to-date answers to user queries. GPT is deep learning technology used to generate natural language text and Google webscraping provides information from the web. The application utilizes both of these technologies to quickly generate responses to user queries, however, it is important to note that some of the responses may be inaccurate as this is still in beta.

      Features: Links to blocklist Controlling amount of info from pages
      
      Examples:
      
      QUERY: What are the new cars released at ces 2023?
      
      ChatCXT: The new cars released at CES 2023 include the BMW Prototype, the Ram EV Truck, the Sony/Honda Car, the Volkswagen ID.7 Electric Sedan, the Afeela Electric SUV, the Bollinger B2 Electric Truck, the Lucid Air Electric Luxury Sedan, and the Tesla Cybertruck.
      
      GPT3: CES 2023 has not yet happened, so it is not possible to answer this question at this time.
      
      QUERY: What is Taylors new album?
      
      ChatCXT: Taylor Swift's tenth studio album, Midnights, was released on October 21, 2022. The album is a mix of electronica, synth-pop, bedroom pop, and dream pop. It was produced by Swift, Jack Antonoff, Sounwave, Jahaan Sweet, and Keanu Beats.
      
      GPT3: Taylor Swift's new album is titled "Evermore" and was released on December 11, 2020.`,
    slug: "chatcxt",
    date: new Date(3, 15, 2023),
    imageurl: "chatcxt.webp",
    liveurl: "https://github.com/AyanCh0w/ChatCXT",
  },
  {
    title: "Voice GPT-3",
    about: "GPT-3 Voice Assistant",
    description:
      "This is a program that lets you verbally communicate with GPT3 and give a audio responce. It uses speech recognition and speech synthesis to communicate with GPT3.",
    slug: "voicegpt",
    date: new Date(2, 12, 2022),
    imageurl: "voicegpt.webp",
    liveurl:
      "https://github.com/AyanCh0w/GPT3-Voice-Chat-Bot/blob/main/main.py",
  },
  {
    title: "flashAI",
    about: "This is an AI powered flashcard maker.",
    description:
      "Instead of studying for school I learned Typesript, React & Firebase to make an app to help me study for school. You can login with Google or make an anynonymous account. There is authentication and auth restricted pages pages",
    slug: "flashai",
    date: new Date(5, 3, 2023),
    imageurl: "flashai.webp",
    liveurl: "https://github.com/AyanCh0w/flashAi",
  },
  {
    title: "Apple WebPage Mockup",
    about: "Mockup of product page for the new iPhone 14 Pro",
    description:
      "To learn CSS and basic HTML, I made a mockup page for the new iPhone 14 Pro.",
    slug: "applemockup",
    date: new Date(6, 22, 2022),
    imageurl: "applemockup.webp",
    liveurl: "https://ayanch0w.github.io/applewebpagemockup/",
  },
  {
    title: "First HTML Portfolio",
    about: "HTML webpage on custom domain",
    description:
      "Made a simple layout using grids, used HTML and CSS to make a pleasing layout for all formats. Also setup a domain name and certificate and got it to load on my custom domain.",
    slug: "aitaxi",
    date: new Date(6, 1, 2021),
    imageurl: "htmlportfolio.avif",
    liveurl: "https://bluboss101.github.io/Portfolio/",
  },
  {
    title: "Totaled Cars",
    about: "CNN DC-GAN Model for generateing Cars",
    description: `Car Generator: The car generator is a custom neural network model trained using DC-GAN principles. It takes random noise as input and generates car images that resemble real car images. The generator network consists of multiple convolutional layers followed by upsampling layers to increase the spatial dimensions of the generated image.

      Super Resolution Model: The super-resolution model is designed to enhance the resolution and details of low-resolution car images. It utilizes deep convolutional layers to extract and learn high-frequency information from the input image. The model takes a low-resolution car image as input and produces a high-resolution version of the image.
      
      Training Process: The car generator and super-resolution model are trained using appropriate datasets. For the car generator, a dataset of real car images is used as the target distribution. For the super-resolution model, a dataset of low-resolution and high-resolution car image pairs is required for training. The training process involves iteratively updating the generator and discriminator networks using adversarial loss and other appropriate loss functions.`,
    slug: "totaledcars",
    date: new Date(7, 13, 2023),
    imageurl: "totaledcars.avif",
    liveurl: "https://github.com/AyanCh0w/CarGenerator",
  },
  {
    title: "AI Taxi",
    about:
      "Reinforcement Learning project for a taxi car driver. Learned about states and Q learning.",
    description:
      "Reinforcement Learning project for a taxi car driver. Learned about states and Q learning.",
    slug: "aitaxi",
    date: new Date(7, 28, 2023),
    imageurl: "aitaxi.webp",
    liveurl: "https://github.com/AyanCh0w/TaxiRL",
  },
  {
    title: "Pygame Gravity Sim",
    about: "A gravity simulation using pygame",
    description: `This is my gravity simulation in pygame. This is also my first ever project in pygame.

      Press B to reset character | Press N to reverse gravity | Press V to un-reverse gravity
      
      
      
      import pygame, sys, random
      
      pygame.init()
      
      pygame.font.init()
      
      screen = pygame.display.set_mode((1000,1000))
      
      pygame.display.set_caption('My Game')
      
      Player_Width = 32
      
      Player_Height = 32
      
      Starting_X = 500/2 - Player_Width
      
      Starting_Y = 15 + Player_Height
      
      Starting_Gravity = 0.7
      
      Starting_Margin = Player_Height * 0.8
      
      Player_X = Starting_X
      
      Player_Y = Starting_Y
      
      Velocity = pygame.Vector2()
      
      Velocity.xy = 3,-1
      
      Gravity = Starting_Gravity
      
      Friction = pygame.Vector2()
      
      Friction.xy = -0.95,-0.8
      
      Margin = Starting_Margin
      
      Opposite_Gravity = False
      
      Opposite_Gravity_Value = Gravity*-1
      
      def draw_rect(screen, color, X, Y, width, height):
      
          pygame.draw.rect(screen, color, (X, Y, width, height))
      
      def draw_image(screen, image, X, Y):
      
          screen.blit(image, (X,Y))
      
      running = True
      
      while running:
      
          pygame.time.clock.tick(60)
      
          screen.fill((255,255,255))
      
          for event in pygame.event.get():
      
              if event.type == pygame.QUIT:           
      
                  pygame.quit()
      
                  sys.exit()
      
          keys = pygame.key.get_pressed()
      
          if keys[pygame.K_SPACE]:
      
              Gravity *= -1
      
          if keys[pygame.K_b]:
      
              Velocity.xy = 3,3
      
              Gravity = 0.9
      
              Friction.xy = -0.9,-0.8
      
              Margin = Starting_Margin
      
              Player_Y = Starting_X
      
              Player_X = Starting_X
      
          if keys[pygame.K_n]:
      
              Opposite_Gravity = True
      
          if keys[pygame.K_v]:
      
              Opposite_Gravity = False
      
          if Player_X + Player_Width > screen.get_width() - Margin: #right
      
              Velocity.x *= Friction.x
      
          if Player_X < Margin:
      
              Velocity.x *= Friction.x #left
      
          if Player_Y < Margin:
      
              Velocity.y *= Friction.y   #up
      
          if Player_Y + Player_Height > screen.get_height() - Margin:   #down
      
              Velocity.y *= Friction.y
      
          if Opposite_Gravity:
      
              Gravity = Opposite_Gravity_Value
      
          if not Opposite_Gravity:
      
              Gravity = Starting_Gravity
      
          
      
          Player_Y += round(Velocity.y, 0)
      
          Velocity.y += Gravity
      
          Player_X += Velocity.x
      
          draw_rect(screen, (255,0,0), Player_X, Player_Y, Player_Width, Player_Height)
      
          pygame.display.update()
      
          pygame.time.delay(10)
      
          print("X Vel: " + str(round(abs(Velocity.x), 1)) + "  |  Y Vel: " + str(round(abs(Velocity.y), 1)) + "  |  X Fri: " + str(round(abs(Friction.x), 1)) + "  |  Y Fric: " + str(round(abs(Friction.y),1)) + "  |  X Pos:  " + str(round(abs(Player_X),1)) + "  |  Y Pos:  " + str(round(abs(Player_Y),1)) + "  |  Opposite Gravity:   " + str(Opposite_Gravity))`,
    slug: "pygame",
    date: new Date(2, 5, 2020),
    imageurl: "",
    liveurl: "https://github.com/Bluboss101/Pygame-Gravity",
  },
]

export const updates: Project[] = [
  {
    title: "Blog Website",
    about: "A platform for sharing articles and blog posts",
    description:
      "Designed and developed a blog website using WordPress. Customized themes and plugins to enhance functionality and appearance.",
    slug: "blog-website",
    date: new Date(1, 2, 3),
    imageurl: "https://example.com/task-manager-app.png",
    liveurl: "https://example.com/blog-website",
  },
]

export interface Project {
  title: string
  about: string
  description: string
  slug: string
  date: Date
  imageurl: string
  liveurl: string
}
