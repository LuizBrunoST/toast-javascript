class TapToast{

    static settings = {
        position: "top-right",
        duration: 3000
    };

    static config(options){
        this.settings = {...this.settings, ...options};
    }

    static container(){
        let c = document.querySelector(".taptoast-container");

        if(!c){
            c = document.createElement("div");
            c.className = `taptoast-container taptoast-${this.settings.position}`;
            document.body.appendChild(c);
        }
        return c;
    }

    static show(type, message, duration=null){

        duration = duration ?? this.settings.duration;

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

    static success(msg, d=null){ this.show("success",msg,d); }
    static error(msg, d=null){ this.show("error",msg,d); }
    static warning(msg, d=null){ this.show("warning",msg,d); }
    static info(msg, d=null){ this.show("info",msg,d); }
}
