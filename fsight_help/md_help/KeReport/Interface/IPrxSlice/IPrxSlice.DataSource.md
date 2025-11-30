# IPrxSlice.DataSource

IPrxSlice.DataSource
-


# IPrxSlice.DataSource


## Синтаксис


DataSource: [IPrxDataSource](../IPrxDataSource/IPrxDataSource.htm);


## Описание


Свойство DataSource определяет
 источник данных для среза.


## Комментарии


Изменение источника среза эквивалентно его перемещению. Перемещение
 срезов возможно только между кубами - источниками. При перемещении срезов
 сохраняется их привязка к объектам отчета (диаграммы, карты, области данных).


Кубы могут иметь разную структуру. В случае если набор измерений одинаков,
 то все настройки перемещаемого среза будут сохранены (порядок расположения
 и отметка). Если набор измерений различный, то те измерения, между которыми
 было установлено соответствие, будут размещены с сохранением порядка размещения
 и отметки, остальные измерения располагаются в группе «Фиксированные»
 с нулевой отметкой.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DS: IPrxDataSources;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    DS := Report.DataSources;

    Slices := DS.Item(0).Slices;

    Slice := Slices.Item(0);

    Slice.DataSource := DS.Item(1);

    MObj.Save;

End Sub UserProc;


После выполнения примера для заданного среза будет изменен источник.


См. также:


[IPrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
