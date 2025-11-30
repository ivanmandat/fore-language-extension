# TSService.openUnitDim

TSService.openUnitDim
-


# TSService.openUnitDim


## Синтаксис


openUnitDim (wbk, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод openUnitDim открывает справочник единиц измерения.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	//Открываем справочник единиц измерения
	tsService.openUnitDim(wbk, onOpenUnitDim);
	// Обработчик события окончания выполнения метода openUnitDim
	function onOpenUnitDim(sender, args){
		var alertString = "";
		//Преобразуем текст ответа сервера в JSON объект
		var res = JSON.parse(args.ResponseText);
		//Получаем единицы измерения из ответа сервера и выводим на экран наименования единиц измерения
		for (var i = 0; i < res.GetDimElementsResult.els.e.length; i++)
		{
			alertString += "Единица измерения № " + (i+1) + " - " + res.GetDimElementsResult.els.e[i].n + '\n';
		}
		alertString += "Всего - " + res.GetDimElementsResult.els.e.length;
		alert(alertString);
	}

После выполнения примера будет выведено сообщение, содержащее список имеющихся в источнике единиц измерения.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
