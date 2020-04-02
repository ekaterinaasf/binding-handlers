try {
  const title = "fill-in-1";
  console.group(title);

  const obj = {
    state: {
      red: 0,
      blue: 0
    },
    log: [],
    handler: function(element, event) {
      // debugger;
      const preRed = Number(event.x);
      const preBlue = Number(event.y);
      this.state.red = (preRed / window.innerWidth) * 255;
      this.state.blue = (preBlue / window.innerHeight) * 255;
      element.style.backgroundColor = `rgb(${this.state.red}, 0, ${this.state.blue})`;
      this.log.push(JSON.parse(JSON.stringify(this.state)));
    },
    view: function(id) {
      // debugger;
      const container = document.createElement("div");
      container.id = id;
      container.onmousemove = this.handler.bind(this, container);
      container.style.height = "20em";

      container.className = "exercise";
      container.onclick = function(e) {
        if (e.target === e.currentTarget) console.log(title, this);
      }.bind(this);

      return container;
    }
  };

  document.getElementById("root").appendChild(obj.view(title));

  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
