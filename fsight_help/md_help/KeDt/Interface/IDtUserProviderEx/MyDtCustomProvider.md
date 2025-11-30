# Пример пользовательского алгоритма получения данных

Пример пользовательского алгоритма получения данных
-


# Пример пользовательского алгоритма получения данных


В разделе приведено описание пользовательского алгоритма получения данных,
 реализованного в виде класса MyDtCustomProvider
 на языке Fore.


Данные загружаются из текстового файла «C:\Data_Out.txt».


Добавьте ссылки на системные сборки: Dt, Xml.


			Public Class MyDtCustomProvider: Object, IDtCustomProvider

    _mb: IMetabase;

    p: IDtTextProvider;

    fs: IDtFieldDefinitions;

    m_active, keep: Boolean;


    Public Constructor MyDtCustomProvider;

    Begin

        m_Active := False;

    End Constructor MyDtCustomProvider;


    Public Sub Open;

    Begin

        m_Active := True;

        If p = Null Then

            p := New DtTextProvider.Create;

            p.File := "C:\Data_Out.txt";

        End If;

        p.RangeHasHeader := True;

        p.Open;

    End Sub Open;


    Public Sub Close;

    Begin

        m_Active := False;

        p.Close;

    End Sub Close;


    Public Sub Save(Element: IXMLDOMElement);

    Begin

        p.Save(Element);

    End Sub Save;


    Public Sub Load(Element: IXMLDOMElement);

    Begin

        If p = Null Then

            p := New DtTextProvider.Create;

            p.File := "C:\Data_Out.txt";

        End If;

    End Sub Load;


    Public Sub FieldsFromFile;

    Begin

        p.FieldsFromFile;

    End Sub FieldsFromFile;


    Public Property GetType: DtObjectType

        Get

        Begin

            Return DtObjectType.TDtTextProvider;

        End Get

    End Property GetType;


    Public Sub ClearFields;

    Begin

        p.ClearFields;

    End Sub ClearFields;


    Public Sub Fetch(Var Values: Array);

    Begin

        p.Fetch(Values);

    End Sub Fetch;


    Public Function FetchRows(Count: Integer; Var Values: Array): Integer;

    Var

        i: Integer;

    Begin

        i := p.FetchRows(Count, Values);

        Return i;

    End Function FetchRows;


    Public Function ReadingRowsCount: Integer;

    Begin

        Return p.ReadingRowsCount;

    End Function ReadingRowsCount;


    Public Function ImplementFetchRows: Boolean;

    Begin

        Return True;

    End Function ImplementFetchRows;


    Function get_Eof: Boolean;

    Begin

        Return p.Eof;

    End Function get_Eof;


    Function get_Fields: IDtFieldDefinitions;

    Begin

        If fs = Null Then

            fs := p.Fields;

        End If;

        Return fs;

    End Function get_Fields;


    Function get_Active: boolean;

    Begin

        Return m_Active;

    End Function get_Active;


    Function get_getType: dtobjecttype;

    Begin

        Return dtobjecttype.TDtUserProviderEx

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

End Class MyDtCustomProvider;


См. также:


[IDtUserProviderEx](IDtUserProviderEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
