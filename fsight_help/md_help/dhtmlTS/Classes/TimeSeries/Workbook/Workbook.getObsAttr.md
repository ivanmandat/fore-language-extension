# Workbook.getObsAttr

Workbook.getObsAttr
-


# Workbook.getObsAttr


## Синтаксис


getObsAttr (value);


## Параметры


value. Задает параметры ряда.


## Описание


Метод getObsAttr возвращает список атрибутов наблюдений.


## Комментарии


Если параметр принимает значение true - возвращается массив рядов, false - возвращается массив копий рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а в обработчике события открытия документа необходимо добавить следующий код:


	tsService.WbkOpened.add(PP.Delegate(onWbkOpened));
	function onWbkOpened(sender, args, q,w,e,r)
	{
		//Получаем список атрибутов наблюдений
		var obs = wbk.getObsAttr(true);
		var message = "";
		for (var i = 0; i<obs.length; i++)
		{
			message = message + "Атрибут наблюдения: " + obs[i].n + '\n';
		}
		alert(message);
	}

После выполнения примера будет определен и выведен соответствующим сообщением список атрибутов наблюдений.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
