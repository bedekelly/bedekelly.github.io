export default { sections: [
  {
    title: 'Frontend',
    projects: [

      {
        title: 'Minim',
        description: `
          Made as part of my dissertation in Computer Science, this React app
          uses Web Audio to create an interactive browser-based music making 
          toolkit. This achieved a first-class mark, and involved hundreds of
          hours of painstaking design, user testing, state management and
          experimentation.
        `,
        url: 'https://github.com/bedekelly/minim',
        image: 'images/projects/Minim.png'
      },
      {
        title: 'Sparklines',
        description: `
          An inline, responsive, animated chart to show trends concisely and 
          clearly. Written using React and requestAnimationFrame for smooth
          (60Hz) animation in all modern browsers including mobile.
        `,
        url: 'https://github.com/bedekelly/simple-react-sparklines',
        image: 'images/projects/AnimatedSparkline.gif'
      },
      {
        title: 'Workshops',
        description: `
          I've delivered multiple workshops (with excellent feedback) on JavaScript, React/Redux, Elm Architecture and Web Audio. 
          As well as front-end topics I've also covered Python for web applications, using Redis pub/sub, and
          NumPy for high performance numerical computing.
        `,
        image: 'images/projects/Workshops.jpg'
      },
    ]
  },
    {
      title: 'Design',
      projects: [
        {
          title: 'Parallax Mountains',
          description: `
            Inspired by GitHub's error page, I drew this mountain scene and
            added a 3d effect by transforming layers according to their distance
            from the screen as well as the position of the mouse cursor. This
            runs at 60Hz on all modern browsers – unlike Github's version!
          `,
          url: 'https://parallax.bede.io',
          image: 'images/projects/Parallax.png'
        },
        {
          title: 'MacOS Security Modal',
          description: `
            After seeing a MacOS notification pop up over a website, I wondered
            if there was a potential security vulnerability for users to type
            their password in to a malicious site pretending to be a MacOS
            notification. I recreated the notification in CSS, paying close
            attention to minute details like shading and font sizes. 
          `,
          url: 'https://codepen.io/bedekelly/pen/BJEmPQ',
          image: 'images/projects/MacOS.png'
        },
        {
          title: 'MetroJS',
          description: `
            I designed an animated tube map, with cars using complex 
            route-planning and stopping at individual stations.
          `,
          url: 'https://metro.bede.io',
          image: 'images/projects/Metro.png'
        }
      ]
    },
    {
      title: 'Python',
      projects: [
        {
          title: 'Budget Tracker',
          description: `To keep better track of my finances, I built a serverless budget
        tracker using Python on AWS Lambda functions, called when I spend
        money or request information about my spending. Data is stored in a
        DynamoDB table and optionally written to a Google Sheets document.`,
          url: 'https://blog.bede.io/serverless-spending-tracker/',
          image: 'images/projects/BudgetTracker.png'
        },
        {
          title: 'Tinybuf',
          description: `
          Tinybuf is an ongoing project inspired by Google's ProtoBuf and
            Cap'n Proto. It is an efficient serialisation protocol for 
            structured data into binary format, allowing structure to be
            defined from plain text files.
        `,
          image: 'images/projects/TinyBuf.png',
          url: 'https://github.com/bedekelly/tinybuf'
        },

        {
          title: 'PySh',
          description: `
            This tool uses Python's dynamic nature to expose every command-line
            tool on the user's machine as a function on an importable Python
            module. Input, output and errors are all handled sanely.
          `,
          url: 'https://github.com/bedekelly/pysh',
          image: 'images/projects/PySh.png'
        }
      ]
    },
    {
      title: 'Elm-lang',
      projects: [
        {
          title: 'Budget Dashboard',
          description: `
            As part of my budget tracker, I built a web dashboard in Elm with a
            burndown chart and a table with my top 5 spending categories.`,
          image: 'images/projects/BudgetDashboard.png',
          url: 'https://github.com/bedekelly/elm-dashboard'
        },
        {
          title: 'Smart Table',
          description: `
            Also as part of the budget tracker, I built a searchable, sortable
            table using Elm. The realtime updates are highly performant even in
            tables of thousands of rows.
          `,
          image: 'images/projects/SmartTable.png',
          url: 'https://github.com/bedekelly/elm-chat'
        },
        {
          title: 'Echo Chamber',
          description: `
            Elm's inbuilt support for WebSockets make it a perfect candidate for
            building highly performant webapps which can update in realtime.
            This simple chat app demonstrates how easy it is to use websockets
            in Elm.
          `,
          url: 'https://github.com/bedekelly/elm-chat',
          image: 'images/projects/EchoChamber.png'
        }
      ]
    },
    {
      title: 'Native Code',
      projects: [
        {
          title: 'Hashtables',
          description: `
            I wrote a hashtable entirely in C, implementing table doubling to
            keep reads/writes at O(1). The code is performant and idiomatic C99.
          `,
          image: 'images/projects/Hashtables.png',
          url: 'https://blog.bede.io/hashtables-in-c-table-doubling/'
        },
        {
          title: 'Mandelbrot Zoom',
          description: `
            In order to render deep Mandelbrot zoom videos of high resolution, I
            wrote a C program to generate alternating frames in parallel on all
            8 cores of my machine, then used some maths and bash scripting to
            stitch them together into an HD video.
          `,
          url: 'https://vimeo.com/240290765',
          image: 'images/projects/MandelbrotZoom.png'
        },
        {
          title: 'Temperature Change Model',
          description: `
            As part of a Computer Science module on genetic and evolutionary
            programming, I created a model of temperature change over time
            using genetic programming techniques. I also evaluated the performance
            of tuning various parameters in a report, and used a Jupyter notebook
            to show my results.
          `,
          url: 'https://github.com/bedekelly/time-series-prediction',
          image: 'images/projects/TemperatureChangeModel.png'
        }
      ]
    },
    {
      title: 'Meta-programming',
      projects: [
        {
          title: 'Minitools',
          description: `
            To find out more about how testing libraries worked in Python, I
            wrote a small but very capable testing package called Minitools.
            This includes facilities for mocking, patching and checking various
            properties of code.
          `,
          url: 'https://github.com/bedekelly/minitools',
          image: 'images/projects/MiniTools.png'
        },
        {
          title: 'Magic Enum',
          description: `
            After learning about C++'s excellent Enum type, I decided to improve
            on Python's own more limited enum syntax. This project is for toy
            purposes only, but includes some deep metaprogramming and
            specialised language features.
          `,
          url: 'https://github.com/bedekelly/magic-enum',
          image: 'images/projects/MagicEnum.png'
        },
        {
          title: 'Monads and Do-Notation',
          description: `
            Haskell's do-notation transforms nested calls of the \`bind\`
            function into readable, imperative-style code. Using bidirectional
            generators as coroutines, I implemented similar functionality in Python
            for arbitrary monads. This is a first-of-kind implementation which
            works in regular modern Python code, unlike other attempts which rely
            on outdated PyPy features.
          `,
          url: 'https://github.com/bedekelly/monado',
          image: 'images/projects/Monads.png'
        }
      ]
    }
]}