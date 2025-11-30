# TSService.getSetPeriodSettings

TSService.getSetPeriodSettings
-


# TSService.getSetPeriodSettings


## Синтаксис


getSetPeriodSettings (wbk, startDate, endDate);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


startDate. Задает начальную дату в формате 'YYYY-MM-DD';


endDate. Задает конечную дату в формате 'YYYY-MM-DD'.


## Описание


Метод getSetPeriodSettings возвращает тело запроса периода.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), сервиса для работы с временными рядами с наименованием «tsService», а также необходимо в обработчике события открытия документа добавить следующий код:


	var getSetPeriodSettingsButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Период", //текст
		Click: PP.Delegate(onClickGetSetPeriodSettings)
	});
	function onClickGetSetPeriodSettings() {
		var wbk = args.Workbook;
		//Возвращаем тело запроса периода
		var startDate = new Date(2010, 1, 1);
		var endDate = new Date(2012, 1, 1);
		var periodSettings = tsService.getSetPeriodSettings(wbk, startDate, endDate);
		//Выполняем запрос
		tsService._invokeRemoteProc(wbk, periodSettings, PP.Delegate(onResponse, this));
		//Обработчик получения ответа
		function onResponse(sender, args) {
			workbookBox.refreshAll();
			alert(args.ResponseText);
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Период». После нажатия на кнопку будет возвращено и выведено в соответствующем сообщении тело запроса периода.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
