# IRubricatorInstance.CreateFiltrationMatrix

IRubricatorInstance.CreateFiltrationMatrix
-


# IRubricatorInstance.CreateFiltrationMatrix


## Синтаксис


CreateFiltrationMatrix (Selections: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm);


## Параметры


Selections. Комплексная отметка
 справочника.


## Описание


Метод CreateFiltrationMatrix
 создает матрицу отфильтрованных данных.


## Комментарии


Данный метод позволяет получить информацию о наличии данных в базе данных
 временных рядов.


## Пример


Для выполнения примера в репозитории необходимо наличие базы данных
 временных рядов с идентификатором TSDB.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 Rds.


	Function CreateRubricatorSelectionSet(facts: IMetaDictionary): IDimSelectionSet;

	Var

	    Result: IDimSelectionSet;

	    Factory: IDimSelectionSetFactory;

	    Attribute: IMetaAttribute;

	Begin

	    Factory := New DimSelectionSetFactory.Create As IDImSelectionSetFactory;

	    Result := Factory.CreateDimSelectionSet;

	    For Each Attribute In Facts.Attributes Do

	        If (Attribute.ValuesObject <> Null) And (Attribute.Nullable = False) Then

	            Result.Add((Attribute.ValuesObject.Open(Null) As IDimInstance));

	            Result.Item(Result.Count - 1).SelectAll;

	        End If;

	    End For;

	    Return Result;

	End Function CreateRubricatorSelectionSet;

	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Object: IMetabaseObjectDescriptor;

	    Rubricator: IRubricatorInstance;

	    Selections: IDimSelectionSet;

	    FiltMat: IMatrix;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим базу данных временных рядов

	    Object := Metabase.ItemById("TSDB");

	    Rubricator := Object.Open(Null) As IRubricatorInstance;

	    // Получим матрицу отфильтрованных данных

	    Selections := CreateRubricatorSelectionSet(Rubricator.Rubricator.Facts);

	    FiltMat := Rubricator.CreateFiltrationMatrix(Selections) As IMatrix;

	    // Выведем в окно консоли количество измерений в матрице

	    Debug.WriteLine("Количество измерений в матрице: " + FiltMat.DimensionCount.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли выведется количество измерений,
 входящих в матрицу отфильтрованных данных.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
