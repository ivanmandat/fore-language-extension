# IEaxDataAreaTransformation.CalculationMode

IEaxDataAreaTransformation.CalculationMode
-


# IEaxDataAreaTransformation.CalculationMode


## Синтаксис


CalculationMode: [EaxDataAreaTransformationCalculationMode](../../Enums/EaxDataAreaTransformationCalculationMode.htm);


## Описание


Свойство CalculationMode определяет
 порядок расчета формул [вычисляемых
 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) в цепочке расчета.


## Комментарии


Порядок расчета формул вычисляемых элементов задается как до расчета
 агрегации и итогов, так и между ними. По умолчанию формулы вычисляемых
 элементов добавляются в [цепочку
 расчета](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm#calculation_chain) до раздела «Расчет
 агрегации» и вычисляются в порядке добавления.


Примечание.
 Расчет итогов выполняется только после расчета агрегации. Изменение порядка
 вычисления формул в пункте «Расчет итогов»
 может привести к изменению результата итогов.


Для получения подробной информации обратитесь к разделу «[Вычисляемые
 элементы](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm)».


## Пример


Для выполнения примера убедитесь, что в репозитории содержится экспресс-отчет
 с идентификатором EXPRESS. В отчете отображается таблица и добавлены [вычисляемые
 элементы](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) в отметке элементов измерения.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    Trs: IEaxDataAreaTransformations;

	    Tr: IEaxDataAreaTransformation;

	    i: integer;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим срез аналитической области данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Переместим все вычисляемые элементы перед расчетом агрегации и итоговв цепочке расчета

	    Trs := Slice.CalcTransformations;

	    For i := 0 To trs.Count - 1 Do

	        Tr := Trs.Item(i);

	        Tr.CalculationMode := EaxDataAreaTransformationCalculationMode.AfterDataSourceExecute;

	    End For;

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера вычисляемые элементы будут рассчитываться перед
 расчетом агрегации и итогов. В таблице отобразятся значения всех добавленных
 вычисляемых элементов.


См. также:


[IEaxDataAreaTransformation](IEaxDataAreaTransformation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
