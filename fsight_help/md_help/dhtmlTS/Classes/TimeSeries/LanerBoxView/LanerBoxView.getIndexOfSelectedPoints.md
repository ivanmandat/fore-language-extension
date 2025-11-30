# LanerBoxView.getIndexOfSelectedPoints

LanerBoxView.getIndexOfSelectedPoints
-


# LanerBoxView.getIndexOfSelectedPoints


## Синтаксис


getIndexOfSelectedPoints ();


## Описание


Метод getIndexOfSelectedPoints возвращает массив индексов выделенных в таблице точек.


## Пример


Для выполнения примера предполагается наличие на странице компонента [LanerBox](../../../Components/TimeSeries/LanerBox/LanerBox.htm) с наименованием «lanerbox» (см. «[Конструктор LanerBox](../LanerBox/Constructor_LanerBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


// Создаем кнопку
	var btnGetIndexsOfSelected = new PP.Ui.Button({
	ParentNode: "params", //родительский узел DOM
	Content: "GetIndexsOfSelected", //подпись
	Click: PP.Delegate(function(sender, args){ //обработчик нажатия
	console.log("Получаем массив индексов выделенных в таблице точек");
	var iSelPoints = lanerbox.getIndexOfSelectedPoints();
	console.log(iSelPoints);
	console.log("Получаем массив индексов выделенных в таблице рядов");
	var iSelSeries = lanerbox.getIndexOfSelectedSeries();
	console.log(iSelSeries);
	}, this)


После выполнения примера на html-странице будет добавлена кнопка «GetIndexsOfSelected», при нажатии на которую в консоль браузера будет выведен массив индексов:


Получаем массив индексов выделенных в таблице точек


[1]


Получаем массив индексов выделенных в таблице рядов


[4]


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
