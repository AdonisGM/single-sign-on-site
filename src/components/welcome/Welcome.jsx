import {Spacer} from "@nextui-org/react";

const Welcome = () => {
  return (
    <div className={'flex flex-col items-center justify-center h-full'}>
      <p className={'text-default-500 text-5xl font-bold'} style={{fontFamily: 'Supfun, cursive'}}>
        {"< Welcome my friend >"}
      </p>
      <Spacer y={2}/>
      <p className={'text-default-400 text-sm italic'}>
        Hope you have a good time here, all services are free. Plz enjoy it! ヾ(≧▽≦*)o
      </p>
    </div>
  );
}

export default Welcome;