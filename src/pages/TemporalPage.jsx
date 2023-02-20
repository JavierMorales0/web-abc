import { Box, Button, Typography } from '@mui/material';

export default function TemporalPage() {
  const handleClick = () => {
    window.open(
      'https://api.whatsapp.com/message/5FCXM2MCRSMPM1?autoload=1&app_absent=0',
      '_blank',
    );
  };
  const handleClickFacebook = () => {
    window.open('https://www.facebook.com/abc.com.sv', '_blank');
  };
  const handleClickInstagram = () => {
    window.open('https://www.instagram.com/abc.com.sv', '_blank');
  };
  const handleClickTiktok = () => {
    window.open('https://www.tiktok.com/@abc.com.sv', '_blank');
  };
  

  return (
    <Box sx={style.container}>
      <Box sx={style.subcontainer}>
        <Button
          variant="contained"
          sx={style.btnWhatsapp}
          onClick={handleClick}
        >
          WhatsApp
        </Button>
        <Box sx={style.containerSocial}>
          <Box component="img" src="/images/facebook.svg" alt="facebook" onClick={handleClickFacebook} />
          <Box component="img" src="/images/instagram.svg" alt="instagram" onClick={handleClickInstagram}  />
          <Box component="img" src="/images/tiktok.svg" alt="tiktok"  onClick={handleClickTiktok} />
        </Box>
      </Box>
    </Box>
  );
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  subcontainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: {
      xs: 'url(/images/WEB-ABC-2023-2.png)',
      md: 'url(/images/WEB-ABC-2023-1.png)',
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    aspectRatio: '16/9',
    width: { xs: '100%', md: '800px', lg: '1400px' },
    height: { xs: '550px', md: '450px', lg: '800px' },
  },
  btnWhatsapp: {
    position: 'absolute',
    bottom: { xs: '250px', md: '185px', lg: '330px' },
    fontFamily: 'Fieldwork',
    textTransform: 'none',
    fontSize: { xs: '16px', md: '20px', lg: '40px' },
    py: 0,
    fontWeight: 700,
    width: { xs: '150px', md: '180px', lg: '380px' },
  },
  containerSocial: {
    position: 'absolute',
    bottom: { xs: '215px', md: '145px', lg: '270px' },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      height: { xs: '28px', md: '28px', lg: '40px' },
      width: { xs: '28px', md: '28px', lg: '40px' },
      cursor: 'pointer',
    },
  },
};