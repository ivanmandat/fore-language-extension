# IDimElementsIndent.GetIndentInfo

IDimElementsIndent.GetIndentInfo
-


# IDimElementsIndent.GetIndentInfo


## Синтаксис


GetIndentInfo(Element: Integer; Indent: Integer;
 Var: Level: Integer; Var Name: String);


## Параметры


Element - элемент составного
 измерения.


Indent - индекс измерения,
 при изменении которого было сформировано наименование элемента Element.


Level - переменная, в которую
 будет помещено значение уровня в измерении-источнике, на котором расположен
 элемент, использованный при формировании наименования элемента Element.


Name - переменная, в которую
 будет помещено наименование элемента измерения-источника, использованное
 при формировании наименования элемента Element.


## Описание


Метод GetIndentInfo возвращает
 информацию об элементе измерения-источника, который был использован при
 формировании наименования элемента Element.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «Virt_Cube». Источниками данных для виртуального
 куба являются два куба с наименованиями «Куб 1» и «Куб 2». Первый куб
 имеет три измерения, второй - два измерения. В каждом измерении элементы
 имеют числовое наименование от «1» до «n».


	Sub Main;

	Var

	    MB: IMetabase;

	    Cube: IVirtualCube;

	    Sources: IVirtualCubeSources;

	    CDim: ICompoundDimension;

	    CSource: ICompoundDimensionSource;

	    CSel, Sel: IDimSelectionSet;

	    FixInfo: ICubeDimensionFixInfo;

	    Fix: ICubeDimensionFix;

	    Params: IMetabaseObjectParamValues;

	    CDimInst: ICompoundDimensionInstance;

	    Elements: IDimElements;

	    ElementsInd: IDimElementsIndent;

	    Lvl, Element: Integer;

	    n: String;

	Begin

	    MB := MetabaseClass.Active;

	    Cube := MB.ItemById("Virt_Cube").Bind As IVirtualCube;

	    Sources := Cube.Sources;

	    //Формирование отметки для открытия составного измерения

	    CDim := Cube.FactDimension As ICompoundDimension;

	    Sel := (New DimSelectionSetFactory.Create).CreateDimSelectionSet;

	    CSel := (New DimSelectionSetFactory.Create).CreateDimSelectionSet;

	    For Each CSource In CDim.Sources Do

	        Sel.Clear;

	        //Формирование отметки в соответствии с отметкой фиксированных измерений в источниках

	        FixInfo := Sources.FindByKey(CSource.Key).FixInfo;

	        For Each Fix In FixInfo Do

	            If Fix.Selection.SelectedCount <> 0 Then

	                Fix.Selection.CopyTo(Sel.Add(Fix.Instance), True);

	            End If;

	        End For;

	        CSel.AddCompound(CSource.Key, Sel);

	    End For;

	    //Открытие составного измерения

	    Params := (CDim As IMetabaseObject).Params.CreateEmptyValues;

	    Params.FindById("SELECTIONS").Value := CSel;

	    CDimInst := (CDim As IMetabaseObject).Open(Params) As ICompoundDimensionInstance;

	    //Получение элементов составного измерения

	    Elements := (CDimInst As IDimInstance).Elements;

	    ElementsInd := Elements As IDimElementsIndent;

	    //Вывод информации о формировании наименований элементов

	    For Each Element In Elements.Elements Do

	        Debug.Write(Elements.Name(Element) + ": ");

	        ElementsInd.GetIndentInfo(Element, 1, Lvl, n);

	        Debug.WriteLine("Уровень исходного элемента: " + Lvl.ToString + "; Наименование исходного элемента: " + n);

	    End For;

	End Sub Main;


При выполнении примера для открытия составного измерения виртуального
 куба формируется отметка на основании отметки всех зафиксированных измерений
 всех источников данных куба. В консоль среды разработки будет выведена
 информация об элементах первого измерения, использованного при формировании
 наименований составного измерения.


См. также:


[IDimElementsIndent](IDimElementsIndent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
