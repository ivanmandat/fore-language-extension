# Workbook.Permanent

Workbook.Permanent
-


# Workbook.Permanent


## Синтаксис


Permanent: Boolean;


## Описание


Свойство Permanent определяет признак того, что рабочая книга сохранена в репозитории.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а в обработчике открытия документа необходимо добавить следующий код:


	var messageString;
	//Получаем значение признака того, что книга сохранена в репозитории
	var permanent = wbk.getPermanent();
	//Выводим на экран информацию о наличии рабочей книги в репозитории
	permanent?(messageString="Рабочая книга сохранена в репозитории"):(messageString="Рабочая книга не сохранена в репозитории");
	alert(messageString);
	var createWbkFromRubButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Создать книгу", //Подпись
		Click: PP.Delegate(onClickCreateWbkFromRub)
	});
	function onClickCreateWbkFromRub(){
		//Получаем ключ базы данных временных рядов
		var rubKey = wbk.getActiveSheet().getRub().meta.obInst.obDesc.k;
		//Создаём рабочую книгу из каталога показателей и открываем её
		tsService.createWbkFromRub(rubKey, PP.Delegate(onResponse));
	}
	function onResponse(sender, args){
		//Получаем созданную рабочую книгу
		var wbk = args.Workbook;
		//Устанавливаем созданную рабочую книгу в качестве источника компоненту workbookBox
		workbookBox.setSource(wbk);
		//Получаем значение признака того, что книга сохранена в репозитории
		permanent = wbk.getPermanent();
		//Выводим на экран информацию о наличии рабочей книги в репозитории
		permanent?(messageString="Созданная рабочая книга сохранена в репозитории"):(messageString="Созданная рабочая книга не сохранена в репозитории")
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Создать книгу», а при загрузке страницы на экран выведется информация том, что рабочая книга была сохранена в репозитории. При нажатии на кнопку «Создать книгу» будет создана новая пустая книга из базы данных временных рядов и будет установлена в качестве источника к компоненту для отображения рабочей книги. На экран выведется информация том, что рабочая книга не сохранена в репозитории.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
