# Workbook.getRubsOdId

Workbook.getRubsOdId
-


# Workbook.getRubsOdId


## Синтаксис


getRubsOdId (value);


## Параметры


rubKey. Задает ключ базы данных временных рядов.


## Описание


Метод getRubsOdld возвращает моникёр для базы данных временных рядов с указанным ключом.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а в обработчике открытия документа необходимо добавить следующий код:


var rubkey;
//Получаем базу данных временных рядов
tsService.WbkOpened.add(PP.Delegate(onWbkOpened));
function onWbkOpened(sender, args, q,w,e,r)
	{
		var rub = wbk.getRub();
		//Получаем ключ базы данных временных рядов
		rubkey = rub.meta.obInst.obDesc.k;
	}
var getRubsOdIdButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Вывести моникер", //Подпись
	Click: PP.Delegate(onClickGetRubsOdId)
});
function onClickGetRubsOdId(){
	alert(wbk.getRubsOdId(rubkey));
}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Вывести моникер». После нажатия на кнопку на экран будет выведено сообщение, содержащее моникёр базы данных временных рядов.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
