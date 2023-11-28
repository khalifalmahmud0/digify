import cn from "@/app/(lib)/cn";

const Header = ({className}) => {
    return (
        <>
            <header id="header" className={cn("header",className)}>
                This Is Header Component
            </header>
        </>
    );
};

export default Header;