# ICubeCacheUpdateScheduledTask.LoadSelection

ICubeCacheUpdateScheduledTask.LoadSelection
-


# ICubeCacheUpdateScheduledTask.LoadSelection


## Синтаксис


LoadSelection(Value: [IDimSelectionSet](kedims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IDimSelectionSet](kedims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Параметры


Value. Пустая отметка куба-источника,
 в которую будет загружена отметка, в соответствии с которой будет осуществляться
 обновление кеша данных.


## Описание


Метод LoadSelection копирует
 отметку, в соответствии с которой осуществляется обновление кеша данных.


## Пример


Для выполнения примера понадобится запланированная задача обновления
 кеша для вычисляемого куба. Задача имеет идентификатор SCHEDULED_TASK
 и в ней задана отметка, по которой следует обновлять кеш куба.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    CubeIns: ICubeInstance;

	    CubInDes: ICubeInstanceDestination;

	    MObj: IMetabaseObject;

	    ScheduledTask: ICubeCacheUpdateScheduledTask;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	Begin

	    Metabase := MetabaseClass.Active;

	    MObj := Metabase.ItemById("SCHEDULED_TASK").Edit;

	    ScheduledTask := MObj As ICubeCacheUpdateScheduledTask;

	    CubeIns := (ScheduledTask.SourceCube As IMetabaseObject).Open(Null) As ICubeInstance;

	    CubInDes := CubeIns.Destinations.FindByKey(ScheduledTask.DestKey);

	    DimSS := CubInDes.CreateDimSelectionSet;

	    //Копирование отметки, уже установленной для задачи

	    DimSS := ScheduledTask.LoadSelection(DimSS);

	    //Изменение отметки

	    For Each DimS In DimSS Do

	    DimS.InvertAll;

	    End For;

	    //Установка новой отметки

	    ScheduledTask.SetSelection(DimSS);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера из запланированной задачи будет загружена уже
 заданная отметка и будет изменена на новую, обратную прежней.


См. также:


[ICubeCacheUpdateScheduledTask](ICubeCacheUpdateScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
