export const getPaginatedData = async (model, req) => {
    const limit = 10;
    const page = parseInt(req.query.page) || 1;

    const options = {
        page,
        limit,
        sort: '-createdAt',
        lean: true, // returns plain JS objects
        select: 'name price images category status ratings reviews', // only fetch necessary fields
    };

    return await model.paginate({}, options);
}

export const getPaginatedDataFilter = async (model, req, filter) => {
    const limit = 10;
    const page = parseInt(req.query.page) || 1;

    const options = {
        page,
        limit,
        sort: '-createdAt',
        lean: true,
        select: 'name price images category status ratings reviews',
    };

    return await model.paginate(filter, options);
}
