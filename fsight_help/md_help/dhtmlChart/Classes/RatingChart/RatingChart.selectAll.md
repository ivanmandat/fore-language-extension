# RatingChart.selectAll

RatingChart.selectAll
-


# RatingChart.selectAll


## Синтаксис


selectAll();


## Описание


Метод selectAll выделяет все
 ряды данных рейтинговой диаграммы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). В теге BODY добавьте элементы div
 с идентификаторами «div1» и «div2».


Добавим на страницу кнопки «but1» и «but2», обработаем события нажатия
 на них:


    // Кнопка выделяет все ряды данных
    var but1 = new PP.Ui.Button({
        ParentNode: document.getElementById("div1"),
        Content: "Select all"
    })
    but1.Click.add(function (sender, args) {
        ratingChart.selectAll();
    })
    // Кнопка снимает выделение со всех рядов данных
    var but2 = new PP.Ui.Button({
        ParentNode: document.getElementById("div2"),
        Content: "Deselect all"
    })
    but2.Click.add(function (sender, args) {
        ratingChart.deselectAll()
    })

В результате выполнения примера будут размещены следующие кнопки:


	- Select all. При нажатии
	 на кнопку будут выделены все ряды данных рейтинговой диаграммы;


	- Deselect all. При нажатии
	 на кнопку будет снята отметка выделения со всех рядов данных рейтинговой
	 диаграммы.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
