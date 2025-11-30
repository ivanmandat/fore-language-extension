# WorkbookView.NeedRevisions

WorkbookView.NeedRevisions
-


# WorkbookView.NeedRevisions


## Синтаксис


NeedRevisions: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие NeedRevisions наступает при запросе ревизий.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


workbookBox.NeedRevisions.add(onDummyActionFactory("Произошло событие запроса ревизий"));

После выполнения примера при открытии вкладки «Данные» панели свойств будет сгенерировано событие WorkbookView.NeedRevisions, а в консоль браузера будет выведено соответствующее сообщение ревизий.


См. также:


[WorkbookView](WorkbookView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
