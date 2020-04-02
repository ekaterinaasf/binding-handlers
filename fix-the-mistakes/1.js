try {
  const title = "mistakes-1";
  console.group(title);
  // there is a comment by each method saying how many bugs are in it
  // write a little note about each after you fix it for later study

  const obj = {
    state: {
      x: 0,
      y: 0
    },
    log: [],
    renderState: function() {
      // 2 mistakes
      return `{ X: ` + this.state.x + `, Y: ` + this.state.y + ` }`; //removed ${}
    },
    handler: function(element, event) {
      // 3 mistakes
      //debugger;
      this.state.x = Number(event.x); //small letter
      this.state.y = Number(event.y); //small letter
      element.innerHTML = this.renderState(); //added element argument in func and here
      this.log.push(JSON.parse(JSON.stringify(this.state)));
    },
    view: function(id) {
      // 3 mistakes
      // debugger;
      const container = document.createElement("div"); //quotas
      container.id = id;
      container.innerHTML = this.renderState.bind(this);
      container.onmousemove = this.handler.bind(this, container); //+bind +container
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
