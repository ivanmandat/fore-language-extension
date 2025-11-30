# IAdoMdAxis.Open

IAdoMdAxis.Open
-


# IAdoMdAxis.Open


## Синтаксис


Open: [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm);


## Описание


Метод Open возвращает курсор
 с информацией о координатах, доступных на оси.


## Комментарии


Каждая запись курсора описывает отдельную координату оси. Первое поле
 курсора имеет наименование «TUPLE_ORDINAL» и в качестве значения возвращает
 индекс координаты. Остальные поля содержат информацию в соответствии с
 теми атрибутами, которые определены для измерения.


Для разделения информации по отдельным координатам в курсор добавляется
 отдельная запись. Первое поле в этой записи не имеет наименования, в качестве
 значения поля указывается номер иерархии.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalogInstance;

    Connection: IAdoMdConnection;

    sMDX: String;

    Cellset: IAdoMdCellset;

    AxisInfo: IAdoMdAxisInfo;

    Axis: IAdoMdAxis;

    AxisCursor: IDalCursor;

    Fields: IDalCursorFields;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    Connection := Catalog.Connection;

    sMDX := "SELECT ...";

    Cellset := Connection.Cellset(sMDX);

    AxisInfo := Cellset.AxisInfo;

    //Первая ось

    Axis := AxisInfo.Item(0);

    //Координаты первой оси

    AxisCursor := Axis.Open;

    //Поля с описанием каждой координаты

    Fields := AxisCursor.Fields;

    Debug.Writeline("Количество координат:" + Axis.Count.ToString);

    While Not AxisCursor.Eof Do

        For i := 0 To Fields.Count - 1 Do

            Debug.Writeline(Fields.Item(i).Name + " | " + Fields.Item(i).Value);

        End For;

        AxisCursor.Next;

    End While;

End Sub UserProc;


При выполнении примера выполняется многомерный запрос для кубов указанного
 каталога ADOMD. Из результата выполнения будет получена информация об
 осях, по которым сформированы данные. В консоль среды разработки будет
 выведена информация по каждой координате первой оси.


См. также:


[IAdoMdAxis](IAdoMdAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
