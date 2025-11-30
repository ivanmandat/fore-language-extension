# ITabTableStyle.Name

ITabTableStyle.Name
-


# ITabTableStyle.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 стиля оформления.


## Комментарии


В качестве значения можно указать любое наименование, которое будет
 отражать назначение стиля.


При работе со стилем, который получен для таблицы какого-либо инструмента
 продукта «Форсайт. Аналитическая платформа»
 (аналитические запросы, регламентные отчеты и другие), не допустимо использовать
 наименование «Not applied». Данное
 значение зарезервировано для внутреннего использования.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Range: ITabRange;

    TSheet: ITabSheet;

    TableStyles: ITabTableStyles;

    TableStyle: ITabTableStyle;

    s: String;

Begin

    TSheet := UiTabSheet1.TabSheet;

    Range := TSheet.View.Selection.Range;

    TableStyles := Range.TableStyles;

    TableStyle := TableStyles.Add;

    s := TableStyle.Name;

End Sub Button1OnClick;


В результате выполнения примера в переменной s
 будет храниться наименование стиля оформления.


См. также:


[ITabTableStyle](ITabTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
