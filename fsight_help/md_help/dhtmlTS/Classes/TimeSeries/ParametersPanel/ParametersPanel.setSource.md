# ParametersPanel.setSource

ParametersPanel.setSource
-


# ParametersPanel.setSource


## Синтаксис


setSource (value);


## Параметры


value. Рабочая
 книга.


## Описание


Метод setSource устанавливает
 рабочую книгу, данные которой отображаются в компоненте.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


//Получаем панель параметров в панели свойств
var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
//Создаем пустую рабочую книгу
var newWbk = new PP.TS.WbkDocument();
//Устанавливаем пустую рабочую книгу в качестве источника данных для панели параметров
parametersPanel.setSource(newWbk);
var setSourceButton = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Установить источник", //Подпись
	Click: PP.Delegate(onClickSetSource)
});
//обработчик нажатия кнопки
function onClickSetSource()
	{
		//Устанавливаем заполненную рабочую книгу в качестве источника данных для панели параметров
		parametersPanel.setSource(wbk);
		//Перерисовываем панель параметров
		parametersPanel._render();
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Установить источник». Для выполнения примера также необходимо выбрать
 вычисляемый ряд в рабочей книге, затем на вкладке панели свойств «Ряд»
 раскрыть панель «Параметры» и нажать на кнопку «Установить источник».
 После чего панель параметров будет заполнена.


См. также:


[ParametersPanel](ParametersPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
