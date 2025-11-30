# IPrxDataSources.AddEx

IPrxDataSources.AddEx
-


# IPrxDataSources.AddEx


## Синтаксис


AddEx(Value: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm));


## Параметры


Value. Дескриптор объекта.


## Описание


Метод AddEx подключает источник,
 дескриптор которого передается через параметр Value.


## Комментарии


Используйте метод для подключения экспресс-отчета в качестве источника
 регламентного отчета.


При подключении куба или экспресс-отчета с сохраненным представлением
 при создании среза настройки размещения измерений и отметка будут подтягиваться
 из представления куба или экспресс-отчета.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 «EXP1» и регламентного отчета с идентификатором «REP1». Создайте форму,
 добавьте на нее кнопку с наименованием «Button1», компонент ReportBox
 c наименованием «ReportBox1» и компонент UiReport c наименованием
 «UiReport1», укажите «UiReport1» в качестве источника «ReportBox1». Добавьте
 ссылки на системные сборки Tab, Report, Metabase.


			Class OBJ62507Form: Form

    ReportBox1: ReportBox;

    UiReport1: UiReport;

    Button1: Button;


    rep: IPrxReport;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var  DS: IPrxDataSource;

         er: IMetabaseObjectDescriptor;

         dataS: IPrxDataSources;

         DI: IPrxDataIsland;

         DIs: IPrxDataIslands;

         slice: IPrxSlice;

         slices: IPrxSlices;

    Begin

         er := MetabaseClass.Active.ItemById("EXP1") As IMetabaseObjectDescriptor;

         dataS := rep.DataSources;

         dataS.AddEx(er);

         DS := dataS.Item(rep.DataSources.Count - 1);

         text := DS.Parent.Name;

         slices :=  DS.Slices;

         slice := slices.Add;

         DIs := rep.DataIslands;

         DI := DIs.Add;

         DI.Slice := slice;

         DI.Sheet := rep.Sheets.Item(0);

         DI.Range := (rep.Sheets.Item(0) As IPrxTable).TabSheet.Cell(0, 0);

         DI.OutputPart := PrxDataIslandPart.Full;

         rep.Recalc;

         rep.ActiveSheet := rep.Sheets.Item(0);

    End Sub Button1OnClick;


    Sub OBJ62507FormOnCreate(Sender: Object; Args: IEventArgs);

    Begin

        rep := MetabaseClass.Active.ItemById("REP1").Edit As IPrxReport;

        UiReport1.Instance := rep;

    End Sub OBJ62507FormOnCreate;


End Class OBJ62507Form;


После выполнения примера при нажатии на кнопку «Button1» указанный экспресс-отчет
 будет добавлен в качестве источника на второй лист компонента ReportBox,
 в тексте заголовка окна формы будет отражено название указанного экспресс-отчета.


См. также:


[IPrxDataSources](IPrxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
