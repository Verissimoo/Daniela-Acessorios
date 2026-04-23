import { createClient } from "@base44/sdk"
import { appParams } from "@/lib/app-params"

export const base44 = createClient({
  appId: appParams.appId,
  baseUrl: appParams.appBaseUrl,
  token: appParams.token,
})

export default base44
