# WbkRibbonView.getFormulasCategory

WbkRibbonView.getFormulasCategory
-


# WbkRibbonView.getFormulasCategory


## Синтаксис


getFormulasCategory ();


## Описание


Метод getFormulasCategory возвращает вкладку «Вычисления» на ленте инструментов рабочей книги.


## Комментарии


Метод возвращает объект класса [WbkRibbon](../WbkRibbon/WbkRibbon.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();

//Получаем вкладку «Вычисления» на ленте инструментов рабочей книги
var formulasCategory = ribbonView.getFormulasCategory();

var formulasCategoryButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Вычисления", //Подпись
Click: PP.Delegate(onClickFormulasCategory)
});
var state = false;

function onClickFormulasCategory()
{
//Отображаем/скрываем вкладку «Вычисления» на ленте инструментов рабочей книги
state ? formulasCategory.hide() : formulasCategory.show();
state = !state;
}

После выполнения примера на странице будет размещена кнопка «Вычисления», при нажатии на которую будет скрываться/отображаться вкладка «Вычисления» на ленте инструментов временных рядов.


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
