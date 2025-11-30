# WorkbookView.PropertyChanged

WorkbookView.PropertyChanged
-


# WorkbookView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanged наступает при изменении свойств [ленты инструментов](../../../Components/TimeSeries/WbkRibbon/WbkRibbon.htm) или [панели свойств](../../../Components/TimeSeries/WbkPropertyBar/WbkPropertyBar.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


workbookBox.PropertyChanged.add(onDummyActionFactory("Произошло событие изменения свойств в ленте инструментов или панели свойств"));

Для генерации события необходимо в рабочей книге выделить ряд, формула которого «Линейная регрессия». Чтобы добавить такой ряд в рабочую книгу необходимо выделить два невычисляемых ряда, затем на группе «Регрессия» вкладки «Вычисления» выбрать пункт «Линейная регрессия». Затем на вкладке панели свойств «Ряд» раскрыть панель «Параметры», установить флажок «Авторегрессия», после чего, на вкладке ленты инструментов «Главная» нажать на кнопку «Обновить». В открывшмся окне нажать на кнопку «Да», в результате чего в консоль будет выведено сообщение о наступлении события PropertyChanged.


См. также:


[WorkbookView](WorkbookView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
