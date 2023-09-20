interface IAppbarProps {
    title: string,
    logoSrc?: string,
}
const Appbar: React.FC<IAppbarProps> = ({title, logoSrc}) => {
    return (
        <header className="flex bg-white p-3 items-center">
            {
                logoSrc && 
                <img src={logoSrc} width={40} height={40} alt='' className="rounded-full mr-4" />
            }
            <span className="text-black text-2xl font-bold">{title}</span>
        </header>
    )
}

export default Appbar