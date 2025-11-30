# ICalendarDimension.BlockInUse

ICalendarDimension.BlockInUse
-


# ICalendarDimension.BlockInUse


## Синтаксис


BlockInUse(LevelIndex: Integer; BlockIndex: Integer): Boolean;


## Параметры


LevelIndex — индекс уровня.


BlockIndex — индекс блока.


Таблица: Индексы блоков календарного справочника.


		 Индекс блока
		 Наименование блока


		 0
		 Корень.


		 1
		 Год.


		 2
		 Полугодие.


		 3
		 Кварталы.


		 4
		 Месяцы.


		 5
		 Дни.


		 6
		 9 месяцев.


## Описание


Свойство BlockInUse определяет, используется ли блок уровня, индекс которого передается посредством параметра BlockIndex, при построении справочника, в зависимости от используемой иерархии справочника. Свойство используется, если в справочнике установлена иерархия «1» или «2» типа. Тип иерархии устанавливается с помощью свойства [Hierarchy](ICalendarDimension.Hierarchy.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	    i, j: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim:=MObj As ICalendarDimension;

	    For i:=0 To CalDim.LevelCount-1 Do

	        j:=CalDim.LevelIndex(i);

	        CalDim.LevelInUse(j):=True;

	        If (j=6) Or (j=7) Then

	            CalDim.BlockInUse(j,2):=True;

	        End If;

	    End For;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в календарном справочнике будут включены все уровни. Если в справочнике установлена иерархия «1» или «2» типа, то в них будет включен уровень «Полугодия».


См. также:


[ICalendarDimension](ICalendarDimension.htm) | [ICalendarDimension.LevelIndex](ICalendarDimension.LevelIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
