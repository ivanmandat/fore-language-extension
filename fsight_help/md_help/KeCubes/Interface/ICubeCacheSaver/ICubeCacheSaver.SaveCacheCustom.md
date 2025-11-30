# ICubeCacheSaver.SaveCacheCustom

ICubeCacheSaver.SaveCacheCustom
-


# ICubeCacheSaver.SaveCacheCustom


## Синтаксис


SaveCacheCustom(


DestKey: Integer;


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


Selections: [IDimSelectionSet](KeDims.chm::/Interface/IDimSelectionSet/IDimSelectionSet.htm);


Value: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


CustomValue: Variant);


## Параметры


DestKey. Ключ необходимого
 варианта отображения куба.


ParamValues. Набор значений
 параметров.


Selections. Отметка измерений
 в указанном варианте отображения куба.


Value. Матрица значений куба.


CustomValue. Пользовательская
 метка для обозначения сохраняемых данных.


## Описание


Метод SaveCacheCustom выполняет
 сохранение кеша в соответствии с указанными параметрами и заданной пользовательской
 меткой.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 STD_CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc, CacheDesc: IMetabaseObjectDescriptor;

	    CacheSaver: ICubeCacheSaver;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    SelSet: IDimSelectionSet;

	    Sel: IDimSelection;

	    Matr: IMatrix;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_CUBE");

	    CacheDesc := GetCache(MDesc);

	    If CacheDesc <> Null Then

	        CacheSaver := CacheDesc.Bind As ICubeCacheSaver;

	        CubeInst := MDesc.Open(Null) As ICubeInstance;

	        Dest := CubeInst.Destinations.DefaultDestination;

	        SelSet := Dest.CreateDimSelectionSet;

	        For Each Sel In SelSet Do

	            If Sel.Dimension.Ident = "FACTS" Then

	                Sel.SelectElement(0, False);

	            Else

	                Sel.SelectAll;

	            End If;

	        End For;

	        Matr := Dest.Execute(SelSet);

	        CacheSaver.SaveCacheCustom(Dest.Key, Null, SelSet, Matr, "Date Save: " + DateTime.Today.ToString);

	    End If;

	End Sub UserProc;


	Function GetCache(MObj: IMetabaseObjectDescriptor): IMetabaseObjectDescriptor;

	Var

	    Desc: IMetabaseObjectDescriptor;

	Begin

	    For Each Desc In MObj.Children Do

	        If Desc.ClassId = MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER Then

	            Return Desc;

	        End If;

	    End For;

	    Return Null;

	End Function GetCache;


При выполнении примера будет произведён расчёт куба по сформированной
 отметке. После расчёта полученная матрица с данными будет сохранена в
 кеш.


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
