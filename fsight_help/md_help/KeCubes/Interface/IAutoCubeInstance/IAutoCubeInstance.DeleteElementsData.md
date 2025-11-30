# IAutoCubeInstance.DeleteElementsData

IAutoCubeInstance.DeleteElementsData
-


# IAutoCubeInstance.DeleteElementsData


## Синтаксис


DeleteElementsData(Selection: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm));


## Параметры


Selection. Отметка элементов,
 значения которых необходимо удалить.


## Описание


Метод DeleteElementsData осуществляет
 удаление данных в элементах, отметка которых передается посредством параметра
 Selection.


## Пример


Для выполнения примера предполагается наличие автоматического куба с
 идентификатором AUTO_CUBE. В кубе имеется два измерения.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    DimSS: IDimSelectionSet;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("AUTO_CUBE").Open(Null) As ICubeInstance;

	    DimSS := CubeInst.Destinations.DefaultDestination.CreateDimSelectionSet;

	    DimSS.Item(1).SelectElement(1, False);

	    DimSS.Item(0).SelectElement(0, False);

	    (CubeInst As IAutoCubeInstance).DeleteElementsData(DimSS);

	End Sub UserProc;


После выполнения примера в соответствии с полученной отметкой будут
 удалены данные из автоматического куба.


См. также:


[IAutoCubeInstance](IAutoCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
