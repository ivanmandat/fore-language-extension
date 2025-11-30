# IEaxDataAreaSlice.GetFootnotesTransformations

IEaxDataAreaSlice.GetFootnotesTransformations
-


# IEaxDataAreaSlice.GetFootnotesTransformations


## Синтаксис


GetFootnotesTransformations(Value: [IDataAreaTransformationsGetter](ForeSys.chm::/Interface/IDataAreaTransformationsGetter/IDataAreaTransformationsGetter.htm)):
 [IEaxDataAreaTransformations](../IEaxDataAreaTransformations/IEaxDataAreaTransformations.htm);


## Параметры


Value.
 Объект, для которого будет получена коллекция формул преобразования данных.


## Описание


Метод GetFootnotesTransformations
 возвращает коллекцию формул преобразования данных, которые будут использоваться
 для формирования сносок к элементам измерения.


## Комментарии


В качестве значения параметра Value
 необходимо передать какое-либо [измерение](kepivot.chm::/Interface/IPivotDimension/IPivotDimension.htm)
 источника данных приведённое к интерфейсу [IDataAreaTransformationsGetter](ForeSys.chm::/Interface/IDataAreaTransformationsGetter/IDataAreaTransformationsGetter.htm).
 Формула, которая будет указана в [выражении](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.Expression.htm)
 формулы преобразования, будет использоваться для формирования текста сносок.
 Текст сносок формируется по одной формуле для всех элементов измерения.
 Для того, чтобы элементы имели разные сноски, формула должна возвращать
 различные значения.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT. Среди измерений источника должно быть
 измерение с идентификатором COUNTRY.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    Pivot: IPivot;

	    Getter: IDataAreaTransformationsGetter;

	    Trans: IEaxDataAreaTransformations;

	    Tran: IEaxDataAreaTransformation;

	    Item: IPivotDimension;

	    SelSet: IDimSelectionSet;

	    Sel: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    //Срез аналитической области данных

	    Slice := Express.DataArea.Slices.Item(0);

	    Pivot := Express.Pivot;

	    //Измерение, для которого будут добавлены сноски

	    Item := Pivot.Dimensions.FindByKey(MB.GetObjectKeyById("COUNTRY"));

	    Getter := Item As IDataAreaTransformationsGetter;

	    Trans := Slice.GetFootnotesTransformations(Getter);

	    SelSet := Pivot.Selection.CreateCopy;

	    For Each Sel In SelSet Do

	        Sel.DeselectAll;

	    End For;

	    //Формула преобразования для формирования текста сносок

	    If Trans.Count > 0 Then

	        Tran := Trans.Item(0);

	    Else

	        Tran := Trans.Add(SelSet, Null, -1);

	    End If;

	    Tran.Enabled := True;

	    Tran.Expression.AsString := "{X.COUNTRY.NAME}";

	    Pivot.Refresh;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в указанном экспресс-отчете для элементов измерения
 COUNTRY будут настроены сноски. В качестве текста сносок будут выступать
 наименования элементов.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
