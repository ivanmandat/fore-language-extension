# TSService.changeRubricator

TSService.changeRubricator
-


# TSService.changeRubricator


## Синтаксис


changeRubricator (wbk, meta, userCallback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


meta. Задает метаданные с настройками каталога показателей;


userCallback. Задает обработчик окончания выполнения операции.


## Описание


Метод changeRubricator изменяет базу данных временных рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо наличие в репозитории базы данных временных рядов с наименованием «Мировые показатели» и ключом 316903, а в обработчике события открытия документа необходимо добавить следующий код:


var addSerieButton = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Сменить рабочую книгу", //Подпись
	Click: PP.Delegate(onClickAddSerie)
});
function onClickAddSerie()
	{
		var updateData = [PP.TS.Ui.ViewTypeUpdate.MetaAttributeBreadcrumb, PP.TS.Ui.ViewTypeUpdate.PropertyBar];
		//Создаем объект, который  представляет собой аргументы события, вызываемого после изменения значения свойства
		var propArgs = new PP.Mb.Ui.PropertyChangedEventArgs({
			PropertyName: PP.TS.Ui.ControlType.ChangeRubricator,
			Metadata: {IsCube: false, Key: 316903, NodeText: "Мировые показатели", Rubrs: undefined},
			TypeUpdateData: updateData
	});
	//Получаем информацию о новой базе данных
	var meta  = propArgs.getMetadata();
	tsService.changeRubricator(wbk, meta, PP.Delegate(onRubricatorChanged));
	function onRubricatorChanged(sender, args)
		{
			//Обновляем указанные элементы базы данных
			workbookBox.getDataView().refresh(propArgs);
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Сменить рабочую книгу». При нажатии на кнопку в навигационной цепочке изменится надпись названия источника. Так же изменится содержимое дерева рядов, а в его вершинах будут отображены ряды, принадлежащие новой базе данных временных рядов.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
