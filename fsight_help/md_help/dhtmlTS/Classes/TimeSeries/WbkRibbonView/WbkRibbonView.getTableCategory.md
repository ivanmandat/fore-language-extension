# WbkRibbonView.getTableCategory

WbkRibbonView.getTableCategory
-


# WbkRibbonView.getTableCategory


## Синтаксис


getTableCategory ();


## Описание


Метод getTableCategory  возвращает вкладку «Таблица» на ленте инструментов рабочей книги.


## Комментарии


Метод возвращает объект класса [WbkRibbon](../WbkRibbon/WbkRibbon.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Получаем вкладку «Таблица» на ленте инструментов рабочей книги
var tableCategory = ribbonView.getTableCategory();
var tableCategoryButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Таблица", //Подпись
Click: PP.Delegate(onClickTableCategory)
});
var state = false;
function onClickTableCategory()
{
//Отображаем/скрываем вкладку «Таблица» на ленте инструментов рабочей книги
state ?  tableCategory.hide() :  tableCategory.show();
state = !state;
}

После выполнения примера на странице будет размещена кнопка «Таблица», при нажатии на которую будет скрываться/отображаться вкладка «Таблица» на ленте инструментов рабочей книги.


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
