import Container from "./Container"
import SpotlightText from "./SpotlightText"
import Title from "./Title"

function Team() {

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <Title title="Meet the team" align="center" underline="center"/>
        <SpotlightText text="amazing people" align="center"/>
        <div className="flex flex-col gap-5 mt-14 lg:flex-row">
          <div>
            <img src='' alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Team