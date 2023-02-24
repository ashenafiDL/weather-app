import { Card } from "semantic-ui-react";

function Weather(props) {
  return (
    <div className="p-32 hover:cursor-default flex flex-row gap-8 justify-center w-full flex-wrap">
      <div className="shadow-lg flex flex-row gap-8 py-5 px-8 bg-slate-600 text-white rounded-lg hover:scale-105 duration-500">
        <div>
          <div>
            <span>{props.data.weather[0].main}</span>
            <h1 className="text-7xl mt-0">{props.data.main.temp} &deg;C</h1>
          </div>
          <div>
            <i class="bi-alarm"></i>
            <i class="bi bi-geo-alt-fill"></i>
            <span>{props.data.name + ", " + props.data.sys.country}</span>
          </div>
        </div>

        <div className="border"></div>

        <div className="flex flex-row">
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
