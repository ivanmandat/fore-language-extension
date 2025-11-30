# SerieAttributesPanel.captionText

SerieAttributesPanel.captionText
-


# SerieAttributesPanel.captionText


## Синтаксис


captionText (series, attrsIndex);


## Параметры


series. Массив рядов;


attrsIndex. Индекс атрибута.


## Описание


Метод captionText возвращает
 текст, который нужно выводить в раскрывающемся списке для атрибута с указанным
 индексом.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


//Получаем панель для редактирования значений атрибутов выделенных рядов
var serieAttributesPanel = workbookBox.getPropertyBarView().getSerieAttributesPanel();
console.log(serieAttributesPanel);
var captionTextButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Название текста", //Подпись
Click: PP.Delegate(onClickCaptionText)
});
function onClickCaptionText()
{
	var series = [];
	series.push(wbk.getSeries()[0]);
	console.log(series);
	var attrsIndex = 0;
	//Получаем текст, который нужно выводить в раскрывающемся списке для атрибута с указанным индексом
	var text = serieAttributesPanel.captionText( series, attrsIndex );
	alert("Значение атрибута: " + text);
}

Для получения значения атрибута нужно нажать на кнопку «Название текста»,
 которая находится под панелью навигации.


См. также:


[SerieAttributesPanel](SerieAttributesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
