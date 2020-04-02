try {
  const title = "mistakes-2";
  console.group(title);
  // there is a comment by each method saying how many bugs are in it
  // write a little note about each after you fix it for later study

  const obj = {
    state: {
      number: 3,
      modulo: 2,
      result: 1
    },
    log: [],
    updateState: function(num, mod) {
      // 5 mistakes
      this.state.number = num; //added state
      this.state.modulo = mod; //added state
      this.state.result = this.state.number % this.state.modulo; //added state 3 times and corrected num$mod
    },
    handler: function(event, element) {
      // 2 mistakes
      debugger;
      const form = event.target.form; //added target
      const newNum = Number(form.newNum.value);
      const newMod = Number(form.newMod.value);
      this.updateState(newNum, newMod);
      //form.lastChild.value = this.state.result;
      element.lastChild.value = this.state.result; //replaced form by element
      this.log.push(JSON.parse(JSON.stringify(this.state)));
    },
    view: function(id) {
      // 2 mistakes
      debugger;
      const outputEl = document.createElement("code");
      outputEl.marginLeft = "5%";
      outputEl.innerHTML = this.state.result;

      const numInputEl = document.createElement("input");
      numInputEl.type = "number";
      numInputEl.name = "newNum";
      numInputEl.value = this.state.number;
      numInputEl.onclick = this.handler.bind(this, numInputEl); //added numInputEl

      const modInputEl = document.createElement("input");
      modInputEl.type = "number";
      modInputEl.name = "newMod";
      modInputEl.value = this.state.modulo;
      modInputEl.onclick = this.handler.bind(this, modInputEl); //added modInputEl

      const formEl = document.createElement("form");
      formEl.appendChild(numInputEl);
      formEl.appendChild(document.createTextNode(" % "));
      formEl.appendChild(modInputEl);
      formEl.appendChild(document.createTextNode(" = "));
      formEl.appendChild(outputEl);

      const container = document.createElement("div");
      container.id = id;
      container.className = "exercise";
      container.onclick = function(e) {
        if (e.target === e.currentTarget) console.log(title, this);
      }.bind(this);

      return container;
    }
  };

  document.getElementById("root").appendChild(obj.view(title));

  // there are no mistakes in the tests
  const assert = (assertion, message) => {
    if (assertion) {
      console.log("%cPASS: " + message, "color:green");
    } else {
      console.log("%cFAIL: " + message, "color:red");
    }
  };

  assert(
    JSON.stringify(obj.state) === '{"number":3,"modulo":2,"result":1}',
    "Test 0"
  );

  obj.updateState(3, 2);
  assert(
    JSON.stringify(obj.state) === '{"number":3,"modulo":2,"result":1}',
    "Test 1"
  );

  obj.updateState(2, 3);
  assert(
    JSON.stringify(obj.state) === '{"number":2,"modulo":3,"result":2}',
    "Test 2"
  );

  obj.updateState(-1, 1);
  assert(
    JSON.stringify(obj.state) === '{"number":-1,"modulo":1,"result":0}',
    "Test 3"
  );

  obj.updateState(12, 4);
  assert(
    JSON.stringify(obj.state) === '{"number":12,"modulo":4,"result":0}',
    "Test 4"
  );

  obj.updateState(8, -5);
  assert(
    JSON.stringify(obj.state) === '{"number":8,"modulo":-5,"result":3}',
    "Test 5"
  );

  obj.state = {
    number: 3,
    modulo: 2,
    result: 1
  };
  assert(
    JSON.stringify(obj.state) === '{"number":3,"modulo":2,"result":1}',
    "Test 6"
  );

  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
