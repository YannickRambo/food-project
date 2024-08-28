interface SearchProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function Search({ search, setSearch }: SearchProps) {
    return (
        <div className="search">
            <input type="text" placeholder="Search for a food name:" value={search} onChange={(e) => setSearch(e.target.value)} />
            <i className="bi bi-search"></i>
        </div>
    );
}