# WbkRibbonView.setPropertyValue

WbkRibbonView.setPropertyValue
-


# WbkRibbonView.setPropertyValue


## Синтаксис


setPropertyValue (propertyName, value);


## Параметры


propertyName. Имя свойства, элемент перечисления PP.TS.Ui.[WbkPropertyViews](../../../Enums/WbkPropertyViews.htm);


value. Значение свойства.


## Описание


Метод setPropertyValue устанавливает значение свойств [ленты инструментов](../../../Components/TimeSeries/WbkRibbon/WbkRibbon.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
var setPropertyValueButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Устанавить значение свойств", //Подпись
Click: PP.Delegate(onClickSetPropertyValue)
});
var value = false;
function onClickSetPropertyValue()
{
	//Устанавливаем значение во VisibleBreadCrumb
	var propertyName = "VisibleBreadCrumb";
	ribbonView.setPropertyValue(propertyName, value);
	value = !value;
}

После выполнения примера на странице будет размещена кнопка «Устанавить значение свойств», при нажатии на которую будет изменяться состояние кнопки «Дерево рядов» на вкладке ленты «Главная».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
