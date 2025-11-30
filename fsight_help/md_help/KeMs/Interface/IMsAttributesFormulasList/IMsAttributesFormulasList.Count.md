# IMsAttributesFormulasList.Count

IMsAttributesFormulasList.Count
-


# IMsAttributesFormulasList.Count


## Синтаксис


		Count: Integer;


## Описание


Свойство Count
 возвращает количество методов расчёта в коллекции.


## Комментарии


Ёмкость коллекции - это количество элементов, которое может содержать
 коллекция. Свойство Count
 - это количество элементов, которое в действительности содержится в коллекции.


Емкость всегда больше или равна значению свойства Count.
 Если при добавлении элементов в коллекцию значение свойства Count превышает ёмкость, то она
 автоматически увеличивается.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В контейнере моделирования
 базы содержится модель с идентификатором MODEL, содержащая методы расчета
 дополнительных атрибутов.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Rubr: IRubricator;

		    Model: IMsModel;

		    FormulasList: IMsAttributesFormulasList;

		    AttrTranfsorm: IMsFormulaTransform;

		    i: Integer;

		    StrGen: IMsTransformStringGenerator;

		Begin

		    Mb := MetabaseClass.Active;

		    Rubr := Mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

		    Model := Mb.ItemByIdNamespace("MODEL", Rubr.ModelSpace.Key).Bind As IMsModel;

		    FormulasList := Model.AttributeFormulasList;

		    For i := 0 To FormulasList.Count - 1 Do

		        AttrTranfsorm := FormulasList.Item(0);

		        StrGen := AttrTranfsorm.CreateStringGenerator;

		        Debug.WriteLine("Формула расчета атрибута: " + StrGen.Execute);

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены формулы
 расчета дополнительных атрибутов модели.


См. также:


[IMsAttributesFormulasList](IMsAttributesFormulasList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
