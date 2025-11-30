# IPrxScene3DSeries.RemoveByKey

IPrxScene3DSeries.RemoveByKey
-


# IPrxScene3DSeries.RemoveByKey


## Синтаксис


RemoveByKey(Key: Integer): Boolean;


## Параметры


Key. Ключ
 ряда.


## Описание


Метод RemoveByKey удаляет ряд
 по заданному ключу. Метод возвращает True,
 в случае успешного удаления, в противном случае -
 False.


## Пример


Для выполнения примера предполагается наличие формы, где расположена
 кнопка с наименованием «Button1», компонент IntegerEdit с наименованием
 «IntegerEdit1». Наличие регламентного отчета с идентификатором «REGULAR_REPORT»,
 на листе которого расположена трёхмерная сцена с несколькими рядами данных.
 Подключите системные сборки: Metabase, Report, Tab, Ui, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Report: IPrxReport;

    S: IPrxScene3D;

    Series: IPrxScene3DSeries;

    MB: IMetabase;

    Tab: ITabSheet;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Tab := (Report.Sheets.Item(0) As IPRxTable).TabSheet;

    S := Tab.Objects.Item(0).Extension As IPrxScene3D;

    Series := S.Series;

    If Series.RemoveByKey(IntegerEdit1.Value) Then

        WinApplication.InformationBox("Объект удален");

    Else

        WinApplication.InformationBox("Ошибка при удалении");

    End If;

    (Report As IMetabaseObject).Save;

End Sub Button1OnClick;


Введите в строку ключ ряда и нажмите кнопку. По результатам выполнения
 будет выдано соответствующее сообщение.


См. также:


[IPrxScene3DSeries](IPrxScene3DSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
