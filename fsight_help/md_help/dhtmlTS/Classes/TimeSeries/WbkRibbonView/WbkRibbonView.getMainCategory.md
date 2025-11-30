# WbkRibbonView.getMainCategory

WbkRibbonView.getMainCategory
-


# WbkRibbonView.getMainCategory


## Синтаксис


getMainCategory ();


## Описание


Метод getMainCategory возвращает вкладку «Главная» на ленте инструментов рабочей книги.


## Комментарии


Метод возвращает объект класса [WbkRibbon](../WbkRibbon/WbkRibbon.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();

//Получаем вкладку «Главная» на ленте инструментов рабочей книги
var mainCategory = ribbonView.getMainCategory();

var mainCategoryButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Главная", //Подпись
Click: PP.Delegate(onClickMainCategory)
});
var state = false;
function onClickMainCategory()
{
//Отображаем/скрываем вкладку «Главная» на ленте инструментов рабочей книги.
state ?  mainCategory.hide() :  mainCategory.show();
state = !state;
}

После выполнения примера на странице будет размещена кнопка «Главная», при нажатии на которую будет скрываться/отображаться вкладка «Главная» на ленте инструментов рабочей книги.


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
