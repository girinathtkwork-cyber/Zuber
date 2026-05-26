// Works in Node.js, Next.js, serverless, and edge runtimes
import { neon } from '@neondatabase/serverless';


export async function POST( request) {
    try{
    const sql = neon(process.env.DATABASE_URL);
    const {name, email, firebase_uid} = await request.json(); 
    
    if(!name || !email || !firebase_uid){
        return Response.json(
            {error: 'Missing required fields'},
            {status: 400},
        )
    }

    const response = await sql`
        INSERT INTO users(
        name,
        email,
        firebase_uid
        )
        VALUES(
        ${name},
        ${email},
        ${firebase_uid}
        )
    `;

    return new Response(JSON.stringify({data: response}),{status:201});
    }
    catch(error){
        console.log(error);
        return  Response.json({error: error.message}, {status: 500});
    }
} 