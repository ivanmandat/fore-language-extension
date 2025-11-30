# TSService.refreshWbk

TSService.refreshWbk
-


# TSService.refreshWbk


## Синтаксис


refreshWbk (report, callback);


## Параметры


report. Задает объект;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод refreshWbk обновляет рабочую книгу.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а в обработчике открытия документа необходимо добавить следующий код:


var wbkDataBox = workbookBox.getDataView();
var setHorizontalButt = new PP.Ui.Button({
	ParentNode: document.body, //родительский узел DOM
	Content: "Изменить режим отображения", //подпись
	Click: PP.Delegate(onClickSetHorizontal)
});
function onClickSetHorizontal(){
	//Получаем компонент для управления расположением представлений рабочей книги
	var modeSelector = wbkDataBox.getModeSelectorView();
	//Получаем метаданные изменения выбранного режима
	var pos;
	if (wbk.getActiveSheet().getMetadata().windowsPosition == "Horizontal")
		{
			pos = modeSelector.getModeSelectorState(PP.TS.Ui.ModeSelectorType.Vertical);
		}
	else
		{
			pos = modeSelector.getModeSelectorState(PP.TS.Ui.ModeSelectorType.Horizontal);
		}
	//Получаем метаданные рабочей книги
	var md = wbk.getMetadata();
	//Устанавливаем метаданные изменения выбранного режима в метаданные рабочей книги
	for (var prop in pos){
		md[prop] = pos[prop];
	}
	//Обновляем рабочую  книгу
	tsService.refreshWbk(wbk, PP.Delegate(function(){
		wbkDataBox.refreshAll();
	}));
}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Изменить режим отображения». При нажатии на кнопку будет изменен режим отображения рабочей книги.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
