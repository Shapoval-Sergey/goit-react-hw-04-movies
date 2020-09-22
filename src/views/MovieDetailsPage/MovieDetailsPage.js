import React, { Component } from "react";
// import moviesApi from "../../services/moviesApi";

export default class MovieDetailsPage extends Component {
  //   state = { movies: null };

  //   componentDidMount() {}
  render() {
    return (
      <div>
        Проп to можно передавать в виде строки описывающей href будущей ссылки,
        или как объект location со следующими (необязательными) свойствами:
        pathname - строка, путь для ссылки. search - строковое представление
        параметров запроса. hash - хэш для добавления в конец URL. state -
        объект, который будет записан в location.state после перехода по ссылке.
      </div>
    );
  }
}
