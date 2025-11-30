# IListView.HighlightTrack

IListView.HighlightTrack
-


# IListView.HighlightTrack


## Синтаксис


HighlightTrack: Boolean;


## Описание


Свойство HighlightTrack определяет, подсвечивать ли элемент при наведении указателя мыши.


## Комментарии


Допустимые значения:


-
True. Значение по умолчанию. При наведении указателя мыши элемент подсвечивается;


-
False. При наведении указателя мыши элемент не подсвечивается.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент ListView с идентификатором ListView1. Компонент должен содержать несколько столбцов и элементов.


			Sub ShowProc;

Begin

    ListView1.Style := ListViewStyle.Report;

    ListView1.ShowColumnHeaders := True;

    ListView1.ShowHeaderButton := True;

    ListView1.HighlightTrack := False;

End Sub ShowProc;


Результат выполнения примера: в компоненте ListView1 будут отображены заголовки столбцов и кнопка для вызова их меню; отключена подсветка элементов при наведении на них мыши.


См. также:


[IListView](IListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
