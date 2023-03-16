import { ImageUrlBuilder } from 'sanity';
import { createClient } from "next-sanity";
import { useNextSanityImage } from 'next-sanity-image';
import { dataset, projectId, apiVersion,token } from './sanity.api';

export const client = createClient(
    {
        projectId,
        dataset,
        apiVersion,
        useCdn: true,
        token,
    }
)

// const builder = useNextSanityImage(client)