import { Box } from "@chakra-ui/react"
import { useSelector } from 'react-redux'




export default function Home() {
  
  const desc = useSelector((state: any) => {
    
    return state.recipes ? state.recipes.description : 'ooo';
  });
  const lng = useSelector((state: any) => {
    
    return state.ui ? state.ui.lng : 'ro';
  });

  console.log('Lng:', lng);
  console.log('Desc:', desc);
  return <Box bg="black">dishatlas - {lng} - {desc}</Box>
}
