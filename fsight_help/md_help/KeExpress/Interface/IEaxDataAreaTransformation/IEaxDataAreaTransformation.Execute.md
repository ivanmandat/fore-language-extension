# IEaxDataAreaTransformation.Execute

IEaxDataAreaTransformation.Execute
-


# IEaxDataAreaTransformation.Execute


## Синтаксис


Execute(OutSelSet: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm)):
 [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


OutSelSet. Выходная отметка
 измерения.


## Описание


Метод Execute выполняет преобразование
 данных по формуле с возвращением матрицы данных.


## Комментарии


Для получения отметки измерения, в которой находится формула преобразования
 данных, используйте [IEaxDataAreaTransformation.Selection](IEaxDataAreaTransformation.Selection.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, который содержит в себе отредактированную формулу
 в редакторе выражений.


Добавьте ссылки на системные сборки: Dimensions, Express, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    DAreaSlice: IEaxDataAreaSlice;

	    CalcTransformations: IEaxDataAreaTransformations;

	    CalcTransformation: IEaxDataAreaTransformation;

	    OutSelSet: IDimSelectionSet;

	    Matrix: IMatrix;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим срез источника данных

	    DArea := Express.DataArea;

	    DAreaSlice := DArea.Slices.Item(0);

	    // Получим формулу преобразования данных в аналитической области

	    CalcTransformations := DAreaSlice.CalcTransformations;

	    CalcTransformation := CalcTransformations.Item(0);

	    // Получим отметку

	    OutSelSet := CalcTransformation.Selection;

	    // Получим матрицу данных

	    Matrix := CalcTransformation.Execute(OutSelSet);

	    Debug.WriteLine("Количество значений в матрице данных = " + Matrix.ValueCount.ToString);

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в переменной Matrix будет хранится матрица
 данных. В окно консоли выведется количество ее значений.


См. также:


[IEaxDataAreaTransformation](IEaxDataAreaTransformation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
