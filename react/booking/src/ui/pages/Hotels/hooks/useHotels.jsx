import {useDispatch, useSelector} from "react-redux";
import {push} from "redux-first-history";
import selector from "../../../../engine/core/hotels/selectors.js";
import {useEffect} from "react";
import {route} from "../../../../engine/config/route.jsx";

export function useHotels() {
    const dispatch = useDispatch();
    const items = useSelector(selector.items);
    const loading = useSelector(selector.loading);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(push(route.main.path))
        }
    }, [dispatch]);

    return {
        items,
        loading,
    }
}
