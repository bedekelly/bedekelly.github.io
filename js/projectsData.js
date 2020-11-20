export default JSON.parse(`
  {
  "sections": [
    {
      "title": "Front-End",
      "projects": [
        {
          "title": "Minim",
          "description": "Made as part of my dissertation in Computer Science, this React app uses Web Audio to create an interactive browser-based music making  toolkit. This achieved a first-class mark, and involved hundreds of hours of painstaking design, user testing, state management and experimentation. ",
          "url": "https://github.com/bedekelly/minim",
          "image": "images/projects/Minim2.png"
        },
        {
          "title": "Sparklines",
          "description": " An inline, responsive, animated chart to show trends concisely and  clearly. Written using React and requestAnimationFrame for smooth (60Hz) animation in all modern browsers including mobile. ",
          "url": "https://github.com/bedekelly/simple-react-sparklines",
          "image": "images/projects/AnimatedSparkline.gif"
        },
        {
          "title": "Budget Dashboard",
          "description": "As the UI for a serverless budget tracker (created using AWS Lambda and DynamoDB), I built a web dashboard in Elm with a burndown chart and a sortable table with my top spending categories.",
          "image": "images/projects/BudgetDashboard.png",
          "url": "https://github.com/bedekelly/elm-dashboard"
        },
        {
          "title": "Workshops",
          "description": "I've delivered multiple workshops (with excellent feedback) on JavaScript, React/Redux, Elm Architecture and Web Audio. As well as front-end topics I've also covered Python for web applications, using Redis pub/sub, and NumPy for high performance numerical computing.",
          "image": "images/projects/Workshops.jpg"
        }
      ]
    },
    {
      "title": "CSS & Design",
      "projects": [
        {
          "title": "Parallax Mountains",
          "description": "I drew this mountain scene and added a 3d effect by transforming layers according to their distance   from the screen as well as the position of the mouse cursor. This runs smoothly at 60Hz, and looks great on all desktop browsers!",
          "url": "https://parallax.bede.io",
          "image": "images/projects/Parallax.png"
        },
        {
          "title": "MacOS Security Modal",
          "description": "After seeing a MacOS notification pop up over a website, I wondered   if there was a potential security vulnerability for users to type   their password in to a malicious site pretending to be a MacOS   notification. I recreated the notification in CSS, paying close   attention to minute details like shading and font sizes.  ",
          "url": "https://codepen.io/bedekelly/pen/BJEmPQ",
          "image": "images/projects/MacOS.png"
        },
        {
          "title": "Depth with SVG Filters",
          "description": "I hand-wrote SVG turbulence filters to create a photorealistic texture on a live-updating knob control, made touch-interactive and correctly encapsulated with two-way data binding using Svelte. ",
          "url": "https://svelte.dev/repl/e76f28b965334d37a792ed1f2ecb67b1?version=3.29.7",
          "image": "images/projects/Knob.jpeg"
        },
        {
          "title": "CodePen Projects Galore!",
          "description": "I've created loads more CSS, Canvas, 3D, and other interactive toys and proof-of-concept ideas on my Codepen which there isn't nearly enough room to show here. I like to make all my experiments public!",
          "url": "https://codepen.io/bedekelly",
          "image": "images/projects/Codepen.png"
        }
      ]
    },
    {
      "title": "Python",
      "projects": [
        {
          "title": "Monads and Do-Notation",
          "description": "Haskell's do-notation transforms nested calls of the \`bind\`   function into readable, imperative-style code. Using bidirectional   generators as coroutines, I implemented similar functionality in Python   for arbitrary monads. This is a first-of-kind implementation which   works in regular modern Python code, unlike other attempts which rely   on outdated PyPy features. ",
          "url": "https://github.com/bedekelly/monado",
          "image": "images/projects/Monads.png"
        },
        {
          "title": "Minitools",
          "description": "To find out more about how testing libraries worked in Python, I   wrote a small but very capable testing package called Minitools.   This includes facilities for mocking, patching and checking various   properties of code. ",
          "url": "https://github.com/bedekelly/minitools",
          "image": "images/projects/MiniTools.png"
        },
        {
          "title": "Tinybuf",
          "description": " Tinybuf is an ongoing project inspired by Google's ProtoBuf and   Cap'n Proto. It is an efficient serialisation protocol for    structured data into binary format, allowing structure to be   defined from plain text files. ",
          "image": "images/projects/TinyBuf.png",
          "url": "https://github.com/bedekelly/tinybuf"
        },
        {
          "title": "Magic Enum",
          "description": "After learning about C++'s excellent Enum type, I decided to improve   on Python's own more limited enum syntax. This project is for toy   purposes only, but includes some deep metaprogramming and   specialised language features. ",
          "url": "https://github.com/bedekelly/magic-enum",
          "image": "images/projects/MagicEnum.png"
        }
      ]
    },
    {
      "title": "CS Theory & Maths",
      "projects": [
        {
          "title": "Hashtables",
          "description": "I wrote a hashtable entirely in C, implementing table doubling to keep reads/writes at O(1) – I then profiled this performance using a large random dataset, and plotted the results with a Jupyter Notebook. The code is performant and idiomatic C99. ",
          "image": "images/projects/Hashtables.png",
          "url": "https://blog.bede.io/hashtables-in-c-table-doubling/"
        },
        {
          "title": "Mandelbrot Zoom",
          "description": "In order to render deep Mandelbrot zoom videos of high resolution, I   wrote a C program to generate alternating frames in parallel on all   8 cores of my machine, then used some maths and bash scripting to   stitch them together into an HD video. ",
          "url": "https://vimeo.com/240290765",
          "image": "images/projects/MandelbrotZoom.png"
        },
        {
          "title": "Temperature Change Model",
          "description": "As part of a Computer Science module on genetic and evolutionary   programming, I created a model of temperature change over time   using genetic programming techniques. I also evaluated the performance   of tuning various parameters in a report, and used a Jupyter notebook   to show my results. ",
          "url": "https://github.com/bedekelly/time-series-prediction",
          "image": "images/projects/TemperatureChangeModel.png"
        },
        {
          "title": "Mancala AI using MaxiMin",
          "description": "During lockdown in 2020, I built myself a Mancala AI to increase my skills. It comfortably looks eight moves ahead using a MaxiMin strategy learned during my CS degree. I wrote about the AI in detail in a blog post on my website!",
          "url": "https://blog.bede.io/mancala/",
          "image": "images/projects/Mancala.png"
        }
      ]
    },
    {
      "title": "Animated Videos",
      "projects": [
        {
          "title": "RxJS: Ajax Explainer",
          "description": "A one-minute animated explainer video for the ajax function in RxJS. Animated with After Effects and recorded with Audition. Square aspect ratio intentional!",
          "type": "video-project",
          "video": "videos/rxjs-ajax.mp4"
        },
        {
          "title": "Spot Payments",
          "description": "A short demo video for Spot payments, a cardless payments prototype created at a hackathon in Autumn 2020. I created this along with Aran Long, using Stripe and the PaymentRequest API, as well as Google Firebase and Cloud Functions.",
          "youtube": "eof0sx5mG4w",
          "type": "video-project"
        }
      ]
    }
  ]
}
`);

/*
        {
          "title": "Casetify Boarding Pass",
          "description": "One hobby of mine is recreating designs which catch my eye, as closely as possible, using only CSS. This was especially fun; I copied a phone case designed to look like a boarding pass, and got introduced to a gorgeous font foundry along the way!",
          "url": "https://codepen.io/bedekelly/pen/wvveQqz",
          "image": "images/projects/Casetify.jpeg"
        },
 */
