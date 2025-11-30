# IMsDimIteratorFilteredDimension.UseDestDimSelection

IMsDimIteratorFilteredDimension.UseDestDimSelection
-


# IMsDimIteratorFilteredDimension.UseDestDimSelection


## Синтаксис


		UseDestDimSelection: Boolean;


## Описание


Свойство UseDestDimSelection
 определяет признак использования отметки из соответствующего измерения
 приёмника при фильтрации.


## Комментарии


Допустимые значения:


	- True. Фильтрация применяется
	 независимо от отметки измерения приёмника.


	- False. По умолчанию.
	 При фильтрации используется отметка, которая получена при пересечении
	 отметок измерения приёмника и фильтра.


Свойство актуально для общих измерений приёмника и фильтра.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В контейнере создана задача моделирования
 с идентификатором PROBLEM и метамодель. В цепочке расчёта метамодели должен
 быть создан многомерный цикл, используемый приёмник данных и фильтр совпадают.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Problem: IMsProblem;

		    MModel: IMsMetaModel;

		    Iter: IMsCalculationChainMultiDimIterator;

		    IterByDataStub: IMsDimIterateByDataStub;

		    Stub: IVariableStub;

		    Dim: IDimensionModel;

		    i, c: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    // Откроем метамодель

		    Problem := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("MS")).Edit As IMsProblem;

		    MModel := Problem.MetaModel;

		    // Получим многомерный итератор

		    Iter := MModel.CalculationChain.Item(0) As IMsCalculationChainMultiDimIterator;

		    // Получим куб из фильтрации по данным

		    IterByDataStub := Iter.IterateByData.Stubs.Item(0);

		    Stub := IterByDataStub.Stub;

		    // У всех измерений фильтра установим флаг UseDestDimSelection

		    c := Stub.DimensionCount;

		    For i := 0 To c - 1 Do

		        Dim := Stub.Dimension(i);

		        IterByDataStub.Dimension(Dim).UseDestDimSelection := True;

		    End For;

		    // Сохраним изменения

		    MModel.MetabaseObject.Save;

		End Sub UserProc;


В результате выполнения примера для всех измерений в настройках фильтрации
 будет установлен признак использования отметки из приёмника данных.


См. также:


[IMsDimIteratorFilteredDimension](IMsDimIteratorFilteredDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
