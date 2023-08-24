import getSongsByTitle from "@/action/getSongsByTitle";
import Box from "@/shared/ui/Box";
import Header from "@/widgets/header/ui";
import Flex from "@/shared/ui/Flex";
import Heading from "@/shared/ui/Heading";
import SearchInput from "@/entities/search-input/SearchInput";
import SearchContent from "@/entities/search-content/SearchContent";


interface SearchProps {
    searchParams: { title: string }
}
export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
    const songs = await getSongsByTitle(searchParams.title)


    return (
        <Box
            rounded={'lg'}
            h={'full'}
            w={"full"}
            overflow={'hidden'}
            overflowY={'auto'}

        >
            <Header>
                <Flex   direction={'column'} columnGap={6}>
                    <Heading as={'h1'} mb={4}>
                        Search songs !
                    </Heading>
                    <SearchInput/>
                </Flex>
            </Header>
            <SearchContent songs={songs}/>
        </Box>
    )
}
export default Search
