# ITabObject.MovementMode

ITabObject.MovementMode
-


# ITabObject.MovementMode


## Синтаксис


MovementMode: [TabObjectMovementMode](../../Enums/TabObjectMovementMode.htm);


## Описание


Свойство MovementMode определяет
 режим изменения позиции и размеров объекта, расположенного на листе отчета.


## Комментарии


Для определения идентификатора объекта, расположенного на листе отчета,
 используйте свойство [ITabObject.Id](ITabObject.Id.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», содержащего на листе объект с идентификатором
 «PrxChart1».


Добавьте ссылки на системные сборки Metabase, Report, Tab.


			Sub UserProc;

Var

    mb: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxTable;

    TObj: ITabObjects;

    Object: ITabObject;

Begin

    mb := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Sheet := Report.Sheets.Item(0) As IPrxTable;

    TObj := Sheet.TabSheet.Objects;

    Object := TObj.Object("PrxChart1");

    Object.MovementMode := TabObjectMovementMode.FreeWithCells;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для объекта будет установлен [способ
 перемещения объекта](UiReport.chm::/desktop/Objects/UiReport_Objects_StandartProperty.htm) «Перемещение
 и изменение вместе с ячейками».


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
