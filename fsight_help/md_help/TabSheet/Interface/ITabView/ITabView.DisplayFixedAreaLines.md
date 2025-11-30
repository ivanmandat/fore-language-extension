# ITabView.DisplayFixedAreaLines

ITabView.DisplayFixedAreaLines
-


# ITabView.DisplayFixedAreaLines


## Синтаксис


DisplayFixedAreaLines: Boolean;


## Описание


Свойство DisplayFixedAreaLines
 позволяет изменять видимость линий фиксированной области.


## Комментарии


По умолчанию значение данного свойства True.


Для определения цвета линии используется свойство [ITabView.FixedAreaLinesColor](ITabView.FixedAreaLinesColor.htm).


## Пример


Предполагается наличие формы, расположенной на ней кнопки с наименованием
 «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием «UiTabSheet1»,
 который является источником данных для компонента TabSheetBox. Для выполнения
 примера добавьте ссылку на системную сборку «Drawing» и обработчик события
 Button1OnClick.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.View.FixedRowsCount := 2;

	    UiTabSheet1.TabSheet.View.DisplayFixedAreaLines := True;

	    UiTabSheet1.TabSheet.View.FixedAreaLinesColor := GxColor.FromName("Red");

	End Sub Button1OnClick;


После выполнения примера будет создана фиксированная область - первые
 2 строки таблицы, линии фиксированной области будут отображаться красным
 цветом.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
