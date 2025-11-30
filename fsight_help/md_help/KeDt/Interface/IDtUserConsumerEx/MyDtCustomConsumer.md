# Пример пользовательского алгоритма выгрузки данных

Пример пользовательского алгоритма выгрузки данных
-


# Пример пользовательского алгоритма выгрузки данных


В разделе приведено описание пользовательского алгоритма выгрузки данных,
 реализованного в виде класса MyDtCustomConsumer
 на языке Fore.


Данные выгружаются в текстовый файл «C:\Data_Out.txt».


Добавьте ссылки на системные
 сборки: Dt, Xml.


			Public Class MyDtCustomConsumer: Object, IDtCustomConsumer

    _mb: IMetabase;

    c: IDtTextConsumer;

    m_Active, keep: Boolean;


    Public Constructor MyDtCustomConsumer;

    Begin

        m_Active := False;

    End Constructor MyDtCustomConsumer;


    Public Sub Open;

    Begin

        m_Active := True;

        If c = Null Then

            c := New DtTextConsumer.Create;

            c.File := "C:\Data_Out.txt";

        End If;

        c.WriteHeader := True;

        c.Open;

    End Sub Open;


    Public Sub Close;

    Begin

        m_Active := False;

        c.Close;

    End Sub Close;


    Public Sub Save(Element: IXMLDOMElement);

    Begin

        c.Save(Element);

    End Sub Save;


    Public Sub Load(Element: IXMLDOMElement);

    Begin

        If c = Null Then

            c := New DtTextConsumer.Create;

            c.File := "C:\Data_Out.txt";

        End If;

    End Sub Load;


    Public Sub FieldsFromFile;

    Begin

        c.FieldsFromFile;

    End Sub FieldsFromFile;


    Public Property GetType: DtObjectType

        Get

        Begin

            Return DtObjectType.TDtExcelConsumer;

        End Get

    End Property GetType;


    Public Sub ClearFields;

    Begin

        c.ClearFields;

    End Sub ClearFields;


    Public Sub Clear;

    Begin

        c.Clear;

    End Sub Clear;


    Public Sub Put(Values: Array);

    Begin

        c.Put(Values);

    End Sub Put;


    Public Sub PutRow(Values: Array);

    Begin

        c.PutRow(Values);

    End Sub PutRow;


    Public Sub PutData(Var Values: Object; RowCount: Integer; ColCount: Integer);

    Begin

    End Sub PutData;


    Public Function WritingRowsCount: Integer;

    Begin

        Return c.WritingRowsCount;

    End Function WritingRowsCount;


    Public Function ImplementPut: Boolean;

    Begin

        Return True;

    End Function ImplementPut;


    Function get_Fields: IDtFieldDefinitions;

    Begin

        If c = Null Then

            c := New DtTextConsumer.Create;

        End If;

        Return c.Fields;

    End Function get_Fields;


    Function get_Active: boolean;

    Begin

        Return m_Active;

    End Function get_Active;


    Function get_getType: dtobjecttype;

    Begin

        Return dtobjecttype.TDtUserConsumerEx

    End Function get_getType;


    Public Function get_Metabase: IMetabase;

    Begin

        Return _mb;

    End Function get_Metabase;


    Public Sub set_Metabase(metabase: IMetabase);

    Begin

        _mb := metabase;

    End Sub set_Metabase;


    Function get_KeepCalcFields: Boolean;

    Begin

        Return keep;

    End Function get_KeepCalcFields;


    Sub set_KeepCalcFields(Value: Boolean);

    Begin

        keep := Value;

    End Sub set_KeepCalcFields;

End Class MyDtCustomConsumer;


См. также:


[IDtUserConsumerEx](IDtUserConsumerEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
