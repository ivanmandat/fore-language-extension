# Workbook.getDependentsSeries

Workbook.getDependentsSeries
-


# Workbook.getDependentsSeries


## Синтаксис


getDependentsSeries (value);


## Параметры


value. Задает
 ряд.


## Описание


Метод getDependentsSeries определяет
 список рядов, зависимых от заданного ряда.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	var showDependantsButton = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Отобразить информацию о зависимых рядах", //Подпись
		Click: PP.Delegate(onClickCollapseSeries)
	});

	function onClickCollapseSeries()
	{
		var messageString = "";
		//Получаем ряды рабочей книги
		var series = wbk.getActiveSheet().getSeries();
		var i;
		//Формируем строку, содержащую информацию о зависимых рядах для каждого ряда
		for (i = 0; i < series.length; i++)
		{
			var dependantsSeries = wbk.getActiveSheet().getDependentsSeries(series[i])
			if(dependantsSeries.length > 0)
			{
				messageString+= "У ряда " + series[i].n + " зависимые ряды: ";
				while(dependantsSeries.length > 0)
				{
					messageString+= dependantsSeries.pop().n + ", ";
				}
				messageString = messageString.slice(0, -2);
					messageString+= '\n';
			}
			else
			{
				messageString+= "У ряда " + series[i].n + " нет зависимых рядов \n";
			}
		}
		//Выводим сообщение на экран
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Отобразить информацию о зависимых рядах». При нажатии на кнопку будет
 выведено сообщение, содержащее информацию о зависимых рядах.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
