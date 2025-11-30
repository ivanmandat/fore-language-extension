# IPrxTableIslandLayout.Filter

IPrxTableIslandLayout.Filter
-


# IPrxTableIslandLayout.Filter


## Синтаксис


Filter: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Filter возвращает условие
 фильтрации строк реляционной области данных.


## Комментарии


Для определения, будет ли использоваться фильтрация для строк реляционной
 области данных, используйте свойство [IPrxTableIslandLayout.FilterEnabled](IPrxTableIslandLayout.FilterEnabled.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT». На листе отчета размещена реляционная
 область данных.


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs : IPrxTableIslands;

    TI : IPrxTableIsland;

    Layout : IPrxTableIslandLayout;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    Layout := TI.Layout;

    If Layout.FilterEnabled = True Then

        Debug.WriteLine(Layout.Filter.AsString);

        Else

            Debug.WriteLine("Фильтрация реляционной области данных не используется");

    End If;

End Sub UserProc;


В результате выполнения примера будет проведена проверка, используется
 ли фильтрация реляционной области данных. В окно консоли будет выведено
 заданное условие фильтрации или сообщение «Фильтрация реляционной области данных не используется».


См. также:


[IPrxTableIslandLayout](IPrxTableIslandLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
