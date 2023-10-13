import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

async function Sidebar({children}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full">
            <DesktopSidebar/>
            <MobileFooter/>
            <main className="lg:pl-30 h-full">
                {children}
            </main>
        </div>
    )
}

export default Sidebar;