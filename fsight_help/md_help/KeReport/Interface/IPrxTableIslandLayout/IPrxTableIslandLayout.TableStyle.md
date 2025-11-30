# IPrxTableIslandLayout.TableStyle

IPrxTableIslandLayout.TableStyle
-


# IPrxTableIslandLayout.TableStyle


## Синтаксис


TableStyle: [ITabTableStyle](TabSheet.chm::/Interface/ITabTableStyle/ITabTableStyle.htm);


## Описание


Свойство TableStyle определяет
 стиль таблицы реляционной области данных.


## Пример


Для выполнения примера добавьте ссылки на системные сборки Report, Metabase
 и Tab. Для примера необходимо наличие в репозитории регламентного отчета
 с идентификатором RR и реляционной областью на листе отчета.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Layout: IPrxTableIslandLayout;

    Style: ITabTableStyle;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("RR").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Layout := TI.Layout;

    Style := Layout.TableStyle;

    Style.AssignPredefined(TabTablePredefinedStyle.DarkRed);

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера для отображения будет применено заданное оформление.


См. также:


[IPrxTableIslandLayout](IPrxTableIslandLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
