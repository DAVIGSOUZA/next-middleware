import Image from "next/image";

type MyComponentProps = {
  mobile: boolean
}

const MyComponent = ({ mobile }: MyComponentProps) => {
  return (
    <div>
      <h1>
        {mobile
          ? "I'am a mobile page and my image is different from the desktop version"
          : "I'am a desktop page and my image is different from the mobile version"
        }
      </h1>
      <Image src={mobile ? "/mobile.jpg" : "/desktop.jpg"} alt="" width={300} height={200}/>
    </div>
  );
};

export default MyComponent;
