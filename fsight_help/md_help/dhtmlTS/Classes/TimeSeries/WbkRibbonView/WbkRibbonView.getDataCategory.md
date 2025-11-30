# WbkRibbonView.getDataCategory

WbkRibbonView.getDataCategory
-


# WbkRibbonView.getDataCategory


## Синтаксис


getDataCategory ();


## Описание


Метод getDataCategory возвращает вкладку «Данные» на ленте инструментов рабочей книги.


## Комментарии


Метод возвращает объект класса [WbkRibbon](../WbkRibbon/WbkRibbon.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();

//Получаем вкладку «Данные» на ленте инструментов рабочей книги
var dataCategory = ribbonView.getDataCategory();

var dataCategoryButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Данные", //Подпись
Click: PP.Delegate(onClickDataCategory)
});
var state = false;

function onClickDataCategory()
{
//Отображаем/скрываем вкладку «Данные» на ленте инструментов рабочей книги
state ? dataCategory.hide() : dataCategory.show();
state = !state;
}

После выполнения примера получим возможность скрыть/отобразить вкладку «Данные» на ленте инструментов временных рядов.


Для получения вкладки нужно нажать на кнопку «Данные», которая находится под боковой панелью.


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
