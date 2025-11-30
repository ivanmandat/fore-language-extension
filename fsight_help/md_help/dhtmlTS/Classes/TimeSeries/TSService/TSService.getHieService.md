# TSService.getHieService

TSService.getHieService
-


# TSService.getHieService


## Синтаксис


getHieService ();


## Описание


Метод getHieService возвращает сервис для работы с иерархией рядов рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	//Возвращаем сервис для работы с иерархией рядов рабочей книги
	var hieService = tsService.getHieService();
	//Проверяем наличие свойства _Metabase
	alert(!!hieService._Metabase);

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm), возвращен сервис для работы с иерархией рядов и выведено сообщение с результатом проверки наличия свойства Metabase.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
