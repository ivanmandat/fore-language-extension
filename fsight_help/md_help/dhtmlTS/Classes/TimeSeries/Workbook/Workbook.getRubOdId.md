# Workbook.getRubOdId

Workbook.getRubOdId
-


# Workbook.getRubOdId


## Синтаксис


getRubOdId ();


## Описание


Метод getRubOdId определяет моникёр базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а в обработчике события открытия документа необходимо добавить следующий код:


var getRubOdIdButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Вывести моникер", //Текст
	Click: PP.Delegate(onClickGetRubOdId)
});
function onClickGetRubOdId(){
	alert(wbk.getRubOdId().id);
}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Вывести моникер». После нажатия на кнопку на экран будет выведено сообщение, содержащее моникёр базы данных временных рядов.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
