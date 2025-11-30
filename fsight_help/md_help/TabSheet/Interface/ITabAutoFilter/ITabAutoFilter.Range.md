# ITabAutoFilter.Range

ITabAutoFilter.Range
-


# ITabAutoFilter.Range


## Синтаксис


Range: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство Range определяет область
 таблицы, в которой будет установлен автофильтр.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней кнопок с наименованиями «Button1»,
 «Button2», «Button3»,
 «Button4», компонента
 TabSheetBox и компонента UiTabSheet с наименованием «UiTabSheet1»,
 который является источником данных для компонента TabSheetBox.


	Class OBJ3592Form: Form

	    Button1: Button;

	    Button2: Button;

	    Button3: Button;

	    Button4: Button;

	    TabSheetBox1: TabSheetBox;

	    UiTabSheet1: UiTabSheet;

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    AutoFilter: ITabAutoFilter;

	    Stream: IIOStream;

	Sub OBJ3592FormOnCreate(Sender: Object; Args: IEventArgs);

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange:= TSheet.View.Selection.Range;

	    AutoFilter := TSheet.View.AutoFilter;

	    Stream := New MemoryStream.Create;

	End Sub OBJ3592FormOnCreate;

	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    // Включение автофильтра

	    AutoFilter.Range := TRange;

	    AutoFilter.Enabled := True;

	End Sub Button1OnClick;

	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	//Сохранение

	    AutoFilter.Save(stream);

	End Sub Button2OnClick;

	Sub Button3OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	// Восстановление

	    Stream.Position := 0;

	    AutoFilter.Load(stream);

	End Sub Button3OnClick;

	Sub Button4OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    // Очистка фильтра

	    AutoFilter.Enabled := False;

	End Sub Button4OnClick;

	End Class OBJ3592Form;


Для выполнения примера


	- Выделите диапазон и нажмите Button1 для включения автофильтра.


	- Нажмите Button2 для сохранения автофильтра.


	- Нажмите Button4 для очистки автофильтра.


	- Нажмите Button3 для восстановления автофильтра.


См. также:


[ITabAutoFilter](ITabAutoFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
