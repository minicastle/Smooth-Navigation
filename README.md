# Smooth Navigation
React를 이용한 Navigation Component Library입니다.
Navigation을 위해 사용되는 컴포넌트 `<SmoothNav>`

## Usage 
``` tsx
    import { SmoothNav } from "@minicastle/smooth-navigation";
    const TestItem: { Text: string; Target: string }[] = [
    { Text: "Home", Target: "/" },
    { Text: "Show", Target: "/" },
    { Text: "Member", Target: "/" },
    { Text: "Contents", Target: "/" },
    { Text: "About", Target: "/" },
    ];

    function App() {
    return (
        <SmoothNav
        NavItems={TestItem}
        BaseColor="#D6ECFA"
        MainColor="#F15C5C"
        TextColor="#aaaaaa"
        HeaderIcon="./public/Header Icon.png"
        SiteName="Title"
        />
    );
    }

    export default App;
```