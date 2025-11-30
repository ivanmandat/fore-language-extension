# ITabView.EnsureRowVisible

ITabView.EnsureRowVisible
-


# ITabView.EnsureRowVisible


## Синтаксис


EnsureRowVisible(Row: Integer);


## Параметры


Row. Индекс строки, которую необходимо наблюдать в видимом диапазоне таблицы.


## Описание


Метод EnsureRowVisible прокручивает таблицу таким образом, чтобы заданная строка попала в видимый диапазон.


## Пример


Для выполнения примера предполагается наличие на форме компонента Button с наименованием "Button1", компонента UiTabSheet с наименованием "UiTabSheet1". UiTabSheet1 должен быть указан в качестве источника для компонента TabSheetBox. Должна быть указана ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    View: ITabView;

Begin

    View := UiTabSheet1.TabSheet.View;

    View.EnsureRowVisible(15);

End Sub Button1OnClick;


После выполнения примера таблица будет прокручена таким образом, что строка с индексом 15 попадет в область видимого диапазона.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
