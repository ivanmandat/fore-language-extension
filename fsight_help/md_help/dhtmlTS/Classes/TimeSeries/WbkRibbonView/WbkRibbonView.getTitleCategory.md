# WbkRibbonView.getTitleCategory

WbkRibbonView.getTitleCategory
-


# WbkRibbonView.getTitleCategory


## Синтаксис


getTitleCategory ();


## Описание


Метод getTitleCategory возвращает вкладку «Заголовок» на ленте инструментов рабочей книги.


## Комментарии


Метод возвращает объект класса [WbkRibbon](../WbkRibbon/WbkRibbon.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Получаем вкладку «Заголовок» на ленте инструментов рабочей книги
var titleCategory = ribbonView.getTitleCategory();
var tableCategoryButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Заголовок", //Подпись
Click: PP.Delegate(onClickTitleCategory)
});
var state = false;
function onClickTitleCategory()
{
//Отображаем/скрываем вкладку «Заголовок» на ленте инструментов рабочей книги
state ?  titleCategory.hide() :  titleCategory.show();
state = !state;
}

После выполнения примера на странице будет размещена кнопка «Заголовок», при нажатии на которую будет скрываться/отображаться вкладка «Заголовок» на ленте инструментов временных рядов.


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
