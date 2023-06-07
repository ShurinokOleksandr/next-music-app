import getSongsByTitle from "@/action/getSongsByTitle";
import Box from "@/shared/ui/Box";
import Header from "@/widgets/header/ui";
import Flex from "@/shared/ui/Flex";
import Heading from "@/shared/ui/Heading";
import SearchInput from "@/entities/search-input/SearchInput";
import SearchContent from "@/entities/search-content/SearchContent";


interface SearchPage{
    searchParams:{
        title:string
    }
}

const Search = async ({searchParams}:SearchPage) => {
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
                <Flex mb={2} direction={'column'} columnGap={6}>
                    <Heading as={'h1'} >
                        ds
                    </Heading>
                    <SearchInput/>
                </Flex>
            </Header>
            <SearchContent songs={songs}/>
        </Box>
    )
}
export default Search