# IDimElements.IsGroup

IDimElements.IsGroup
-


# IDimElements.IsGroup


## Синтаксис


IsGroup(Element: Integer): Boolean;


## Параметры


Element -
 индекс элемента справочника.


## Описание


Метод IsGroup возвращает признак
 того, является ли элемент группой. True
 - элемент является группой.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1», и следующих компонентов: UiDimension с идентификатором
 «UiDimension1», UiRdsDictionary с идентификатором «UiRdsDictionary1»,
 Memo с идентификатором «Memo1», а также компонента DimensionTree. Источником
 данных для компонента DimensionTree является «UiRdsDictionary1». В репозитории
 предполагается наличие репозитория НСИ «RDS_REPO», содержащего справочник
 «OBJ_DICTIONARY».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Metabase: IMetabase;

	    RdsKey: Integer;

	    Object: IMetabaseObjectDescriptor;

	    Params: IMetabaseObjectParams;

	    Param: IMetabaseObjectParam;

	    Values: IMetabaseObjectParamValues;

	    Dictionary: IRdsDictionaryInstance;

	    Dict: IRdsDictionary;

	    DimInstance: IDimInstance;

	    Elements: IDimElements;

	    Element: Integer;

	    i: Integer;

	Begin

	    Metabase := MetabaseClass.Active;

	    RdsKey := Metabase.GetObjectKeyById("RDS_REPO");

	    Object := Metabase.ItemByIdNamespace("OBJ_DICTIONARY", RdsKey);

	    Object := Object.Edit;

	    Params := Object.Params;

	    Param := Params.Add;

	    Param.Name := "RDSDIMTYPE";

	    Param.Id := "RDSDIMTYPE";

	    Param.DataType := DbDataType.Integer;

	    Values := Params.CreateEmptyValues;

	    Values.FindById("RDSDIMTYPE").Value := 1;

	    Dictionary := Object.Open(Values) As IRdsDictionaryInstance;

	    DimInstance := Dictionary As IDimInstance;

	    UiDimension1.Instance := DimInstance;

	    Dict := Dictionary.Dictionary;

	    UiRdsDictionary1.Object := Dict;

	    UiRdsDictionary1.Open(Values);

	    UiRdsDictionary1.Active := True;

	    Memo1.Clear;

	    Elements := DimInstance.Elements;

	    For i := 0 To Elements.Count - 1 Do

	        Element := Elements.Elements.Element(i);

	        If Elements.IsGroup(Element) Then

	            Memo1.Lines.Add("    Группа: " + Elements.Name(Element));

	            Memo1.Lines.Add("        Ключ группы: " + Elements.GroupKey(Element).ToString);

	        Else

	            Memo1.Lines.Add("Элемент: " + Elements.Name(Element));

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера, в компоненте DimensionTree будут отображены
 группы и элементы справочника «OBJ_DICTIONARY» в виде дерева. В компоненте
 Memo будет отображена информация об элементах (наименование) и группах
 справочника (наименование и ключ).


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
