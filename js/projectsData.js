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
        title: 'Gal',
        description: `
          A simple, responsive image gallery, created with React and Python/Flask, 
          which pregenerates blurred image previews to display while the main 
          images are loading. Can be downloaded and run in a single line of code.
        `,
        url: 'https://github.com/bedekelly/gal',
        image: 'images/projects/Gal.png'
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
      title: 'Functional Programming',
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
    title: 'Backend',
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
        title: 'Web Crawler',
        description: `
          As part of my interview process for a fintech company in London, I
            wrote an idiomatic web crawler in Python. It produces a dictionary
            of asset links, allows for a maximum recursion depth and detects
            cycles.
        `,
        url: 'https://github.com/bedekelly/crawler',
        image: 'images/projects/WebCrawler.png'
      },
      {
        title: 'Tinybuf',
        description: `
          Tinybuf is an ongoing project inspired by Google's ProtoBuf and
            Cap'n Proto. When complete, it will be a highly efficient
            serialisation protocol for structured data into binary format.
        `,
        image: 'images/projects/TinyBuf.png',
        url: 'https://github.com/bedekelly/tinybuf'
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
      title: 'Advanced Python',
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
          title: 'PySh',
          description: `
            This tool uses Python's dynamic nature to expose every command-line
            tool on the user's machine as a function on an importable Python
            module. Input, output and errors are all handled sanely. Again,
            some metaprogramming is necessary here.
          `,
          url: 'https://github.com/bedekelly/pysh',
          image: 'images/projects/PySh.png'
        }
      ]
    }
]}