# TSService.getDateToStr

TSService.getDateToStr
-


# TSService.getDateToStr


## Синтаксис


getDateToStr (date);


## Параметры


date. Задает значение даты.


## Описание


Метод getDateToStr преобразует дату в строку и возвращает ее.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике открытия документа добавить следующий код:


	var changeAlertDateButt = new PP.Ui.Button(
	{
		ParentNode: document.body, //родительский узел DOM
		Content: "Получить дату", //подпись
		Click: PP.Delegate(onClickAlertDate)
	});

	function onClickAlertDate()
	{
		//Создаем новый объект даты
		var date = new Date();
		//Преобразовываем дату в строку
		var stringDate = tsService.getDateToStr(date);
		alert(stringDate);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить дату». После нажатия будет выведена текущая дата, имеющая строковый формат


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
