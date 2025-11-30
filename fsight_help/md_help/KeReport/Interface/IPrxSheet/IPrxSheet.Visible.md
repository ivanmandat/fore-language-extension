# IPrxSheet.Visible

IPrxSheet.Visible
-


# IPrxSheet.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет
 видимость листа отчета в рабочей области.


## Комментарии


 При значении True лист
 отображается в рабочей области, при значении False
 - нет. Свойство по умолчанию имеет значение True.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Sheet: IPrxSheet;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    Sheet := Report.Sheets.Item(1);

    Sheet.Visible := False;

    MObj.Save;

End Sub UserProc


После выполнения примера будет скрыт второй лист регламентного отчета.
 Идентификатор регламентного отчета - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
