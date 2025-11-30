# IBreadcrumb.LoadState

IBreadcrumb.LoadState
-


# IBreadcrumb.LoadState


## Синтаксис


LoadState(Reader: [IXmlDomElement](ModXml.chm::/develop.htm));


## Параметры


Reader. XML элемент, из которого осуществляется загрузка состояния элементов компонента.


## Описание


Метод LoadState осуществляет загрузку состояния элементов компонента.


## Комментарии


В качестве значения параметра Reader необходимо указать тот XML элемент, в который было сохранено состояние элементов с помощью метода [SaveState](IBreadcrumb.SaveState.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент MetaAttributesBreadcrumb с идентификатором «MetaAttributesBreadcrumb1» и двух кнопок с идентификаторами «Button1» и «Button2». В репозитории содержится база данных временных рядов с идентификатором «DB_RUBR».


Для выполнения примера добавьте ссылки на системные сборки «Metabase», «Cubes», «Xml».


			Class TestForm: Form

    Button1: Button;

    Button2: Button;

    MetaAttributesBreadcrumb1: MetaAttributesBreadcrumb;

    Doc: FreeThreadedDOMDocument60;

    Element: IXmlDomElement;

    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        mb: IMetabase;

        rubinst: IRubricatorInstance;

    Begin

        mb := MetabaseClass.Active;

        rubinst := mb.ItemById("DB_RUBR").Open(Null) As IRubricatorInstance;

        Doc := New FreeThreadedDOMDocument60.Create;

        MetaAttributesBreadcrumb1.Rubricator := rubinst;

        MetaAttributesBreadcrumb1.MetaAttributes := rubinst.Facts.Dictionary.Attributes;

        Element := Doc.createElement("BreadcrumbState");

        MetaAttributesBreadcrumb1.SaveState(Element);

    End Sub Button1OnClick;

    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        MetaAttributesBreadcrumb1.LoadState(Element);

    End Sub Button2OnClick;

End Class TestForm;


После выполнения примера при нажатии первой кнопки будет осуществляться сохранение состояния элементов в XML элемент «BreadcrumbState». При нажатии на вторую кнопку из этого же XML элемента будет производиться загрузка сохраненного состояния элементов.


См. также:


[IBreadcrumb](IBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
