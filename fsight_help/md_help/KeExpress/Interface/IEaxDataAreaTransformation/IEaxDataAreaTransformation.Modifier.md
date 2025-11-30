# IEaxDataAreaTransformation.Modifier

IEaxDataAreaTransformation.Modifier
-


# IEaxDataAreaTransformation.Modifier


## Синтаксис


Modifier(LeftOperand: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 RightOperand: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 Operation: [PivotTransformationSelectionOperation](../../Enums/PivotTransformationSelectionOperation.htm);


## Параметры


LeftOperand. Левый операнд;


RightOperand. Правый операнд;


Operation. Операция модификации
 отметки.


## Описание


Метод Modifier модифицирует
 отметку измерений.


## Комментарии


Для проверки операции модификации отметки используйте [IEaxDataAreaTransformation.TestModifier](IEaxDataAreaTransformation.TestModifier.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    SS: IDimSelectionSet;

	    S: IDimSelection;

	    TypeSelOp: PivotTransformationSelectionOperation;

	    CalcTransformations: IEaxDataAreaTransformations;

	    CalcTransformation: IEaxDataAreaTransformation;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим срез источника данных

	    DArea := Express.DataArea;

	    Slice := DArea.Slices.Item(0);

	    // Получим формулу преобразования данных в аналитической области

	    CalcTransformations := Slice.CalcTransformations;

	    CalcTransformation := CalcTransformations.Item(0);

	    // Получим отметку, в которой находится формула, и сбросим ее

	    SS := CalcTransformation.Selection;

	    S := SS.Item(0).CreateCopy;

	    S.DeselectAll;

	    S.CopyToEx(SelectionCopyToExOptions.WithGroup, ss.Item(0), True);

	    // Выведем в окно консоли тип операции по изменению отметки в таблице

	    TypeSelOp := CalcTransformation.ModifierOperation(SS.Item(0));

	    Select Case TypeSelOp.ToString

	        Case "0": Debug.WriteLine("Тип операции - " + "None");

	        Case "1": Debug.WriteLine("Тип операции - " + "Union");

	        Case "2": Debug.WriteLine("Тип операции - " + "Intersection");

	        Case "3": Debug.WriteLine("Тип операции - " + "Difference");

	        Case "4": Debug.WriteLine("Тип операции - " + "Symmetric Diference");

	        Case "5": Debug.WriteLine("Тип операции - " + "Replace");

	    End Select;

	    S := CalcTransformation.ModifierRightOperand(SS.Item(0));

	    CalcTransformation.Modifier(SS.Item(0), S, PivotTransformationSelectionOperation.Replace);

	    CalcTransformation.TestModifier(SS.Item(0), S);

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- будет модифицирована отметка измерения;


	- произведена проверка модификации отметки измерения;


	- в окно консоли будет выведен тип операции по изменению отметки.


См. также:


[IEaxDataAreaTransformation](IEaxDataAreaTransformation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
