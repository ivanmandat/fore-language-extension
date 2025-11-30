# ICubeCacheSaver.SaveCache

ICubeCacheSaver.SaveCache
-


# ICubeCacheSaver.SaveCache


## Синтаксис


SaveCache(


DestKey: Integer;


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


Selections: [IDimSelectionSet](KeDims.chm::/Interface/IDimSelectionSet/IDimSelectionSet.htm);


Value: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm));


## Параметры


DestKey. Ключ необходимого
 варианта отображения куба.


ParamValues. Параметры указанного
 объекта кеширования.


Selections. Коллекция отметок
 в указанном варианте отображения куба.


Value. Матрица значений куба.


## Описание


Метод SaveCache выполняет сохранение
 кеша для заданного [варианта
 отображения](../ICubeModelDestination/ICubeModelDestination.htm) куба по заданным параметрам.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 с идентификатором DB и куба с идентификатором D_SEP.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    CacheSaver: ICubeCacheSaver;

	    CrInfo: IMetabaseObjectCreateInfo;

	    CubIn: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    SelSet: IDimSelectionSet;

	    i: Integer;

	    Sel: IDimSelection;

	    Mat: IMatrix;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("D_SEP");

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER;

	    CrInfo.Parent := MObj;

	    CrInfo.Permanent := True;

	    CacheSaver := MB.CreateObject(CrInfo).Edit As ICubeCacheSaver;

	    CacheSaver.Database := MB.ItemById("DB").Bind As IDatabase;

	    (CacheSaver As IMetabaseObject).Save;

	    CubIn := MObj.Open(Null) As ICubeInstance;

	    Dest := CubIn.Destinations.DefaultDestination;

	    SelSet := Dest.CreateDimSelectionSet;

	    For Each Sel In SelSet Do

	        Sel.SelectAll;

	    End For;

	    Mat := Dest.Execute(SelSet);

	    CacheSaver.SaveCache(Dest.Key, Null, SelSet, Mat);

	End Sub UserProc;


После выполнения примера будет в указанной базе данных будет создано
 хранилище кеша для куба.


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
