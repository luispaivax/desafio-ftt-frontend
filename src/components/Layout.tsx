const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <header>
                <h1>
                    UniEVANGÉLICA - Reservas
                </h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                2025 UniEVANGÉLICA
            </footer>
        </div>
    );
};

export default Layout;