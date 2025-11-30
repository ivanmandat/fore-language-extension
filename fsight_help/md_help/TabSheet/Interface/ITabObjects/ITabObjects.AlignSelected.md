# ITabObjects.AlignSelected

ITabObjects.AlignSelected
-


# ITabObjects.AlignSelected


## Синтаксис


AlignSelected(Alignment: [TabObjectsAlignment](../../Enums/TabObjectsAlignment.htm));


## Параметры


Alignment. Параметр, определяющий
 способ выравнивания нескольких объектов.


## Описание


Метод AlignSelected выравнивает
 группы объектов относительно видимой области листа.


## Комментарии


Для подбора размера выделенных объектов используйте метод [ITabObjects.AdjustSelected](ITabObjects.AdjustSelected.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Regl_Rep».


Добавьте ссылки на системные сборки «Metabase», «Report», «Tab».


			Sub UserProc;

Var

    mb: IMetabase;

    Rep: IPrxReport;

    Sheet: IPrxTable;

    TObj: ITabObjects;

    i: Integer;

Begin

    mb := MetabaseClass.Active;

    Rep := MB.ItemById("Regl_Rep").Edit As IPrxReport;

    Sheet := Rep.Sheets.Item(0) As IPrxTable;

    TObj := Sheet.TabSheet.Objects;

    For i := 0 To TObj.Count - 1 Do

        TObj.Item(i).Select_;

    End For;

    TObj.AlignSelected(TabObjectsAlignment.Left);

    (Rep As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут выделены все объекты заданного листа
 регламентного отчета. Затем они будут выровнены по левому краю относительно
 крайнего левого объекта.


См. также:


[ITabObjects](ITabObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
