import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { Database } from './types/supabase'

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SECRET_KEY || '',
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allOnlineUsers = await supabase
    .from('users')
    .select('*')
    .eq('status', 'ONLINE')
  res.status(200).json(allOnlineUsers)
}
