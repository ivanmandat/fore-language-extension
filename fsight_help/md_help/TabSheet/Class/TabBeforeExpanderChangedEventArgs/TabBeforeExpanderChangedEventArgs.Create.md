# TabBeforeExpanderChangedEventArgs.Create

TabBeforeExpanderChangedEventArgs.Create
-


# TabBeforeExpanderChangedEventArgs.Create


## Синтаксис


Create(Sheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);
 Row: Integer; Column: Integer; State: [TriState](ForeSys.chm::/Enums/TriState.htm);
 Cancel: Boolean);


## Параметры


Sheet. Компонент, для которого
 генерируется событие.


Row. Индекс строки, в которой
 расположен экспандер.


Column. Индекс столбца, в котором
 расположен экспандер.


State. Состояние экспандера.


Cancel. Признак запрета
 смены состояния экспандера.


## Описание


Конструктор Create создает аргумент
 события, наступающего перед изменением состояния экспандера в ячейке таблицы.


См. также:


[TabBeforeExpanderChangedEventArgs](TabBeforeExpanderChangedEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
