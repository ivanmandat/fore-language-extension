# TSService.createWbkFromRub

TSService.createWbkFromRub
-


# TSService.createWbkFromRub


## Синтаксис


createWbkFromRub (key, userCallback, callbackAfterOpenHierarchy);


## Параметры


key. Задает ключ базы данных временных рядов;


userCallback. Задает обработчик завершения выполнения операции;


callbackAfterOpenHierarchy. Задает обработчик завершения открытия иерархии рядов в рабочей книге.


## Описание


Метод createWbkFromRub создаёт рабочую книгу из базы данных временных рядов и открывает её.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var createWbkFromRubButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Создать рабочую книгу", //Подпись
		Click: PP.Delegate(onClickCreateWbkFromRub)
	});

	function onClickCreateWbkFromRub()
	{
		//Получаем ключ базы данных временных рядов
		var key = wbk.getWbkMetadata().rubrs.def.k;
		//Создаём рабочую книгу из базы данных временных рядов и открываем её
		tsService.createWbkFromRub (key, PP.Delegate(onWbkCreatedFromRub, this));

		function onWbkCreatedFromRub(sender, args){
			//Получаем созданную рабочую книгу
			var newWorkbook = args.Workbook;
			//Присваиваем новый источник компоненту workbookBox
			workbookBox.setSource(newWorkbook);
		}
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Создать рабочую книгу». После нажатия на кнопку в репозитории будет создана и открыта новая рабочая книга.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
