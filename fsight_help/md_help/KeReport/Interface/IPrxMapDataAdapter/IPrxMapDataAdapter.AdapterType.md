# IPrxMapDataAdapter.AdapterType

IPrxMapDataAdapter.AdapterType
-


# IPrxMapDataAdapter.AdapterType


## Синтаксис


AdapterType: [PrxMapAdapter](../../Enums/PrxMapAdapter.htm);


## Описание


Свойство AdapterType возвращает
 тип адаптера данных для карты.


## Пример


Для выполнения примера предполагается наличие таблицы с данными
 по каким-либо регионам и карты со слоем «Regions» в регламентном
 отчёте с идентификатором REGULAR_REPORT.


Добавьте ссылки на системные сборки: Dimensions, Map, Metabase,
 Report, Tab.


			Sub UserProc;

Var

    Mb: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Tab: ITabSheet;

    Map: IMap;

    BarVisual: IMapBarVisual;

    PrxDA: IPrxMapDataAdapter;

    Slice: IPrxSlice;

    MapDAdapt: IPrxMapDataAdapter;

    i, j: Integer;

Begin

    Mb := MetabaseClass.Active;

    MObj := Mb.ItemById("REGULAR_REPORT").Edit;

    Report := MObj As IPrxReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Map := Tab.Objects.Item(0).Extension As IMap;

    MapDAdapt := Map.Layers.FindByName("Regions").TextDataAdapter As IPrxMapDataAdapter;

    i := MapDAdapt.AdapterType As Integer;

    If i = 0 Then

       Debug.WriteLine(" - Тип адаптера не определен.");

    Else If i = 1 Then

            Debug.WriteLine(" - Тип адаптера cтатический.");

         Else If i = 2 Then

                 Debug.WriteLine(" - Тип адаптера динамический.");

              Else If i = 3 Then

                      Debug.WriteLine(" - Адаптер для областей слоя.");

                   Else If i = 4 Then

                           Debug.WriteLine(" - Адаптер для расшифровки территорий.");

                        End If;

                   End If;

              End If;

         End If;

    End If;

    j := MapDAdapt.AdapterDataType As Integer;

    If j = 0 Then

       Debug.WriteLine(" - Источник данных не определён.");

    Else If j = 1 Then

            Debug.WriteLine(" - Данные берутся из среза.");

         Else If j = 2 Then

                 Debug.WriteLine(" - Данные берутся из заданного диапазона значений.");

              End If;

         End If;

    End If;

End Sub UserProc;


В окно консоли будет выведен [тип
 адаптера](../../Enums/PrxMapAdapter.htm) и [источник](../../Enums/PrxAdapterDataType.htm)
 исходных данных для карты.


См. также:


[IPrxMapDataAdapter](IPrxMapDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
