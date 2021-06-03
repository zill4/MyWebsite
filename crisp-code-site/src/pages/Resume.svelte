
<div class="grid-container">
    <div class="Headshot">
      <div class="_img">
          <img src="../../images/headshot.jpg" alt="my-face" height=200px width=200px/>
      </div>
      <div class="_bio">
        <div class="_name">
            <h1>Justin Crisp</h1>
        </div>
        <div class="_info">
            <h2>Some Bio</h2>
            <p>Lorem ipsum stuff orem ipsum stuff orem ipsum stuff orem ipsum stuff orem ipsum stuff orem ipsum stuff orem ipsum stuff orem ipsum stuff orem ipsum stuff orem ipsum stuff orem ipsum stuff </p>
        </div>
      </div>
    </div>
    <div class="Content">
        <div class="experience">
            <h1>Experience</h1>
            <ul>
                <h2>Samsung</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
                <h2>Code for Fun</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
                <h2>RingCentral</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
            </ul>
        </div>
        <div class="projects">
            <h1>Projects</h1>
            <ul>
                <h2>Warlok</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
                <h2>SocialEye</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
                <h2>CrispCode.io</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
            </ul>
        </div>
        <div class="education">
            <h1>Education</h1>
            <ul>
                <h2>42 Silicon Valley</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
                <h2>De Anza</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
            </ul>
        </div>
    </div>
    <div class="Contact">
        <h2>+1 (949)873-3619</h2>
        <a href="justincrisp@crispcode.io">JustinCrisp@CrispCode.io</a>
        <br>
        <a href="https://crispcode.io">CrispCode.io</a>
    </div>
    <div class="RSide">
      <div class="_projects">
        <h1>Project Links</h1>
        <ul>
            <h2>42 Silicon Valley</h2>
            <li> work work work</li>
            <li> more more more</li>
            <li> funn funn funn</li>
            <h2>De Anza</h2>
            <li> work work work</li>
            <li> more more more</li>
            <li> funn funn funn</li>
        </ul>
      </div>
      <div class="_education">
            <h1>Education</h1>
            <ul>
                <h2>42 Silicon Valley</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
                <h2>De Anza</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
            </ul>
        </div>

    </div>
    <div class="Achievements">
        <h1>Achievements</h1>
            <ul>
                <h2>42 Silicon Valley</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
                <h2>De Anza</h2>
                <li> work work work</li>
                <li> more more more</li>
                <li> funn funn funn</li>
            </ul>
    </div>
  </div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.3fr 0.7fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Headshot Headshot Contact Contact"
    "Achievements Content Content RSide"
    "Achievements Content Content RSide";
}

.Headshot {
  display: grid;
  grid-template-columns: 1fr 0.3fr 1.7fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "_img _img _bio"
    "_img _img _bio";
  grid-area: Headshot;
}

._img { grid-area: _img; }

._bio {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "_name _name _name"
    "_info _info _info";
  grid-area: _bio;
}

._name { grid-area: _name; }

._info { grid-area: _info; }

.Content { grid-area: Content; }

.Contact { grid-area: Contact; }

.RSide {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "_projects _projects _projects"
    "_education _education _education";
  grid-area: RSide;
}

._projects { grid-area: _projects; }

._education { grid-area: _education; }

.Achievements { grid-area: Achievements; }
    .Headshot img {
		padding-top: 50px;
		padding-right: 50px;
		padding-bottom: 50px;
		padding-left: 50px;
		border-radius: 50%;
        height: 350px;
        width: 350px;
    }
</style>