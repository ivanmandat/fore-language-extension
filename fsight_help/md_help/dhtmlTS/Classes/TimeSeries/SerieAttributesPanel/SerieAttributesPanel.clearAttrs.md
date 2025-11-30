# SerieAttributesPanel.clearAttrs

SerieAttributesPanel.clearAttrs
-


# SerieAttributesPanel.clearAttrs


## Синтаксис


clearAttrs ();


## Описание


Метод clearAttrs удаляет список
 рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


//Получаем панель для редактирования значений атрибутов выделенных рядов
var serieAttributesPanel = workbookBox.getPropertyBarView().getSerieAttributesPanel();
var clearAttrsButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Clear Attrs", //Подпись
Click: PP.Delegate(onClickClearAttrs)
});
function onClickClearAttrs()
{
	//Выводим количество свойств в списке рядов до очистки
	alert(attrCount());
	//Удаляем список рядов
	serieAttributesPanel.clearAttrs();
	//Выводим количество свойств в списке рядов после очистки
	alert(attrCount());
}
function attrCount(){
var controls = serieAttributesPanel._Controls;
var controlsCount = null;
for (var key in controls){
controlsCount++;
}
return controlsCount;
}

После выполнения примера на экран будет выведено количество выделенных
 и удаленных рядов дерева атрибутов временных рядов.


См. также:


[SerieAttributesPanel](SerieAttributesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
