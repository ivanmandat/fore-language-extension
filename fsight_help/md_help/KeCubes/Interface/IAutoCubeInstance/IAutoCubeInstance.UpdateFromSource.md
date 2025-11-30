# IAutoCubeInstance.UpdateFromSource

IAutoCubeInstance.UpdateFromSource
-


# IAutoCubeInstance.UpdateFromSource


## Синтаксис


UpdateFromSource(


Selection: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm);


[Options: [AutoCubeUpdateOption](../../Enums/AutoCubeUpdateOption.htm)
 = 0;]


[SourceParams: [IMetabaseObjectParamValues](kesom.chm::/interface/imetabaseobjectparamvalues/imetabaseobjectparamvalues.htm)
 = Null]);


## Параметры


Selection. Отметка элементов,
 данные которых необходимо обновить.


Options. Параметр, определяющий
 способ обновления данных.


SourceParams. Значение параметров,
 с которыми будет открываться куб-источник при обновлении. Актуально, если
 куб-источник имеет какие-либо параметры.


## Описание


Метод UpdateFromSource осуществляет
 обновление данных в автоматическом кубе из куба-источника, в соответствии
 с установленными параметрами.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором Model_Space. В контейнере имеется переменная
 Var_1, настроенная на загрузку данных из источника. Источник имеет один
 параметр, принимающий на вход вещественные числа.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj, CubeSource: IMetabaseObject;

	    ParamV: IMetabaseObjectParamValues;

	    MsVar: IMsVariable;

	    Cube: IAutoCube;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    DimSS: IDimSelectionSet;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Var_1", MB.ItemById("Model_Space").Key).Edit;

	    MsVar := MObj As IMsVariable;

	    //Получаем куб переменной

	    Cube := MsVar.Cube;

	    //Получаем параметры куба-источника

	    CubeSource := (Cube.Source.Cube.Cube As IMetabaseObject).Bind;

	    ParamV := CubeSource.ParamValues;

	    ParamV.Item(0).Value := 3.5;

	    CubeInst := (Cube As IMetabaseObject).Open(Null) As ICubeInstance;

	    Dest := CubeInst.Destinations.DefaultDestination;

	    //Формируем отметку у куба

	    DimSS := Dest.CreateDimSelectionSet;

	    //Отмечаем все элементы

	    DimSS.Item(0).SelectAll;

	    DimSS.Item(1).SelectAll;

	    //Загружаем данные

	    ((Cube As IMetabaseObject).Open(Null) As IAutoCubeInstance).UpdateFromSource(DimSS,

	    AutoCubeUpdateOption.None, ParamV);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменную моделирования
 будут загружены данные из установленного для нее источника данных. Данные
 будут загружаться в соответствии с установленной отметкой. В качестве
 значения для параметра источника данных будет передаваться число 3.5.


См. также:


[IAutoCubeInstance](IAutoCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
