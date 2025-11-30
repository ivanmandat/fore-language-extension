# WbkDocument.OpenRub

WbkDocument.OpenRub
-


# WbkDocument.OpenRub


## Синтаксис


OpenRub: Object;


## Описание


Свойство OpenRub определяет базу данных временных рядов.


## Комментарии


База данных временных рядов определяется, если сразу открыт каталог. Если каталог сразу не был открыт, возвращается null.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и базы данных временных рядов с ключом 112. В обработчике события открытия документа необходимо добавить следующий код:


	var createWbkFromRubButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Создать книгу", //Текст
		Click: PP.Delegate(onClickCreateWbkFromRub)
	});

	function onClickCreateWbkFromRub(){
		//Создаём рабочую книгу из базы данных временных рядов и открываем её
		tsService.createWbkFromRub(112, PP.Delegate(onResponse));
	}

	function onResponse(sender, args){
		var wbk = args.Workbook;
		//Получаем базу данных временных рядов
		var openRub = wbk.getOpenRub();
		alert("Имя базы данных временных рядов : " + openRub.meta.obInst.obDesc.n);
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Создать книгу». По нажатию на кнопку из базы данных временных рядов будет создана и открыта рабочая книга. Также, в соответствующем сообщении будет выведено имя полученной базы данных временных рядов.


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
