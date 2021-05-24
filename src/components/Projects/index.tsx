import { AlternativeRoutesCard } from './AlternativeRoutesCard'
import { ProjectTypesCard } from './ProjectTypesCard'

import { 
  Container, 
  Content
} from './styles'

export function Projects() {
  return(
    <Container>
      <Content>
        <AlternativeRoutesCard />

        <ProjectTypesCard />
      </Content>
    </Container>
  )
}