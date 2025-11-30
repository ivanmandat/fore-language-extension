# WorkbookView.refresh

WorkbookView.refresh
-


# WorkbookView.refresh


## Синтаксис


refresh (args);


## Параметры


args. Параметр, определяющий что нужно обновить.


## Описание


Метод refresh обновляет компонент в соответствии с метаданными.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


console.log("Обновляем компонент в соответствии с метаданными");
workbookBox.refresh();

После выполнения примера компонент в соответствии с метаданными будет обновлен.


См. также:


[WorkbookView](WorkbookView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
