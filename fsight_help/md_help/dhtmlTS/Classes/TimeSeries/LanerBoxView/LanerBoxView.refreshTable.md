# LanerBoxView.refreshTable

LanerBoxView.refreshTable
-


# LanerBoxView.refreshTable


## Синтаксис


refreshTable (series, source);


## Параметры


series.  Задает массив рядов, которые нужно обновить;


source. Задает рабочую книгу, экземпляр класса [Workbook](../Workbook/Workbook.htm).


## Описание


Метод refreshTable обновляет выделенный диапазон данных.


## Пример


Для выполнения примера предполагается наличие на странице компонента [LanerBox](../../../Components/TimeSeries/LanerBox/LanerBox.htm) с наименованием «lanerbox» (см. «[Конструктор LanerBox](../LanerBox/Constructor_LanerBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


// Создаем кнопку
	var btnRefreshTable = new PP.Ui.Button({
	ParentNode: "params", //родительский узел DOM
	Content: "RefreshTable", //подпись
	Click: PP.Delegate(function(sender, args){ //обработчик нажатия
	console.log("Получаем выделенный диапазон данных");
	var series = wbk.getSelectedSeries();
	console.log(series);
	console.log("Обновляем выделенный диапазон данных");
	lanerbox.refreshTable(series, wbk);
	}, this)
	});

После выполнения примера на html-странице будет добавлена кнопка «RefreshTable», при нажатии на которую будет обновлен выделенный диапазон данных и в консоль браузера будет выведенно следующее:


Получаем выделенный диапазон данных


[Object]


Обновляем выделенный диапазон данных


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
