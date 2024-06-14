import { Card, CardContent, Typography } from "@mui/material"

function ArticleCard({data}) {
    return (
        <a href={data.link} target="blank" style={{textDecoration:"none"}}>
             <Card sx={{ width:800, height:300,margin:5, alignItems:"center", padding:3, '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)', 
              transform: 'scale(1.05)', 
              transition: 'transform 0.2s ease-in-out',
              display: 'flex',
              justifyContent: "flex-start",
              alignItems: 'center'}}} >
        <CardContent sx={{ textAlign: 'left',marginBottom:4 }}>
        <Typography variant="h5" sx={{
                fontFamily: 'Arial, sans-serif',
                fontStyle: 'italic',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
          {data.title}
    </Typography>
    <Typography variant="h6" sx={{
                fontFamily: 'Times New Roman, serif', 
                fontStyle: 'normal', 
                fontWeight: 'lighter',
                marginBottom: '8px'
              }}>
          {data.description}
    </Typography>
    <Typography variant="p" 
    sx={{
        fontFamily: 'Courier New, monospace', 
        fontStyle: 'normal', 
        fontWeight: 'normal', 
        marginBottom: '8px'
      }}>
          Article link : <a href={data.link} target="blank" >Link</a>
    </Typography>
    <br />
    <Typography variant="p"
    sx={{
        fontFamily: 'Verdana, sans-serif', 
        fontStyle: 'italic', 
        fontWeight: 'bold', 
        marginBottom: '8px'
      }}>
         Author : {data.author}
    </Typography>
     
        </CardContent>
      </Card>

        </a>
       
    )
  }
  
  export default ArticleCard