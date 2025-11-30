# WbkRibbonView.getTitleView

WbkRibbonView.getTitleView
-


# WbkRibbonView.getTitleView


## Синтаксис


getTitleView ();


## Описание


Метод getTitleView возвращает
 заголовок рабочей книги.


## Комментарии


Метод возвращает объект класса PP.Exp.Ui.[EaxTitleView](dhtmlExpress.chm::/Classes/Express/TitleBox/TitleBox.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Получаем заголовок на ленте инструментов рабочей книги
var titleView = ribbonView.getTitleView();
var tableViewButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Заголовок", //Подпись
Click: PP.Delegate(onClickTitleView)
});
var state = false;
function onClickTitleView()
{
//Делаем видимым/скрываем заголовок на ленте инструментов рабочей книги
state ?  titleView.hide() :  titleView.show();
state = !state;
}

После выполнения примера на странице будет размещена кнопка «Заголовок»,
 при нажатии на которую будет скрываться/отображаться заголовок рабочей
 книги.


Примечание.
 Заголовок будет отображаться в том случае, если нажата кнопка «Заголовок»
 на вкладке ленты «Главная».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
