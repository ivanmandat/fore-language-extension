# ICubeCacheUpdateScheduledTask.SetSelection

ICubeCacheUpdateScheduledTask.SetSelection
-


# ICubeCacheUpdateScheduledTask.SetSelection


## Синтаксис


SetSelection(Value: [IDimSelectionSet](kedims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Value. Отметка куба, в соответствии
 с которой будет осуществляться обновление кеша данных.


## Описание


Метод SetSelection осуществляет
 установку отметки, в соответствии с которой будет выполняться обновление
 кеша данных для куба при выполнении задачи.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 CUBE_ID со включенной возможностью кеширования данных, а также контейнера
 запланированных задач с идентификатором SCHEDULED_TASK_CONTAINER.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    ScheduledTask: ICubeCacheUpdateScheduledTask;

	    CrInfo: IMetabaseObjectCreateInfo;

	    CubIn: ICubeInstance;

	    CubInDes: ICubeInstanceDestination;

	    DimS: IDimSelection;

	    DimSS: IDimSelectionSet;

	    Properties: IScheduledTaskProperties;

	    Period: IScheduledTaskPeriodMonthly;

	    i: Integer;

	Begin

	    Metabase := MetabaseClass.Active;

	    CrInfo := Metabase.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_TASK_UPDATE_CUBE_CACHE;

	    CrInfo.Parent := Metabase.ItemById("SCHEDULED_TASK_CONTAINER");

	    ScheduledTask := Metabase.CreateObject(CrInfo).Edit As ICubeCacheUpdateScheduledTask;

	    CubIn := Metabase.ItemById("CUBE_ID").Open(Null) As ICubeInstance;

	    CubInDes := CubIn.Destinations.DefaultDestination;

	    DimSS := CubInDes.CreateDimSelectionSet;

	    For Each DimS In DimSS Do

	        DimS.SelectAll;

	    End For;

	    ScheduledTask.SourceCube := CubIn.Cube;

	    ScheduledTask.DestKey := CubInDes.Key;

	    ScheduledTask.SetSelection(DimSS);

	    //Устанавливаем период
	 выполнения задачи

	    Properties := ScheduledTask.Properties;

	    Period := Properties.CreatePeriod(ScheduledTaskPeriodType.Monthly) As IScheduledTaskPeriodMonthly;

	    Period.DayOfWeek := CalendarDayOfWeek.Monday;

	    Period.WeekOfMonth := CalendarWeekOfMonth.Third;

	    For i := 1 To 12 Do

	        Period.Months(i As CalendarMonth) := True;

	    End For;

	    Period.StartTime := DateTime.ComposeTimeOfDay(12, 0, 0, 0);

	    Properties.Period := Period;

	    (ScheduledTask As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 запланированная задача обновления кеша для куба по указанному [варианту
 отображения](../ICubeModelDestination/ICubeModelDestination.htm) и заданной отметке. Задача будет выполняться ежемесячно
 в понедельник третьей недели месяца в 12:00.


См. также:


[ICubeCacheUpdateScheduledTask](ICubeCacheUpdateScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
