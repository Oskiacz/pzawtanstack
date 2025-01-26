import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient();

function Images() {
    return (
        <QueryClientProvider>
            
        </QueryClientProvider>
    )
}

export default Images