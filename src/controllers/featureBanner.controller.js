import { createFeatureBanner, deleteFeatureBanner, fetchFeatureBanner } from "../models/featuredBanner/featureBanner.model.js"

export const createFeatureBannerController = async (req, res, next) => {
    try {
        const obj = { ...req.body }

        // Handle file uploads
        if (req.file?.path) {
            obj.featureBannerImgUrl = req.file.path;
        }

        console.log(req.file, 888888)

        const newFeaturedBanner = await createFeatureBanner(obj)

        if (!newFeaturedBanner) {
            return res.status(400).json({
                status: "error",
                message: "Could not create the feature Banner!"
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Featured Banner Has been created Successfully!",
            newFeaturedBanner
        })

    } catch (error) {
        console.log(error)
        return next({
            status: "error",
            message: error?.message,
            errorMessage: "Errorkdsfhkgklsdfsdkflg ljkdsfahgkjh"
        })
    }
}

export const fetchFeatureBannerController = async (req, res, next) => {
    try {
        const featuredBanner = await fetchFeatureBanner()

        if (!featuredBanner) {
            return next({
                status: "error",
                message: "Not Found!"
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Feature Banner fetched successfully!",
            featuredBanner
        })
    } catch (error) {
        return next({
            status: "error",
            message: error?.message
        })
    }
}

export const deleteFeatureBannerController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedBanner = await deleteFeatureBanner(id)

        return res.status(200).json({
            status: "success",
            message: "Banner Expired!",
            deletedBanner
        })
    } catch (error) {
        return next({
            status: "error",
            message: error?.message
        })
    }
}