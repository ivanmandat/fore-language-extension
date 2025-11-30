# WbkRibbonView.getViewCategory

WbkRibbonView.getViewCategory
-


# WbkRibbonView.getViewCategory


## Синтаксис


getViewCategory ();


## Описание


Метод getViewCategory возвращает
 вкладку «Вид» на ленте инструментов рабочей книги.


## Комментарии


Метод возвращает объект класса [WbkRibbon](../WbkRibbon/WbkRibbon.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Получаем вкладку «Вид» на ленте инструментов рабочей книги
var viewCategory = ribbonView.getViewCategory();
var viewCategoryButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Вид", //Подпись
Click: PP.Delegate(onClickViewCategory)
});
var state = false;
function onClickViewCategory()
{
//Делаем видимой/скрываем вкладку «Вид» на ленте инструментов рабочей книги
state ?  viewCategory.hide() :  viewCategory.show();
state = !state;
}

После выполнения примера на странице будет размещена кнопка «Вид», при
 нажатии на которую будет скрываться/отображаться вкладка ленты «Вид».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
