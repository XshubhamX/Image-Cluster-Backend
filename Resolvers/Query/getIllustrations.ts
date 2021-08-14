import Illustrations from "../../Model/Illustration"
import { Get_Args, Illustration_Data, Illustration_Return_Data } from "../../Config/TypeDefs"

export const allIllustrations = async (parent, args: Get_Args, context, info): Promise<Illustration_Return_Data> => {

    let illus: Illustration_Data[];
    try {
        illus = await Illustrations.find(null, null, {
            skip: args.skip,
            limit: args.limit,
        });

        if (illus.length === 0) {
            return {
                illus: null,
                error: {
                    subject: "No More illustrations",
                    message: "No more illustrations"
                }
            }
        }

        return {
            illus,
            error: null,
        }
    } catch (e) {
        return {
            illus: null,
            error: {
                subject: "error",
                message: "e"
            }
        }
    }
}