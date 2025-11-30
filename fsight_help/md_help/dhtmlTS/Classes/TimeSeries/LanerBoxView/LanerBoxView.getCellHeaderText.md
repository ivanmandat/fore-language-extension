# LanerBoxView.getCellHeaderText

LanerBoxView.getCellHeaderText
-


# LanerBoxView.getCellHeaderText


## Синтаксис


getCellHeaderText ();


## Описание


Метод getCellHeaderText возвращает текст из заголовка столбца таблицы для выделенной ячейки.


## Комментарии


Если выделено больше одной ячейки, возвращает undefined.


## Пример


Для выполнения примера предполагается наличие на странице компонента [LanerBox](../../../Components/TimeSeries/LanerBox/LanerBox.htm) с наименованием «lanerbox» (см. «[Конструктор LanerBox](../LanerBox/Constructor_LanerBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


// Создаем кнопку
	var btnGetCellHeaderText = new PP.Ui.Button({
	ParentNode: "params", //родительский узел DOM
	Content: "GetCellHeaderText", //подпись
	Click: PP.Delegate(function(sender, args){ //обработчик нажатия
	//должна быть выделена одна ячейка
	console.log("Получаем текст из заголовка столбца таблицы для выделенной ячейки");
	var cellHeaderText = lanerbox.getCellHeaderText();
	console.log(cellHeaderText);
	}, this)
	});

После выполнения примера на html-странице будет добавлена кнопка «GetCellHeaderText», при нажатии на которую в консоль браузера будет выведен текст из заголовка столбца таблицы для выделенной ячейки:


W2/10/2000


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
