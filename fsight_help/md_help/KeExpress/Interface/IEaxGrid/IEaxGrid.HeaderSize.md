# IEaxGrid.HeaderSize

IEaxGrid.HeaderSize
-


# IEaxGrid.HeaderSize


## Синтаксис


HeaderSize: [IGxSize](ModDrawing.chm::/Interface/IGxSize/IGxSize.htm);


## Описание


Свойство HeaderSize возвращает
 размер заголовков таблицы.


## Комментарии


Размер заголовков определяется количеством строк в шапке и количеством
 столбцов в боковике. Для определения количества строк в шапке используйте
 свойство [IGxSize.Height](ModDrawing.chm::/Interface/IGxSize/IGxSize.Height.htm),
 количества столбцов в боковике таблицы - [IGxSize.Width](ModDrawing.chm::/Interface/IGxSize/IGxSize.Width.htm).


Размер заголовков включает в себя также размер [дополнительных
 заголовков](IEaxGrid.AdditionalHeaderSize.htm), которые формируются при включении в таблице различных
 дополнительных опций.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EAX.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    HSize: IGxSize;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EAX").Bind As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    HSize := Grid.HeaderSize;

	    i := HSize.Height;

	    j := HSize.Width;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 строк в шапке, а в «j» - количество столбцов в боковике таблицы экспресс-отчета.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
