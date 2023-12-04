let scale = 1,
        resolution = 1,
        pdfDoc = null,
        pdfjslib = window["pdfjs-dist/build/pdf"];

      let currentPage = 1;

      pdfjslib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";

      async function LoadPdfFromURL(url) {
        pdfDoc = await pdfjslib.getDocument(url).promise;

        // Reference div
        let pdf_container = document.getElementById("pdf_container");
        pdf_container.style.display = "block";

        // Loop and render all page
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          await RenderPage(pdf_container, i);
        }
      }

      async function RenderPage(pdf_container, num) {
        const page = await pdfDoc.getPage(num);
        const canvas = document.createElement("canvas");
        canvas.id = "pdf-page-" + num;

        let ctx = canvas.getContext("2d");
        pdf_container.appendChild(canvas);

        let spacer = document.createElement("div");
        spacer.style.height = "20px";
        pdf_container.appendChild(spacer);

        let viewport = page.getViewport({ scale: scale });

        const containerWidth = pdf_container.clientWidth,
          containerHeight = pdf_container.clientHeight,
          pageWidth = resolution * viewport.width,
          scaleFactor = containerWidth / pageWidth;

        viewport = page.getViewport({ scale: scaleFactor });

        console.log(viewport.height)

        canvas.height = viewport.height;
        canvas.width = containerWidth;

        let renderContext = {
          canvasContext: ctx,
          viewport: viewport,
          transform: [resolution, 0, 0, resolution, 0, 0],
        };

        await page.render(renderContext);
      }



function showLake(e){
    console.log(e.target.getAttribute('data-visible'))
    if(e.target.getAttribute('data-visible') === 'false'){
        e.target.setAttribute('data-visible', 'true')

        var randomParam = '?t=' + new Date().getTime();

        e.target.style.backgroundImage = 'url(https://media.tenor.com/TrZcpR0Kde8AAAAi/cat-meme-funny.gif' + randomParam + ')';
    }else{
        e.target.setAttribute('data-visible', 'false')

        e.target.style.backgroundImage = 'none';
    }
} 

function showLake_2(e){
    console.log(e.target.getAttribute('data-visible'))
    if(e.target.getAttribute('data-visible') === 'false'){
        e.target.setAttribute('data-visible', 'true')

        var randomParam = '?t=' + new Date().getTime();

        e.target.style.backgroundImage = 'url(https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif' + randomParam + ')';
    }else{
        e.target.setAttribute('data-visible', 'false')

        e.target.style.backgroundImage = 'none';
    }
} 

function showLake_3(e){
    console.log(e.target.getAttribute('data-visible'))
    if(e.target.getAttribute('data-visible') === 'false'){
        e.target.setAttribute('data-visible', 'true')

        var randomParam = '?t=' + new Date().getTime();

        e.target.style.backgroundImage = 'url(https://media1.giphy.com/media/T8Dhl1KPyzRqU/giphy.gif?cid=ecf05e47mdguegr4zllti57xphfcl7wvgtcznga9nz0zagta&ep=v1_gifs_search&rid=giphy.gif&ct=g' + randomParam + ')';
    }else{
        e.target.setAttribute('data-visible', 'false')

        e.target.style.backgroundImage = 'none';
    }
} 