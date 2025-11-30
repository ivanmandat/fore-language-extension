# ITabView.DisplayNumericColumnNames

ITabView.DisplayNumericColumnNames
-


# ITabView.DisplayNumericColumnNames


## Синтаксис


DisplayNumericColumnNames: Boolean;


## Описание


Свойство DisplayNumericColumnNames
 определяет, будут ли имена столбцов таблицы представлены числами.


## Комментарии


По умолчанию свойство находится в значении False.


Если свойство в значении False,
 то имена столбцов представлены буквами. При визуальном конструировании
 формул будет использоваться стиль адресации ячеек А1.


Если свойство в значении True,
 то имена столбцов представлены числами. При визуальном конструировании
 формул будет использоваться стиль адресации ячеек R1C1.


## Пример


Для выполнения примера предполагается наличие на форме компонента Button с наименованием "Button1",
 компонента UiTabSheet с наименованием
 "UiTabSheet1". UiTabSheet1 должен быть указан в качестве источника
 для компонента TabSheetBox. Должна
 быть указана ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    View: ITabView;

    Tabsheet: ITabsheet;

Begin

    View := UiTabSheet1.TabSheet.View;

    View.DisplayNumericColumnNames := True;

End Sub Button1OnClick;


После выполнения примера имена столбцов таблицы будут представлены числами.
 Адреса ячеек используемых в формулах будут представлены в стиле R1C1.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
