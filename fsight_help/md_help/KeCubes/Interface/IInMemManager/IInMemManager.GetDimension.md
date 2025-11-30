# IInMemManager.GetDimension

IInMemManager.GetDimension
-


# IInMemManager.GetDimension


## Синтаксис


		GetDimension(DimensionObj: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)):
		 [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Параметры


DimensionObj.
 Справочник репозитория.


## Описание


Метод GetDimension возвращает
 данные указанного справочника из кеша.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_FACTS».


Добавьте ссылки на системные сборки: Cubes, Dimensions. Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MObj: IMetabaseObject;

		    InMem: IInMemManager;

		    DimInst: IDimInstance;

		Begin

		    Mb := MetabaseClass.Active;

		    MObj := Mb.ItemById("D_FACTS").Bind;

		    InMem := New InMemManager.Create;

		    If InMem.CheckHasDimension(MObj) Then

		        DimInst := InMem.GetDimension(MObj);

		        Debug.WriteLine("Количество элементов: " + DimInst.Elements.Count.ToString);

		    End If;

		End Sub UserProc;


При выполнении примера будет осуществлена проверка на наличие в кеше
 данных указанного справочника. Если данные в кеше имеются, то в консоль
 среды разработки будет выведено количество кешированных элементов справочника.


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
