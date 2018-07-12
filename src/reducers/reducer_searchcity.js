
export default function (state=[],action) {
// eslint-disable-next-line
    switch (action.type)
    {
    case "FetchWeather":
        return [action.payload.data,...state]
    }
    return state;

}