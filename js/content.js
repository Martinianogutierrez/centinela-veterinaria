/* Render services cards and team accordion */

function renderServices() {
  const track = $("#track");
  if (!track) return;

  SERV.forEach((service, index) => {
    const [title, description] = service;
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.innerHTML = `
      <span class="plus glass"></span>
      <h3>${title}</h3>
      <div class="lay glass">
        <h4>${title}</h4>
        <p>${description}</p>
        <u>Saber más →</u>
      </div>
    `;
    card.prepend(createSlot("s" + index, title));
    card.onclick = () => {
      if (!Carousel.isDragging()) card.classList.toggle("open");
    };
    track.append(card);
  });
}

function renderTeam() {
  const stage = $("#stage");
  const accordion = $("#acc");
  if (!stage || !accordion) return;

  TEAM.forEach((member, index) => {
    const [name, role, bio] = member;
    const photo = createSlot("t" + index, name);
    photo.className = "ph" + (index === 0 ? " on" : "");
    stage.append(photo);

    const item = document.createElement("div");
    item.className = "it" + (index === 0 ? " on" : "");
    item.innerHTML = `
      <h3>${name}</h3>
      <small>${role}</small>
      <div><p>${bio}</p></div>
    `;
    item.onclick = () => {
      $$(".it").forEach((el, j) => {
        el.classList.toggle("on", j === index);
        $$("#stage .ph")[j].classList.toggle("on", j === index);
      });
    };
    accordion.append(item);
  });
}
