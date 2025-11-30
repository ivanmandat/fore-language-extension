# ICalendarDimension.LevelInUse

ICalendarDimension.LevelInUse
-


# ICalendarDimension.LevelInUse


## Синтаксис


LevelInUse(LevelIndex: Integer): Boolean;


## Параметры


LevelIndex — индекс уровня. Для получения индекса уровня используется свойство [LevelIndex](ICalendarDimension.LevelIndex.htm).


## Описание


Свойство LevelInUse определяет, используется ли уровень, индекс которого передается посредством параметра LevelIndex, при построении справочника, в зависимости от используемой иерархии справочника.


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
