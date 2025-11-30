# IMsDimIteratorLinks.CustomLinker

IMsDimIteratorLinks.CustomLinker
-


# IMsDimIteratorLinks.CustomLinker


## Синтаксис


CustomLinker: [IMsDimCustomLinker](../IMsDimCustomLinker/IMsDimCustomLinker.htm);


## Описание


Свойство CustomLinker
 определяет пользовательский механизм связывания измерений.


## Комментарии


Пользовательский механизм должен быть реализован в виде класса, реализующего
 методы интерфейса [IMsDimCustomLinker](../IMsDimCustomLinker/IMsDimCustomLinker.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором PROBLEM_MULTIDIMITERATOR. Данная задача должна рассчитывать
 метамодель, содержащую только многомерный итератор. Также в репозитории
 предполагается наличие базы данных временных рядов с идентификатором TSDB_STAT,
 содержащей атрибут INDICATOR, являющийся ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    MsKey: Integer;

	    Problem: IMsProblem;

	    MM: IMsMetaModel;

	    Iterator: IMsCalculationChainMultiDimIterator;

	    IterDim: IMsDimIteratorDimension;

	    Links: IMsDimIteratorLinks;

	    DSLinked: IRubricator;

	    Attributes: IMetaAttributes;

	    dimLinked: IDimInstance;

	    IDimLink: IMsDimIteratorLink;

	    ml: MLinker;

	    Calculation: IMsProblemCalculation;

	    CalcSettings: IMsProblemCalculationSettings;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем ключ контейнера моделирования

	    MsKey := mb.GetObjectKeyById("MS");

	    // Получаем задачу моделирования

	    Problem := mb.ItemByIdNamespace("PROBLEM_MULTIDIMITERATOR", MsKey).Bind As IMsProblem;

	    // Получаем метамодель, рассчитываемую задачей

	    MM := Problem.EditMetaModel;

	    // Получаем многомерный итератор

	    Iterator := MM.CalculationChain.Item(0) As IMsCalculationChainMultiDimIterator;

	    // Получаем связи первого измерения итератора

	    IterDim := Iterator.Dimensions.Item(0);

	    Links := IterDim.Links;

	    // Удаляем существующие связи

	    Links.Clear;

	    // Получаем базу данных временных рядов TSDB_STAT

	    DSLinked := mb.ItemById("TSDB_STAT").Bind As IRubricator;

	    // Получаем справочник, на котором основан атрибут INDICATOR

	    Attributes := DSLinked.Facts.Attributes;

	    dimLinked := Attributes.FindById("INDICATOR").ValuesObject.Open(Null) As IDimInstance;

	    // Добавляем справочник в качестве связанного измерения

	    IDimLink := Links.Add(dimLinked);

	    // Указываем источник данных связанного измерения

	    IDimLink.Dimension.Stubs.Add(DSLinked As IVariableStub);

	    // Указываем атрибут-приёмник

	    IDimLink.DestinationAttribute := dimLinked.Attributes.FindById("NAME").Attribute;

	    // Выводим наименование управляющего измерения в окно консоли

	    Debug.WriteLine("Управляющее измерение: " + IDimLink.Owner.Name);

	    // Создаем пользовательский механизм связывания измерений

	    ml := New MLinker.Create;

	    Links.CustomLinker := ml;

	    // Создаем параметры расчёта задачи

	    CalcSettings := Problem.CreateCalculationSettings;

	    Calculation := Problem.Calculate(CalcSettings);

	    // Выполняем расчёт

	    Calculation.Run;

	End Sub UserProc;

	// Класс, реализующий пользовательский механизм связывания

	Public Class MLinker: Object, IMsDimCustomLinker

	    Public Function ResolveLink(

	        Source: IMsDimIteratorDimension;

	        Destination: IMsDimIteratorDimension;

	        CurrentSelection: IDimSelectionSet;

	        Var SkipCustomLink: Boolean): Array;

	    Var

	        i: Integer;

	        Result: Array;

	    Begin

	        SkipCustomLink := False;

	        Debug.WriteLine("Источник: " + Source.Name);

	        Debug.WriteLine("Приёмник: " + Destination.Name);

	        Debug.WriteLine("Отметка:");

	        Debug.Indent;

	        For i := 0 To CurrentSelection.Count - 1 Do

	            Debug.Write(CurrentSelection.Item(i).Dimension.Name + ": ");

	            Debug.WriteLine(CurrentSelection.Item(i).ToString);

	        End For;

	        Debug.Unindent;

	        Result := New Variant[1];

	        Result[0] := 1;

	        Return Result;

	    End Function ResolveLink;

	End Class MLinker;


В результате выполнения примера для многомерного итератора будет использован
 пользовательский механизм связывания. В окно консоли будет выведена информация
 о связываемых справочниках.


См. также:


[IMsDimIteratorLinks](IMsDimIteratorLinks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
