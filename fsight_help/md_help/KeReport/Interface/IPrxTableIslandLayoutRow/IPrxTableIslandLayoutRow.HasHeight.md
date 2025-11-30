# IPrxTableIslandLayoutRow.HasHeight

IPrxTableIslandLayoutRow.HasHeight
-


# IPrxTableIslandLayoutRow.HasHeight


## Синтаксис


HasHeight: Boolean;


## Описание


Свойство HasHeight определяет
 признак использования пользовательской высоты строки отображения.


## Комментарии


Если значение данного свойства True,
 то используется пользовательская высота строки, при значении False
 - нет.


По умолчанию свойство имеет значение False.


В случае если свойство установлено в True,
 то следует определить свойство [Height](IPrxTableIslandLayoutRow.Height.htm).


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Layout: IPrxTableIslandLayout;

    Row: IPrxTableIslandLayoutRow;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Layout := TI.Layout;

    Row := Layout.Rows(0);

    Row.HasHeight := True;

    Row.Height := 15;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет изменена высота строки отображения. «Report»
 - идентификатор регламентного отчета.


См. также:


[IPrxTableIslandLayoutRow](IPrxTableIslandLayoutRow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
