class TapToast{

    static container(){
        let c = document.querySelector(".taptoast-container");

        if(!c){
            c = document.createElement("div");
            c.className = "taptoast-container";
            document.body.appendChild(c);
        }
        return c;
    }

    static show(type, message, duration=3000){
        const toast = document.createElement("div");
        toast.className = `taptoast ${type}`;
        toast.innerText = message;

        this.container().appendChild(toast);

        setTimeout(()=>{
            toast.style.opacity = "0";
            toast.style.transition = "0.3s";
            setTimeout(()=> toast.remove(),300);
        }, duration);
    }

    static success(msg){ this.show("success",msg); }
    static error(msg){ this.show("error",msg); }
    static warning(msg){ this.show("warning",msg); }
    static info(msg){ this.show("info",msg); }
}
